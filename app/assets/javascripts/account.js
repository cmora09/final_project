$.ajax({
	type: "GET",
	contentType: "application/json, charset=utf-8",
	url: 'customers',
	dataType: 'json',
	success: function (index) {
        draw(index);
    },
    error: function (result) {
        error();
    }
});

function draw(index){
	var color = d3.scale.category20b();
	var outerWidth = 500;
	var outerHeight = 500;

	// margin: {top: -30, right: -30, bottom: -30, left: -30};
	var svg = d3.select("#graph")
		.attr("width", outerWidth)
		.attr("height". outerHeight);
	var circle = svg.selectAll("circle").data(index);

	circle.enter().append("circle")
		.attr("r", index/200)
		.attr("cx", 100)
		.attr("cy", 100)
		.style("fill", "#DC6D2D");
	circle.append("text")
		.attr("x",0)
		.attr("y",0)
		.attr("dy","1em")
		.style("fill", "white")
		.text("testing123");
	circle.exit().remove();

}




// function draw(index) {
//     var color = d3.scale.category20b();
//     var width = 420,
//         barHeight = 20;

//     var x = d3.scale.linear()
//         .range([0, width])
//         .domain([0, d3.max(index)]);

//     var chart = d3.select("#graph")
//         .attr("width", width)
//         .attr("height", barHeight * index.length);

//     var bar = chart.selectAll("g")
//         .data(index)
//         .enter().append("g")
//         .attr("transform", function (d, i) {
//                   return "translate(0," + i * barHeight + ")";
//               });

//     bar.append("rect")
//         .attr("width", x)
//         .attr("height", barHeight - 1)
//         .style("fill", function (d) {
//                    return color(d)
//                })

//     bar.append("text")
//         .attr("x", function (d) {
//                   return x(d) - 10;
//               })
//         .attr("y", barHeight / 2)
//         .attr("dy", ".35em")
//         .style("fill", "white")
//         .text(function (d) {
//                   return d;
//               });
// }

// function error() {
//     console.log("error")
// }

