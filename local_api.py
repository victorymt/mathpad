"""Mathcha 本地数据后端。

把客户端需要的 /api/* 换成本机 JSON 文件读写：
- 不登录、不联网、文档存本机（.data/store.json）
- 只实现编辑器真正用到的接口；用不到的返回空对象，避免客户端报错
"""
import json
import os
import re
import secrets
import threading
import time
import urllib.parse

DIGITS = "0123456789"
ALNUM = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"


def _rid(prefix: str) -> str:
    """文档模型内部的 id（r0.xxx / n0.xxx）。"""
    return prefix + "0." + "".join(secrets.choice(DIGITS) for _ in range(17))


def _doc_id() -> str:
    """文档 id：必须是不含点的短 id（Mathcha 会拿它拼 CSS 选择器 #tn-<id>）。"""
    return "".join(secrets.choice(ALNUM) for _ in range(12))


def new_doc_json() -> str:
    """一个合法的空文档（与 Mathcha 的存储格式一致）。"""
    doc = {
        "id": _rid("r"),
        "lines": [
            {"id": _rid("n"), "blocks": []},
            {"id": _rid("n"), "blocks": []},
        ],
        "pageSettings": {"pageSize": {"width": 700}},
        "___version": 2,
        "version": 2,
        "av": 46,
    }
    return json.dumps(doc, ensure_ascii=False)


def _entry(doc) -> dict:
    """文档树的条目（不含正文），字段与线上 /api/init2 返回一致。"""
    return {
        "id": doc["id"],
        "name": doc["name"],
        "data": None,
        "settings": doc.get("settings", "{}"),
        "rowVersion": None,
        "generatedLink": None,
        "fullAccessRealtimeLink": None,
        "readonlyRealtimeLink": None,
        "colInfo": None,
        "fullAccessRealtimeShared": False,
        "readonlyRealtimeShared": False,
        "ltisharedToIns": False,
        "anonymous": False,
        "shared": False,
        "isAnonymous": False,
        "writeable": True,
        "notOwner": False,
        "isShared": False,
        "isFullAccessRealtimeShared": False,
        "isReadonlyRealtimeShared": False,
        "isLTISharedToIns": False,
    }


class Store:
    def __init__(self, data_dir: str):
        self.dir = data_dir
        os.makedirs(data_dir, exist_ok=True)
        self.path = os.path.join(data_dir, "store.json")
        self.lock = threading.RLock()
        self.state = self._load()
        if not self.state.get("documents"):
            self.create_doc("未命名")

    # ---------- 持久化 ----------

    def _load(self):
        if os.path.exists(self.path):
            try:
                with open(self.path, encoding="utf-8") as f:
                    data = json.load(f)
                if isinstance(data, dict) and isinstance(data.get("documents"), list):
                    return data
            except (OSError, ValueError):
                pass
        return {"version": 1, "activeId": None, "documents": []}

    def _write(self):
        tmp = self.path + ".tmp"
        with open(tmp, "w", encoding="utf-8") as f:
            json.dump(self.state, f, ensure_ascii=False, indent=1)
        os.replace(tmp, self.path)

    # ---------- 文档 ----------

    def docs(self):
        with self.lock:
            return list(self.state["documents"])

    def find(self, doc_id):
        for d in self.state["documents"]:
            if d["id"] == doc_id:
                return d
        return None

    def full(self, doc):
        entry = _entry(doc)
        entry["data"] = doc["data"]
        entry["updatedAt"] = doc.get("updatedAt")
        return entry

    def create_doc(self, name="未命名", data=None):
        with self.lock:
            doc = {
                "id": _doc_id(),
                "name": (name or "未命名").strip()[:120] or "未命名",
                "data": data if isinstance(data, str) else new_doc_json(),
                "settings": "{}",
                "createdAt": time.time(),
                "updatedAt": time.time(),
            }
            self.state["documents"].append(doc)
            self.state["activeId"] = doc["id"]
            self._write()
            return doc

    def save_data(self, doc_id, data):
        with self.lock:
            doc = self.find(doc_id)
            if doc is None:
                return None
            doc["data"] = data if isinstance(data, str) else json.dumps(data, ensure_ascii=False)
            doc["updatedAt"] = time.time()
            self.state["activeId"] = doc_id
            self._write()
            return doc

    def rename(self, doc_id, name):
        with self.lock:
            doc = self.find(doc_id)
            if doc is None:
                return None
            if name:
                doc["name"] = name.strip()[:120]
            self._write()
            return doc

    def activate(self, doc_id):
        with self.lock:
            if self.find(doc_id):
                self.state["activeId"] = doc_id
                self._write()

    def active(self):
        with self.lock:
            doc = self.find(self.state.get("activeId") or "")
            if doc is None:
                docs = self.state["documents"]
                doc = docs[0] if docs else self.create_doc("未命名")
                self.state["activeId"] = doc["id"]
                self._write()
            return doc

    def delete(self, doc_ids):
        with self.lock:
            ids = set(doc_ids)
            self.state["documents"] = [d for d in self.state["documents"] if d["id"] not in ids]
            if not self.state["documents"]:
                self.create_doc("未命名")
            if self.state.get("activeId") in ids:
                self.state["activeId"] = self.state["documents"][0]["id"]
            self._write()

    def duplicate(self, doc_id, name=None):
        with self.lock:
            src = self.find(doc_id)
            if src is None:
                return None
            return self.create_doc(name or (src["name"] + " 副本"), src["data"])


