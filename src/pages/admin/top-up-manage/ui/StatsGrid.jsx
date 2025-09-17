import React from "react";

const stats = [
  {
    title: "Pending Requests",
    value: "18",
    sub: "Awaiting review",
    bg: "bg-[#1a0f3a]",
    text: "text-[#7d5cff]"
  },
  {
    title: "Approved Today",
    value: "42",
    sub: "+8 from yesterday",
    bg: "bg-[#2a0d32]",
    text: "text-[#c85eff]"
  },
  {
    title: "Total Amount",
    value: "KX.8.5k",
    sub: "Processed today",
    bg: "bg-[#132a37]",
    text: "text-[#36e5ff]"
  },
  {
    title: "Success Rate",
    value: "94%",
    sub: "Last 30 days",
    bg: "bg-[#23173b]",
    text: "text-[#00ffb7]"
  },
];

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {stats.map((s, i) => (
        <article
          key={i}
          className={`${s.bg} rounded-xl p-6 transition transform hover:shadow-md`}
        >
          <h2 className="text-lg font-semibold text-white">{s.title}</h2>
          <p className={`text-3xl font-bold ${s.text}`}>{s.value}</p>
          <p className="text-sm text-gray-300">{s.sub}</p>
        </article>
      ))}
    </div>
  );
};

export default StatsGrid;
