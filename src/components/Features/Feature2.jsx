import FeatureCard2 from "../../ui/FeatureCard2";
import { DollarSign, TrendingUp, Bookmark, Trophy } from 'lucide-react';

const Feature2 = () => {
  return (
    <div className="h-auto w-full bg-[#241B3A] text-white text-center py-10">
      <h1 className="text-[40px] font-semibold text-[#BA5CE2] pb-5">
        Earn While You Play
      </h1>
      <p className="text-[20px] inline">Master these popular games and </p>
      <p className="inline text-[20px] text-[#c130e1]">turn your skills into real money</p>

      <section className="flex flex-wrap gap-8 items-center justify-center mt-10">
        <FeatureCard2
          bg="from-[#428CA9] to-[#432D77]"
          icon={DollarSign}
          title="Free Fire"
          description="Master fast-paced battles and earn rewards for your survival skills"
        />
        <FeatureCard2
          bg="from-[#693891] to-[#341050]"
          icon={TrendingUp}
          title="PUBG/BGMI"
          description="Tactical gameplay meets earning potential in this skill-based arena"
        />
        <FeatureCard2
          bg="from-[#50729A] to-[#2C2254]"
          icon={Bookmark}
          title="Ludo King"
          description="Classic board game with modern earning mechanics for strategic minds"
        />
        <FeatureCard2
          bg="from-[#321353] to-[#190F2E]"
          icon={Trophy}
          title="Chess Master"
          description="Intellectual warfare where every move can earn you real money"
        />
      </section>
    </div>
  );
};

export default Feature2;
