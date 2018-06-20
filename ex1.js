let dataset = [
  40943,
  45622,
  51930,
  56586,
  75295,
  82943,
  84413,
  83203,
  81903,
  82298,
  57653,
  58494,
  54113,
  50144,
  47678,
  48030,
  48523,
  45653,
  46132,
  46203,
  48813,
  50416,
  50747,
  52464,
  62620,
  73336,
  82608
];
// dataset = [1, 2, 3, 4, 5];

const svgWidth = 1000;
const svgHeight = 600;
const barPadding = 5;
// const barWidth = svgWidth / dataset.length;

const svg = d3
  .select("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// d3.select('body')
//     .selectAll('p')
//     .data(dataset)
//     .enter()
//     .append('p').style('color','blue')
//     .text( d => {return d})

const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, svgWidth]);

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([svgHeight, 0]);

const x_axis = d3.axisBottom().scale(xScale);
const y_axis = d3.axisLeft().scale(yScale);

svg
  .append("g")
  .attr("transform", "translate(50,10)")
  .call(y_axis);

const xAxisTranslate = svgHeight - 20;

svg
  .append("g")
  .attr("transform", "translate(50," + xAxisTranslate + ")")
  .call(x_axis);

// const barChart = svg
//   .selectAll("rect")
//   .data(dataset)
//   .enter()
//   .append("rect")
//   .attr("y", d => {
//     return svgHeight - yScale(d);
//   })
//   .attr("height", d => {
//     return yScale(d);
//   })
//   .attr("width", barWidth - barPadding)
//   .attr("transform", (d, i) => {
//     const trans = [barWidth * i, 0];
//     return "translate(" + trans + ")";
//   });
//
// const text = svg
//   .selectAll("text")
//   .data(dataset)
//   .enter()
//   .append("text")
//   .text(d => {
//     return d;
//   })
//   .attr("y", (d, i) => {
//     return svgHeight - d - 2;
//   })
//   .attr("x", (d, i) => {
//     return barWidth * i + 10;
//   })
//   .attr("fill", "blue");
