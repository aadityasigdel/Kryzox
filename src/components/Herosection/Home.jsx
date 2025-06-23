// import "./herosection.css";
// import Button1 from "../../ui/Button1";
// import Button2 from "../../ui/Button2";
// const HeroSection = () => {
//   return (
//     <div className="h-[auto] w-full bg-slate-900 text-white grid place-content-center pb-30 pt-20">
//       <section className="h-auto w-[800px] text-center">
//         <h1 className="title-container top-heading font-bold text-[80px] text-[#C44DE3] ">
//           KRYZOX
//         </h1>
//         <div className="inline text-[18px] font-semibold">
//           <span className="text-3xl text-[#C44DE3] ">EARN REAL MONEY </span>
//           <span>through </span>
//           <span className="text-2xl text-[#79A5D5]">skill-based gaming. </span>
//           <span>Master your skills and </span>
//           <span className=" text-[#C44DE3] ">get rewarded </span>
//           <span>for your performance.</span>
//         </div>

//         {/* <div className="h-15 w-[400px]"></div> */}
//       </section>
//       {/* animated div section */}
//       <div className="h-15 w-[800px] bg-[#482F6D] rounded-2xl border border-[#883EA8] flex items-center justify-center gap-2 font-bold mt-5">
//         <span className="">💰</span>{" "}
//         <span>Turn Your Gaming Skills Into</span>
//         <span className="real-earning text-[#79A5D5]">REAL EARNINGS</span>
//         <span className="">💰</span>
//       </div>
//       {/* buttons */}
//       <section className="flex gap-5 text-[18px] pt-8 justify-center items-center">
//         <Button1>Download For Android</Button1>
//          <Button2>Download For ios</Button2>
//       </section>
//     </div>
//   );
// };


// import { motion } from "framer-motion";

// const floatAnim = {
//   animate: {
//     y: [0, 10, 0],
//     transition: {
//       duration: 6,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   },
// };

// const FloatingItem = ({ className, children }) => (
//   <motion.div variants={floatAnim} animate="animate" className={className}>
//     {children}
//   </motion.div>
// );

// export default function HeroSection() {
//   return (
//     <div className="relative min-h-screen w-full bg-[#0b001a] text-white overflow-hidden font-sans">
//       {/* 🔵 Vertical Lines */}
//       {[...Array(6)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute top-0 bottom-0 w-px bg-white/10"
//           style={{ left: `${(i + 1) * 16}%` }}
//         />
//       ))}

//       {/* 🔵 Glowing Tiny Dots */}
//       {[...Array(8)].map((_, i) => (
//         <FloatingItem
//           key={`dot-${i}`}
//           className="absolute w-2 h-2 bg-purple-400 rounded-full blur-sm opacity-60"
//           style={{
//             top: `${Math.random() * 90}%`,
//             left: `${Math.random() * 90}%`,
//           }}
//         />
//       ))}

//       {/* 🟣 Large Floating Glowing Circles */}
//       {[...Array(4)].map((_, i) => (
//         <FloatingItem
//           key={`circle-${i}`}
//           className="absolute w-24 h-24 bg-purple-800 opacity-30 rounded-full blur-3xl"
//           style={{
//             top: `${15 + i * 15}%`,
//             left: `${10 + i * 20}%`,
//           }}
//         />
//       ))}

//       {/* 🔶 Diagonal Light Ray */}
//       <div className="absolute w-[300px] h-px bg-white/10 rotate-45 top-[20%] left-[20%]" />

//       {/* 💸 Floating Currency Symbols */}
//       <FloatingItem className="absolute top-[15%] left-[5%] text-purple-400 text-xl">$</FloatingItem>
//       <FloatingItem className="absolute top-[35%] right-[8%] text-pink-400 text-lg">₹</FloatingItem>
//       <FloatingItem className="absolute bottom-[10%] left-[25%] text-purple-300 text-2xl">$</FloatingItem>
//       <FloatingItem className="absolute bottom-[15%] right-[10%] text-blue-400 text-xl">₹</FloatingItem>

//       {/* 🎯 Hero Content */}
//       <div className="flex flex-col items-center justify-center text-center px-4 mt-24 md:mt-32 relative z-10">
//         <h1 className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
//           KRYZOX
//         </h1>

//         <p className="max-w-3xl mt-6 text-lg sm:text-xl leading-relaxed">
//           <span className="text-purple-400 font-semibold">EARN REAL MONEY</span> through{" "}
//           <span className="text-blue-400 font-semibold">skill-based gaming</span>. Master your
//           skills and <span className="text-pink-400 font-semibold">get rewarded</span> for your
//           performance.
//         </p>

