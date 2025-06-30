import FeatureCard2 from "../../../ui/FeatureCard2";
import { DollarSign, TrendingUp, Bookmark, Trophy } from "lucide-react";

const Feature2 = () => {
  return (
    <div className="h-auto w-full bg-[#241B3A] text-white text-center py-10 px-5">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
        <span
          className="text-transparent bg-clip-text"
          style={{
            background: "linear-gradient(45deg, #c84de5, #79a5d5)",
            WebkitBackgroundClip: "text",
          }}
        >
          Earn While You Play
        </span>
      </h2>
      <p className="text-[20px] inline">Master these popular games and </p>
      <p className="inline text-[20px] text-[#c130e1]">
        turn your skills into real money
      </p>
      {/* feature card section started */}
      <section className="flex flex-wrap gap-8  mt-10 md:items-center md:justify-center">
        <FeatureCard2
          bg="from-[#428CA9] to-[#432D77]"
          icon={DollarSign}
          title="Free Fire"
          description="Master fast-paced battles and earn rewards for your survival skills"
          content1="Battle Royale"
          price="₹50-500/match"
        />
        <FeatureCard2
          bg="from-[#693891] to-[#341050]"
          icon={TrendingUp}
          title="PUBG/BGMI"
          description="Tactical gameplay meets earning potential in this skill-based arena"
          content1="Battle Royale"
          price="₹100-1000/match"
        />
        <FeatureCard2
          bg="from-[#50729A] to-[#2C2254]"
          icon={Bookmark}
          title="Ludo King"
          description="Classic board game with modern earning mechanics for strategic minds"
          content1="Strategy"
          price="₹25-250/match"
        />
        <FeatureCard2
          bg="from-[#321353] to-[#190F2E]"
          icon={Trophy}
          title="Chess Master"
          description="Intellectual warfare where every move can earn you real money"
          content1="Strategy"
          price="₹200-2000/match"
        />
      </section>
    </div>
  );
};

export default Feature2;
