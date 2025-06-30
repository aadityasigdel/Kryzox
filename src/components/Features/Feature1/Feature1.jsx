import React from "react";
import FeatureCard1 from "../../../ui/FeatureCard1";
import "./Feature1.css"; // Assuming you have some styles in this file
import { DollarSign, TrendingUp, Bookmark, Trophy } from "lucide-react";
const Feature1 = () => {
  return (
    <div className="feature1-container relative h-[auto] w-full bg-[#240d39] text-white text-center py-20 px-5 md:px-10">
      {/* geometry shape eft hand side*/}
      <div
        className="absolute top-10 left-10 w-20 h-20 border rotate-45 animate-spin"
        style={{
          borderColor: "rgba(121, 165, 213, 0.3)",
          animationDuration: "50s",
          animationDelay: "0s",
        }}
      >
      </div>
      <span className="absolute top-20 left-20 text-3xl animate-bounce">💰</span>

      {/* geometry shape right hand side */}
      <div
        className="absolute top-40 right-20 w-15 h-15 border  animate-bounce"
        style={{
          borderColor: "rgba(121, 165, 213, 0.3)",
        }}
      >
      </div>
      <span className="absolute top-40 right-40 text-2xl animate-bounce">💎</span>
      <h1 className="heading-text text-[30px] md:text-[50px] font-semibold text-[#BA5CE2] pb-5">
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
      <p className="text-[20px] inline">Discover how your gaming skills can </p>{" "}
      <p className="inline text-[20px] text-[#c130e1]">generate real income</p>
      {/* card section */}
      <section className="grid grid-cols-1 gap-8  mt-10 md:place-items-center sm:grid-cols-2 lg:grid-cols-4 lg:px-20">
        <FeatureCard1
          icon={DollarSign}
          iconBgColor={"linear-gradient(135deg, #c84de5, #79a5d5)"}
          iconHoverColor={"rgba(121, 165, 213, 0.3)"}
          title={"Real Money Rewards"}
          description={
            "Earn actual cash based on your gaming performance and skill level."
          }
        />
        <FeatureCard1
          icon={TrendingUp}
          iconBgColor={"linear-gradient(135deg, #79a5d5, #5e41a1)"}
          iconHoverColor={"rgba(121, 165, 213, 0.3)"}
          title={"Skill-Based Earning"}
          description={
            "Higher skill levels unlock better earning opportunities and tournaments."
          }
        />
        <FeatureCard1
          icon={Bookmark}
           iconBgColor={"linear-gradient(135deg, #5e41a1, #4b1670)"}
          iconHoverColor={"rgba(121, 165, 213, 0.3)"}
          title={"Secure Transactions"}
          description={
            "Advanced security ensuring your earnings are safe and withdrawals are instant."
          }
        />
        <FeatureCard1
          icon={Trophy}
         iconBgColor= {"linear-gradient(135deg, #4b1670, #84147c)"}
          iconHoverColor={"rgba(121, 165, 213, 0.3)"}
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
