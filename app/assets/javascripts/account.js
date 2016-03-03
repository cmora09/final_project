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
	var margin = {top: 30, right: 50, bottom: 30, left: 50}
	var outerWidth = 1000;
	var outerHeight = 350;
	var innerWidth = outerWidth - margin.left - margin.right;
	var innerHeight = outerHeight - margin.top - margin.bottom;
	

	var rMin = 0;
	var rMax = 50;
	var xScale = d3.scale.log().range([0, innerWidth]);
	var yScale = d3.scale.log().range([0, innerHeight]);
	var rScale = d3.scale.sqrt().range([rMin,rMax]);

	var xAxis = d3.svg.axis().scale(xScale)
   	.orient("bottom").ticks(1);

   var yAxis = d3.svg.axis().scale(yScale)
   	.orient("left").ticks(1);

function draw(index){

	xScale.domain(d3.extent(index,function(index){return index.balance;}));
	yScale.domain(d3.extent(index,function(index){return index.balance;}));
	rScale.domain([0,d3.max(index,function(index){return index.balance;})]);

	var svg = d3.select("#accounts")
		.attr("width", outerWidth)
		.attr("height", outerHeight)
		    .append("g")
        		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
		color = d3.scale.category10();
	var accountArray = [];
	var array = [];
	for(i = 0; i < index.length; i++){
		array.push(index[i].balance);
		console.log(index[i].balance);
		accountArray.push(index[i].account_type);
	}

	

	console.log(accountArray);
	console.log(array);
	var circle = svg.selectAll("circle").data(array);
	circle.enter().append("circle")
		.attr("r",  function(array){ return rScale(array); })
		.attr("cx", function(array){ return xScale(array)/4 + 425; })
		.attr("cy", function(array){ return yScale(array); })
		.style("fill", color)
		.style("stroke","#271339")
		.style("stroke-width","2px")
		.on("mouseover", function(){
					d3.select(this)
						.transition()
						.ease("elastic")
						.duration("2000")
						.attr("cy", 100);
				});
	
		circle
			.transition()
			.ease("elastic")
			.duration("4000")
			// .attr("cx", 500)
			.attr("cy", 175);///''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

	circle.exit().remove();
}
function error() {
};

// var parseDate = d3.time.format("%d-%b-%y").parse;
// var margin = {top:50, right:50, bottom: 30, left: 50}

// var x = d3.time.scale().range([0,outerWidth-200]);
// var y = d3.scale.linear().range([outerHeight, 0]);

// var xAxis = d3.svg.axis().scale(x)
// 	.orient("bottom").ticks(1);
// var yAxis = d3.svg.axis().scale(y)
// 	.orient("left").ticks(1);

// var testLine = d3.svg.line()
// 	.x(function(d){ return x(x.date);})
// 	.y(function(d){ return y(y.balance);});

// var lineSvg = d3.select("#transactions")
// 	.attr("width", outerWidth)
// 	.attr("height", outerHeight)
// 	.append("g")
// 		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// x.domain(d3.extent(data,function(d) { return d.date; }));
// y.domain([0,d3.max(data,function(d) { return d.balance; })]);

// lineSvg.append("path")
// 	.attr("class","line")
// 	.attr("d",testLine(data));

// lineSvg.selectAll("dawts")
// 	.data(data)
// 	.enter().append("circles")
// 		.attr("r", 4)
// 		.attr("cx", function(d){ return d.date;})
// 		.attr("cy", function(d){ return d.balance; });

// lineSvg.append("g")
// 	.attr("class", "x-axis")
// 	.attr("transform", "translate(0," + outerHeight + ")")
// 	.call(xAxis);
// lineSvg.append("g")
// 	.attr("class", "y-axis")
// 	.attr("transform", "translate(0," + outerHeight + ")")
// 	.call(yAxis);

// d3.csv("data.csv", function(data){
// 	data.forEach(function(d){
// 		d.date = parseDate(d.date);
// 		d.balance = +d.balance; 
// 	});
// });

