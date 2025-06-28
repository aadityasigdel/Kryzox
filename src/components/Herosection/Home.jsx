import { div } from "framer-motion/client";
import clsx from "clsx";
import "./herosection.css";
export default function HeroSection() {
  return (
    <div className="relative min-h-screen h-auto  w-full bg-[#0b001a] text-white overflow-hidden font-sans pb-10 md:pb-5">
        {/* ✅ Vertical Lines */}
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={clsx("absolute top-0 bottom-0 w-px bg-white/10 z-0",i===1 && "secondLine",i===5 && "sixthLine")}
            style={{ left: `${(i + 1) * 12}%` }}
          />
        ))}

        {/* 🔆 Large Floating Background Circles (pulse) */}
        <div
          className="absolute rounded-full bg-purple-700 blur-3xl opacity-30 animate-pulse z-0"
          style={{
            width: 400,
            height: 400,
            top: "15%",
            left: "20%",
            background: "radial-gradient(circle, #5e41a1 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full bg-pink-500 blur-2xl opacity-20 animate-pulse z-0"
          style={{
            width: 400,
            height: 400,
            animationDelay: "1s",
            bottom: "20%",
            right: "20%",
            background: "radial-gradient(circle, #4b1670 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full bg-blue-500 blur-3xl opacity-25 animate-pulse z-0"
          style={{
            width: 400,
            height: 400,
            animationDelay: "2s",
            top: "50%",
            left: "60%",
            background: "radial-gradient(circle, #84147c 0%, transparent 70%)",
          }}
        />

        {/* ✨ Small Floating Glowing Dots */}
        {[...Array(20)].map((_, i) => {
          let sizeOfCircle = Math.floor(Math.random() * 6 + 4);
          return (
            <div
              key={`dot-${i}`}
              className="absolute bg-[violet] rounded-full blur-xs opacity-100 animate-bounce z-0"
              style={{
                height: `${sizeOfCircle}px`,
                width: `${sizeOfCircle}px`,
                top: `${Math.random() * 95}%`,
                left: `${Math.random() * 95}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          );
        })}

        {/* 💸 Floating Currency Symbols */}
        <div className="absolute top-[1%] left-[10%] text-purple-400 text-3xl animate-bounce z-0">
          $
        </div>
        <div className="absolute top-[20%] right-[8%] text-pink-400 text-3xl animate-bounce">
          ₹
        </div>
        <div className="absolute bottom-[15%] left-[15%] text-purple-300 text-3xl animate-bounce">
          $
        </div>
        <div className="absolute bottom-[20%] right-[10%] text-blue-400 text-3xl animate-bounce">
          ₹
        </div>

        {/* 🔶 Diagonal Ray */}
        <div className="absolute w-[300px] h-px bg-white/10 rotate-45 top-[18%] left-[18%]" />

        {/* 🚀 Hero Content */}
        <div className="flex flex-col items-center justify-center text-center px-4 mt-24 md:mt-32 relative z-10">
          <h1 className="kryzox text-5xl sm:text-7xl md:text-9xl lg:text-[90px] font-extrabold">
            KRYZOX
          </h1>

          <p className="max-w-3xl mt-6 text-lg sm:text-xl leading-12">
            <span className="text-[#c84de5] font-bold animate-pulse text-3xl ">
              EARN REAL MONEY
            </span>{" "}
            through{" "}
            <span className="text-2xl text-[#79a5d5] font-semibold animate-pulse bg-[rgba(121,165,213,0.1)] px-2 py-1">
              skill-based gaming
            </span>
            . Master your skills and{" "}
            <span className="text-xl text-[#c84de5] font-semibold animate-pulse bg-[rgba(121,165,213,0.1)] px-2 py-1">
              get rewarded
            </span>{" "}
            for your performance.
          </p>

          <div className=" w-full md:max-w-[800px]  font-semibold text-lg bg-[#482F6D]  rounded-2xl border border-[#883EA8] flex items-center justify-center gap-2 mt-5 py-3 md:py-5 px-5 ">
            <span className="animate-pulse">💰</span>{" "}
            <span>Turn Your Gaming Skills Into</span>
            <span className="real-earning text-[#79A5D5] animate-bounce">
              REAL EARNINGS
            </span>
            <span className="animate-pulse">💰</span>
          </div>
          {/* buttons */}
          <section className="h-auto flex flex-wrap gap-5 text-lg pt-8 justify-center items-center font-semibold">
            <button
              className=" px-10 py-5 rounded-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl bg-[length:200%_100%] hover:bg-[position:100%_0] mb-2 md:mb-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #c84de5, #79a5d5, #5e41a1)",
              }}
            >
              Download For Android
            </button>
            <button className="ripple-hover-button py-5 px-10 rounded-xl border-2 transition-colors duration-500 hover:scale-110 hover:shadow-2xl">
              Download For ios
            </button>
          </section>
        </div>
      </div>
  );
}
