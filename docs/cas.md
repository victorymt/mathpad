# CAS（计算机代数系统）

选中一段公式，点浮动工具条上的 **fx**，就打开 CAS 面板。面板里是 33 个 SymPy 操作：化简、因式分解、求导、积分、极限、求和、解方程、矩阵运算等。结果插回文档，还是可编辑的公式。

全部在本机跑：Pyodide（WebAssembly 里的 Python 3.14.0）+ SymPy 1.14.0 + mpmath 1.4.1，资源在 `.cache/`，不联网。

## 快速上手

**例 1：因式分解**

1. 在文档里输入公式 `x^2-9`。
2. 在数学模式下把光标放进公式，连按两次 `Ctrl+A` 选中它，工具条出现 **fx**。
3. 点 fx 打开 CAS Dialog，鼠标移到 **Factor** 卡片上，点右侧的 **Run**。
4. 原式后面出现 `(x−3)(x+3)`。

**例 2：用终端插矩阵，再求行列式**

1. 面板齿轮菜单 → **Show Terminal/Debug**。
2. 在终端输入 `#add(Matrix([[1,2],[3,4]]))` 并回车，文档里得到一个 2×2 矩阵（终端也能用 `from sympy import *`，默认已导入）。这时选区通常已经落在新矩阵上。
3. 在面板里鼠标移到 **Matrix Det** 卡片上，点 **Run** → 得到 `−2`。

## 打开方式与面板

| 项 | 说明 |
|---|---|
| 打开 | 在数学模式里选中公式，浮动工具条出现 **fx**，点击打开 **CAS Dialog** |
| 默认形态 | 停靠右侧，宽 420 px；拖面板左边框可调宽（280–900 px） |
| 浮动形态 | 齿轮菜单选 **Float**，窗口默认 940×620，可拖动、可缩放 |
| 齿轮菜单 | Show/Hide Terminal/Debug、Show/Hide Assuming、Dock Right / Float、Close |
| 关闭 | 只能走齿轮菜单的 **Close**；按 ESC 不关 |
| 记忆 | 开关状态、停靠形态、尺寸、各字段内容、终端可见性都存在浏览器 IndexedDB（库 `MathchaCasDialog`），刷新页面后自动恢复打开 |
| 终端历史 | 存在浏览器 localStorage（`sympy-cmd-history`） |

注意：这些浏览器状态不在 `.data/` 里。换端口或清站点数据会丢，文档内容不受影响。

## 输入是什么

| 输入 | 说明 |
|---|---|
| 主输入 | 当前选区的**数学模式公式块**，不是纯文本 LaTeX。选区必须落在数学公式里 |
| 字段 | 需要参数的操作有内嵌数学输入框（用公式编辑器输入，不是文本框）。标签是 `var` / `from` / `to` / `assuming` |
| 终端 | Python / SymPy 代码 |

字段默认值如下，打开就能直接跑：

| 操作 | 字段默认值 |
|---|---|
| Substitute | from `x` → to `y` |
| Differentiate / Integrate / Collect / Solve | 变量 `x` |
| Limit | 变量 `x`，趋近 `0` |
| Sum | 变量 `n`，从 `0` 到 `10` |
| Product | 变量 `n`，从 `1` 到 `10` |
| Refine | 假设 `positive(x)` |

选区不是数学模式时，操作会报：

```text
Current selection is not in math mode, so this CAS action cannot run.
```

## 输出是什么

| 项 | 说明 |
|---|---|
| 插入位置 | 插在**当前公式所在的那个数学块内部**，紧接原式之后。在 display 数学区里看起来就是下一行；原式保留不动 |
| 结果形态 | 普通 Mathcha 公式块，不是 LaTeX 字符串。可以继续编辑，随文档保存到 `.data/store.json`，走同一套导出（SVG / PNG / PDF / TikZ / LaTeX） |
| 链式语义 | 运行成功后，选区/光标落在**新插入的结果**上。接着点别的操作，是对上一步结果继续算。要换对象，先重新选中公式 |
| Solve | 填了变量时，结果前面带 `变量 =`，例如 `x = [-3, 3]` |
| 矩阵 | 结果保留矩阵结构和括号样式 |
| 成功提示 | 没有提示条。可见反馈就是结果出现在文档里；终端打开时还能看到本次生成的 Python 和日志 |

