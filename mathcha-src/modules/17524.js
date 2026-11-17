/* module 17524 — 14813 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(2543),
    i = r.n(n),
    o = r(70224),
    s = r(28783);
  class a {
    createFunctionPlot(e, t, r) {
      return (e = i().clone(e)).data = t, e.settings = {
        centerXDelta: r.x,
        centerYDelta: r.y
      }, e.axes = {
        xAxis: {
          settings: {
            axisThickness: 1,
            majorTextColor: [50, 50, 50],
            axisColor: [50, 50, 50],
            majorSteps: "auto",
            scale: 13
          }
        },
        yAxis: {
          settings: {
            axisThickness: 1,
            majorTextColor: [50, 50, 50],
            axisColor: [50, 50, 50],
            majorSteps: "auto",
            scale: 13
          }
        }
      }, e.functions = [{
        type: void 0,
        model: o.A.createOneTextEditor("4 * sin(x) + 5 * cos(x/2)"),
        style: {
          strokeColor: [74, 144, 226, .8],
          thickness: 2
        }
      }], e;
    }
    create(e) {
      switch (e) {
        case "scatter":
          return this.createScatter();
        case "line":
          return this.createLine();
        case "area":
          return this.createArea();
        case "bar":
          return this.createBar();
        case "contour":
          return this.createContour();
        case "heatmap":
          return this.createHeatmap();
        case "pie":
          return this.createPie();
        case "surface":
          return this.createSurface();
        case "mesh3d":
          return this.createMesh3d();
        case "scatter3d":
          return this.createScatter3d();
        case "3d-func":
          return {
            type: "3d-func",
            expressions: [s.a.create("surface")],
            layout: {
              autosize: !1,
              margin: {
                l: 1,
                r: 1,
                b: 1,
                t: 1
              }
            },
            axes: {
              x: {
                range: "auto"
              },
              y: {
                range: "auto"
              },
              z: {
                range: "auto"
              }
            }
          };
      }
    }
    createScatter() {
      return JSON.parse('{"traces":[{"type":"scatter","mode":"markers","xsrc":"A","meta":{"columnNames":{"x":"A","y":"B","values":"A","labels":"Column: B"}},"ysrc":"B","name":"Trace 1","valuessrc":"A","labelssrc":"B"}],"jexcelSource":{"data":[["13","44"],["23","55"],["44","23"],["55","44"],["25","35"]],"columns":[{"type":"text","name":"0","source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"},{"type":"text","source":[],"options":[],"width":"88","align":"center","name":"1","editor":null,"allowEmpty":false,"title":""}]},"layout":{"xaxis":{"range":[9.827338129496404,58.172661870503596],"autorange":true,"type":"linear","title":{"text":"X Axis"}},"yaxis":{"range":[20.176470588235293,57.8235294117647],"autorange":true,"title":{"text":"Y Axis"},"type":"linear"},"autosize":true,"dragmode":"pan","title":{"text":""},"margin":{"t":50}}}');
    }
    createLine() {
      return JSON.parse('{"traces":[{"type":"scatter","mode":"lines","xsrc":"A","meta":{"columnNames":{"x":"A","y":"B","values":"A","labels":"Column: B"}},"ysrc":"B","name":"Trace 1","valuessrc":"A","labelssrc":"B"}],"jexcelSource":{"data":[["13","44"],["23","55"],["44","23"],["55","44"]],"columns":[{"type":"text","name":"0","source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"},{"type":"text","source":[],"options":[],"width":"88","align":"center","name":"1","editor":null,"allowEmpty":false,"title":""}]},"layout":{"xaxis":{"range":[13,55],"autorange":true,"type":"linear","title":{"text":"X Axis"}},"yaxis":{"range":[21.22222222222222,56.77777777777778],"autorange":true,"title":{"text":"Y Axis"},"type":"linear"},"autosize":true,"dragmode":"pan","title":{"text":""},"margin":{"t":50}}}');
    }
    createArea() {
      return JSON.parse('{"traces":[{"type":"scatter","mode":"lines","xsrc":"A","meta":{"columnNames":{"x":"A","y":"B","values":"A","labels":"Column: B"}},"ysrc":"B","name":"Trace 1","valuessrc":"A","labelssrc":"B","stackgroup":1}],"jexcelSource":{"data":[["13","44"],["23","55"],["44","23"],["55","44"]],"columns":[{"type":"text","name":"0","source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"},{"type":"text","source":[],"options":[],"width":"88","align":"center","name":"1","editor":null,"allowEmpty":false,"title":""}]},"layout":{"xaxis":{"range":[13,55],"autorange":true,"type":"linear","title":{"text":"X Axis"}},"yaxis":{"range":[0,57.89473684210526],"autorange":true,"title":{"text":"Y Axis"},"type":"linear"},"autosize":true,"dragmode":"pan","title":{"text":""},"margin":{"t":50}}}');
    }
    createBar() {
      return JSON.parse('{"traces":[{"orientation":"v","type":"bar","meta":{"columnNames":{"x":"Column: A","y":"Column: B"}},"xsrc":"A","ysrc":"B","name":"SF Zoo"},{"orientation":"v","type":"bar","xsrc":"A","meta":{"columnNames":{"x":"Column: A","y":"Column: C"}},"ysrc":"C","name":"LF Zoo"}],"jexcelSource":{"data":[["giraffes","44","14"],["orangutans","55","25"],["monkeys","23","55"]],"columns":[{"type":"text","name":"0","source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":"107","align":"center"},{"type":"text","source":[],"options":[],"width":"88","align":"center","name":"1","editor":null,"allowEmpty":false,"title":""},{"type":"text","name":2,"source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":"67","align":"center"}]},"layout":{"xaxis":{"range":[-0.5,2.5],"autorange":true,"title":{"text":""},"type":"category"},"yaxis":{"range":[0,57.89473684210526],"autorange":true,"title":{"text":""},"type":"linear"},"autosize":true,"dragmode":"pan","title":{"text":""},"margin":{"t":50},"barmode":"group","modebar":{"orientation":"h"}}}');
    }
    createContour() {
      return JSON.parse('{"traces":[{"type":"contour","mode":"lines","xsrc":"A","meta":{"columnNames":{"x":"A","y":"B","values":"A","labels":"Column: B","z":"Column: C - Column: D"}},"ysrc":"B","name":"Trace 1","valuessrc":"A","labelssrc":"B","stackgroup":1,"autocolorscale":true,"zsrc":["C","D"],"contours":{"start":6,"end":16,"size":1},"autocontour":true}],"jexcelSource":{"data":[["-9","0","10","5","2"],["-6","1","11","6","3"],["-5","4","13","8","5"],["-3","5","15","11","8"],["-1","7","17","15","11"]],"columns":[{"type":"text","name":"0","source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"},{"type":"text","source":[],"options":[],"width":"88","align":"center","name":"1","editor":null,"allowEmpty":false,"title":""},{"type":"text","name":2,"source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"},{"type":"text","name":3,"source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"},{"type":"text","name":4,"source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"}]},"layout":{"xaxis":{"range":[-9,-1],"autorange":true,"title":{"text":"X Axis"},"type":"linear"},"yaxis":{"range":[0,1],"autorange":true,"title":{"text":"Y Axis"},"type":"linear"},"autosize":true,"dragmode":"pan","title":{"text":""},"margin":{"t":50}}}');
    }
    createHeatmap() {
      return JSON.parse('{"traces":[{"type":"heatmap","mode":"lines","meta":{"columnNames":{"x":"Column: A","y":"Column: B","values":"A","labels":"Column: B","z":"Column: C - Column: D - Column: E"}},"name":"Trace 1","valuessrc":"A","labelssrc":"B","stackgroup":1,"autocolorscale":true,"zsrc":["C","D","E"],"contours":{"start":6,"end":16,"size":1},"autocontour":true,"xsrc":"A","ysrc":"B","transpose":false}],"jexcelSource":{"data":[["Monday","Morning","10","5","2"],["Tuesday","Afternoon","11","6","3"],["Wednesday","Evening","13","8","45"],["Thursday","","15","11","8"],["Friday","","17","15","11"]],"columns":[{"type":"text","name":"0","source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":"101","align":"center"},{"type":"text","source":[],"options":[],"width":"88","align":"center","name":"1","editor":null,"allowEmpty":false,"title":""},{"type":"text","name":2,"source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"},{"type":"text","name":3,"source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"},{"type":"text","name":4,"source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"}]},"layout":{"xaxis":{"range":[-0.5,4.5],"autorange":true,"title":{"text":""},"type":"category"},"yaxis":{"range":[-0.5,2.5],"autorange":true,"title":{"text":""},"type":"category"},"autosize":true,"dragmode":"pan","title":{"text":""},"margin":{"t":50}}}');
    }
    createPie() {
      return JSON.parse('{"traces":[{"type":"pie","mode":"lines","xsrc":"A","meta":{"columnNames":{"x":"A","y":"B","values":"A","labels":"Column: B"}},"ysrc":"B","name":"Trace 1","stackgroup":1,"valuessrc":"A","labelssrc":"B"}],"jexcelSource":{"data":[["12","Label 1"],["13","Label 2"],["33","Label 3"]],"columns":[{"type":"text","name":"0","source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"},{"type":"text","source":[],"options":[],"width":"88","align":"center","name":"1","editor":null,"allowEmpty":false,"title":""}]},"layout":{"xaxis":{"range":[-11.550207945814435,88.36806409154691],"autorange":false,"type":"linear","title":{"text":"<br>"}},"yaxis":{"range":[-31.037647204645168,70.15415912682595],"autorange":false,"title":{"text":""},"type":"linear"},"autosize":true,"dragmode":"pan","title":{"text":""},"margin":{"t":50}}}');
    }
    createSurface() {
      return JSON.parse('{"traces":[{"type":"surface","mode":"markers","xsrc":"A","meta":{"columnNames":{"x":"A","y":"B","values":"A","labels":"Column: B","z":"Column: C - Column: D - Column: E - Column: F"}},"ysrc":"B","name":"Trace 1","valuessrc":"A","labelssrc":"B","zsrc":["C","D","E","F"]}],"jexcelSource":{"data":[["1","2","5","3","5.4","4"],["2","3","4.5","6","4.2","2"],["3","4","2.5","8","4.6","7"],["6","6","1.4","4","4.3","8"]],"columns":[{"type":"text","name":"0","source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"},{"type":"text","source":[],"options":[],"width":"88","align":"center","name":"1","editor":null,"allowEmpty":false,"title":""},{"type":"text","name":2,"source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"},{"type":"text","name":3,"source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"},{"type":"text","name":4,"source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"},{"type":"text","name":5,"source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"}]},"layout":{"xaxis":{"range":[13,55],"autorange":true,"type":"linear","title":{"text":"X Axis"}},"yaxis":{"range":[21.22222222222222,56.77777777777778],"autorange":true,"title":{"text":"Y Axis"},"type":"linear"},"autosize":true,"dragmode":"zoom","title":{"text":""},"margin":{"t":10,"b":30,"l":10,"r":10},"mapbox":{"style":"open-street-map"},"scene":{"aspectratio":{"x":0.982001219840812,"y":0.7856009758726497,"z":1.296241610189872},"aspectmode":"auto","camera":{"up":{"x":0,"y":0,"z":1},"center":{"x":0,"y":0,"z":0},"eye":{"x":-1.5187360122088707,"y":1.1804761699977322,"z":1.9509588679571301},"projection":{"type":"perspective"}},"dragmode":"turntable","xaxis":{"autorange":true,"type":"linear","range":[null,8.000000000000002]}}}}');
    }
    createMesh3d() {
      return JSON.parse('{"traces":[{"type":"mesh3d","mode":"markers","xsrc":"A","meta":{"columnNames":{"x":"A","y":"B","values":"A","labels":"Column: B","z":"Column: C"}},"ysrc":"B","name":"Trace 1","valuessrc":"A","labelssrc":"B","zsrc":"C","showscale":true}],"jexcelSource":{"data":[["1","2","5"],["2","5","4"],["3","4","3"],["4","6","1"],["8","4","6"],["7","1","8"]],"columns":[{"type":"text","name":"0","source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"},{"type":"text","source":[],"options":[],"width":"88","align":"center","name":"1","editor":null,"allowEmpty":false,"title":""},{"type":"text","name":2,"source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"}]},"layout":{"xaxis":{"range":[13,55],"autorange":true,"type":"linear","title":{"text":"X Axis"}},"yaxis":{"range":[21.22222222222222,56.77777777777778],"autorange":true,"title":{"text":"Y Axis"},"type":"linear"},"autosize":true,"dragmode":"zoom","title":{"text":""},"margin":{"t":10,"b":30,"l":10,"r":10},"mapbox":{"style":"open-street-map"},"scene":{"aspectratio":{"x":1.1186889420813968,"y":0.7990635300581406,"z":1.1186889420813968},"aspectmode":"auto","camera":{"up":{"x":0,"y":0,"z":1},"center":{"x":0,"y":0,"z":0},"eye":{"x":2.00530203385597,"y":2.005302033855971,"z":2.00530203385597},"projection":{"type":"perspective"}},"dragmode":"turntable","xaxis":{"autorange":true,"type":"linear","range":[null,8.000000000000002]}}}}');
    }
    createScatter3d() {
      return JSON.parse('{"traces":[{"type":"scatter3d","mode":"markers","xsrc":"A","meta":{"columnNames":{"x":"A","y":"B","values":"A","labels":"Column: B","z":"Column: C"}},"ysrc":"B","name":"Trace 1","valuessrc":"A","labelssrc":"B","zsrc":"C","showscale":true}],"jexcelSource":{"data":[["1","2","5"],["2","5","4"],["3","4","3"],["4","6","1"],["8","4","6"],["7","1","8"]],"columns":[{"type":"text","name":"0","source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"},{"type":"text","source":[],"options":[],"width":"88","align":"center","name":"1","editor":null,"allowEmpty":false,"title":""},{"type":"text","name":2,"source":[],"options":[],"editor":null,"allowEmpty":false,"title":"","width":50,"align":"center"}]},"layout":{"xaxis":{"range":[13,55],"autorange":true,"type":"linear","title":{"text":"X Axis"}},"yaxis":{"range":[21.22222222222222,56.77777777777778],"autorange":true,"title":{"text":"Y Axis"},"type":"linear"},"autosize":true,"dragmode":"zoom","title":{"text":""},"margin":{"t":10,"b":30,"l":10,"r":10},"mapbox":{"style":"open-street-map"},"scene":{"aspectratio":{"x":1.1186889420813968,"y":0.7990635300581406,"z":1.1186889420813968},"aspectmode":"auto","camera":{"up":{"x":0,"y":0,"z":1},"center":{"x":0,"y":0,"z":0},"eye":{"x":2.00530203385597,"y":2.005302033855971,"z":2.00530203385597},"projection":{"type":"perspective"}},"dragmode":"turntable","xaxis":{"autorange":true,"type":"linear","range":[null,8.000000000000002]}}}}');
    }
  }
  const l = new a();
};
