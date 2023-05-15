///---------------------------------------Gauge Chart--------------------------------------------------
var data = [
  {
    type: "indicator",
    mode: "gauge+number+delta",
    value: 2,
    title: { text: "Belly Button Washing Fequency", font: { size: 24 } },
    delta: { reference: 8, increasing: { color: "RebeccaPurple" } },
    gauge: {
      axis: { range: [null, 10], tickwidth: 1, tickcolor: "darkblue" },
      bar: { color: "black" },
      bgcolor: "white",
      borderwidth: 2,
      bordercolor: "gray",
      steps: [
        { range: [0, 2], color: "red" },
        { range: [2, 4], color: "orange" },
        { range: [4, 6], color: "yellow" },
        { range: [6, 8], color: "royalblue" },
        { range: [8, 10], color: "green" }
      ],
      threshold: {
        line: { color: "red", width: 4 },
        thickness: 0.75,
        value: 9
      }
    }
  }
];

var layout = {
  width: 500,
  height: 400,
  margin: { t: 20, r: 50, l: 70, b: 90 },
  paper_bgcolor: "lavender",
  font: { color: "darkblue", family: "Arial" }
};

Plotly.newPlot('gauge', data, layout);