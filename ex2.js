const svgWidth = 600;
const svgHeight = 500;

var svg = d3
  .select("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .attr("class", "svg-container");

var line = svg
  .append("line")
  .attr("x1", 100)
  .attr("x2", 500)
  .attr("y1", 50)
  .attr("y2", 100)
  .attr("stroke", "red")
  .attr("stroke-width", "7");

var rect = svg
  .append("rect")
  .attr("x", 300)
  .attr("y", 200)
  .attr("width", 200)
  .attr("height", 300)
  .attr("fill", "blue");

var circle = svg
  .append("circle")
  .attr("cx", 230)
  .attr("cy", 230)
  .attr("r", 50)
  .attr("fill", "green");
