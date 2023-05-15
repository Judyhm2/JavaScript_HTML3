// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
   // Plotly.newPlot(); 
    Plotly.newPlot('bubble', data, layout);
    // 1. Create the trace for the bubble chart.
    var bubbleTrace = {
      x: [1, 2, 3, 4],
      y: [10, 11, 12, 13],
      text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
      mode: 'markers',
      marker: {
        size: [400, 600, 800, 1000],
        sizemode: 'area'
      }
    };

    var bubbleData = [bubbleTrace
   
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: 'Bacteria Cultures Per Sample',
      showlegend: false,
      height: 600,
      width: 1000
    };

    // 3. Use Plotly to plot the data with the layout.
    //Plotly.newPlot();
    Plotly.newPlot('bubble', data, layout);
  });
}
///---------------------------------------------------------------------------
// To scale the bubble size, use the attribute sizeref. We recommend using the following formula to calculate a sizeref value:
// sizeref = 2.0 * Math.max(...size) / (desired_maximum_marker_size**2)
// Note that setting 'sizeref' to a value greater than 1, decreases the rendered marker sizes, while setting 'sizeref' to less than 1, increases the rendered marker sizes. See https://plotly.com/python/reference/scatter/#scatter-marker-sizeref for more information. Additionally, we recommend setting the sizemode attribute: https://plotly.com/python/reference/scatter/#scatter-marker-sizemode to area.
