"use client";
import React from "react";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    this: 4000,
    last: 2400,
  },
  {
    name: "Feb",
    this: 3000,
    last: 1398,
  },
  {
    name: "Mar",
    this: 2000,
    last: 9800,
  },
  {
    name: "Apr",
    this: 2780,
    last: 3908,
  },
  {
    name: "May",
    this: 1890,
    last: 4800,
  },
  {
    name: "Aug",
    this: 2390,
    last: 3800,
  },
  {
    name: "Sep",
    this: 3490,
    last: 4300,
  },
];

const RevChart = () => {
  return (
    <div className="bg-white rounded-2xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">More Important Stuff</h1>
        <img src="/more.svg" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#ddd" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#ddd" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="this"
            fill="#2F4C2F"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="last"
            fill="#E27734"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevChart;
