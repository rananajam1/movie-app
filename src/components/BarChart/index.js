import * as d3 from "d3";
import React from "react";

function BarChart({ width, height, data }) {
  const ref = React.useRef();

  React.useEffect(() => {
    d3.select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .style("border", "1px solid white");
    //eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    draw();
    //eslint-disable-next-line
  }, [data]);

  const draw = () => {
    const svg = d3.select(ref.current);
    var selection = svg.selectAll("rect").data(data);
    var yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, height - 100]);

    selection
      .transition()
      .duration(300)
      .attr("height", (d) => yScale(d))
      .attr("y", (d) => height - yScale(d));

    selection
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 45)
      .attr("y", (d) => height)
      .attr("width", 40)
      .attr("height", 0)
      .attr("fill", "orange")
      .transition()
      .duration(300)
      .attr("height", (d) => yScale(d))
      .attr("y", (d) => height - yScale(d));

    selection
      .exit()
      .transition()
      .duration(300)
      .attr("y", (d) => height)
      .attr("height", 0)
      .remove();

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .transition(400)
      .attr("x", (d, i) => i * 45)
      .attr("y", (d, i) => height - 10 * d - 3);
  };

  return (
    <div className="chart">
      <svg ref={ref}></svg>
    </div>
  );
}

export default BarChart;