链式语义要留心。实测：对矩阵跑 **Matrix Det** 得到 `−2` 后，再点 **Matrix Inverse**，会报 `'int' object has no attribute 'inv'`，因为此时输入已经是标量 `−2`，不是矩阵。

## 支持的运算（33 个）

面板分 4 组，共 33 个操作。

### Algebra（20 个）

| 面板按钮 | 作用 | 需要字段 |
|---|---|---|
| Substitute | 把符号或表达式换成另一个 | from、to |
| Simplify | 化简 |  |
| Expand | 展开乘积与幂 |  |
| Factor | 因式分解 |  |
| Cancel | 约去公因式 |  |
| Partial Fractions | 部分分式分解 |  |
| Together | 通分合并 |  |
| Trig Simplify | 三角函数化简 |  |
| Power Simplify | 合并幂 |  |
| Radical Simplify | 根式化简 |  |
| Rational Simplify | 有理式化简为标准形 |  |
| Combinatorial Simplify | 组合数化简 |  |
| Sign Simplify | 化简符号 |  |
| Power Denest | 嵌套幂化简 |  |
| Log Combine | 合并对数 |  |
| Expand Trig | 展开三角函数 |  |
| Expand Log | 展开对数 |  |
| Expand Power Base | 展开幂的底数 |  |
| Collect | 按变量收集同类项 | variable |
| Solve | 解方程或表达式 | variable（可留空） |

### Calculus（5 个）

| 面板按钮 | 作用 | 需要字段 |
|---|---|---|
| Differentiate | 求导 | variable |
| Integrate | 积分 | variable |
| Limit | 求极限 | variable、to |
| Sum | 求和 | variable、from、to |
| Product | 连乘 | variable、from、to |

### Matrices（6 个）

| 面板按钮 | 作用 | 需要字段 |
|---|---|---|
| Matrix Det | 行列式 |  |
| Matrix Inverse | 求逆 |  |
| Matrix Transpose | 转置 |  |
| Matrix RREF | 行简化阶梯形 |  |
| Matrix Eigenvalues | 特征值 |  |
| Matrix Eigenvectors | 特征向量 |  |

### Assumptions（2 个）

| 面板按钮 | 作用 | 需要字段 |
|---|---|---|
| Ask Predicate | 让 SymPy 判断一个谓词真假 |  |
| Refine | 在某个假设下精化表达式 | assumption |

上表里「需要字段」是空白的操作，直接对选区运行。

几个实测结果：

| 输入与操作 | 结果 |
|---|---|
| `x^2-9` → Factor | `(x−3)(x+3)` |
| `x^2-9` → Solve | `x = [-3, 3]` |
| `[[1,2],[3,4]]` → Matrix Det | `−2` |
| `x^2-9` → Differentiate | `2x` |
| `x^2-9` → Integrate | `x³/3 − 9x` |

搜索框可以按名字过滤操作，右上角显示匹配数 / 33。

## 典型场景

| 场景 | 做法 |
|---|---|
| 课堂推导化简 | 选中一长串式子，用 Expand、Factor、Together、Cancel 逐步变形，中间结果留在文档里 |
| 验证求导或积分结果 | 自己算完，再对原式跑 Differentiate 或 Integrate，和手算结果对照 |
| 解方程 | 选中方程，Solve 默认对 `x` 求解，结果例如 `x = [-3, 3]`；换未知数就在 variable 字段里改 |
| 矩阵练习 | 选中矩阵，跑 Matrix Det / Matrix Inverse / Matrix RREF / Matrix Eigenvalues 看各步结果 |
| 带假设化简 | 在 Assuming 里写 `positive(x)`、`integer(n)`，再跑 Simplify 或 Refine，看假设带来的变化 |
| 多步 SymPy 计算 | 打开终端写多步 Python，用 `#add(expr)` 把想要的中间结果插进文档，继续用面板的按钮算 |

## 假设面板（Assuming）

- 齿轮菜单 → **Show Assuming** 打开。
- 一行写一条假设，每次运行都带上。写法是 SymPy 谓词，例如 `positive(x)`、`integer(n)`。
- 只影响面板里的操作；终端里的 Python 不受影响。
- Refine 的 assumption 字段也走同样的假设写法。

