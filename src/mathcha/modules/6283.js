/* module 6283 — 69327 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => ce,
    w: () => le
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(91335),
    a = r(9371),
    l = r(63746),
    c = r(23466),
    d = r(24829),
    h = r(2543),
    p = r.n(h),
    u = r(80395),
    g = r(19340),
    m = r(58578),
    f = r(61824);
  class y extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "presetFonts", void 0), (0, n.A)(this, "onFontRenderItem", e => o().createElement("div", {
        style: {
          fontFamily: this.getFontFamilyFromKey(e.key)
        }
      }, e.value)), (0, n.A)(this, "handleSelectFontChange", e => {
        this.props.onFontNameChange(e);
      }), this.invalidFontSelects();
    }
    shouldComponentUpdate(e) {
      return e.fontName != this.props.fontName;
    }
    componentWillUpdate(e) {
      e.fontName != this.props.fontName && this.invalidFontSelects();
    }
    getFontFamilyFromKey(e) {
      return m.A.mathFontFamilyFromKey("raw", e, "characters");
    }
    getFontNameKey() {
      return this.props.fontName;
    }
    invalidFontSelects() {
      var e = [{
        key: "Asana",
        value: m.A.mathFontDisplayFromKey("Asana")
      }, {
        key: "LatinModern",
        value: m.A.mathFontDisplayFromKey("LatinModern")
      }, {
        key: "ThickerLm",
        value: m.A.mathFontDisplayFromKey("ThickerLm")
      }, {
        key: "Sans",
        value: m.A.mathFontDisplayFromKey("Sans")
      }];
      (0, g.u8)().filter(e => e.assets && (!e.developmentOnly || f.$O)).forEach(t => {
        var r = t.id;
        e.push({
          key: r,
          value: m.A.mathFontDisplayFromKey(r)
        });
      }), this.presetFonts = e;
    }
    render() {
      return o().createElement(s.A, {
        variant: "compact",
        usePositionFixedOnExpand: !0,
        inputStyle: {
          textOverflow: "ellipsis",
          overflow: "hidden"
        },
        expansionWidth: this.props.expansionWidth,
        data: this.presetFonts,
        isReadOnly: !0,
        onChange: this.handleSelectFontChange,
        value: this.getFontNameKey(),
        width: this.props.width || 100,
        onRenderItem: this.onFontRenderItem,
        title: "Math Font Families"
      });
    }
  }
  var v = r(58907),
    b = r(47286),
    x = r(25665),
    C = '<svg xmlns="http://www.w3.org/2000/svg" width="53.328125" height="24" style="width:53.328125px;height:24px;font-family:Asana-Math, Asana;background:#FFF;"><g><g><g style="transform:matrix(1,0,0,1,2,19);"><path d="M146 266C146 526 243 632 301 700L282 726C225 675 60 542 60 266C60 159 85 58 133 -32C168 -99 200 -138 282 -215L301 -194C255 -137 146 -15 146 266Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g><g style="transform:matrix(1,0,0,1,7.65625,19);"><path d="M146 266C146 526 243 632 301 700L282 726C225 675 60 542 60 266C60 159 85 58 133 -32C168 -99 200 -138 282 -215L301 -194C255 -137 146 -15 146 266Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g><g style="transform:matrix(1,0,0,1,13.3125,19);"><path d="M146 266C146 526 243 632 301 700L282 726C225 675 60 542 60 266C60 159 85 58 133 -32C168 -99 200 -138 282 -215L301 -194C255 -137 146 -15 146 266Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g><g style="transform:matrix(1,0,0,1,18.96875,19);"><path d="M271 204L242 77C238 60 236 42 236 26C236 4 245 -9 260 -9C283 -9 324 17 406 85L399 106C375 86 346 59 324 59C315 59 309 68 309 82C309 87 309 90 310 93L402 472L392 481L359 463C318 478 301 482 274 482C246 482 226 477 199 464C137 433 104 403 79 354C35 265 4 145 4 67C4 23 19 -11 38 -11C75 -11 155 41 271 204ZM319 414C297 305 278 253 244 201C187 117 126 59 94 59C82 59 76 72 76 99C76 163 104 280 139 360C163 415 186 433 234 433C257 433 275 429 319 414Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g><g style="transform:matrix(1,0,0,1,26.5,19);"><path d="M51 726L32 700C87 636 187 526 187 266C187 -10 83 -131 32 -194L51 -215C104 -165 273 -23 273 265C273 542 108 675 51 726Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g><g style="transform:matrix(1,0,0,1,32.15625,19);"><path d="M235 722L223 733C171 707 135 698 63 691L59 670L107 670C131 670 141 663 141 646C141 639 140 628 139 622L38 71C37 68 37 64 37 61C37 22 85 -11 140 -11C177 -11 228 8 271 39C367 107 433 244 433 376C433 414 424 453 412 468C405 477 392 482 377 482C353 482 323 474 295 460C244 433 211 403 149 324ZM322 424C348 424 361 401 361 352C361 288 340 202 310 137C277 68 237 36 183 36C137 36 112 59 112 101C112 135 127 276 208 361C241 395 293 424 322 424Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g><g style="transform:matrix(1,0,0,1,40.015625,19);"><path d="M51 726L32 700C87 636 187 526 187 266C187 -10 83 -131 32 -194L51 -215C104 -165 273 -23 273 265C273 542 108 675 51 726Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g><g style="transform:matrix(1,0,0,1,45.671875,19);"><path d="M51 726L32 700C87 636 187 526 187 266C187 -10 83 -131 32 -194L51 -215C104 -165 273 -23 273 265C273 542 108 675 51 726Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g></g></g></svg>',
    S = '<svg xmlns="http://www.w3.org/2000/svg" width="60.65625" height="34.375" style="width:60.65625px;height:34.375px;font-family:Asana-Math, Asana;background:#FFF;"><g><g><g><svg x="2" style="overflow:visible;" y="3.6875" height="27" width="8.5"><path d=" M 6.61 1.70 q 0.00 -0.09 -0.08 -0.09 q -0.03 0.00 -0.08 0.03 q -1.01 0.63 -1.75 1.49 t -1.37 2.15 t -0.95 3.18 t -0.33 4.34 v 0.71 h 1.68 v -0.71 q 0.00 -1.37 0.04 -2.38 t 0.22 -2.34 t 0.50 -2.33 t 0.91 -2.00 t 1.43 -1.70 q 0.12 -0.11 0.12 -0.34 z   M 0.90 13.50 v 0.00 h 1.68 v 0.00 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/><path d=" M 6.61 25.30 q 0.00 0.09 -0.08 0.09 q -0.03 0.00 -0.08 -0.03 q -1.01 -0.63 -1.75 -1.49 t -1.37 -2.15 t -0.95 -3.18 t -0.33 -4.34 v -0.71 h 1.68 v 0.71 q 0.00 1.37 0.04 2.38 t 0.22 2.34 t 0.50 2.33 t 0.91 2.00 t 1.43 1.70 q 0.12 0.11 0.12 0.34 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/></svg></g><g><svg x="10.328125" style="overflow:visible;" y="5.6875" height="24" width="8.5"><path d=" M 6.61 1.70 q 0.00 -0.08 -0.08 -0.08 q -0.03 0.00 -0.08 0.02 q -1.01 0.55 -1.75 1.30 t -1.37 1.87 t -0.95 2.78 t -0.33 3.79 v 0.62 h 1.68 v -0.62 q 0.00 -1.20 0.04 -2.08 t 0.22 -2.04 t 0.50 -2.03 t 0.91 -1.74 t 1.43 -1.49 q 0.12 -0.09 0.12 -0.29 z   M 0.90 12.00 v 0.00 h 1.68 v 0.00 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/><path d=" M 6.61 22.30 q 0.00 0.08 -0.08 0.08 q -0.03 0.00 -0.08 -0.02 q -1.01 -0.55 -1.75 -1.30 t -1.37 -1.87 t -0.95 -2.78 t -0.33 -3.79 v -0.62 h 1.68 v 0.62 q 0.00 1.20 0.04 2.08 t 0.22 2.04 t 0.50 2.03 t 0.91 1.74 t 1.43 1.49 q 0.12 0.09 0.12 0.29 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/></svg></g><g style="transform:matrix(1,0,0,1,17.140625,23.6875);"><path d="M146 266C146 526 243 632 301 700L282 726C225 675 60 542 60 266C60 159 85 58 133 -32C168 -99 200 -138 282 -215L301 -194C255 -137 146 -15 146 266Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g><g style="transform:matrix(1,0,0,1,22.796875,23.6875);"><path d="M271 204L242 77C238 60 236 42 236 26C236 4 245 -9 260 -9C283 -9 324 17 406 85L399 106C375 86 346 59 324 59C315 59 309 68 309 82C309 87 309 90 310 93L402 472L392 481L359 463C318 478 301 482 274 482C246 482 226 477 199 464C137 433 104 403 79 354C35 265 4 145 4 67C4 23 19 -11 38 -11C75 -11 155 41 271 204ZM319 414C297 305 278 253 244 201C187 117 126 59 94 59C82 59 76 72 76 99C76 163 104 280 139 360C163 415 186 433 234 433C257 433 275 429 319 414Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g><g style="transform:matrix(1,0,0,1,30.328125,23.6875);"><path d="M51 726L32 700C87 636 187 526 187 266C187 -10 83 -131 32 -194L51 -215C104 -165 273 -23 273 265C273 542 108 675 51 726Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g><g style="transform:matrix(1,0,0,1,35.984375,23.6875);"><path d="M235 722L223 733C171 707 135 698 63 691L59 670L107 670C131 670 141 663 141 646C141 639 140 628 139 622L38 71C37 68 37 64 37 61C37 22 85 -11 140 -11C177 -11 228 8 271 39C367 107 433 244 433 376C433 414 424 453 412 468C405 477 392 482 377 482C353 482 323 474 295 460C244 433 211 403 149 324ZM322 424C348 424 361 401 361 352C361 288 340 202 310 137C277 68 237 36 183 36C137 36 112 59 112 101C112 135 127 276 208 361C241 395 293 424 322 424Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g><g><svg x="42.15625" style="overflow:visible;" y="5.6875" height="24" width="8.5"><path d=" M 1.69 1.70 q 0.00 -0.08 0.08 -0.08 q 0.03 0.00 0.08 0.02 q 1.01 0.55 1.75 1.30 t 1.37 1.87 t 0.95 2.78 t 0.33 3.79 v 0.62 h -1.68 v -0.62 q 0.00 -1.20 -0.04 -2.08 t -0.22 -2.04 t -0.50 -2.03 t -0.91 -1.74 t -1.43 -1.49 q -0.12 -0.09 -0.12 -0.29 z  M 7.40 12.00 v 0.00 h -1.68 v 0.00 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/><path d=" M 1.69 22.30 q 0.00 0.08 0.08 0.08 q 0.03 0.00 0.08 -0.02 q 1.01 -0.55 1.75 -1.30 t 1.37 -1.87 t 0.95 -2.78 t 0.33 -3.79 v -0.62 h -1.68 v 0.62 q 0.00 1.20 -0.04 2.08 t -0.22 2.04 t -0.50 2.03 t -0.91 1.74 t -1.43 1.49 q -0.12 0.09 -0.12 0.29 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/></svg></g><g><svg x="50.15625" style="overflow:visible;" y="3.6875" height="27" width="8.5"><path d=" M 1.69 1.70 q 0.00 -0.09 0.08 -0.09 q 0.03 0.00 0.08 0.03 q 1.01 0.63 1.75 1.49 t 1.37 2.15 t 0.95 3.18 t 0.33 4.34 v 0.71 h -1.68 v -0.71 q 0.00 -1.37 -0.04 -2.38 t -0.22 -2.34 t -0.50 -2.33 t -0.91 -2.00 t -1.43 -1.70 q -0.12 -0.11 -0.12 -0.34 z  M 7.40 13.50 v 0.00 h -1.68 v 0.00 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/><path d=" M 1.69 25.30 q 0.00 0.09 0.08 0.09 q 0.03 0.00 0.08 -0.03 q 1.01 -0.63 1.75 -1.49 t 1.37 -2.15 t 0.95 -3.18 t 0.33 -4.34 v -0.71 h -1.68 v 0.71 q 0.00 1.37 -0.04 2.38 t -0.22 2.34 t -0.50 2.33 t -0.91 2.00 t -1.43 1.70 q -0.12 0.11 -0.12 0.34 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/></svg></g></g></g></svg>',
    A = '<svg xmlns="http://www.w3.org/2000/svg" width="45.921875" height="24" style="width:45.921875px;height:24px;font-family:Asana-Math, Asana;background:#FFF;"><g><g><g style="transform:matrix(1,0,0,1,2,19);"><path d="M146 266C146 526 243 632 301 700L282 726C225 675 60 542 60 266C60 159 85 58 133 -32C168 -99 200 -138 282 -215L301 -194C255 -137 146 -15 146 266Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g><g><g><g><g style="transform:matrix(1,0,0,1,7.65625,19);"><path d="M271 204L242 77C238 60 236 42 236 26C236 4 245 -9 260 -9C283 -9 324 17 406 85L399 106C375 86 346 59 324 59C315 59 309 68 309 82C309 87 309 90 310 93L402 472L392 481L359 463C318 478 301 482 274 482C246 482 226 477 199 464C137 433 104 403 79 354C35 265 4 145 4 67C4 23 19 -11 38 -11C75 -11 155 41 271 204ZM319 414C297 305 278 253 244 201C187 117 126 59 94 59C82 59 76 72 76 99C76 163 104 280 139 360C163 415 186 433 234 433C257 433 275 429 319 414Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g></g></g><svg x="7.65625" style="overflow:visible;" y="2" height="9" width="8.375"><path d=" M 8.38 3.32 l -3.15 -3.32 l -0.49 0.52 l 1.93 2.33 h -0.15 v 0.90 h 0.15 l -1.93 2.33 l 0.49 0.52 z  M 1.68 3.70 h 6.23 v -0.90 h -6.23 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/></svg></g><g style="transform:matrix(1,0,0,1,15.1875,19);"><path d="M51 726L32 700C87 636 187 526 187 266C187 -10 83 -131 32 -194L51 -215C104 -165 273 -23 273 265C273 542 108 675 51 726Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g><g style="transform:matrix(1,0,0,1,20.84375,19);"><path d="" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g><g style="transform:matrix(1,0,0,1,25.078125,19);"><path d="M146 266C146 526 243 632 301 700L282 726C225 675 60 542 60 266C60 159 85 58 133 -32C168 -99 200 -138 282 -215L301 -194C255 -137 146 -15 146 266Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g><g><g><g><g style="transform:matrix(1,0,0,1,30.734375,19);"><path d="M271 204L242 77C238 60 236 42 236 26C236 4 245 -9 260 -9C283 -9 324 17 406 85L399 106C375 86 346 59 324 59C315 59 309 68 309 82C309 87 309 90 310 93L402 472L392 481L359 463C318 478 301 482 274 482C246 482 226 477 199 464C137 433 104 403 79 354C35 265 4 145 4 67C4 23 19 -11 38 -11C75 -11 155 41 271 204ZM319 414C297 305 278 253 244 201C187 117 126 59 94 59C82 59 76 72 76 99C76 163 104 280 139 360C163 415 186 433 234 433C257 433 275 429 319 414Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g></g></g><text x="33.35626220703125" y="2" style="white-space:pre;stroke:none;fill:rgb(0, 0, 0);font-size:17px;font-family:&quot;Times New Roman&quot;, Times, serif;font-weight:400;font-style:normal;dominant-baseline:text-before-edge;text-decoration:none solid rgb(0, 0, 0);">´</text></g><g style="transform:matrix(1,0,0,1,38.265625,19);"><path d="M51 726L32 700C87 636 187 526 187 266C187 -10 83 -131 32 -194L51 -215C104 -165 273 -23 273 265C273 542 108 675 51 726Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g></g></g></svg>',
    w = '<svg xmlns="http://www.w3.org/2000/svg" width="53.25" height="31.375" style="width:53.25px;height:31.375px;font-family:Asana-Math, Asana;background:#FFF;"><g><g><g><svg x="2" style="overflow:visible;" y="3.6875" height="24" width="8.5"><path d=" M 6.61 1.70 q 0.00 -0.08 -0.08 -0.08 q -0.03 0.00 -0.08 0.02 q -1.01 0.55 -1.75 1.30 t -1.37 1.87 t -0.95 2.78 t -0.33 3.79 v 0.62 h 1.68 v -0.62 q 0.00 -1.20 0.04 -2.08 t 0.22 -2.04 t 0.50 -2.03 t 0.91 -1.74 t 1.43 -1.49 q 0.12 -0.09 0.12 -0.29 z   M 0.90 12.00 v 0.00 h 1.68 v 0.00 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/><path d=" M 6.61 22.30 q 0.00 0.08 -0.08 0.08 q -0.03 0.00 -0.08 -0.02 q -1.01 -0.55 -1.75 -1.30 t -1.37 -1.87 t -0.95 -2.78 t -0.33 -3.79 v -0.62 h 1.68 v 0.62 q 0.00 1.20 0.04 2.08 t 0.22 2.04 t 0.50 2.03 t 0.91 1.74 t 1.43 1.49 q 0.12 0.09 0.12 0.29 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/></svg></g><g><g><g><g style="transform:matrix(1,0,0,1,8.8125,21.6875);"><path d="M271 204L242 77C238 60 236 42 236 26C236 4 245 -9 260 -9C283 -9 324 17 406 85L399 106C375 86 346 59 324 59C315 59 309 68 309 82C309 87 309 90 310 93L402 472L392 481L359 463C318 478 301 482 274 482C246 482 226 477 199 464C137 433 104 403 79 354C35 265 4 145 4 67C4 23 19 -11 38 -11C75 -11 155 41 271 204ZM319 414C297 305 278 253 244 201C187 117 126 59 94 59C82 59 76 72 76 99C76 163 104 280 139 360C163 415 186 433 234 433C257 433 275 429 319 414Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g></g></g><svg x="8.8125" style="overflow:visible;" y="4.6875" height="9" width="8.375"><path d=" M 8.38 3.32 l -3.15 -3.32 l -0.49 0.52 l 1.93 2.33 h -0.15 v 0.90 h 0.15 l -1.93 2.33 l 0.49 0.52 z  M 1.68 3.70 h 6.23 v -0.90 h -6.23 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/></svg></g><g><svg x="14.65625" style="overflow:visible;" y="3.6875" height="24" width="8.5"><path d=" M 1.69 1.70 q 0.00 -0.08 0.08 -0.08 q 0.03 0.00 0.08 0.02 q 1.01 0.55 1.75 1.30 t 1.37 1.87 t 0.95 2.78 t 0.33 3.79 v 0.62 h -1.68 v -0.62 q 0.00 -1.20 -0.04 -2.08 t -0.22 -2.04 t -0.50 -2.03 t -0.91 -1.74 t -1.43 -1.49 q -0.12 -0.09 -0.12 -0.29 z  M 7.40 12.00 v 0.00 h -1.68 v 0.00 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/><path d=" M 1.69 22.30 q 0.00 0.08 0.08 0.08 q 0.03 0.00 0.08 -0.02 q 1.01 -0.55 1.75 -1.30 t 1.37 -1.87 t 0.95 -2.78 t 0.33 -3.79 v -0.62 h -1.68 v 0.62 q 0.00 1.20 -0.04 2.08 t -0.22 2.04 t -0.50 2.03 t -0.91 1.74 t -1.43 1.49 q -0.12 0.09 -0.12 0.29 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/></svg></g><g style="transform:matrix(1,0,0,1,24.34375,21.6875);"><path d="" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g><g><svg x="30.09375" style="overflow:visible;" y="3.6875" height="24" width="8.5"><path d=" M 6.61 1.70 q 0.00 -0.08 -0.08 -0.08 q -0.03 0.00 -0.08 0.02 q -1.01 0.55 -1.75 1.30 t -1.37 1.87 t -0.95 2.78 t -0.33 3.79 v 0.62 h 1.68 v -0.62 q 0.00 -1.20 0.04 -2.08 t 0.22 -2.04 t 0.50 -2.03 t 0.91 -1.74 t 1.43 -1.49 q 0.12 -0.09 0.12 -0.29 z   M 0.90 12.00 v 0.00 h 1.68 v 0.00 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/><path d=" M 6.61 22.30 q 0.00 0.08 -0.08 0.08 q -0.03 0.00 -0.08 -0.02 q -1.01 -0.55 -1.75 -1.30 t -1.37 -1.87 t -0.95 -2.78 t -0.33 -3.79 v -0.62 h 1.68 v 0.62 q 0.00 1.20 0.04 2.08 t 0.22 2.04 t 0.50 2.03 t 0.91 1.74 t 1.43 1.49 q 0.12 0.09 0.12 0.29 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/></svg></g><g><g><g><g style="transform:matrix(1,0,0,1,36.90625,21.6875);"><path d="M271 204L242 77C238 60 236 42 236 26C236 4 245 -9 260 -9C283 -9 324 17 406 85L399 106C375 86 346 59 324 59C315 59 309 68 309 82C309 87 309 90 310 93L402 472L392 481L359 463C318 478 301 482 274 482C246 482 226 477 199 464C137 433 104 403 79 354C35 265 4 145 4 67C4 23 19 -11 38 -11C75 -11 155 41 271 204ZM319 414C297 305 278 253 244 201C187 117 126 59 94 59C82 59 76 72 76 99C76 163 104 280 139 360C163 415 186 433 234 433C257 433 275 429 319 414Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g></g></g><text x="39.52813720703125" y="4.6875" style="white-space:pre;stroke:none;fill:rgb(0, 0, 0);font-size:17px;font-family:&quot;Times New Roman&quot;, Times, serif;font-weight:400;font-style:normal;dominant-baseline:text-before-edge;text-decoration:none solid rgb(0, 0, 0);">´</text></g><g><svg x="42.75" style="overflow:visible;" y="3.6875" height="24" width="8.5"><path d=" M 1.69 1.70 q 0.00 -0.08 0.08 -0.08 q 0.03 0.00 0.08 0.02 q 1.01 0.55 1.75 1.30 t 1.37 1.87 t 0.95 2.78 t 0.33 3.79 v 0.62 h -1.68 v -0.62 q 0.00 -1.20 -0.04 -2.08 t -0.22 -2.04 t -0.50 -2.03 t -0.91 -1.74 t -1.43 -1.49 q -0.12 -0.09 -0.12 -0.29 z  M 7.40 12.00 v 0.00 h -1.68 v 0.00 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/><path d=" M 1.69 22.30 q 0.00 0.08 0.08 0.08 q 0.03 0.00 0.08 -0.02 q 1.01 -0.55 1.75 -1.30 t 1.37 -1.87 t 0.95 -2.78 t 0.33 -3.79 v -0.62 h -1.68 v 0.62 q 0.00 1.20 -0.04 2.08 t -0.22 2.04 t -0.50 2.03 t -0.91 1.74 t -1.43 1.49 q -0.12 0.09 -0.12 0.29 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/></svg></g></g></g></svg>',
    E = '<svg xmlns="http://www.w3.org/2000/svg" width="28.859375" height="49.375" style="width:28.859375px;height:49.375px;font-family:Asana-Math, Asana;background:#FFF;"><g><g><g><svg x="2" style="overflow:visible;" y="3.6875" height="42" width="8.5"><path d=" M 6.61 1.70 q 0.00 -0.12 -0.10 -0.12 q -0.03 0.00 -0.10 0.03 q -1.26 0.80 -2.19 1.88 t -1.72 2.71 t -1.19 4.02 t -0.41 5.48 v 0.90 h 1.68 v -0.90 q 0.00 -1.73 0.05 -3.01 t 0.28 -2.96 t 0.62 -2.94 t 1.14 -2.52 t 1.79 -2.15 q 0.15 -0.14 0.15 -0.43 z   M 0.90 16.61 v 8.78 h 1.68 v -8.78 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/><path d=" M 6.61 40.30 q 0.00 0.12 -0.10 0.12 q -0.03 0.00 -0.10 -0.03 q -1.26 -0.80 -2.19 -1.88 t -1.72 -2.71 t -1.19 -4.02 t -0.41 -5.48 v -0.90 h 1.68 v 0.90 q 0.00 1.73 0.05 3.01 t 0.28 2.96 t 0.62 2.94 t 1.14 2.52 t 1.79 2.15 q 0.15 0.14 0.15 0.43 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/></svg></g><g><g><g><g style="transform:matrix(1,0,0,1,10.65625,17.6875);"><path d="M271 204L242 77C238 60 236 42 236 26C236 4 245 -9 260 -9C283 -9 324 17 406 85L399 106C375 86 346 59 324 59C315 59 309 68 309 82C309 87 309 90 310 93L402 472L392 481L359 463C318 478 301 482 274 482C246 482 226 477 199 464C137 433 104 403 79 354C35 265 4 145 4 67C4 23 19 -11 38 -11C75 -11 155 41 271 204ZM319 414C297 305 278 253 244 201C187 117 126 59 94 59C82 59 76 72 76 99C76 163 104 280 139 360C163 415 186 433 234 433C257 433 275 429 319 414Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g></g></g><g><g><g style="transform:matrix(1,0,0,1,10.5,42.6875);"><path d="M235 722L223 733C171 707 135 698 63 691L59 670L107 670C131 670 141 663 141 646C141 639 140 628 139 622L38 71C37 68 37 64 37 61C37 22 85 -11 140 -11C177 -11 228 8 271 39C367 107 433 244 433 376C433 414 424 453 412 468C405 477 392 482 377 482C353 482 323 474 295 460C244 433 211 403 149 324ZM322 424C348 424 361 401 361 352C361 288 340 202 310 137C277 68 237 36 183 36C137 36 112 59 112 101C112 135 127 276 208 361C241 395 293 424 322 424Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g></g></g><line style="fill:none;stroke-width:1px;stroke:rgb(0, 0, 0);" x1="10.5" y1="25.4375" x2="18.359375" y2="25.4375"/></g><g><svg x="18.359375" style="overflow:visible;" y="3.6875" height="42" width="8.5"><path d=" M 1.19 1.70 q 0.00 -0.12 0.10 -0.12 q 0.03 0.00 0.10 0.03 q 1.26 0.80 2.19 1.88 t 1.72 2.71 t 1.19 4.02 t 0.41 5.48 v 0.90 h -1.68 v -0.90 q 0.00 -1.73 -0.05 -3.01 t -0.28 -2.96 t -0.62 -2.94 t -1.14 -2.52 t -1.79 -2.15 q -0.15 -0.14 -0.15 -0.43 z  M 6.90 16.61 v 8.78 h -1.68 v -8.78 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/><path d=" M 1.19 40.30 q 0.00 0.12 0.10 0.12 q 0.03 0.00 0.10 -0.03 q 1.26 -0.80 2.19 -1.88 t 1.72 -2.71 t 1.19 -4.02 t 0.41 -5.48 v -0.90 h -1.68 v 0.90 q 0.00 1.73 -0.05 3.01 t -0.28 2.96 t -0.62 2.94 t -1.14 2.52 t -1.79 2.15 q -0.15 0.14 -0.15 0.43 z" style="fill:rgb(0, 0, 0);stroke-width:1px;stroke:none;"/></svg></g></g></g></svg>',
    k = '<svg xmlns="http://www.w3.org/2000/svg" width="26.546875" height="42" style="width:26.546875px;height:42px;font-family:Asana-Math, Asana;background:#FFF;"><g><g><g style="transform:matrix(1,0,0,1,2,27);"><path d="M146 266C146 526 243 632 301 700L282 726C225 675 60 542 60 266C60 159 85 58 133 -32C168 -99 200 -138 282 -215L301 -194C255 -137 146 -15 146 266Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g><g><g><g><g style="transform:matrix(1,0,0,1,9.5,15);"><path d="M271 204L242 77C238 60 236 42 236 26C236 4 245 -9 260 -9C283 -9 324 17 406 85L399 106C375 86 346 59 324 59C315 59 309 68 309 82C309 87 309 90 310 93L402 472L392 481L359 463C318 478 301 482 274 482C246 482 226 477 199 464C137 433 104 403 79 354C35 265 4 145 4 67C4 23 19 -11 38 -11C75 -11 155 41 271 204ZM319 414C297 305 278 253 244 201C187 117 126 59 94 59C82 59 76 72 76 99C76 163 104 280 139 360C163 415 186 433 234 433C257 433 275 429 319 414Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g></g></g><g><g><g style="transform:matrix(1,0,0,1,9.34375,40);"><path d="M235 722L223 733C171 707 135 698 63 691L59 670L107 670C131 670 141 663 141 646C141 639 140 628 139 622L38 71C37 68 37 64 37 61C37 22 85 -11 140 -11C177 -11 228 8 271 39C367 107 433 244 433 376C433 414 424 453 412 468C405 477 392 482 377 482C353 482 323 474 295 460C244 433 211 403 149 324ZM322 424C348 424 361 401 361 352C361 288 340 202 310 137C277 68 237 36 183 36C137 36 112 59 112 101C112 135 127 276 208 361C241 395 293 424 322 424Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g></g></g><line style="fill:none;stroke-width:1px;stroke:rgb(0, 0, 0);" x1="9.34375" y1="22.75" x2="17.203125" y2="22.75"/></g><g style="transform:matrix(1,0,0,1,18.890625,27);"><path d="M51 726L32 700C87 636 187 526 187 266C187 -10 83 -131 32 -194L51 -215C104 -165 273 -23 273 265C273 542 108 675 51 726Z" stroke="rgb(0, 0, 0)" stroke-width="8" fill="rgb(0, 0, 0)" style="transform:matrix(0.017,0,0,-0.017,0,0);"/></g></g></g></svg>';
  function O(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function D(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? O(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class P extends i.Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        settings: this.props.settings || {}
      }), (0, n.A)(this, "FakeModalDialog", v.A.getModalDialog());
    }
    render() {
      var e,
        t = (this.state.settings || {}).disabledBracketsExtending;
      return o().createElement(this.FakeModalDialog, {
        show: !0
      }, o().createElement(b.A, {
        title: "Bracket settings",
        size: "medium",
        scroll: "body",
        style: {
          width: 550,
          height: "auto",
          padding: 10
        },
        message: "",
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: () => this.props.onClose(this.state.settings),
        onCancel: () => this.props.onClose(this.state.settings),
        okLabel: "Close",
        showCancel: !1,
        show: !0
      }, o().createElement("div", {
        style: {
          flex: 1
        }
      }, this.renderCheckbox("disabledBracketsExtending", "Disable Brackets Matching", E, k, !1), this.renderCheckbox("extendBracketsForOversymbol", "Extend Brackets for \\hat, \\vec, \\overline and over symbols (\\acute, \\breve, ...)", A, w, t), this.renderCheckbox("extendOnLevels", "Extend Brackets Bigger on each level (inner out) on normal Brackets", C, S, t))));
    }
    renderCheckbox(e, t, r, n, i) {
      return o().createElement("div", null, o().createElement(c.A, {
        disabled: i,
        style: {
          padding: 5,
          display: "inline-block"
        },
        textStyle: {
          fontSize: 13
        },
        name: t,
        checked: (this.state.settings || {})[e],
        onValueChanged: t => this.setState({
          settings: D(D({}, this.state.settings), {}, {
            [e]: t
          })
        })
      }), this.renderInfo(t, r, n));
    }
    renderInfo(e, t, r) {
      return o().createElement(x.m, {
        label: e + " example",
        popupStyle: {
          zIndex: 999999,
          background: "var(--ui-surface, white)"
        },
        content: o().createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            background: "var(--ui-surface, white)",
            margin: -5,
            padding: 10
          }
        }, o().createElement("div", {
          dangerouslySetInnerHTML: {
            __html: t
          }
        }), o().createElement("div", {
          style: {
            fontSize: 20,
            padding: "0 10px",
            color: "var(--ui-text, black)"
          }
        }, "→ "), o().createElement("div", {
          dangerouslySetInnerHTML: {
            __html: r
          }
        }))
      }, o().createElement("span", {
        style: {
          padding: "0 5px",
          color: "lightblue",
          marginLeft: 5
        }
      }, o().createElement("i", {
        className: "fa fa-info-circle",
        "aria-hidden": "true"
      })));
    }
  }
  var M = r(91414),
    I = r(23009),
    T = r(89196),
    L = r(16831),
    R = r(36268),
    B = r(67107),
    F = r(41052);
  function j(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function _(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? j(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class N extends i.Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "FakeModalDialog", v.A.getModalDialog()), (0, n.A)(this, "handlePresetPageSizeChange", e => {
        var t = this.props.pageSizeSettings,
          r = t.width,
          n = void 0 === r ? 700 : r,
          i = t.height,
          o = void 0 === i ? 1122 : i,
          s = t.sizeUnit,
          a = void 0 === s ? "px" : s,
          l = L.m.widthFromKey(e, n, a, a),
          c = L.m.heightFromKey(e, o, a, a);
        this.raiseChange(_(_({}, this.props.pageSizeSettings), {}, {
          presetSize: e,
          width: l,
          height: c
        }));
      }), (0, n.A)(this, "handleSizeUnitChange", e => {
        var t = this.props.pageSizeSettings,
          r = t.width,
          n = void 0 === r ? 700 : r,
          i = t.height,
          o = void 0 === i ? 1122 : i,
          s = t.sizeUnit,
          a = void 0 === s ? "px" : s,
          l = B.L.convert(n, a, e),
          c = B.L.convert(o, a, e);
        this.raiseChange(_(_({}, this.props.pageSizeSettings), {}, {
          width: l,
          height: c,
          sizeUnit: e
        }));
      });
    }
    raiseChange(e) {
      this.props.onPageSizeChange(e);
    }
    renderCompactView() {
      var e = this.props.pageSizeSettings,
        t = e.width,
        r = e.presetSize,
        n = e.sizeUnit,
        i = void 0 === n ? "px" : n,
        s = L.m.widthFromKey(r, t, i, i);
      return o().createElement("div", {
        className: "test-ps",
        style: {
          display: "flex",
          alignItems: "baseline",
          width: 160
        }
      }, o().createElement("span", null, "Width: ", s, i), o().createElement("div", {
        style: {
          flex: "1",
          justifyContent: "flex-end",
          display: "flex"
        }
      }, o().createElement("button", {
        onClick: () => {
          this.setState({
            showDialog: !0
          });
        },
        style: {
          width: 70
        },
        className: "btn-normal"
      }, "Configure")));
    }
    renderMessages(e) {
      var t = {
        fontSize: "0.9em",
        color: "#ce0303",
        minHeight: "2em",
        maxWidth: 240,
        marginBottom: 5
      };
      return (null == e ? void 0 : e.length) > 0 ? o().createElement("div", {
        className: "test-mss",
        style: t
      }, e.slice(0, 2).map((e, t) => o().createElement("div", {
        key: t
      }, "- ", e))) : o().createElement("div", {
        className: "test-mss",
        style: t
      });
    }
    renderDialog() {
      if (this.state.showDialog) {
        var e = this.props.pageSizeSettings,
          t = e.width,
          r = e.height,
          n = void 0 === r ? 1122 : r,
          i = e.sizeUnit,
          a = void 0 === i ? "px" : i,
          l = e.presetSize,
          c = e.margin,
          d = l || "custom",
          h = L.m.widthFromKey(d, t, a, a),
          p = L.m.heightFromKey(d, n, a, a),
          u = L.m.getMaringOrDefault(c),
          g = {
            display: "inline-block",
            width: 50
          },
          m = F.C.validate(this.props.pageSizeSettings);
        return o().createElement(this.FakeModalDialog, {
          show: !0
        }, o().createElement(b.A, {
          title: "Document size",
          size: "medium",
          scroll: "body",
          style: {
            height: "auto",
            padding: 10
          },
          message: "",
          isProgressing: !1,
          isOkDisabled: m.length > 0,
          onOk: () => {
            this.setState({
              showDialog: !1
            });
          },
          onCancel: () => {
            this.setState({
              showDialog: !1
            });
          },
          okLabel: "Close",
          showCancel: !1,
          show: !0
        }, o().createElement("div", {
          style: {
            flex: 1
          }
        }, o().createElement("div", {
          style: {
            marginBottom: 15
          }
        }, o().createElement("div", {
          style: {
            marginBottom: 1
          }
        }, o().createElement("span", {
          style: g
        }, "Preset:"), o().createElement(s.A, {
          width: 202,
          style: {
            display: "inline-block",
            fontSize: 12
          },
          selectBoxStyle: {
            height: 15
          },
          value: d,
          data: L.m.getSelectBoxItemsForDocumentWidth(),
          onChange: this.handlePresetPageSizeChange
        })), o().createElement("div", null, o().createElement("span", {
          style: g
        }, "Width:"), o().createElement(M.A, {
          containerStyle: {
            display: "inline-flex",
            marginLeft: 0
          },
          disabled: "custom" != d,
          style: {
            width: 50,
            paddingBottom: 1
          },
          min: 0,
          max: 1e4,
          step: 1,
          decimals: 2,
          disableSlider: !0,
          value: h,
          onValueChanged: e => {
            this.raiseChange(_(_({}, this.props.pageSizeSettings), {}, {
              width: e,
              presetSize: void 0
            }));
          }
        }), o().createElement("span", {
          style: {
            paddingLeft: 0
          }
        }, o().createElement(R.t, {
          unit: a,
          onUnitChange: this.handleSizeUnitChange
        }))), o().createElement("div", null, o().createElement("span", {
          style: g
        }, "Height:"), o().createElement(M.A, {
          containerStyle: {
            display: "inline-flex",
            marginLeft: 0
          },
          disabled: "custom" != d,
          style: {
            width: 50,
            paddingBottom: 1
          },
          min: 0,
          max: 1e4,
          step: 1,
          decimals: 2,
          disableSlider: !0,
          value: p,
          onValueChanged: e => {
            this.raiseChange(_(_({}, this.props.pageSizeSettings), {}, {
              height: e,
              presetSize: void 0
            }));
          }
        }), o().createElement("span", {
          style: {
            paddingLeft: 4,
            display: "inline-block",
            width: 40
          }
        }, a), o().createElement("span", {
          style: {
            fontSize: "0.9em",
            paddingLeft: 7
          }
        }, "(specified for Print)"))), o().createElement(T.A, {
          title: "Document Margin",
          marginInfo: u,
          onMarginInfoChanged: e => {
            this.raiseChange(_(_({}, this.props.pageSizeSettings), {}, {
              margin: e
            }));
          }
        }), this.renderMessages(m))));
      }
    }
    render() {
      return o().createElement("div", null, this.renderCompactView(), this.renderDialog());
    }
  }
  var z = r(55451),
    H = r(50510),
    W = r(11154);
  function V(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function U(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? V(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : V(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class q extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        paragraph: this.props.paragraph,
        previewModel: void 0
      }), (0, n.A)(this, "FakeModalDialog", v.A.getModalDialog()), (0, n.A)(this, "mathType", void 0), (0, n.A)(this, "delaySetParagraph", z.A.createLaterRunObject("latest", 400));
    }
    componentDidMount() {
      r.e(32).then(r.bind(r, 15032)).then(e => {
        var t = e.paragraphPreviewModelStr;
        this.setState({
          previewModel: U(U({}, W.JF.anyParse(t)), {}, {
            pageSettings: {
              paragraph: this.state.paragraph
            }
          })
        });
      });
    }
    componentDidUpdate(e, t) {
      t.paragraph != this.state.paragraph && this.delaySetParagraph.later(() => {
        this.mathType && this.mathType.setPageSettings({
          paragraph: this.state.paragraph
        });
      });
    }
    renderContent() {
      return o().createElement("div", {
        style: {
          flex: 1,
          fontSize: 13
        }
      }, o().createElement("form", null, o().createElement("fieldset", {
        style: {
          border: "1px solid var(--ui-border, lightgray)"
        }
      }, o().createElement("legend", null, "Paragraph Spacing"), this.renderSpacing("rootLevel", "Root Level Text", !0), this.renderSpacing("nestedLevel", "Nested Level Text"), this.renderSpacing("listItem", "List Item"))), this.renderDemoMt());
    }
    renderSpacing(e, t, r) {
      var n = this.state.paragraph[e] || H.m.defaultParagraphSpacing;
      return o().createElement("div", {
        style: {
          marginTop: 5,
          marginBottom: 5
        }
      }, o().createElement("span", {
        style: {
          display: "inline-block",
          width: 150
        }
      }, t), o().createElement("span", {
        style: {
          paddingRight: 5
        }
      }, "Before"), o().createElement("span", null, this.renderNumbericInput(n.before || 0, t => {
        var r = U(U({}, this.state.paragraph[e] || H.m.defaultParagraphSpacing), {}, {
            before: t
          }),
          n = U(U({}, this.state.paragraph), {}, {
            [e]: r
          });
        this.setState({
          paragraph: n
        });
      })), o().createElement("span", {
        style: {
          paddingRight: 5,
          paddingLeft: 10
        }
      }, "After"), o().createElement("span", null, this.renderNumbericInput(n.after || 0, t => {
        var r = U(U({}, this.state.paragraph[e] || H.m.defaultParagraphSpacing), {}, {
            after: t
          }),
          n = U(U({}, this.state.paragraph), {}, {
            [e]: r
          });
        this.setState({
          paragraph: n
        });
      })), r && o().createElement("span", {
        style: {
          fontSize: 12
        }
      }, "(Unit is ratio to current font size)"));
    }
    renderNumbericInput(e, t) {
      return o().createElement(M.A, {
        disableSlider: !0,
        containerStyle: {
          display: "inline-flex",
          marginLeft: 0,
          fontSize: 13,
          paddingTop: 0
        },
        unit: "",
        min: 0,
        max: 50,
        step: .1,
        decimals: 2,
        value: e,
        unitStyle: {
          fontSize: 12
        },
        style: {
          fontSize: 12,
          width: 30,
          color: "var(--ui-text-muted, gray)"
        },
        onValueChanged: t
      });
    }
    renderDemoMt() {
      var e = this.props.getMathTypeClss();
      return o().createElement("form", {
        style: {
          marginTop: 5
        }
      }, o().createElement("fieldset", {
        style: {
          border: "1px solid var(--ui-border, lightgray)"
        }
      }, o().createElement("legend", null, "Preview"), o().createElement("div", {
        style: {
          width: 500,
          height: 300,
          overflowY: "auto"
        }
      }, this.state.previewModel ? o().createElement(e, {
        rootEditorStyle: {
          minHeight: 0,
          height: "auto"
        },
        ref: e => this.mathType = e,
        readOnly: !0,
        model: this.state.previewModel
      }) : o().createElement("span", null, "Loading"))));
    }
    render() {
      return o().createElement(this.FakeModalDialog, {
        show: !0
      }, o().createElement(b.A, {
        title: "Paragraph spacing",
        size: "medium",
        scroll: "body",
        style: U(U({}, v.A.getCenterStyle()), {}, {
          height: "auto",
          padding: 10,
          width: "auto"
        }),
        message: "",
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: () => {
          this.props.onOk(this.state.paragraph);
        },
        onCancel: () => {
          this.props.onOk(this.state.paragraph);
        },
        okLabel: "Close",
        showCancel: !1,
        show: !0
      }, this.renderContent()));
    }
  }
  class G extends i.Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "FakeModalDialog", v.A.getModalDialog());
    }
    render() {
      return o().createElement(this.FakeModalDialog, {
        show: !0
      }, o().createElement(b.A, {
        title: "Lazy math settings",
        size: "medium",
        scroll: "body",
        style: {
          width: 550,
          height: "auto",
          padding: 10
        },
        message: "",
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: () => this.props.onClose(),
        onCancel: () => this.props.onClose(),
        okLabel: "Close",
        showCancel: !1,
        show: !0
      }, o().createElement("div", {
        style: {
          flex: 1,
          padding: 5
        }
      }, this.renderCheckbox("disableDelayRendering", "Disable Lazy Math", "Lazy Math delays rendering off-screen math to improve performance in large documents. Selecting this option renders all math immediately.", !1), this.renderCheckbox("disableDelayInDiagram", "Disable Lazy Math in Diagram/Drawing", "Selecting this option renders math inside diagrams and drawings immediately, rather than waiting until it is needed.", this.props.disableDelayRendering))));
    }
    renderCheckbox(e, t, r, n) {
      return o().createElement("div", {
        style: {
          marginBottom: 5
        }
      }, o().createElement(c.A, {
        style: {
          display: "inline-block",
          fontSize: 13
        },
        textStyle: {
          fontSize: 13
        },
        disabled: n,
        checked: this.props[e],
        name: t,
        onValueChanged: t => this.props.onChange(e, t)
      }), o().createElement(x.m, {
        content: r,
        label: t + " help",
        className: "tw:ml-1",
        style: {
          color: "var(--ui-success, #4caf50)"
        }
      }, o().createElement("i", {
        className: "fa fa-info-circle",
        "aria-hidden": "true"
      })));
    }
  }
  var K = r(82477);
  function Z(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Z(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Q = v.A.getModalDialog();
  class J extends i.Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        spellcheckIgnore: this.props.spellcheckIgnore
      }), (0, n.A)(this, "handleOk", () => {
        this.state.globalState ? this.props.onGlobalIgnoreSaved(this.state.spellcheckIgnore) : this.props.onClose(this.state.spellcheckIgnore);
      });
    }
    render() {
      var e = this.state.spellcheckIgnore;
      return o().createElement(Q, {
        show: !0
      }, o().createElement(b.A, {
        title: "Ignored spellcheck words",
        size: "small",
        scroll: "body",
        style: Y({
          width: 290,
          height: 400,
          padding: 10,
          minHeight: 150,
          maxWidth: "95vw",
          overflow: "visible"
        }, v.A.getCenterStyle()),
        message: "",
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: this.handleOk,
        onCancel: () => this.props.onClose(this.state.spellcheckIgnore),
        okLabel: this.state.globalState ? "Save" : "Close",
        showCancel: this.state.globalState,
        show: !0
      }, o().createElement("div", {
        className: "test-sc-ignorewords",
        style: {
          display: "flex",
          flexDirection: "column",
          flex: 1,
          fontSize: 13
        }
      }, o().createElement("span", {
        style: {
          paddingBottom: 5
        }
      }, this.state.globalState ? "Spellcheck Ignore for All Documents:" : "Spell check Ignore (for current Document):"), o().createElement("textarea", {
        onChange: e => {
          this.setState({
            spellcheckIgnore: e.currentTarget.value
          });
        },
        style: {
          resize: "none",
          color: "var(--ui-text-muted, gray)",
          flex: 1,
          fontSize: 13
        },
        value: e
      }), o().createElement("button", {
        className: "btn-normal",
        style: {
          marginTop: 10,
          display: this.state.globalState ? "none" : void 0
        },
        onClick: () => {
          this.setState({
            spellcheckIgnore: this.props.globalSpellCheckIgnore || "",
            globalState: !0
          });
        }
      }, "Configure Ignore Globally"))));
    }
  }
  var X = r(97751),
    $ = r(21774),
    ee = r(14930);
  class te extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "handleSpellCheckItemChange", e => {
        "manage" != e.lang ? this.props.onLanguageChange(e.lang) : this.props.onRequestDicManager();
      }), (0, n.A)(this, "handleRenderItem", e => {
        var t = e.key.lang;
        if ("manage" == t) return o().createElement("span", {
          style: {
            fontWeight: "bold"
          }
        }, "Add/Manage Languages");
        var r = ee.u.langToDisplay(t),
          n = "";
        return $.A.isObj(t) && (n = e.key.isMissing ? o().createElement("span", {
          style: {
            color: "#ce0303"
          }
        }, "(Removed)") : ""), o().createElement("span", null, r, " ", n);
      }), (0, n.A)(this, "toggleSpellCheckMore", () => {
        this.setState({
          spellCheckShowMore: !this.state.spellCheckShowMore
        });
      });
    }
    render() {
      return console.log("SpellCheckOverallSettings", this.props.spellCheckInfo, this.props.language), o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement(s.A, {
        data: this.buildLanguageList(),
        onChange: this.handleSpellCheckItemChange,
        value: new re(this.props.language || "none"),
        itemsStyle: {
          fontSize: 12,
          maxHeight: 200,
          overflowY: "auto"
        },
        width: 160,
        onRenderItem: this.handleRenderItem,
        expansionWidth: 200,
        inputStyle: {
          overflowX: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis"
        }
      }), o().createElement("button", {
        style: {
          marginLeft: 5,
          width: 60
        },
        onClick: this.toggleSpellCheckMore,
        className: "btn-normal"
      }, "More"), this.renderSpellCheckShowMore());
    }
    renderSpellCheckShowMore() {
      var e;
      if (this.state.spellCheckShowMore) return o().createElement(J, {
        spellcheckIgnore: this.props.ignoreWords,
        globalSpellCheckIgnore: (null === (e = this.props.spellCheckInfo) || void 0 === e ? void 0 : e.ignoreWords) || "",
        onClose: e => {
          this.setState({
            spellCheckShowMore: void 0
          }), e != this.props.ignoreWords && this.props.onIgnoreWordsChange(e);
        },
        onGlobalIgnoreSaved: e => {
          this.props.onGlobalIgnoreSaved(e), this.setState({
            spellCheckShowMore: void 0
          });
        }
      });
    }
    buildLanguageList() {
      var e,
        t = (null === (e = this.props.spellCheckInfo) || void 0 === e ? void 0 : e.addedDics) || [],
        r = X.Q.map(e => this.itemComplexKey(e)),
        n = t.map(e => this.itemComplexKey(e)),
        i = this.props.language;
      return $.A.isObj(i) && !t.some(e => e.id == i.id) && n.push(this.itemComplexKey(i, !0)), [this.itemComplexKey("none")].concat(r).concat(n).concat([this.itemComplexKey("manage")]);
    }
    itemComplexKey(e, t) {
      return {
        key: new re(e, t),
        value: void 0
      };
    }
  }
  class re {
    constructor(e, t) {
      (0, n.A)(this, "lang", void 0), (0, n.A)(this, "isMissing", void 0), (0, n.A)(this, "type", "SelectBoxComplexKey"), this.lang = e, this.isMissing = t;
    }
    getUniqueKey() {
      return "string" == typeof this.lang ? "i-".concat(this.lang) : "".concat(this.lang.id);
    }
  }
  function ne(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ie(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ne(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ne(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class oe extends i.Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        settings: this.props.settings || {}
      }), (0, n.A)(this, "FakeModalDialog", v.A.getModalDialog());
    }
    render() {
      return o().createElement(this.FakeModalDialog, {
        show: !0
      }, o().createElement(b.A, {
        title: "Compatibility settings",
        size: "medium",
        scroll: "body",
        style: {
          width: 500,
          height: "auto",
          padding: 10
        },
        message: "",
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: () => this.props.onClose(this.state.settings),
        onCancel: () => this.props.onClose(this.state.settings),
        okLabel: "Close",
        showCancel: !1,
        show: !0
      }, o().createElement("div", {
        style: {
          flex: 1
        }
      }, o().createElement("div", null, o().createElement(c.A, {
        style: {
          padding: 5,
          display: "inline-block"
        },
        textStyle: {
          fontSize: 13
        },
        name: "Use old \\align rendering (table-based)",
        checked: this.state.settings.useOldAlignBehavior,
        onValueChanged: e => this.setState({
          settings: ie(ie({}, this.state.settings), {}, {
            useOldAlignBehavior: e
          })
        })
      })))));
    }
  }
  function se(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ae(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? se(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : se(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var le = p().times(123, e => ({
    key: e + 7,
    value: "".concat(e + 7, " px")
  }));
  class ce extends i.Component {
    constructor(e) {
      super(e), (0, n.A)(this, "ConfirmModalDialog", v.A.getModalDialog()), (0, n.A)(this, "onFontChange", e => {
        this.setState({
          data: ae(ae({}, this.state.data), {}, {
            fontName: e
          })
        });
      }), (0, n.A)(this, "onMathFontSizeChange", e => {
        this.setState({
          data: ae(ae({}, this.state.data), {}, {
            mathFontSize: e
          })
        });
      }), (0, n.A)(this, "onCodeSectionFontSizeChange", e => {
        this.setState({
          data: ae(ae({}, this.state.data), {}, {
            codeSectionFontSize: e
          })
        });
      }), (0, n.A)(this, "onFontSizeChange", e => {
        this.setState({
          data: ae(ae({}, this.state.data), {}, {
            fontSize: e
          })
        });
      }), (0, n.A)(this, "onMathFontChange", e => {
        this.setState({
          data: ae(ae({}, this.state.data), {}, {
            mathFontName: e
          })
        });
      }), (0, n.A)(this, "onSubMathFontChange", e => {
        this.setState({
          data: ae(ae({}, this.state.data), {}, {
            subMathFontName: e
          })
        });
      }), (0, n.A)(this, "onDarkModeChanged", e => {
        this.setState({
          data: ae(ae({}, this.state.data), {}, {
            isDarkMode: e
          })
        });
      }), (0, n.A)(this, "handleSpellCheckLanguageChanged", e => {
        "none" != e && a.A.preload(e);
        var t,
          r = ae(ae({}, this.getSpellCheck()), {}, {
            language: e
          });
        this.setState({
          data: ae(ae({}, this.state.data), {}, {
            spellCheck: r
          })
        });
      }), (0, n.A)(this, "onSpellCheckIgnoreWordsChanged", e => {
        var t,
          r = ae(ae({}, this.getSpellCheck()), {}, {
            ignoreWords: e
          });
        this.setState({
          data: ae(ae({}, this.state.data), {}, {
            spellCheck: r
          })
        });
      }), (0, n.A)(this, "handleLazyRefreshClick", () => {
        this.setState({
          showConfirmRefreshDelay: !0
        });
      }), (0, n.A)(this, "handleRequestLocalFont", e => {
        this.setState({
          showLocalFontsDialog: e
        });
      }), (0, n.A)(this, "labelStyle", {
        width: 150,
        fontSize: 12
      }), (0, n.A)(this, "pageSettingStyle", {
        display: "block",
        padding: 5,
        width: "100%"
      }), (0, n.A)(this, "groupStyle", {
        display: "flex",
        alignItems: "baseline",
        marginBottom: 5,
        overflow: "visible",
        fontSize: 12
      }), (0, n.A)(this, "selectBoxItemsStyle", {
        height: 200,
        overflow: "auto",
        fontSize: 12
      }), this.state = {
        data: this.props.data
      };
    }
    componentWillReceiveProps(e) {
      var t, r, n, i, o, s, a;
      (null === (t = e.data) || void 0 === t || null === (r = t.spellCheck) || void 0 === r ? void 0 : r.language) != (null === (n = this.props.data) || void 0 === n || null === (i = n.spellCheck) || void 0 === i ? void 0 : i.language) && this.setState({
        data: ae(ae({}, this.state.data), {}, {
          spellCheck: ae(ae({}, null === (o = this.state.data) || void 0 === o ? void 0 : o.spellCheck), {}, {
            language: null === (s = e.data) || void 0 === s || null === (a = s.spellCheck) || void 0 === a ? void 0 : a.language
          })
        })
      });
    }
    getData() {
      return this.state.data;
    }
    getSpellCheck() {
      var e;
      return this.state.data.spellCheck || {};
    }
    renderMathFont() {
      return o().createElement("div", {
        style: this.groupStyle
      }, o().createElement("st-label", {
        style: this.labelStyle
      }, "Base Math Font"), o().createElement("div", {
        className: "test-math-mode-font"
      }, o().createElement(y, {
        width: 160,
        expansionWidth: 240,
        fontName: this.state.data.mathFontName,
        onFontNameChange: this.onMathFontChange
      })), o().createElement("div", {
        style: {
          marginLeft: 5
        },
        className: "test-math-mode-font-size"
      }, o().createElement(s.A, {
        data: le,
        isReadOnly: !0,
        onChange: this.onMathFontSizeChange,
        value: this.state.data.mathFontSize,
        itemsStyle: this.selectBoxItemsStyle,
        width: 60
      })));
    }
    renderDarkModeSetting() {
      return o().createElement("div", {
        style: this.groupStyle,
        className: "test-dark-mode-enable"
      }, o().createElement("st-label", {
        style: this.labelStyle
      }, o().createElement("span", null, "Document Dark Mode "), o().createElement("span", {
        className: "toolbar-container",
        style: {
          display: "inline-block",
          position: "relative",
          width: 11,
          fill: "#FF9800"
        }
      }, o().createElement("span", null, d.A.experiment), o().createElement("div", {
        className: "unsupport-justification-text tool-bar-text",
        style: {
          position: "absolute",
          top: -54,
          margintop: 5,
          color: "orange",
          background: "var(--ui-surface, white)",
          border: "1px solid var(--ui-border, lightgray)",
          textAlign: "center",
          fontSize: 12,
          padding: 3,
          width: 130,
          left: -60,
          boxShadow: "1px 1px 1px var(--ui-shadow, #e2e0e0)"
        }
      }, "Experiment Feature: may be unstable or changed in future"))), o().createElement(c.A, {
        checked: !!this.state.data.isDarkMode,
        name: "",
        onValueChanged: this.onDarkModeChanged
      }));
    }
    renderDisableDelayRendering() {
      return o().createElement("div", {
        style: this.groupStyle
      }, o().createElement("st-label", {
        style: this.labelStyle
      }, "Lazy Math"), o().createElement("button", {
        style: {
          width: 160
        },
        className: "btn-normal test-lazy-math",
        onClick: () => this.setState({
          showLazyMathDg: !0
        })
      }, "Configure"), o().createElement("button", {
        style: {
          marginLeft: 5,
          width: 60
        },
        onClick: this.handleLazyRefreshClick,
        className: "btn-normal"
      }, "Refresh"));
    }
    renderLazyMathDg() {
      if (this.state.showLazyMathDg) return o().createElement(G, {
        disableDelayRendering: this.state.data.disableDelayRendering,
        disableDelayInDiagram: this.state.data.disableDelayInDiagram,
        onChange: (e, t) => {
          this.setState({
            data: ae(ae({}, this.state.data), {}, {
              [e]: t
            })
          });
        },
        onClose: () => {
          this.setState({
            showLazyMathDg: !1
          });
        }
      });
    }
    renderBracketSettings() {
      if (this.state.showBracketSettings) return o().createElement(P, {
        settings: this.state.data.bracketSettings,
        onClose: e => {
          this.setState({
            showBracketSettings: void 0
          }), e != this.state.data.bracketSettings && this.setState({
            data: ae(ae({}, this.state.data), {}, {
              bracketSettings: e
            })
          });
        }
      });
    }
    renderCompatibilitySettings() {
      if (this.state.showCompatibilitySettings) return o().createElement(oe, {
        settings: this.state.data.compatibility,
        onClose: e => {
          this.setState({
            showCompatibilitySettings: void 0
          }), e != this.state.data.compatibility && this.setState({
            data: ae(ae({}, this.state.data), {}, {
              compatibility: e
            })
          });
        }
      });
    }
    renderLocalFontsDialog() {
      if (this.state.showLocalFontsDialog && this.props.requestLocalFonts) return o().createElement(I.O, {
        requestLocalFonts: this.props.requestLocalFonts,
        onClose: e => {
          if (e && "text-mode" === this.state.showLocalFontsDialog) this.setState({
            data: ae(ae({}, this.state.data), {}, {
              fontName: {
                name: e
              }
            })
          });
          this.setState({
            showLocalFontsDialog: void 0
          });
        }
      });
    }
    renderPageSize() {
      var e = this.state.data;
      return o().createElement(N, {
        pageSizeSettings: e.pageSize,
        onPageSizeChange: e => {
          this.setState({
            data: ae(ae({}, this.state.data), {}, {
              pageSize: e
            })
          });
        }
      });
    }
    render() {
      var e = this.getSpellCheck();
      return o().createElement("page-settings", {
        style: this.pageSettingStyle
      }, o().createElement("div", {
        style: this.groupStyle,
        className: "test-ps"
      }, o().createElement("st-label", {
        style: this.labelStyle
      }, "Document Size"), this.renderPageSize()), o().createElement("div", {
        style: this.groupStyle
      }, o().createElement("st-label", {
        style: this.labelStyle
      }, "Default Font"), o().createElement("div", {
        className: "test-text-mode-font"
      }, o().createElement(l.A, {
        fontName: this.state.data.fontName,
        onFontNameChange: this.onFontChange,
        onRequestLocalFont: () => {
          this.handleRequestLocalFont("text-mode");
        },
        width: 160,
        expansionWidth: 200,
        showDefault: !1,
        selectLocalFonts: !0
      })), o().createElement("div", {
        style: {
          marginLeft: 5
        },
        className: "test-text-mode-font-size"
      }, o().createElement(s.A, {
        data: le,
        isReadOnly: !0,
        onChange: this.onFontSizeChange,
        value: this.state.data.fontSize,
        itemsStyle: this.selectBoxItemsStyle,
        width: 60
      }))), o().createElement("div", {
        style: this.groupStyle,
        className: "test-text-line-height"
      }, o().createElement("st-label", {
        style: this.labelStyle
      }, "Line Height"), this.renderNumericBox("textLineHeight")), o().createElement("div", {
        style: this.groupStyle
      }, o().createElement("st-label", {
        style: this.labelStyle
      }, "Paragraph Space"), o().createElement("button", {
        style: {
          width: 160
        },
        className: "btn-normal test-paragraph-configure",
        onClick: () => this.setState({
          showParagraph: !0
        })
      }, "Configure")), this.renderMathFont(), o().createElement("div", {
        style: this.groupStyle,
        className: "test-sub-math-mode-font"
      }, o().createElement("st-label", {
        style: this.labelStyle
      }, "Sub Math Font"), o().createElement(u.A, {
        noDefault: !0,
        baseMathModeFontFamily: this.state.data.mathFontName,
        value: this.state.data.subMathFontName,
        onChange: this.onSubMathFontChange,
        width: 160
      })), o().createElement("div", {
        style: this.groupStyle,
        className: "test-math-line-height"
      }, o().createElement("st-label", {
        style: this.labelStyle
      }, "Math Line Height"), this.renderNumericBox("mathLineHeight")), o().createElement("div", {
        style: this.groupStyle,
        className: "test-code-section-font-size"
      }, o().createElement("st-label", {
        style: this.labelStyle
      }, "Code Section Font Size"), o().createElement(s.A, {
        data: le,
        isReadOnly: !0,
        onChange: this.onCodeSectionFontSizeChange,
        value: this.state.data.codeSectionFontSize,
        itemsStyle: this.selectBoxItemsStyle,
        width: 160
      })), o().createElement("div", {
        style: this.groupStyle,
        className: "test-spell-check"
      }, o().createElement("st-label", {
        style: this.labelStyle
      }, "Spell check language"), o().createElement(te, {
        language: e.language || "none",
        spellCheckInfo: this.props.spellCheckInfo,
        onLanguageChange: this.handleSpellCheckLanguageChanged,
        ignoreWords: ee.u.getIgnoreWordsOrDefault(this.getSpellCheck()),
        onIgnoreWordsChange: e => {
          this.onSpellCheckIgnoreWordsChanged(e);
        },
        onRequestDicManager: this.props.onRequestDicManager,
        onGlobalIgnoreSaved: this.props.onGlobalIgnoreSaved
      })), o().createElement("div", {
        style: this.groupStyle,
        className: "test-spell-check"
      }, o().createElement("st-label", {
        style: this.labelStyle
      }, "Brackets"), o().createElement("button", {
        style: {
          width: 160
        },
        className: "btn-normal test-brackets-configure",
        onClick: () => this.setState({
          showBracketSettings: !0
        })
      }, "Configure")), o().createElement("div", {
        style: this.groupStyle,
        className: "test-compatibility"
      }, o().createElement("st-label", {
        style: this.labelStyle
      }, "Compatibility"), o().createElement("button", {
        style: {
          width: 160
        },
        className: "btn-normal test-compatibility-configure",
        onClick: () => this.setState({
          showCompatibilitySettings: !0
        })
      }, "Configure")), this.renderDarkModeSetting(), this.renderDisableDelayRendering(), this.renderBracketSettings(), this.renderCompatibilitySettings(), this.renderLocalFontsDialog(), this.renderParagraphDialog(), this.renderLazyMathDg(), this.renderRefreshDelayConfirm());
    }
    renderParagraphDialog() {
      if (this.state.showParagraph) return o().createElement(q, {
        paragraph: this.state.data.paragraph,
        getMathTypeClss: this.props.getMathTypeClss,
        onOk: e => {
          this.setState({
            showParagraph: !1,
            data: ae(ae({}, this.state.data), {}, {
              paragraph: e
            })
          });
        }
      });
    }
    renderNumericBox(e, t) {
      return t = ae({
        min: 1
      }, t), o().createElement(M.A, {
        disableSlider: !0,
        containerStyle: {
          display: "inline-flex",
          marginLeft: 0,
          fontSize: 13,
          paddingTop: 0
        },
        unit: "(ratio to font size)",
        min: t.min,
        max: 50,
        step: .1,
        decimals: 2,
        value: this.state.data[e],
        unitStyle: {
          fontSize: 12
        },
        style: {
          fontSize: 12,
          width: 30,
          color: "var(--ui-text-muted, gray)"
        },
        onValueChanged: t => {
          var r = ae(ae({}, this.state.data), {}, {
            [e]: t
          });
          this.setState({
            data: r
          });
        }
      });
    }
    renderRefreshDelayConfirm() {
      if (this.state.showConfirmRefreshDelay) return o().createElement(this.ConfirmModalDialog, {
        show: !0
      }, o().createElement(K.A, {
        title: "Refresh math layout",
        okLabel: "Refresh",
        icon: o().createElement("i", {
          className: "fa fa-info-circle",
          "aria-hidden": "true",
          style: {
            fontSize: "2em",
            textAlign: "center",
            color: "rgb(76 175 80)"
          }
        }),
        label: o().createElement("div", null, o().createElement("span", null, "This Action will recalculate Math Areas, it will fix issue relating to Layout Shift on Scrolling."), o().createElement("br", null), o().createElement("br", null), o().createElement("span", null, "Note: Document Settings Dialog will be close immediately without Saving.")),
        show: !0,
        onOk: e => {
          this.props.onRequestRefreshLazy(), e();
        },
        onClose: () => {
          this.setState({
            showConfirmRefreshDelay: !1
          });
        }
      }));
    }
  }
};
