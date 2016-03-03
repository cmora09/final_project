var margin = {top: 30, right: 20, bottom: 30, left: 50},
    width = 900 - margin.left - margin.right,
    height = 370 - margin.top - margin.bottom;

// Parse the date / time
var parseDate = d3.time.format("%d-%b-%y").parse;

// Set the ranges
var x = d3.time.scale().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

// Define the axes
var xAxis = d3.svg.axis().scale(x)
    .orient("bottom").ticks(7);

var yAxis = d3.svg.axis().scale(y)
    .orient("left").ticks(10);

// Define the line
var zeeLine = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.balance); });

var color = d3.scale.category10();
// Adds the svg canvas
var svg = d3.select("#balances")
    	.attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("data.csv", function(error, data) {
	if (error) throw error;

	color.domain(d3.keys(data[0]).filter(function(key){ return key !== "date"; }));
    data.forEach(function(d) {
        d.date = parseDate(d.date);
});
var accounts = color.domain().map(function(accountName){
	return {
		accountName: accountName,
		values: data.map(function(d){
			return {date: d.date, balance: +d[accountName]};
		})
	};
});

// Scale the range of the data
x.domain(d3.extent(data, function(d) { return d.date; }));
y.domain([
    d3.min(accounts, function(a) { return d3.min(a.values, function(v) {return v.balance;}); }),
    d3.max(accounts, function(a) { return d3.max(a.values, function(v) {return v.balance;}); })
]);
    // Add the valueline path.
    account = svg.selectAll("accounts")
    account.data(accounts)
    .enter().append("g")
    .attr("class","account")
    .append("path")
        .attr("class", "line")
	    .attr("d", function(d) { return zeeLine(d.values); })
    	.style("stroke", function(d) { return color(d.accountName); });

 	savingsLegend = svg.append("circle")
 		.attr("r", 6.5)
 		.attr("cx", 725)
 		.attr("cy", 50)
 		.style("fill","#1F77B4");
 	checkingLegend = svg.append("circle")
 		.attr("r", 6.5)
 		.attr("cx", 725)
 		.attr("cy", 70)
 		.style("fill","#FF7F0E");
 	 loanLegend = svg.append("circle")
 		.attr("r", 6.5)
 		.attr("cx", 725)
 		.attr("cy", 90)
 		.style("fill","#2CA02C")

    // Add the scatterplot
    // account.selectAll("circle")
    //    	.append("circle")
    //     .attr("r", 3.5)
    //     .attr("cx", function(d) { return x(d.date); })
    //     .attr("cy", function(d) { return y(d.balance); });

    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

   	account.append("text")
      .datum(function(d) { return {name: d.accountName, value: d.values[d.values.length - 1]}; })
	  .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.balance) + ")"; })
	  .attr("x", 3)
	  .attr("dy", ".50em")
	  .text(function(d) { return d.name; });

});

