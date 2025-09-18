
const stats = [
    {
        title: "Pending Redeems",
        value: "12",
        sub: "Awaiting approval",
        gradientColor: { color1: "#B05BDB", color2: "#202020" },
        textColor: "#FFD93D",
    },
    {
        title: "Approved Today",
        value: "27",
        sub: "+5 from yesterday",
        gradientColor: { color1: "#B05BDB", color2: "#202020" },
        textColor: "#7DFF6D",
    },
    {
        title: "Total Payout",
        value: "$4.2k",
        sub: "Processed today",
        gradientColor: { color1: "#B05BDB", color2: "#202020" },
        textColor: "#36E5FF",
    },
    {
        title: "Success Rate",
        value: "98%",
        sub: "Last 30 days",
        gradientColor: { color1: "#845EC2", color2: "#202020" },
        textColor: "#00FFB7",
    },
];


const StatsGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((s, i) => (
                <div
                    key={i}
                    className="rounded-2xl p-6 cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105 shadow-lg"
                    style={{
                        background: `linear-gradient(to bottom right, ${s.gradientColor.color1}, ${s.gradientColor.color2})`,
                    }}
                >
                    <h2 className="text-lg font-semibold text-white mb-2">{s.title}</h2>
                    <p className={`text-3xl font-bold mb-1`} style={{ color: s.textColor }}>
                        {s.value}
                    </p>
                    <p className="text-sm text-gray-300">{s.sub}</p>
                </div>
            ))}
        </div>
    );
};

export default StatsGrid;
