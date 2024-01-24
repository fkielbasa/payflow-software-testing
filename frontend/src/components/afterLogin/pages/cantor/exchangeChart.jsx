import * as d3 from "d3";
import { useCallback } from "react";
import styles from './exchangeChart.module.css';

const ExchangeChart = ({ data, currency }) => {
    const chartRef = useCallback(
        (node) => {
            if (node && data.length > 0) {
                const svg = d3.select(node);

                const width = node.clientWidth; // Dynamically get the width of the container
                const height = node.clientHeight; // Dynamically get the height of the container


                const margin = { top: 20, right: 30, bottom: 30, left: 60 };

                const parseDate = d3.timeParse("%Y-%m-%d");

                const filteredData = data.map((d) => ({
                    date: parseDate(d.date),
                    rate: currency === "EUR" ? d.pln / d.eur : d.pln / d.usd,
                }));

                const maxRate = d3.max(filteredData, (d) => d.rate);
                const minRate = d3.min(filteredData, (d) => d.rate);

                const precision = Math.pow(10, Math.floor(Math.log10(minRate)));

                const xScale = d3
                    .scaleTime()
                    .domain(d3.extent(filteredData, (d) => d.date))
                    .range([margin.left, width - margin.right])
                    .nice();

                const yScale = d3
                    .scaleLinear()
                    .domain([2, 6])
                    .nice(5)
                    .range([height - margin.bottom, margin.top]);

                const line = d3
                    .line()
                    .x((d) => xScale(d.date)) // Użyj przekształconych dat
                    .y((d) => yScale(d.rate));

                svg.selectAll("*").remove();

                svg
                    .append("g")
                    .attr("transform", `translate(0, ${height - margin.bottom})`)
                    .transition()
                    .duration(1000)
                    .call(d3.axisBottom(xScale).tickFormat(d3.timeFormat("%m.%d")));

                svg
                    .append("g")
                    .attr("transform", `translate(${margin.left}, 0)`)
                    .transition()
                    .duration(1000)
                    .call(d3.axisLeft(yScale).tickFormat(d3.format(".2f")));

                const path = svg
                    .append("path")
                    .datum(filteredData)
                    .attr("fill", "none")
                    .attr("stroke", "var(--darkBlue)")
                    .attr("stroke-width", 2)
                    .attr("d", line);

                const totalLength = path.node().getTotalLength();

                path
                    .attr("stroke-dasharray", `${totalLength} ${totalLength}`)
                    .attr("stroke-dashoffset", totalLength)
                    .transition()
                    .duration(1000)
                    .ease(d3.easeLinear)
                    .attr("stroke-dashoffset", 0);
            }
        },
        [data, currency]
    );

    return (
        <div className={styles.chartContainer}>
            <svg ref={chartRef} className={styles.chart} />
        </div>
    );
};

export default ExchangeChart;
