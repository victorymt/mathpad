/* module 54092 — 21969 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    UL: () => F,
    mt: () => H
  });
  var n = r(64467),
    i = r(3453),
    o = r(40927),
    s = r.n(o),
    a = r(29315),
    l = r(80541),
    c = r(22005),
    d = r(59847);
  function h(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? h(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class u {
    flattenToLines(e, t) {
      return d.A.flattenToLines(this.fakePathDataShape(e, t));
    }
    fakePathDataShape(e, t) {
      return p(p({}, e), {}, {
        type: "path-data-shape",
        path: {
          paperData: t
        }
      });
    }
    getAbsolutePaperPath(e, t) {
      return l.A.pathInBoxedToAbsolute(t, e.data, !1);
    }
    getPaperPathForImporting(e, t) {
      return d.A.getPaperPathForImporting(this.fakePathDataShape(e, t));
    }
  }
  var g = new u();
  const m = '{"shapes":[{"w":90,"h":60,"name":"signal-ground","paper":["CompoundPath",{"children":[["Path",{"closed":true,"segments":[[0,20],[45,60],[90,20]]}],["Path",{"segments":[[45,0],[45,20]]}]]}]}]}',
    f = '{"shapes":[{"w":100,"h":60,"name":"capacitor-1","paper":["CompoundPath",{"children":[["Path",{"segments":[[0,30],[45,30]]}],["Path",{"segments":[[55,0],[55,60]]}],["Path",{"segments":[[45,0],[45,60]]}],["Path",{"segments":[[55,30],[100,30]]}]]}]}]}',
    y = '{"shapes":[{"w":100,"h":60,"name":"diode","paper":["CompoundPath",{"children":[["Path",{"closed":true,"segments":[[30,0],[70,30],[30,60]]}],["Path",{"segments":[[0,30],[30,30]]}],["Path",{"segments":[[70,0],[70,60]]}],["Path",{"segments":[[70,30],[100,30]]}]]}]}]}',
    v = '{"shapes":[{"w":25,"h":50,"name":"loudspeaker","paper":["CompoundPath",{"children":[["CompoundPath",{"children":[["Path",{"closed":true,"segments":[[25,50],[25,0],[15,15],[10,15],[10,35],[15,35]]}],["Path",{"segments":[[0,30],[10,30]]}],["Path",{"segments":[[0,20],[10,20]]}]]}],["Path",{"segments":[[15,15],[15,35]]}]]}]}]}',
    b = '{"shapes":[{"w":100,"h":42.5,"name":"inductor","paper":["Path",{"segments":[[0,42.5],[[0,12.5],null,[0,5.601062193825001]],[[12.499999999999998,0],[5.601062193824998,1.7763568394002505e-15],[19.398937806175,0]],[[25,12.499999999999996],[25,5.601062193824998],[25,5.601062193824997]],[[37.5,-1.7763568394002505e-15],[30.601062193825,-1.7763568394002505e-15],[44.398937806175,-1.7763568394002505e-15]],[[50,12.499999999999998],[50,5.6010621938249985],[50,5.6010621938249985]],[[62.5,0],[55.601062193825,0],[69.398937806175,0]],[[75,12.5],[75,5.601062193825],[75,5.601062193825001]],[[87.5,0],[80.601062193825,1.7763568394002505e-15],[94.398937806175,0]],[[100,12.499999999999996],[100,5.601062193824998]],[100,42.5]]}]},{"w":100,"h":8,"name":"inductor-3","paper":["Path",{"segments":[[0,8],[[18,8],null,[18,3.584679804048001]],[[26,0],[21.584679804047997,8.881784197001252e-16],[30.415320195952,0]],[[34,7.999999999999998],[34,3.5846798040479984],[34,3.5846798040479984]],[[42,-8.881784197001252e-16],[37.584679804048,-8.881784197001252e-16],[46.415320195952,-8.881784197001252e-16]],[[50,7.999999999999999],[50,3.5846798040479992],[50,3.5846798040479992]],[[58,0],[53.584679804048,0],[62.415320195952,0]],[[66,8],[66,3.584679804048],[66,3.584679804048001]],[[74,0],[69.584679804048,8.881784197001252e-16],[78.41532019595199,0]],[[82,7.999999999999998],[82,3.5846798040479984]],[100,8]]}]},{"w":100,"h":14.07,"name":"inductor-5","paper":["Path",{"segments":[[0,9.07],[[18,9.07],null,[18.25914490099858,5.373897622948493]],[[24.293485027189263,1.1091520870056488],[20.75696876254915,2.214313419705685],[27.830001291829376,0.003990754305613464]],[[34,4.07],[31.68242401260173,1.1791229005725068],[35.78630910182006,6.3248679883593155]],[[36,12.07],[36.51504074237802,9.239794550591164],[36,13.173830048988]],[[34,14.07],[35.103830048988,14.07],[32.896169951012,14.07]],[[32,12.07],[32,13.173830048988],[31.484959257621977,9.23979455059116]],[[34.00000000000001,4.069999999999997],[32.21369089817994,6.324867988359308],[36.078168063441204,1.66773017299165]],[[42,0.30618302029536437],[38.97213907220823,0.30618302029536437],[45.02786092779177,0.30618302029536437]],[[50,4.069999999999997],[47.9218319365588,1.6677301729916518],[51.786309101820066,6.324867988359311]],[[52,12.07],[52.515040742378034,9.239794550591164],[52,13.173830048988]],[[50,14.07],[51.103830048988,14.07],[48.896169951012,14.07]],[[48,12.07],[48,13.173830048988],[47.48495925762198,9.23979455059116]],[[50.00000000000001,4.069999999999997],[48.21369089817994,6.324867988359308],[52.078168063441204,1.66773017299165]],[[58,0.30618302029536437],[54.97213907220823,0.30618302029536437],[61.02786092779177,0.30618302029536437]],[[66,4.069999999999997],[63.9218319365588,1.6677301729916518],[67.78630910182007,6.324867988359311]],[[68,12.07],[68.51504074237803,9.239794550591164],[68,13.173830048988]],[[66,14.07],[67.103830048988,14.07],[64.896169951012,14.07]],[[64,12.07],[64,13.173830048988],[63.484959257621966,9.23979455059116]],[[66,4.069999999999997],[64.21369089817993,6.324867988359308],[68.31757598739827,1.1791229005725068]],[[75.70651497281074,1.1091520870056453],[72.16999870817062,0.0039907543056099115],[79.24303123745085,2.2143134197056797]],[[82,9.069999999999997],[81.74085509900142,5.373897622948487]],[100,9.07]]}]}]}',
    x = '{"shapes":[{"w":100,"h":60,"name":"and","paper":["CompoundPath",{"children":[["Path",{"closed":true,"segments":[[20,0],[[50,0],null,[66.557451,0]],[[80,30],[80,13.442549],[80,46.557451]],[[50,60],[66.557451,60]],[20,60]]}],["CompoundPath",{"children":[["Path",{"segments":[[0,10],[20,10]]}],["Path",{"segments":[[0,50],[20,50]]}],["Path",{"segments":[[80,30],[100,30]]}]]}]]}]},{"w":108,"h":60,"name":"inverter","paper":["CompoundPath",{"children":[["CompoundPath",{"children":[["Path",{"closed":true,"segments":[[20,0],[80,30],[20,60]]}],["Path",{"segments":[[0,30],[20,30]]}],["Path",{"segments":[[92,30],[108,30]]}]]}],["Path",{"closed":true,"segments":[[[80,30],[80,33.313709],[80,26.686291]],[[86,24],[82.686291,24],[89.313709,24]],[[92,30],[92,26.686291],[92,33.313709]],[[86,36],[89.313709,36],[82.686291,36]]]}]]}]},{"w":108,"h":60,"name":"nand","paper":["CompoundPath",{"children":[["Path",{"closed":true,"segments":[[20,0],[[50,0],null,[66.557451,0]],[[80,30],[80,13.442549],[80,46.557451]],[[50,60],[66.557451,60]],[20,60]]}],["CompoundPath",{"children":[["CompoundPath",{"children":[["Path",{"segments":[[0,10],[20,10]]}],["Path",{"segments":[[0,50],[20,50]]}],["Path",{"segments":[[92,30],[108,30]]}]]}],["Path",{"closed":true,"segments":[[[80,30],[80,33.313709],[80,26.686291]],[[86,24],[82.686291,24],[89.313709,24]],[[92,30],[92,26.686291],[92,33.313709]],[[86,36],[89.313709,36],[82.686291,36]]]}]]}]]}]},{"w":108,"h":60,"name":"nor","paper":["CompoundPath",{"children":[["Path",{"closed":true,"segments":[[15,0],[[40,0],null,[57.439988,0.538809]],[[80,30],[73.028049,12.229855],[73.028049,47.770145]],[[40,60],[57.439988,59.461191]],[[15,60],null,[25.717968,41.435935]],[[15,0],[25.717968,18.564065]]]}],["CompoundPath",{"children":[["CompoundPath",{"children":[["Path",{"segments":[[0,10],[20,10]]}],["Path",{"segments":[[0,50],[20,50]]}],["Path",{"segments":[[92,30],[108,30]]}]]}],["Path",{"closed":true,"segments":[[[80,30],[80,33.313709],[80,26.686291]],[[86,24],[82.686291,24],[89.313709,24]],[[92,30],[92,26.686291],[92,33.313709]],[[86,36],[89.313709,36],[82.686291,36]]]}]]}]]}]},{"w":100,"h":60,"name":"or","paper":["CompoundPath",{"children":[["Path",{"closed":true,"segments":[[15,0],[[40,0],null,[57.439988,0.538809]],[[80,30],[73.028049,12.229855],[73.028049,47.770145]],[[40,60],[57.439988,59.461191]],[[15,60],null,[25.717968,41.435935]],[[15,0],[25.717968,18.564065]]]}],["CompoundPath",{"children":[["Path",{"segments":[[0,10],[20,10]]}],["Path",{"segments":[[0,50],[20,50]]}],["Path",{"segments":[[80,30],[100,30]]}]]}]]}]},{"w":100,"h":60,"name":"xor","paper":["CompoundPath",{"children":[["Path",{"closed":true,"segments":[[15,0],[[40,0],null,[57.439988,0.538809]],[[80,30],[73.028049,12.229855],[73.028049,47.770145]],[[40,60],[57.439988,59.461191]],[[15,60],null,[25.717968,41.435935]],[[15,0],[25.717968,18.564065]]]}],["CompoundPath",{"children":[["Path",{"segments":[[0,10],[20,10]]}],["Path",{"segments":[[0,50],[20,50]]}],["Path",{"segments":[[80,30],[100,30]]}],["Path",{"segments":[[[10,0],null,[20.717968,18.564065]],[[10,60],[20.717968,41.435935]]]}]]}]]}]}]}',
    C = '{"shapes":[{"w":100,"h":20,"name":"fuse-1","paper":["CompoundPath",{"children":[["Path",{"closed":true,"segments":[[18,0],[82,0],[82,20],[18,20]]}],["CompoundPath",{"children":[["Path",{"segments":[[0,10],[18,10]]}],["Path",{"segments":[[82,10],[100,10]]}],["Path",{"segments":[[25,0],[25,20]]}],["Path",{"segments":[[75,0],[75,20]]}]]}]]}]},{"w":60,"h":50,"name":"light-bulb","paper":["CompoundPath",{"children":[["Path",{"closed":true,"segments":[[[5,25],[5,38.80712],[5,11.192879999999999]],[[30,0],[16.19288,0],[43.80712,0]],[[55,25],[55,11.192879999999999],[55,38.80712]],[[30,50],[43.80712,50],[16.19288,50]]]}],["CompoundPath",{"children":[["Path",{"segments":[[12.2,7.2],[47.8,42.8]]}],["Path",{"segments":[[47.8,7.2],[12.2,42.8]]}],["Path",{"segments":[[0,25],[5,25]]}],["Path",{"segments":[[55,25],[60,25]]}]]}]]}]},{"w":100,"h":60,"name":"monocell-battery","paper":["CompoundPath",{"children":[["CompoundPath",{"children":[["Path",{"segments":[[0,30],[45,30]]}],["Path",{"segments":[[55,0],[55,60]]}],["Path",{"segments":[[55,30],[100,30]]}]]}],["Path",{"closed":true,"segments":[[41,15],[45,15],[45,45],[41,45]]}]]}]}]}',
    S = '{"shapes":[{"w":50,"h":100,"name":"lamp","paper":["CompoundPath",{"children":[["Path",{"closed":true,"segments":[[0,80],[[0,25],null,[0,11.202124387650002]],[[24.999999999999996,0],[11.202124387649995,3.552713678800501e-15],[38.80711874576984,0]],[[50,25.000000000000007],[50.000000000000014,11.19288125423017]],[50,80]]}],["Path",{"segments":[[10,100],[[10,50],null,[10,41.72127463259]],[[24.999999999999996,35],[16.721274632589996,35],[33.2842712474619,35]],[[40,50],[40,41.7157287525381]],[40,100]]}]]}]}]}',
    A = '{"shapes":[{"w":100,"h":50,"name":"contact","paper":["CompoundPath",{"children":[["Path",{"segments":[[0,25],[30,25]]}],["Path",{"segments":[[100,25],[70,25]]}],["Path",{"segments":[[30,0],[30,50]]}],["Path",{"segments":[[70,0],[70,50]]}]]}]},{"w":100,"h":50,"name":"not-contact","paper":["CompoundPath",{"children":[["Path",{"segments":[[0,25],[30,25]]}],["Path",{"segments":[[100,25],[70,25]]}],["Path",{"segments":[[30,0],[30,50]]}],["Path",{"segments":[[70,0],[70,50]]}],["Path",{"segments":[[30,50],[70,0]]}]]}]},{"w":100,"h":50,"name":"output-1","paper":["CompoundPath",{"children":[["Path",{"segments":[[[35,0],null,[26.068360252295903,15.470053837925157]],[[34.99999999999999,50.00000000000001],[26.068360252295903,34.52994616207485]]]}],["Path",{"segments":[[0,25],[28,25]]}],["Path",{"segments":[[100,25],[72,25]]}],["Path",{"segments":[[[65,0],null,[73.93163974770408,15.470053837925155]],[[65,50],[73.93163974770408,34.52994616207484]]]}]]}]},{"w":100,"h":50,"name":"output-2","paper":["CompoundPath",{"children":[["Path",{"closed":true,"segments":[[[25,25],[25,38.80712],[25,11.192879999999999]],[[50,0],[36.19288,0],[63.80712,0]],[[75,25],[75,11.192879999999999],[75,38.80712]],[[50,50],[63.80712,50],[36.19288,50]]]}],["CompoundPath",{"children":[["Path",{"segments":[[0,25],[25,25]]}],["Path",{"segments":[[100,25],[75,25]]}]]}]]}]}]}',
    w = '{"shapes":[{"w":80,"h":100,"name":"aerial---antenna-1","paper":["CompoundPath",{"children":[["Path",{"segments":[[0,0],[40,40],[80,0]]}],["Path",{"segments":[[40,0],[40,100]]}]]}]},{"w":66,"h":56,"name":"headphones","paper":["CompoundPath",{"children":[["Path",{"closed":true,"segments":[[[0,41],[0,49.284272],[0,32.715728]],[[8,26],[3.5817216,26],[12.4182784,26]],[[16,41],[16,32.715728],[16,49.284272]],[[8,56],[12.4182784,56],[3.5817216,56]]]}],["Path",{"closed":true,"segments":[[[50,41],[50,49.284272],[50,32.715728]],[[58,26],[53.5817216,26],[62.4182784,26]],[[66,41],[66,32.715728],[66,49.284272]],[[58,56],[62.4182784,56],[53.5817216,56]]]}],["Path",{"segments":[[[2,31],null,[2,13.890634240686005]],[[32.99999999999999,0],[15.890634240685994,3.552713678800501e-15],[50.10936575931399,0]],[[64,30.999999999999993],[64,13.890634240685994]]]}]]}]}]}',
    E = '{"shapes":[{"w":100,"h":20,"name":"memristor-1","paper":["Path",{"segments":[[0,10],[18,10],[18,0],[26,0],[26,20],[34,20],[34,0],[42,0],[42,20],[50,20],[50,0],[58,0],[58,20],[66,20],[66,0],[74,0],[74,20],[82,20],[82,10],[100,10]]}]},{"w":100,"h":20,"name":"resistor-1","paper":["CompoundPath",{"children":[["Path",{"closed":true,"segments":[[18,0],[82,0],[82,20],[18,20]]}],["CompoundPath",{"children":[["Path",{"segments":[[0,10],[18,10]]}],["Path",{"segments":[[82,10],[100,10]]}]]}]]}]},{"w":100,"h":20,"name":"resistor-2","paper":["Path",{"segments":[[0,10],[18,10],[22,0],[30,20],[38,0],[46,20],[54,0],[62,20],[70,0],[78,20],[82,10],[100,10]]}]}]}',
    k = '{"shapes":[{"w":100,"h":12,"name":"automatic-return","paper":["CompoundPath",{"children":[["Path",{"segments":[[0,6],[100,6]]}],["Path",{"closed":true,"segments":[[58,0],[58,12],[42,6]]}]]}]},{"w":100,"h":15,"name":"blocking-device","paper":["CompoundPath",{"children":[["Path",{"segments":[[0,15],[100,15]]}],["Path",{"closed":true,"segments":[[33,0],[69,0],[69,15],[33,15]]}]]}]},{"w":100,"h":30,"name":"mechanical-interlock","paper":["CompoundPath",{"children":[["Path",{"segments":[[0,22],[100,22]]}],["CompoundPath",{"children":[["Path",{"segments":[[50,0],[50,17]]}],["Path",{"closed":true,"segments":[[42,13],[58,13],[50,30]]}]]}]]}]},{"w":68.43,"h":53.61,"name":"rotation","paper":["CompoundPath",{"children":[["Path",{"segments":[[[8.31,4.56],null,[0.0022181794722584414,17.084452335830093]],[[13.55492293806271,43.720478320190466],[2.2441629918091017,33.8236174780751],[24.865682884316314,53.61733916230584]],[[53.0650770619373,43.720478320190466],[41.754317115683705,53.61733916230584],[64.3758370081909,33.823617478075086]],[[58.30999999999999,4.559999999999977],[66.61778182052774,17.084452335830075]]]}],["Path",{"closed":true,"segments":[[56.2,0],[56.14,16.06],[68.43,11.43]]}]]}]}]}',
    O = '{"shapes":[{"w":90,"h":60,"name":"signal-ground","paper":["CompoundPath",{"children":[["Path",{"closed":true,"segments":[[0,20],[45,60],[90,20]]}],["Path",{"segments":[[45,0],[45,20]]}]]}]}]}',
    D = '{"shapes":[{"w":75,"h":26,"name":"2-way-switch","paper":["CompoundPath",{"children":[["CompoundPath",{"children":[["Path",{"segments":[[0,23],[15,23]]}],["Path",{"segments":[[60,23],[75,23]]}],["Path",{"segments":[[21,22],[57,7]]}],["Path",{"segments":[[60,3],[75,3]]}]]}],["Path",{"closed":true,"segments":[[[54,23],[54,24.6568544],[54,21.3431456]],[[57,20],[55.3431456,20],[58.6568544,20]],[[60,23],[60,21.3431456],[60,24.6568544]],[[57,26],[58.6568544,26],[55.3431456,26]]]}],["Path",{"closed":true,"segments":[[[15,23],[15,24.6568544],[15,21.3431456]],[[18,20],[16.3431456,20],[19.6568544,20]],[[21,23],[21,21.3431456],[21,24.6568544]],[[18,26],[19.6568544,26],[16.3431456,26]]]}],["Path",{"closed":true,"segments":[[[54,3],[54,4.6568544],[54,1.3431456]],[[57,0],[55.3431456,0],[58.6568544,0]],[[60,3],[60,1.3431456],[60,4.6568544]],[[57,6],[58.6568544,6],[55.3431456,6]]]}]]}]},{"w":75,"h":19,"name":"simple-switch","paper":["CompoundPath",{"children":[["CompoundPath",{"children":[["Path",{"segments":[[0,16],[15,16]]}],["Path",{"segments":[[60,16],[75,16]]}],["Path",{"segments":[[21,15],[57,0]]}]]}],["Path",{"closed":true,"segments":[[[54,16],[54,17.6568544],[54,14.3431456]],[[57,13],[55.3431456,13],[58.6568544,13]],[[60,16],[60,14.3431456],[60,17.6568544]],[[57,19],[58.6568544,19],[55.3431456,19]]]}],["Path",{"closed":true,"segments":[[[15,16],[15,17.6568544],[15,14.3431456]],[[18,13],[16.3431456,13],[19.6568544,13]],[[21,16],[21,14.3431456],[21,17.6568544]],[[18,19],[19.6568544,19],[16.3431456,19]]]}]]}]},{"w":75,"h":7,"name":"stay-put","paper":["CompoundPath",{"children":[["CompoundPath",{"children":[["Path",{"segments":[[0,3],[15,3]]}],["Path",{"segments":[[60,3],[75,3]]}],["Path",{"segments":[[21,4],[57,7]]}]]}],["Path",{"closed":true,"segments":[[[54,3],[54,4.6568544],[54,1.3431456]],[[57,0],[55.3431456,0],[58.6568544,0]],[[60,3],[60,1.3431456],[60,4.6568544]],[[57,6],[58.6568544,6],[55.3431456,6]]]}],["Path",{"closed":true,"segments":[[[15,3],[15,4.6568544],[15,1.3431456]],[[18,0],[16.3431456,0],[19.6568544,0]],[[21,3],[21,1.3431456],[21,4.6568544]],[[18,6],[19.6568544,6],[16.3431456,6]]]}]]}]}]}',
    P = '{"shapes":[{"w":90,"h":90,"name":"pulse-1","paper":["Path",{"segments":[[0,90],[25,90],[25,0],[65,0],[65,90],[90,90]]}]},{"w":90,"h":90,"name":"pulse-2","paper":["Path",{"segments":[[0,0],[25,0],[25,90],[65,90],[65,0],[90,0]]}]},{"w":100,"h":100,"name":"sawtooth","paper":["Path",{"segments":[[0,100],[33.33,0],[33.33,100],[66.67,0],[66.67,100],[100,0],[100,100]]}]},{"w":89.75,"h":88.17,"name":"sine-wave","paper":["Path",{"segments":[[[0,43.95],null,[18.26,0.23]],[[44.87,43.95],[26.87,0],[62.88,87.9]],[[89.75,43.95],[71.32,88.17],null]]}]},{"w":90,"h":80,"name":"slow-square-wave","paper":["Path",{"segments":[[0,40],[10,0],[35,0],[55,80],[80,80],[90,40]]}]},{"w":90,"h":80,"name":"square-wave","paper":["Path",{"segments":[[0,40],[0,0],[45,0],[45,80],[90,80],[90,40]]}]}]}';
  function M(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function I(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? M(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : M(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class T extends a.dV {
    render() {
      var e = F(this.shape()),
        t = c.A.paperPath(e, this.style(), "real", !0),
        r = s().cloneElement(t, {
          className: "transparent no-print",
          style: this.transparentStyle(),
          key: "paper-root-transparent"
        });
      return s().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), r, t);
    }
  }
  var L,
    R = [m, f, y, v, b, x, C, S, A, w, E, k, O, D, P];
  function B(e) {
    L || (L = R.flatMap(e => JSON.parse(e).shapes).map(e => ({
      name: e.name,
      paper: l.A.absolutePathToBox(e.paper, {
        p1: {
          x: 0,
          y: 0
        },
        p2: {
          x: e.w,
          y: e.h
        }
      }, !1)
    })));
    var t = L.find(t => t.name == e);
    return t || (t = L.find(e => "and" == e.name)), t.paper;
  }
  function F(e) {
    return j(e.data, e.subType);
  }
  function j(e, t) {
    var r = B(t);
    return l.A.pathInBoxedToAbsolute(r, e, !1);
  }
  class _ extends a.US {}
  function N(e, t, r) {
    return ["2-way-switch", "simple-switch"].includes(e) ? [t, 2 * r / 3] : ["stay-put"].includes(e) ? [t, 1 * r / 3] : ["resistor-1", "resistor-2", "memristor-1", "capacitor-1", "inductor", "inductor-3", "inductor-5"].includes(e) ? [t, 2 * r / 3] : ["fuse-1"].includes(e) ? [t, 1 * r / 3] : ["lamp"].includes(e) ? [1.5 * t / 3, r] : [t, r];
  }
  class z extends a.Au {
    getComponent() {
      return T;
    }
    getIcon() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "and",
        t = 23,
        r = 20,
        n = N(e, 19, 12),
        o = (0, i.A)(n, 2),
        a = o[0],
        l = o[1],
        d = {
          x: (t - a) / 2,
          y: (r - l) / 2
        },
        h = {
          x: t - (t - a) / 2,
          y: r - (r - l) / 2
        };
      return {
        caption: "",
        component: s().createElement("svg", {
          style: {
            width: t,
            height: r,
            position: "relative"
          },
          key: "".concat(this.getType(), "-").concat(e)
        }, c.A.paperPath(F({
          type: "generic-shape",
          id: "anyid",
          subType: e,
          data: {
            p1: d,
            p2: h
          }
        }), {
          stroke: "gray",
          fill: "none"
        }, void 0))
      };
    }
    createShape(e) {
      var t = e.customData || "and",
        r = N(t, e.shapeWidth || 80, e.shapeHeight || 60),
        n = (0, i.A)(r, 2),
        o = n[0],
        s = n[1],
        a = super.createShape(I(I({}, e), {}, {
          shapeWidth: o,
          shapeHeight: s
        }));
      return a.subType = t, a;
    }
    getType() {
      return "generic-shape";
    }
    getSettingsComponent() {
      return _;
    }
    getSnapablePoints(e) {
      var t = B(e.subType);
      return g.flattenToLines(e, t).flatMap(e => [e.p1, e.p2]);
    }
    getBreakdownInfoWhenInvalidCache(e) {
      var t = B(e.subType);
      return {
        data: g.flattenToLines(e, t)
      };
    }
    getPaperPath(e) {
      var t = B(e.subType);
      return g.getPaperPathForImporting(e, t);
    }
  }
  var H = new z();
};
