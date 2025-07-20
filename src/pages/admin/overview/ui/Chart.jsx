import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Cell,
} from "recharts";

const data = [
  { name: "Users", uv: 400, pv: 2400, amt: 2400, bgColor: "#B05BDB" },
  { name: "Rooms", uv: 300, pv: 2210, amt: 2290, bgColor: "#800080" },
  { name: "Full Map", uv: 200, pv: 2290, amt: 2000, bgColor: "#BA55D3" },
  { name: "Revenue", uv: 278, pv: 2000, amt: 2181, bgColor: "#7400BB" },
];

const AnalyticsChart = () => {
  return (
    <div
      className="relative h-[362.88px] w-[470px] border overflow-hidden grid place-items-center pt-10 rounded-md"
      style={{
        backgroundImage: "linear-gradient(to bottom,#000000,#202020)",
      }}
    >
      <h1 className="absolute left-0 top-5 font-semibold text-[#80FFDB]">
        Performance analytics
      </h1>
      <BarChart
        width={400}
        height={300}
        margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
        data={data}
      >
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip
          wrapperStyle={{
            width: 100,
            backgroundColor: "#ccc",
          }}
        />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "40px",
          }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="uv" barSize={30}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.bgColor} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default AnalyticsChart;
