// import FeatureCard2 from "./FeatureCard2";
// import "./Feature2.css";

// const Feature2 = () => {
//   return (
//     <div
//       className="h-auto w-full relative bg-[#241B3A] text-white text-center py-10 px-5"
//       id="games"
//     >
//       {/* Enhanced animated background */}
//       <div className="absolute inset-0">
//         <div
//           className="absolute top-0 left-0 w-full h-full animate-pulse"
//           style={{
//             background:
//               "linear-gradient(135deg, rgba(132, 20, 124, 0.2), rgba(200, 77, 229, 0.2), rgba(121, 165, 213, 0.2))",
//           }}
//         ></div>
//       </div>
//       {/* particles moving animation effect */}
//       <div
//         className="absolute top-20 left-20 text-4xl animate-bounce opacity-40"
//         style={{ color: "#c84de5" }}
//       >
//         💰
//       </div>
//       <div
//         className="absolute top-40 right-40 text-3xl animate-bounce opacity-40"
//         style={{ color: "#79a5d5", animationDelay: "1s" }}
//       >
//         💎
//       </div>
//       {/* paricle moving section ends here */}
//       <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
//         <span
//           className="text-transparent bg-clip-text"
//           style={{
//             background: "linear-gradient(45deg, #c84de5, #79a5d5)",
//             WebkitBackgroundClip: "text",
//           }}
//         >
//           Earn While You Play
//         </span>
//       </h2>
//       <p className="text-[20px] inline">Master these popular games and </p>
//       <p className="inline text-[20px] text-[#c130e1]">
//         turn your skills into real money
//       </p>
//       {/* feature card section started */}
//       <section className="flex flex-wrap  mt-16 mb-10 md:items-center md:justify-center gap-10 md:gap-8">
//         <FeatureCard2
//           bg="linear-gradient(135deg, #c84de5, #79a5d5, #5e41a1"
//           image={"🔥"}
//           title="Free Fire"
//           description="Master fast-paced battles and earn rewards for your survival skills"
//           content1="Battle Royale"
//           price="₹50-500/match"
//         />
//         <FeatureCard2
//           bg="linear-gradient(135deg, #5e41a1, #4b1670, #84147c)"
//           image={"🎯"}
//           title="PUBG/BGMI"
//           description="Tactical gameplay meets earning potential in this skill-based arena"
//           content1="Battle Royale"
//           price="₹100-1000/match"
//         />
//         <FeatureCard2
//           bg="linear-gradient(135deg, #79a5d5, #294a72, #2b2055)"
//           image={"🎲"}
//           title="Ludo King"
//           description="Classic board game with modern earning mechanics for strategic minds"
//           content1="Strategy"
//           price="₹25-250/match"
//         />
//         <FeatureCard2
//           bg="linear-gradient(135deg, #240d39, #2b2055, #4b1670)"
//           image={"♛"}
//           title="Chess Master"
//           description="Intellectual warfare where every move can earn you real money"
//           content1="Strategy"
//           price="₹200-2000/match"
//         />
//       </section>
//     </div>
//   );
// };

// export default Feature2;

import FeatureCard2 from "./FeatureCard2";
import "./Feature2.css";

const gameFeatures = [
  {
    bg: "linear-gradient(135deg, #c84de5, #79a5d5, #5e41a1)",
    image: "/home/games/freefire.png",
    title: "Free Fire",
    description:
      "Master fast-paced battles and earn rewards for your survival skills",
    content1: "Battle Royale",
    price: "₹50-500/match",
  },
  {
    bg: "linear-gradient(135deg, #5e41a1, #4b1670, #84147c)",
    image: "/home/games/pubg.png",
    title: "PUBG/BGMI",
    description:
      "Tactical gameplay meets earning potential in this skill-based arena",
    content1: "Battle Royale",
    price: "₹100-1000/match",
  },
  {
    bg: "linear-gradient(135deg, #79a5d5, #294a72, #2b2055)",
    image: "/home/games/ludo.png",
    title: "Ludo King",
    description:
      "Classic board game with modern earning mechanics for strategic minds",
    content1: "Strategy",
    price: "₹25-250/match",
  },
  {
    bg: "linear-gradient(135deg, #240d39, #2b2055, #4b1670)",
    image: "/home/games/chess.png",
    title: "Chess Master",
    description:
      "Intellectual warfare where every move can earn you real money",
    content1: "Strategy",
    price: "₹200-2000/match",
  },
];

const Feature2 = () => {
  return (
    <div
      className="h-auto w-full relative bg-[#241B3A] text-white text-center py-10 px-5"
      id="games"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-full animate-pulse"
          style={{
            background:
              "linear-gradient(135deg, rgba(132, 20, 124, 0.2), rgba(200, 77, 229, 0.2), rgba(121, 165, 213, 0.2))",
          }}
        ></div>
      </div>

      {/* Particles */}
      <div
        className="absolute top-20 left-20 text-4xl animate-bounce opacity-40"
        style={{ color: "#c84de5" }}
      >
        💰
      </div>
      <div
        className="absolute top-40 right-40 text-3xl animate-bounce opacity-40"
        style={{ color: "#79a5d5", animationDelay: "1s" }}
      >
        💎
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 relative">
        <span
          className="text-transparent bg-clip-text"
          style={{
            background: "linear-gradient(45deg, #c84de5, #79a5d5)",
            WebkitBackgroundClip: "text",
          }}
        >
          Earn While You Play
        </span> 
      </h1>
      <p className="text-[20px] inline">Master these popular games and </p>
      <p className="inline text-[20px] text-[#c130e1]">
        turn your skills into real money
      </p>

      {/* Feature cards */}
      <section className="flex flex-wrap mt-16 mb-10 md:items-center md:justify-center gap-10 md:gap-8">
        {gameFeatures.map((game, index) => (
          <FeatureCard2 key={index} {...game} />
        ))}
      </section>
    </div>
  );
};

export default Feature2;
