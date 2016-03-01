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

	var outerWidth = 1000;
	var outerHeight = 450;
	var innerWidth = outerWidth - 20;
	var innerHeight = outerHeight - 20;

	var rMin = 20;
	var rMax = 50;
	var xScale = d3.scale.log().range([0,innerWidth]);
	var yScale = d3.scale.log().range([innerHeight,0]);
	var rScale = d3.scale.sqrt().range([rMin,rMax]);

	for( i = 0; i < index.length; i++){
		xScale.domain(d3.extent(index,function(index){return index.balance;}));
		yScale.domain(d3.extent(index,function(index){return index.balance;}));
		rScale.domain(d3.extent(index,function(index){return index.balance;}));

		var svg = d3.select("#graph")
			.attr("width", outerWidth)
			.attr("height", outerHeight);
			color = d3.scale.category10();

		var array = [];
		console.log(array);
		for(i = 0; i < index.length; i++){
			array.push(index[i].balance);
			console.log(array);	
			
			var circle = svg.selectAll("circle").data(array);
			circle.enter().append("circle")
				.attr("r", function(index){ return rScale(array[i]); })
				.attr("cx", function(index){ return xScale(array[i]); })
				.attr("cy", function(index){ return yScale(array[i]); })
				.style("fill", color)
				.style("stroke","#D9722D")
				.on("mouseover", function(){
					d3.select(this)
						.transition()
						.ease("elastic")
						.duration("5250")
						.attr("cx", 750 )
						.attr("cy", 225);
				});
	
		circle
			.transition()
			.ease("elastic")
			.duration("5250")
			.attr("cx", 500)
			.attr("cy", 225);
			
		circle.exit().remove();
		}
	}
}

// d3.json("customers.json", draw);


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