USER = {
    "displayName": "Local",
    "userNetworkType": "local",
    "settings": {
        "sidebarWidth": None,
        "generalSettings": {
            "isDisablePowerIndexOneChar": False,
            "displayStyleForInlineMath": True,
            "suggestionBoxTriggerShortcut": None,
            "complexObject": None,
        },
        "mathTemplates": "[]",
    },
    "distinctId": "local-user",
    "type": None,
    "anonymous": False,
    "firstLogin": False,
    "isAnonymous": False,
    "isFirstLogin": False,
}


class LocalApi:
    def __init__(self, data_dir: str):
        self.store = Store(data_dir)
        self.data_dir = data_dir
        self.unknown_log = os.path.join(data_dir, "unknown-endpoints.log")

    # ---------- 工具 ----------

    @staticmethod
    def _json(status=200, obj=None):
        body = "" if obj is None else json.dumps(obj, ensure_ascii=False)
        return status, "application/json; charset=utf-8", body.encode("utf-8")

    def _unknown(self, method, path, body):
        try:
            with open(self.unknown_log, "a", encoding="utf-8") as f:
                f.write(f"{time.strftime('%F %T')} {method} {path} body={len(body or b'')}B\n")
        except OSError:
            pass
        return self._json(200, {})

    # ---------- 路由 ----------

    def handle(self, method, path, body):
        p = path.split("?")[0].rstrip("/")
        body = body or b""

        if p == "/api/init2":
            return self._json(200, {
                "tree": {"documents": [_entry(d) for d in self.store.docs()], "directories": []},
                "sharedTree": {"documents": [], "directories": []},
                "user": USER,
                "maintainInfo": None,
            })

        if p == "/api/documents/active2":
            doc = self.store.active()
            return self._json(200, {"status": "found-document", "documentResponse": self.store.full(doc)})

        if p == "/api/document":
            payload = self._body_json(body)
            doc = self.store.create_doc(payload.get("name") or "未命名")
            return self._json(200, self.store.full(doc))

        m = re.fullmatch(r"/api/documents/([^/]+)/content", p)
        if m:
            doc_id = m.group(1)
            if method in ("PUT", "POST"):
                self.store.save_data(doc_id, body.decode("utf-8", "replace"))
                self.store.activate(doc_id)
                return 200, "text/plain; charset=utf-8", b""
            doc = self.store.find(doc_id)
            if doc:
                return 200, "application/json; charset=utf-8", doc["data"].encode("utf-8")
            return self._json(404, {"error": "not found"})

        m = re.fullmatch(r"/api/documents/([^/]+)/editing", p)
        if m:
            self.store.activate(m.group(1))
            return self._json(200, {})

        m = re.fullmatch(r"/api/documents/([^/]+)/rename", p)
        if m:
            payload = self._body_json(body)
            doc = self.store.rename(m.group(1), payload.get("name"))
            return self._json(200, {"info": "none"} if doc else {"error": "not found"})

        m = re.fullmatch(r"/api/directories/([^/]+)/rename", p)
        if m:
            return self._json(200, {"info": "none"})

        m = re.fullmatch(r"/api/documents/([^/]+)/duplicate", p)
        if m:
            payload = self._body_json(body)
            doc = self.store.duplicate(m.group(1), payload.get("name"))
            return self._json(200, _entry(doc) if doc else {})

        m = re.fullmatch(r"/api/documents/([^/]+)", p)
        if m:
            doc = self.store.find(m.group(1))
            if doc is None:
                return self._json(404, {"error": "not found"})
            if method in ("PUT", "POST", "PATCH"):
                payload = self._body_json(body)
                if payload.get("name"):
                    self.store.rename(doc["id"], payload["name"])
                self.store.activate(doc["id"])
                return self._json(200, _entry(self.store.find(doc["id"])))
            self.store.activate(doc["id"])
            return self._json(200, self.store.full(doc))

        if p == "/api/tree/delete":
            payload = self._body_json(body)
            ids = self._collect_ids(payload)
            if ids:
                self.store.delete(ids)
            return self._json(200, {"info": "none"})

        if p in ("/api/tree/move", "/api/tree/info"):
            return self._json(200, {})

        m = re.fullmatch(r"/api/tree/dir/([^/]+)", p)
        if m:
            return self._json(200, {"id": m.group(1), "name": "", "documents": [], "directories": []})

        if p.startswith("/api/directories"):
            return self._json(200, {"id": _rid("d"), "name": "本地", "directoryId": None})

        if p.startswith("/api/user-settings"):
            return self._json(200, {})

        if p.startswith("/api/images"):
            return self._json(200, {"images": []})

        if p.startswith("/api/up/account-info"):
            return self._json(200, USER)

        if p.startswith("/api/doc-history"):
            return self._json(200, {"history": []})

        if p.startswith("/api/commands/offline-info"):
            return self._json(200, {
                "dataBackupLocation": os.path.abspath(self.data_dir),
                "appLogLocation": os.path.abspath(os.path.join(self.data_dir, "logs")),
            })

        # ---------- Markdown 导入 / 导出（实现见 md_convert.py） ----------
        if p == "/api/md/import":
            payload = self._body_json(body)
            markdown = payload.get("markdown")
            if not isinstance(markdown, str) or not markdown.strip():
                return self._json(400, {"error": "markdown 为空"})
            import md_convert  # 延迟导入：避免与 md_convert 的离线落库路径形成循环

            model, warnings = md_convert.markdown_to_model(markdown)
            name = (payload.get("name") or "Markdown 导入").strip()[:120] or "Markdown 导入"
            doc = self.store.create_doc(name, json.dumps(model, ensure_ascii=False))
            return self._json(200, {
                "docId": doc["id"],
                "name": doc["name"],
                "lines": len(model.get("lines") or []),
                "warnings": warnings,
            })

        if p == "/api/md/export":
            qs = urllib.parse.parse_qs(urllib.parse.urlsplit(path).query)
            doc_id = (qs.get("docId") or [""])[0]
            doc = self.store.find(doc_id) if doc_id else self.store.active()
            if doc is None:
                return self._json(404, {"error": "document not found"})
            import md_convert

            try:
                model = json.loads(doc["data"])
            except ValueError:
                return self._json(500, {"error": "文档模型不是合法 JSON"})
            md, _warnings = md_convert.model_to_markdown(model)
            return 200, "text/markdown; charset=utf-8", md.encode("utf-8")

        if p.startswith("/api/commands/") or p.startswith("/api/request-"):
            return self._json(200, {})

        return self._unknown(method, path, body)

    # ---------- 解析 ----------

    @staticmethod
    def _body_json(body):
        if not body:
            return {}
        try:
            v = json.loads(body.decode("utf-8", "replace"))
            return v if isinstance(v, dict) else {}
        except ValueError:
            return {}

    @staticmethod
    def _collect_ids(payload):
        ids = []

        def harvest(v):
            if isinstance(v, str):
                ids.append(v)
            elif isinstance(v, (list, tuple)):
                for item in v:
                    harvest(item)
            elif isinstance(v, dict):
                if v.get("id"):
                    ids.append(v["id"])
                for key in ("documents", "directories", "nodes", "ids"):
                    harvest(v.get(key))

        for key in ("idInfo", "nodes", "ids", "documents"):
            harvest(payload.get(key))
        if payload.get("id"):
            ids.append(payload["id"])
        return ids