## 终端（Terminal/Debug）

齿轮菜单 → **Show Terminal/Debug**。

| 项 | 说明 |
|---|---|
| 执行 | Enter 执行，Shift+Enter 换行，↑ 翻命令历史 |
| `#clear` | 清空日志 |
| `#add(expr)` | 执行表达式并插到文档里，例如 `#add(Matrix([[1,2],[3,4]]).inv())` |
| 日志 | 除了终端自己的输出，每次面板操作也会把生成的 Python 与 `Input Tree` / `Output Tree` 写进来 |
| 环境 | 和面板操作共用同一个 Python 进程，`from sympy import *` 已默认导入 |

终端就是本机 wasm 里的 Python，可以执行任意代码，不是受限子集。别在终端里跑不信任的代码。

## 加载与耗时

首次打开面板要加载 Pyodide 和 SymPy，界面显示：

```text
CAS Engine (using SymPy) is Loading ...
```

下面依次显示 `Preparing resources` → `Loading Pyodide runtime` → `Loading SymPy package` → `Starting CAS context`，还有 `x/2 steps` 进度。

实测速度：

| 场景 | 耗时 |
|---|---|
| 冷启动（全新 worker + 本地缓存） | 约 6 秒 |
| 引擎已加载后再次打开面板 | 约 1–2 秒 |
| 单个操作 | 约 0.1–0.3 秒 |

引擎在当前页面只加载一次，关掉面板不会卸载。

如果 CAS 资源缺失或初始化失败，界面会**一直停在加载页**，没有任何错误提示，只有浏览器控制台能看到错误。处理办法见下面「排查」。

## 错误与无法求解

| 场景 | 表现 |
|---|---|
| 操作失败 | 对应操作卡片的底部出现红底错误条，显示清洗后的 Traceback 最后一行 |
| 看完整报错 | 报错有多行时，摘要旁出现 **Details** 链接，点开是 **Error Details** 弹窗，显示完整 traceback |
| 关闭错误条 | 点错误条右侧的 × |
| 缺字段 | 同样在卡片底部提示，不会发出请求 |
| 无法求解 | 按操作失败处理，错误条显示 SymPy 的异常摘要 |
| 初始化失败 | 停在加载页，见上一节 |

缺字段的提示原文：

| 操作 | 提示 |
|---|---|
| Substitute | `Substitute requires both From and To values.` |
| Differentiate / Integrate / Collect | `Differentiate requires a variable.` 等（换成对应操作名） |
| Limit | `Limit requires both a variable and a target value.` |
| Sum / Product | `Sum requires variable, from, and to values.` 等 |
| Refine | `Refine requires an assumption.` |

实测的失败例子：

| 场景 | 错误摘要（最后一行） |
|---|---|
| 对非矩阵跑 Matrix Det | `TypeError: Input to Determinant, 0, not a matrix` |
| 链式操作把矩阵换成标量后跑 Matrix Inverse | `'int' object has no attribute 'inv'` |
| `solve(sin(x)+x, x)` | `No algorithms are implemented to solve equation x + sin(x)`，Details 里能看到 `NotImplementedError: multiple generators [x, sin(x)]` |

用终端 `#add` 时，如果结果转不回公式，会多一行 `Error: Unable to parse and add result to Mathcha`。

单次运算失败不会让面板崩溃，错误条关掉就能继续用。

## 限制

| 限制 | 说明 |
|---|---|
| 完全离线 | 只加载 `.cache/` 里缓存的 Pyodide + SymPy。不能联网装包，所以用不到没有随附的第三方 Python 包 |
| 输入受转换器限制 | 只处理选区里的 Mathcha 公式块，不是任意 LaTeX；纯文本选区用不了 |
| 一次一个对象 | 每次操作只作用于当前选区（或光标所在的那一行）的一条公式。多行选区没有验证；拿不准时先选一行公式再跑 |
| 链式语义 | 结果插回后光标在结果上，连续点操作是对上一结果继续算。换对象要重新选中 |
| 首次等待 | 首次打开面板要几秒加载引擎 |
| 精度与特殊函数 | 面板没有精度设置，算法和精度由 SymPy 1.14.0 决定；复数、特殊函数、数值近似都由 SymPy 处理，面板不额外加工 |
| 终端权限 | 终端能执行任意 Python（在浏览器 wasm 沙箱里，CSP 禁网），别跑不可信代码 |
| 没有按钮的运算 | 微分方程、物理量、数值积分的参数调整等没有对应按钮。终端里可以自己写 SymPy，但结果能不能转回公式，取决于公式转换器 |
| 浏览器状态 | 面板位置、字段内容、终端历史存在浏览器里，不在 `.data/` |

