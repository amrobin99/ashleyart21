const data = [
  {name: "Dorm", amount: 28.5},
  {name: "Houston Hall", amount: 9},
  {name: "Annenberg", amount: 5},
  {name: "Off Campus", amount: 4.5},
  {name: "PAC Shop", amount: 1},
];

const width = 800;
const height = 800;
const margin = {top: 20, bottom: 50, left: 50, right: 50};

const svg = d3.select(".d3-container")
.append("svg")
.attr("height", height - margin.top - margin.bottom)
.attr("width", width - margin.left - margin.right)
.attr("viewBox", [20,20, width, height]);

const x = d3.scaleBand()
.domain(d3.range(data.length))
.range([margin.left, width - margin.right])
.padding(0.1);

const y = d3.scaleLinear()
.domain([0,30])
.range([height - margin.bottom, margin.top]);

svg
  .append("g")
  .attr("fill", "#0582CA")
  .selectAll("rect")
  .data(data.sort((a,b) => d3.descending(a.amount, b.amount)))
  .join("rect")

  .attr("x", (d, i) => x(i))
  .attr("y", (d) => y(d.amount))
  .attr("height", d => y(0) - y(d.amount))
  .attr("width", x.bandwidth())

  svg.node();

function xAxis(g) {
  g.attr("transform", `translate(0, ${height - margin.bottom})`)
  g.call(d3.axisBottom(x).tickFormat(i => data[i].name))
}

// function hover(g){
//    g.attr("transform", `translate(${margin.left}, 0)`)
//    g.call(d3.center(x).tickFormat(i => data[i].amount))
// }

svg.append("g").call(xAxis);

  svg.node();




