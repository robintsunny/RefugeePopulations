const width = 500,
  height = 500;

const svg = d3
  .select("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "svg-container")
  .append("g")
  .attr("transform", "translate(0,0)");

// const circle1 = svg
//   .append("circle")
//   .attr("cx", 200)
//   .attr("cy", 200)
//   .attr("r", 40)
//   .attr("fill", "steelblue")
//   .attr("fill-opacity", 0.5)
//   .attr("stroke", "red");
//
// const circle2 = svg
//   .append("circle")
//   .attr("cx", 400)
//   .attr("cy", 200)
//   .attr("r", 40)
//   .attr("fill", "purple")
//   .attr("fill-opacity", 0.5)
//   .attr("stroke", "green");

// circle1
//   .transition()
//   .attr("cx", () => {
//     return Math.random() * width;
//   })
//   .attr("cy", () => {
//     return Math.random() * height;
//   });

// data = [10, 50, 90, 130, 170, 190];

// var map = svg.append("g").attr("id", "map");

d3.json("./refugee_data.json", function(data) {
  // console.log(data);
  // SCALE

  var scale = d3
    .scaleLinear()
    // .linear()
    .domain([1, 5000])
    .range([20, 480]);

  var colorScale = d3
    .scaleLinear()
    // .linear()
    .domain([1, 50])
    .range(["green", "red"]);

  var circle = svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => {
      return d.asylum[1990] / 1500;
    })
    .attr("cy", d => {
      return d.asylum[1990] / 1500;
    })
    .attr("r", d => {
      return d.asylum[1990] / 10000;
    })
    .attr("fill", d => {
      return colorScale(d);
    })
    .attr("stroke", "red")
    .attr("stroke-width", 0.5)
    .attr("fill-opacity", 0.3)
    .on("mouseover", function(d) {
      d3.select(this)
        .attr("fill-opacity", 1)
        // .append("text")
        // .attr("class", "code")
        // .text(d.code);
        .attr("font-color", "blue");
    })
    .on("mouseout", function(d) {
      d3.select(this).attr("fill-opacity", 0.3);
      // d3.selectAll("text.country-code").remove();
    });

  var simulation = d3
    .forceSimulation()
    .force("x", d3.forceX(width / 2).strength(0.1))
    .force("y", d3.forceY(height / 2).strength(0.1))
    .force(
      "collide",
      d3.forceCollide(d => {
        console.log(d.asylum[1990] / 1500 + 10);
        return scale(d.asylum[1990] / 1500 + 10);
      })
    );

  simulation.nodes(data).on("tick", ticked);

  function ticked() {
    circle
      .attr("cx", d => {
        return d.x;
      })
      .attr("cy", d => {
        return d.y;
      });
  }

  const text = svg
    .selectAll(null)
    .data(data)
    .enter()
    .append("g");

  text
    .append("text")
    .attr("text-anchor", "middle")
    .each(function(d) {
      d3.select(this)
        .selectAll(null)
        .data(d)
        .enter()
        .append("tspan")
        .attr("text-anchor", "middle")
        .attr("x", d => {
          return d.asylum[1990] / 1500;
        })
        .attr("y", d => {
          return d.asylum[1990] / 1500;
        })
        .text(String);
    });

  const countries = d3
    .nest()
    .key(d => {
      return d.country;
    })
    .entries(data);
  // console.log(countries);

  //
  // circle
  //   .transition()
  //   .attr("cx", d => {
  //     return scale(d);
  //   })
  //   .attr("cy", d => {
  //     return Math.random() * height;
  //   });
});
