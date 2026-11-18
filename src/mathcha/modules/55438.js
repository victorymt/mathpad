/* module 55438 — 1873 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    w: () => o
  });
  var n = r(58052);
  class i {
    fetchStudents() {
      return (0, n.Jt)("/api/lti/students-overview").then(e => e.json());
    }
    fetchStudentDocs(e) {
      return (0, n.Jt)("/api/lti/std-sdoc/".concat(e)).then(e => e.json());
    }
    fetchStudentSubmitDocs(e) {
      return (0, n.Jt)("/api/lti/doc-submit/".concat(e, "/overview")).then(e => e.json());
    }
    fetchStudentDocsByInsSDoc(e) {
      return (0, n.Jt)("/api/lti/ins-sdoc/".concat(e, "/students")).then(e => e.json());
    }
    fetchShareInsDocToStds() {
      return (0, n.Jt)("/api/lti/ins-sdoc").then(e => e.json());
    }
    deleteInsSDoc(e) {
      return (0, n.Fb)("/api/lti/ins-sdoc/".concat(e));
    }
    shareInsToStd(e, t, r) {
      var i = {
        docId: e,
        name: t,
        accessKey: r
      };
      return (0, n.bE)("/api/lti/ins-sdoc", i);
    }
    shareStdToIns(e) {
      var t = {
        docId: e,
        shared: !0
      };
      return (0, n.bE)("/api/lti/std-sdoc/share", t);
    }
    unshareStdToIns(e) {
      var t = {
        docId: e,
        shared: !1
      };
      return (0, n.bE)("/api/lti/std-sdoc/share", t);
    }
    getAccessKey(e) {
      return (0, n.Jt)("/api/lti/ins-sdoc/".concat(e, "/get-access-key")).then(e => e.text());
    }
    verifyAccessKey(e, t) {
      return (0, n.bE)("/api/lti/ins-sdoc/".concat(e, "/verify-access-key"), t, {
        "Content-Type": "text/plain"
      }).then(e => {
        if (200 != e.status) throw new Error("Wrong");
      });
    }
    submitDoc(e, t, r, i) {
      return (0, n.bE)("/api/lti/doc-submit/".concat(e, "/").concat(t), {
        name: r,
        data: i
      });
    }
    fetchSubmitDocs() {
      return (0, n.Jt)("/api/lti/doc-submit/current-student/overview").then(e => e.json());
    }
  }
  var o = new i();
};
