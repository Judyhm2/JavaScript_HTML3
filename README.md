# JavaScript HTML5,API, JSON
## Overview
Demographic information was used to visualize the bacterial data for each volunteer.I then used this data to create the following deliverables

- Deliverable 1: Create a Horizontal Bar Chart
- Deliverable 2: Create a Bubble Chart
- Deliverable 3: Create a Gauge Chart
- Deliverable 4: Customize the Dashboard JavaScript [chart.js](https://github.com/Judyhm2/JavaScript_HTML3/blob/main/challenge/chart.js) holds the function that produces the charts in the following results.
## Results
Focuses, the following deliverables:

### Deliverable 1: Create a Horizontal Bar Chart
From the Javascript file [chart.js](https://github.com/Judyhm2/JavaScript_HTML3/blob/main/challenge/chart.js).I created the horizontal bar chart by storing the vaules of X and y from the vaulable OTU labels. Varibale barData holds the sample array vaules from names values. Varibles y-value, xValue and textlabel holds the vaule for otu_ids, otu_labels, and sample_values that were used to plot the bar chart. I sorted the values in descending order. To create the layout for the bar chart that includes a title, I used var barLayout = { title: "Top 10 Bacteria Cultures Found", x: xValue, y: yValue, margin: { l: 100, r: 100, t: 100, b: 100}. To plot the data with the layout, I used
Plotly.newPlot("bar", barData, barLayout); See images below to view bar and gauge charts.

![](https://github.com/Judyhm2/JavaScript_HTML3/blob/main/Deliverable1.png)

### Deliverable 2: Create a Bubble Chart
View the JavaScript file [chart.js](https://github.com/Judyhm2/JavaScript_HTML3/blob/main/challenge/chart.js). I created the bubble chart, Variable bubbleTrace which was used to plot the data with the layout, and then stored in var bubble = document.getElementById("bubble"). To create a variable that holds the samples array, I used
var bubbleArray = []. To create a variable that filters the samples for the object with the desired sample number, I used var resultBubbleArray = metadata.filter(sampleObj => sampleObj.id == sample) and finally then it held the first sample in the array. var resultBubble = resultBubbleArray[0], To create the trace for the bubble chart, I used the variable var bubbleTrace = { x:[otu_ids], y: [sample_values], text: otu_labels, mode: 'markers', color: sample_values, size: sample_values,; Afterwards the layout for the bubble chart was created with the title: 'Bacteria Cultures Per Sample', showlegend: false, height: 600 and width: 1000; See Images below

 ![](https://github.com/Judyhm2/JavaScript_HTML3/blob/main/Deliverable2.png)

### Deliverable 3: Create a Gauge Chart
From the JavaScript file [chart.js](https://github.com/Judyhm2/JavaScript_HTML3/blob/main/challenge/chart.js) , I created the horizonial gauge chart. For the layout, I used the variable data, Gaugedata = {type: "indicator", mode: "gauge+number+delta",value: result.wfreq, title: "Belly Button Washing Fequency". I then passed and assigned the value to the variable. See image below

 ![](https://github.com/Judyhm2/JavaScript_HTML3/blob/main/Deliverable3.png)

### Deliverable 4: Customize the Dashboard
 

Related Files:

The [charts.js](https://github.com/Judyhm2/JavaScript_HTML3/blob/main/challenge/charts.js) file
The data.js file
The index.html file.
The samples.json file.
### Summary
In summary, all three chart show the results for the biodiversity of the individuals base on their gender, location age and bbtype. These are filters which contain the demographic selection on the test subject id number. The OTU ID, female had the highest volume of ETHNICITY: Caucasian, GENDER: F, AGE: 24, LOCATION: Beaufort/NC, BBTYPE: I, WFREQ: 2
