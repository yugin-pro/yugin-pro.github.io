import * as d3 from "../../_npm/d3@7.9.0/e780feca.js";

export default function CompletionPercentageChart(width = 200, data) {

  // Dimensions and Margins
  //  width = width?width:500;
  const height = width;
  const radius = Math.min(width, height) / 2.5 ; // Adjust for margins
  
  // Create SVG container using d3.create
  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;")
      
  
  
  // Create pie layout (for a single slice)
  const pie = d3.pie()
    .value(d => d.value)
    .sort(null); // Disable sorting
  
  // Create arc generator
  const arc = d3.arc()
    .innerRadius(radius * 0.9) // Adjust thickness
    .outerRadius(radius * 1.1)
    .startAngle(0) // Start at 0 degrees
    .endAngle(d => d.value * Math.PI * 2 / 100); // End at the percentage    
  
  
  svg.append("g")
  .attr("transform", `translate(${width / 2},${height / 2})`)
   .append("path")
    .datum({ value: data.value }) // Pass the value to the datum
    .attr("d", arc)
    .attr("fill", data.color);
  
  // Draw the circle
  svg.append("g")
  .attr("transform", `translate(${width / 2},${height / 2})`)
  .append("circle")
    .attr("r", radius)
    .attr("fill", "none")
    .attr("stroke", "black")
  
  svg.append("text")
    .attr("transform", `translate(${width / 2},${height / 2.2})`)
    .attr("dy", "0.35em")
    .attr("text-anchor", "middle")
    .text(`${data.value}%`)
      .attr("font-family", "Arial")
    .attr("font-weight", "bold")
    .style("font-size", radius * 0.04 + "rem")
    .attr("fill", data.color)
    .attr("stroke", "black")
    .attr("stroke-width", "0.5px");  
  
  svg.append("text")
    .attr("transform", `translate(${width / 2},${height / 1.8 +  0.2* radius})`)
    .attr("text-anchor", "middle")
    .text(data.label)
    .style("font-size", radius * 0.2 + "px")
  
  
    return svg.node()
}