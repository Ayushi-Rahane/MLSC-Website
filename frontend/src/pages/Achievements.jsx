import { useState } from "react";
import { achievements } from "../data/achievements";
import AchievementCard from "../components/AchievementCard";
import AchievementDetails from "../components/AchievementDetails";

export default function Achievements() {
  const [active, setActive] = useState(null);

  return (
    <section className="px-8 md:px-16 py-20 text-white relative">
      {/* Heading */}
        <div className="flex flex-col items-center mb-12">
            <h1 className="text-4xl font-bold">Our Achievements</h1>
            <div className="w-16 h-1 bg-[#0078D4] mt-3 mx-auto" />
        </div>
      <p className="text-gray-300 mb-16 text-center">
        A timeline of our milestones and accomplishments
      </p>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#50C8DC]/40" />

        <div className="space-y-24">
          {achievements.map((item) => (
       <div className="grid grid-cols-[1fr_auto_1fr] gap-10 items-start">

            {/* LEFT COLUMN */}
            <div className="flex justify-end">
                {item.side === "left" && (
                <AchievementCard
                    item={item}
                    isActive={active?.id === item.id}
                    onClick={() =>
                    setActive(active?.id === item.id ? null : item)
                    }
                />
                )}

                {/* DETAILS FOR RIGHT-SIDE CARD */}
                {active?.id === item.id && item.side === "right" && (
                <AchievementDetails item={item} className="ml-6" />
                )}
            </div>

            {/* TIMELINE DOT */}
            <div className="flex justify-center">
                <span className="w-3 h-3 bg-[#50C8DC] rounded-full mt-6" />
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex justify-start">
                {item.side === "right" && (
                <AchievementCard
                    item={item}
                    isActive={active?.id === item.id}
                    onClick={() =>
                    setActive(active?.id === item.id ? null : item)
                    }
                />
                )}

                {/* DETAILS FOR LEFT-SIDE CARD */}
                {active?.id === item.id && item.side === "left" && (
                <AchievementDetails item={item} className="ml-6" />
                )}
            </div>
            </div>


          ))}
        </div>
      </div>
    </section>
  );
}
