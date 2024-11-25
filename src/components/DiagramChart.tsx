"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tue",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thu",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sat",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sun",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const DiagramChart = () => {
  return (
    <div className="bg-white rounded-2xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Important Wavy Stuff</h1>
        <img src="/more.svg" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 40,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#ddd" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#ddd" }} tickLine={false} />
          <Tooltip />
          <Legend align="center" wrapperStyle={{ paddingTop: "20px" }} />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#287F71"
            activeDot={{ r: 8 }}
            strokeWidth={4}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#eb862a"
            activeDot={{ r: 8 }}
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DiagramChart;
