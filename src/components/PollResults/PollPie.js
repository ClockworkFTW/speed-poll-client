import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import styled from "styled-components";

const COLORS = [
  "#ffa502",
  "#ff6348",
  "#ff4757",
  "#2ed573",
  "#1e90ff",
  "#3742fa",
];

const PollChart = ({ options, active, setActive }) => {
  const data = options.map((option) => ({
    content: option.content,
    votes: option.votes.length,
  }));

  return (
    <ResponsiveContainer aspect={1} width="100%">
      <PieChart>
        <Pie
          nameKey="content"
          dataKey="votes"
          data={data}
          onMouseEnter={(e) => setActive(e.name)}
          onMouseLeave={() => setActive(null)}
          strokeWidth={3}
          isAnimationActive={true}
          animationDuration={800}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                entry.content === active
                  ? "#2f3542"
                  : COLORS[index % COLORS.length]
              }
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PollChart;
