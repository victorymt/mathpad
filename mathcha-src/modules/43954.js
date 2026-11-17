/* module 43954 — 2723 chars */
module.exports = function (e) {
  !function (t) {
    var r = {
        browser: [[/msie ([\.\_\d]+)/, "ie"], [/trident\/.*?rv:([\.\_\d]+)/, "ie"], [/firefox\/([\.\_\d]+)/, "firefox"], [/chrome\/([\.\_\d]+)/, "chrome"], [/version\/([\.\_\d]+).*?safari/, "safari"], [/mobile safari ([\.\_\d]+)/, "safari"], [/android.*?version\/([\.\_\d]+).*?safari/, "com.android.browser"], [/crios\/([\.\_\d]+).*?safari/, "chrome"], [/opera/, "opera"], [/opera\/([\.\_\d]+)/, "opera"], [/opera ([\.\_\d]+)/, "opera"], [/opera mini.*?version\/([\.\_\d]+)/, "opera.mini"], [/opios\/([a-z\.\_\d]+)/, "opera"], [/blackberry/, "blackberry"], [/blackberry.*?version\/([\.\_\d]+)/, "blackberry"], [/bb\d+.*?version\/([\.\_\d]+)/, "blackberry"], [/rim.*?version\/([\.\_\d]+)/, "blackberry"], [/iceweasel\/([\.\_\d]+)/, "iceweasel"], [/edge\/([\.\d]+)/, "edge"]],
        os: [[/linux ()([a-z\.\_\d]+)/, "linux"], [/mac os x/, "macos"], [/mac os x.*?([\.\_\d]+)/, "macos"], [/os ([\.\_\d]+) like mac os/, "ios"], [/openbsd ()([a-z\.\_\d]+)/, "openbsd"], [/android/, "android"], [/android ([a-z\.\_\d]+);/, "android"], [/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/, "firefoxos"], [/windows\s*(?:nt)?\s*([\.\_\d]+)/, "windows"], [/windows phone.*?([\.\_\d]+)/, "windows.phone"], [/windows mobile/, "windows.mobile"], [/blackberry/, "blackberryos"], [/bb\d+/, "blackberryos"], [/rim.*?os\s*([\.\_\d]+)/, "blackberryos"]],
        device: [[/ipad/, "ipad"], [/iphone/, "iphone"], [/lumia/, "lumia"], [/htc/, "htc"], [/nexus/, "nexus"], [/galaxy nexus/, "galaxy.nexus"], [/nokia/, "nokia"], [/ gt\-/, "galaxy"], [/ sm\-/, "galaxy"], [/xbox/, "xbox"], [/(?:bb\d+)|(?:blackberry)|(?: rim )/, "blackberry"]]
      },
      n = "Unknown",
      i = Object.keys(r);
    function o() {
      var e = this;
      i.forEach(function (t) {
        e[t] = {
          name: n,
          version: [],
          versionString: n
        };
      });
    }
    function s(e, t, i) {
      r[t].forEach(function (r) {
        var o = r[0],
          s = r[1],
          l = i.match(o);
        l && (e[t].name = s, l[2] ? (e[t].versionString = l[2], e[t].version = []) : l[1] ? (e[t].versionString = l[1].replace(/_/g, "."), e[t].version = a(l[1])) : (e[t].versionString = n, e[t].version = []));
      });
    }
    function a(e) {
      return e.split(/[\._]/).map(function (e) {
        return parseInt(e);
      });
    }
    o.prototype.sniff = function (e) {
      var t = this,
        r,
        n = "undefined" != typeof window ? navigator.userAgent : "",
        o = (e || n).toLowerCase();
      return i.forEach(function (e) {
        s(t, e, o);
      }), this;
    }, e.exports ? e.exports = o : (t.Sniffr = new o(), t.Sniffr.sniff(navigator.userAgent));
  }(this);
};