## 和现有公式功能的衔接

- 输入是文档里的公式块，输出也是公式块。中间没有导入导出的格式转换。
- 结果随文档自动保存（接口还是 `PUT /api/documents/<id>/content`），`.data/store.json` 格式不变。
- 结果和手打的公式一样，参与 SVG / PNG / PDF / TikZ / LaTeX 导出。
- CAS 只增加「选区 + 操作按钮」这一层，不改变编辑器原有的输入、渲染、保存、导出流程。

## 和项目结构、配置的一致性

CAS 沿用项目原有的离线做法：CDN 资源镜像到 `.cache/cdn`，`server.py` 只读缓存并打少量补丁。

| 文件 | CAS 相关变化 |
|---|---|
| `cas-assets.txt` | 新增，CAS 引擎资源清单，与 `assets.txt` / `chunks.txt` 同风格：注释行 + 每行一个完整 URL |
| `fetch_assets.py` | 下载 `cas-assets.txt` 里的 8 个文件；仍是唯一联网脚本；已存在则跳过，`--force` 强制重下 |
| `server.py` | 新增 `/cas-sympy-module-worker.js` 和 `/resources/pyodide/*` 路由，从 `.cache/cdn` 读（gzip 自动解压）；补 `.wasm` / `.whl` / `.zip` / `.mjs` 的 MIME；CSP 增加 `'wasm-unsafe-eval'`；CAS 资源齐全时把 bundle 里的 `casSupport` 补丁打开 |
| `start.sh` | 不变 |
| 启动输出 | `server.py` 启动时打印 `CAS: 就绪（本地 Pyodide + SymPy，选中公式后点 fx）` 或 `CAS: 未安装（跑一次 python3 fetch_assets.py 补齐 CAS 资源）` |

CAS 资源共 8 个文件，磁盘 11,011,935 B（约 11 MB，CDN 原始 gzip 字节），解压后约 18 MB：

- `cas-sympy-module-worker.js`
- `resources/pyodide/pyodide.mjs`
- `resources/pyodide/pyodide.asm.mjs`
- `resources/pyodide/pyodide.asm.wasm`
- `resources/pyodide/python_stdlib.zip`
- `resources/pyodide/pyodide-lock.json`
- `resources/pyodide/sympy-1.14.0-py3-none-any.whl`
- `resources/pyodide/mpmath-1.4.1-py3-none-any.whl`

资源缺失时，`server.py` 不打开 `casSupport`，fx 按钮就不显示，其他功能照常。这是有意的降级：缺资源不报错，只是没有 CAS 入口。

## 排查

| 现象 | 处理 |
|---|---|
| 选公式点 fx，面板一直转圈 | 联网跑一次 `python3 fetch_assets.py` 补 CAS 资源（约 11 MB） |
| 一直转圈，资源也补过 | 看 `.data/cache-misses.log` 缺哪个 `/resources/pyodide/...`，按实际文件名补进 `cas-assets.txt` 后重跑 |
| 控制台报 `Could not initialize CAS worker` | 同上，先查资源是否齐、CSP 是否生效 |
| 没有 fx 按钮 | 先确认选区是数学模式（文本里选不中公式）；再确认启动日志是 `CAS: 就绪` |
| 某个运算失败 | 看对应操作卡片底部的红条，点 Details 看完整 traceback。常见原因：选区不是数学公式、不是矩阵却跑矩阵操作、方程没有解析解 |
| 连续操作算错了对象 | 结果插回后光标在结果上，直接点会继续算旧结果。重新选中公式再点操作 |

## 引擎与许可

CAS 引擎是 Pyodide（MPL-2.0）和 SymPy（BSD）的本地副本，随 `.cache/` 缓存在本机使用，不对外分发。
