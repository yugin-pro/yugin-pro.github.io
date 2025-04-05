import * as Plot from "../../_npm/@observablehq/plot@0.6.17/d761ef9b.js";

export function lineChart(data, {width, height = 94, x = (d) => new Date(d["date"]), y, percent} = {}) {
  return Plot.plot({
    width,
    height,
    axis: null,
    margin: 0,
    insetTop: 10,
    insetLeft: -17,
    insetRight: -17,
    y: {zero: true, percent, domain: percent ? [0, 100] : undefined},
    marks: [Plot.areaY(data, {x, y, fill: "blue",fillOpacity: 0.2}), Plot.lineY(data, {x, y, tip: true})]
  });
}
