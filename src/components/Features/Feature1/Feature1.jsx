import React from "react";
import FeatureCard1 from "./FeatureCard1";
import "./Feature1.css";
import { DollarSign, TrendingUp, Bookmark, Trophy } from "lucide-react";
const Feature1 = () => {
  return (
    <div
      className=" relative h-[auto] w-full bg-[#240d39] text-white text-center py-20 px-5 md:px-10 overflow-hidden"
      id="features"
    >
      {/* Enhanced background with moving elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(135deg, rgba(43, 32, 85, 0.1), rgba(75, 22, 112, 0.1))",
          }}
        ></div>
      </div>
      {/* grid design*/}
      <div className="absolute inset-0 opacity-20 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
                linear-gradient(rgba(200, 77, 229, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(200, 77, 229, 0.1) 1px, transparent 1px)
              `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>
      {/* geometry shape eft hand side*/}
      <div
        className="absolute top-10 left-10 w-20 h-20 border rotate-45 custom-spin-reverse"
        style={{
          borderColor: "rgba(121, 165, 213, 0.3)",
          animationDuration: "100s",
        }}
      ></div>
      <span
        className="absolute top-20 left-20 text-3xl opacity-30 animate-bounce"
        style={{ color: "#c84de5" }}
      >
        💰
      </span>
      {/* geometry shape right hand side */}
      <div className="z-0">
        <div
          className="absolute top-40 right-20 w-15 h-15 border  animate-bounce"
          style={{
            borderColor: "rgba(121, 165, 213, 0.3)",
          }}
        ></div>
        <span
          className="absolute top-40 right-40 text-2xl z-0  opacity-30 animate-bounce"
          style={{ color: "#79a5d5", animationDelay: "1s" }}
        >
          💎
        </span>
      </div>
      {/* geometry shape bottom hand side */}
      <div
        className="absolute bottom-10 left-20 md:bottom-20 md:left-22 w-12 h-12 border rotate-45 animate-pulse"
        style={{
          borderColor: "rgba(121, 165, 213, 0.3)",
          background: "linear-gradient(135deg, #4b1670, #84147c)",
        }}
      ></div>
      <h1 className="heading-text text-[30px] md:text-[50px] font-semibold text-[#BA5CE2] z-10 pb-5">
        <span
          className=" text-transparent bg-clip-text"
          style={{
            background: "linear-gradient(45deg, #c84de5, #79a5d5)",
            WebkitBackgroundClip: "text",
          }}
        >
          Earning Features
        </span>
      </h1>
      <div className="relative z-10">
        <p className="text-[20px] inline z-10">
          Discover how your gaming skills can{" "}
        </p>{" "}
        <p className="inline text-[20px] text-[#c130e1] z-10">
          generate real income
        </p>
      </div>
      {/* card section */}
      {/* <section className="grid grid-cols-1 gap-10 md:gap-8  mt-10 md:place-items-center sm:grid-cols-2 lg:grid-cols-4 lg:px-20"> */}
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 md:gap-8  mt-10 md:place-items-center  lg:px-20">
        <FeatureCard1
          icon={DollarSign}
          iconBgColor={"linear-gradient(135deg, #c84de5, #79a5d5)"}
          iconHoverColor={"rgba(121, 165, 213, 0.3)"}
          glowColor={"rgba(200, 77, 229, 0.5)"}
          title={"Real Money Rewards"}
          description={
            "Earn actual cash based on your gaming performance and skill level."
          }
        />
        <FeatureCard1
          icon={TrendingUp}
          iconBgColor={"linear-gradient(135deg, #79a5d5, #5e41a1)"}
          iconHoverColor={"rgba(121, 165, 213, 0.3)"}
          glowColor={"rgba(121, 165, 213, 0.5)"}
          title={"Skill-Based Earning"}
          description={
            "Higher skill levels unlock better earning opportunities and tournaments."
          }
        />
        <FeatureCard1
          icon={Bookmark}
          iconBgColor={"linear-gradient(135deg, #5e41a1, #4b1670)"}
          iconHoverColor={"rgba(121, 165, 213, 0.3)"}
          glowColor={"rgba(94, 65, 161, 0.5)"}
          title={"Secure Transactions"}
          description={
            "Advanced security ensuring your earnings are safe and withdrawals are instant."
          }
        />
        <FeatureCard1
          icon={Trophy}
          iconBgColor={"linear-gradient(135deg, #4b1670, #84147c)"}
          iconHoverColor={"rgba(121, 165, 213, 0.3)"}
          glowColor={"rgba(132, 20, 124, 0.5)"}
          title={"Tournament Prizes"}
          description={
            "Compete in daily tournaments with prize pools up to ₹50,000."
          }
        />
      </section>
    </div>
  );
};

export default Feature1;
