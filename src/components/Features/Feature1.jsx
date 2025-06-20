import React from "react";
import FeatureCard1 from "../../ui/FeatureCard1";
import { DollarSign, TrendingUp, Bookmark, Trophy  } from 'lucide-react';
const Feature1 = () => {
  return (
    <div className="h-[auto] w-full bg-[#121a2e] text-white text-center py-10">
      <h1 className="text-[40px] font-semibold text-[#BA5CE2] pb-5">Earning Features</h1>
      <p className="text-[20px] inline">Discover how your gaming skills can </p> <p className="inline text-[20px] text-[#c130e1]">generate real income</p>
      {/* card section */}
      <section className="flex gap-8 items-center justify-center my-15">
        <FeatureCard1 icon={DollarSign} title={"Real Money Rewards"}  description={"Earn actual cash based on your gaming performance and skill level."}/>
        <FeatureCard1 icon={TrendingUp} title={"Skill-Based Earning"} description={"Higher skill levels unlock better earning opportunities and tournaments."}/>
        <FeatureCard1 icon={Bookmark} title={"Secure Transactions"} description={"Advanced security ensuring your earnings are safe and withdrawals are instant."}/>
        <FeatureCard1 icon={Trophy} title={"Tournament Prizes"} description={"Compete in daily tournaments with prize pools up to ₹50,000."}/>
      </section>
    </div>
  );
};

export default Feature1;
