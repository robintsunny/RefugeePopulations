const api =
  "https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01";

document.addEventListener("DOMContentLoaded", event => {
  fetch(api)
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      const parsedData = parseData(data);
      drawChart(parsedData);
    })
    .catch(err => {
      console.log(err);
    });
});

const parseData = data => {
  var arr = [];
  for (var i in data.bpi) {
    arr.push({
      date: new Date(i),
      value: +data.bpi[i]
    });
  }
  return arr;
};

const drawChart = data => {
  var svgWidth = 600,
    svgHeight = 400;
  var margin = { top: 20, right: 20, bottom: 30, left: 50 };
  var width = svgWidth - margin.left - margin.right;
  var height = svgHeight - margin.top - margin.bottom;
};