//         {/* Mid CTA Box */}
//         <div className="mt-6 px-6 py-3 bg-[#39166B] rounded-xl border border-purple-700 text-sm sm:text-base shadow-lg">
//           💰 Turn Your Gaming Skills Into <span className="text-blue-400 font-bold">REAL EARNINGS</span> 💰
//         </div>

//         {/* Buttons */}
//         <div className="mt-8 flex gap-4 flex-wrap justify-center">
//           <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300">
//             Download For Android
//           </button>
//           <button className="border-2 border-blue-400 text-blue-300 px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 hover:text-white transition duration-300">
//             Download For iOS
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import { motion } from "framer-motion";

const floatAnim = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const FloatingItem = ({ className, style, children }) => (
  <motion.div variants={floatAnim} animate="animate" className={className} style={style}>
    {children}
  </motion.div>
);

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full bg-[#0b001a] text-white overflow-hidden font-sans">
      {/* ✅ Vertical Lines */}
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0 w-px bg-white/10"
          style={{ left: `${(i + 1) * 12}%` }}
        />
      ))}

      {/* 🔆 Large Floating Background Circles */}
      <FloatingItem
        className="absolute rounded-full bg-purple-700 blur-3xl opacity-30"
        style={{ width: 250, height: 250, top: "15%", left: "10%" }}
      />
      <FloatingItem
        className="absolute rounded-full bg-pink-500 blur-3xl opacity-20"
        style={{ width: 180, height: 180, top: "50%", left: "30%" }}
      />
      <FloatingItem
        className="absolute rounded-full bg-blue-500 blur-3xl opacity-25"
        style={{ width: 200, height: 200, top: "30%", right: "15%" }}
      />
      <FloatingItem
        className="absolute rounded-full bg-purple-900 blur-3xl opacity-20"
        style={{ width: 300, height: 300, bottom: "5%", left: "20%" }}
      />
      <FloatingItem
        className="absolute rounded-full bg-fuchsia-500 blur-3xl opacity-20"
        style={{ width: 180, height: 180, bottom: "10%", right: "25%" }}
      />

      {/* ✨ Small Floating Glowing Dots */}
      {[...Array(10)].map((_, i) => (
        <FloatingItem
          key={`dot-${i}`}
          className="absolute w-2 h-2 bg-white rounded-full blur-sm opacity-40"
          style={{
            top: `${Math.random() * 95}%`,
            left: `${Math.random() * 95}%`,
          }}
        />
      ))}

      {/* 💸 Floating Currency Symbols */}
      <FloatingItem className="absolute top-[15%] left-[5%] text-purple-400 text-xl">$</FloatingItem>
      <FloatingItem className="absolute top-[35%] right-[8%] text-pink-400 text-lg">₹</FloatingItem>
      <FloatingItem className="absolute bottom-[10%] left-[25%] text-purple-300 text-2xl">$</FloatingItem>
      <FloatingItem className="absolute bottom-[15%] right-[10%] text-blue-400 text-xl">₹</FloatingItem>

      {/* 🔶 Diagonal Ray */}
      <div className="absolute w-[300px] h-px bg-white/10 rotate-45 top-[18%] left-[18%]" />

      {/* 🚀 Hero Content */}
      <div className="flex flex-col items-center justify-center text-center px-4 mt-24 md:mt-32 relative z-10">
        <h1 className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
          KRYZOX
        </h1>

        <p className="max-w-3xl mt-6 text-lg sm:text-xl leading-relaxed">
          <span className="text-purple-400 font-semibold">EARN REAL MONEY</span> through{" "}
          <span className="text-blue-400 font-semibold">skill-based gaming</span>. Master your
          skills and <span className="text-pink-400 font-semibold">get rewarded</span> for your
          performance.
        </p>

        <div className="mt-6 px-6 py-3 bg-[#39166B] rounded-xl border border-purple-700 text-sm sm:text-base shadow-lg">
          💰 Turn Your Gaming Skills Into <span className="text-blue-400 font-bold">REAL EARNINGS</span> 💰
        </div>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300">
            Download For Android
          </button>
          <button className="border-2 border-blue-400 text-blue-300 px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 hover:text-white transition duration-300">
            Download For iOS
          </button>
        </div>
      </div>
    </div>
  );
}
