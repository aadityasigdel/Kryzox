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

// static dataset
const data = [
    { name: "Users", uv: 400, bgColor: "#B05BDB" },
    { name: "Rooms", uv: 300, bgColor: "#800080" },
    { name: "Full Map", uv: 200, bgColor: "#BA55D3" },
    { name: "Revenue", uv: 278, bgColor: "#7400BB" },
];

const Chart = () => {
    return (
        <div
            className="relative h-[362px] w-[470px] border overflow-hidden grid place-items-center pt-10 rounded-md"
            style={{
                backgroundImage: "linear-gradient(to bottom,#000000,#202020)",
            }}
        >
            <h1 className="absolute left-0 top-5 font-semibold text-[#80FFDB] pl-4">
                Performance Analytics
            </h1>

            <BarChart
                width={400}
                height={280}
                margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
                data={data}
            >
                <XAxis dataKey="name" stroke="#80FFDB" />
                <YAxis stroke="#80FFDB" />
                <Tooltip
                    wrapperStyle={{
                        backgroundColor: "#202020",
                        border: "1px solid #444",
                        borderRadius: "6px",
                        color: "#fff",
                    }}
                />
                <Legend
                    wrapperStyle={{
                        top: 0,
                        right: 10,
                        color: "#fff",
                    }}
                />
                <CartesianGrid stroke="#333" strokeDasharray="5 5" />
                <Bar dataKey="uv" barSize={30}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.bgColor} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default Chart;
