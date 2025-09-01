import clsx from "clsx";

export default function WinnersList({
    winners,
    currentIndex,
    setCurrentIndex,
}) {
    return (
        <div className="w-1/3 flex flex-col gap-3 overflow-y-auto">
            {winners.map((w, index) => (
                <div
                    key={`${w.user.id}-${index}`}
                    onClick={() => setCurrentIndex(index)}
                    className={clsx(
                        "p-3 rounded-xl cursor-pointer text-white font-semibold transition text-center mx-4",
                        currentIndex === index
                            ? "bg-gradient-to-r from-teal-400 to-purple-500"
                            : "bg-gray-700 hover:bg-gray-600"
                    )}
                >
                    {w.user.id}. {w.user.name}
                </div>
            ))}
        </div>
    );
}
