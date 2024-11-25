"use client";
import { count } from "console";
import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 6000,
    fill: "white",
  },
  {
    name: "Number 02",
    count: 3345,
    fill: "#287F71",
  },
  {
    name: "Number 01",
    count: 4321,
    fill: "#E27734",
  },
];

const RadialChart = () => {
  return (
    <div className="bg-white rounded-2xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Important Stuff</h1>
        <img src="/more.svg" />
      </div>
      {/* MIDDLE */}
      <div className="w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 rounded-full bg-mainOrange" />
          <h1 className="font-bold">4.321</h1>
          <h2 className="text-xs text-zinc-500">Number 01</h2>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 rounded-full bg-mainGreen" />
          <h1 className="font-bold">3.345</h1>
          <h2 className="text-xs text-zinc-500">Number 02</h2>
        </div>
      </div>
    </div>
  );
};

export default RadialChart;
