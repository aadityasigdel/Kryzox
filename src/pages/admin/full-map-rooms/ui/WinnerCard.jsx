import clsx from "clsx";
import Button from "../../ui/shared/Button";

export default function WinnerCard({
    user,
    winnerData,
    onSelectPosition,
    onChangeMessage,
    onNext,
    isLast,
    loading,
    error,
    successMessages = [],
}) {
    return (
        <div
            className="flex-1 p-6 rounded-xl shadow-lg flex flex-col gap-6"
            style={{
                backgroundImage: "linear-gradient(to right, #B05BDB, #202020)",
            }}
        >
            <h3 className="text-teal-300 font-bold text-lg text-center">
                {user.name}
            </h3>

            <div className="flex justify-center gap-4">
                {[1, 2, 3, 4].map((pos) => (
                    <button
                        key={pos}
                        onClick={() => onSelectPosition(pos)}
                        className={clsx(
                            "px-5 py-2 rounded-lg border font-semibold transition",
                            winnerData?.position === pos
                                ? "bg-gradient-to-r from-teal-400 to-purple-500 border-transparent text-white"
                                : "bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
                        )}
                    >
                        {pos}
                    </button>
                ))}
            </div>

            <input
                type="text"
                placeholder="Enter message"
                value={winnerData?.message || ""}
                onChange={(e) => onChangeMessage(e.target.value)}
                className="w-full bg-black/60 text-white border border-white/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <div className="flex justify-center">
                <Button func={onNext}>
                    {isLast
                        ? loading
                            ? "Saving..."
                            : "Submit All"
                        : "Next User"}
                </Button>
            </div>

            {error && (
                <p className="text-red-400 mt-2 text-center">
                    {error?.message}
                </p>
            )}
            {successMessages.length > 0 && (
                <div className="mt-2 text-green-400">
                    {successMessages.map((msg, idx) => (
                        <p key={idx}>{msg}</p>
                    ))}
                </div>
            )}
        </div>
    );
}
