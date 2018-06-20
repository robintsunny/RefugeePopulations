(function() {
  var width = 500,
    height = 500;

  var svg = d3
    .selectAll("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform", "translate(0,0)");

  var simulation = d3.forceSimulation();
  data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function ready(err, data) {
    var circles = svg
      .selectAll("nums")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "nums")
      .attr("r", 10)
      .attr("fill", "black")
      .attr("cx", 100)
      .attr("cy", 300);
  }
})();
