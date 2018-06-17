// const data = [1,2,3,4,5];


const dataset =[80,100,56,120,180,30,40,120,160];

const svgWidth = 500;
const svgHeight = 300;
const barPadding = 5;
const barWidth = svgWidth / dataset.length;

const svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

// d3.select('body')
//     .selectAll('p')
//     .data(dataset)
//     .enter()
//     .append('p').style('color','blue')
//     .text( d => {return d})

const barChart = svg
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append("rect")
    .attr('y', d => {
        return svgHeight-d;
    })
    .attr('height', d => {
        return d;
    })
    .attr('width', barWidth-barPadding)
    .attr("transform", (d,i) => {
        const trans = [barWidth*i, 0];
        return 'translate(' + trans+ ')';
    });

const text = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append("text")
    .text(d => {
        return d
    })
    .attr('y', (d,i) => {
        return svgHeight -d-2
    })
    .attr('x', (d,i) => {
        return barWidth * i + 10
    })
    .attr('fill','blue')