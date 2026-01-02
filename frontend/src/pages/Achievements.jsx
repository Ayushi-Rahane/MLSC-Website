import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import { achievements } from "../data/achievements";
import AchievementCard from "../components/AchievementCard";
import AchievementDetails from "../components/AchievementDetails";

export default function Achievements() {
  const [active, setActive] = useState(null);

  const { ref: headingRef, visible: headingVisible } = useScrollReveal();

  return (
    <section className="px-8 md:px-16 py-20 text-white relative">
      {/* Heading */}
      <div
        ref={headingRef}
        className={`
          mb-16 inline-block relative
          ${headingVisible ? "animate-heading-enter animate-heading-float" : "opacity-0"}
        `}
      >
        <h1 className="text-6xl text-white text-center font-zendots font-semibold mb-4 drop-shadow-[0_0_20px_rgba(242,80,34,0.3)]">
          Our Achievements
        </h1>
        {/* Underline removed per request */}
      </div>
      {headingVisible && (
        <>
          <span className="spark spark-all top-left" />
          <span className="spark spark-all top-right" />
        </>
      )}
      <p className="text-gray-300 mb-16 text-center">
        A timeline of our milestones and accomplishments
      </p>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line: left on mobile, centered on md+ */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-[#50C8DC]/40" />

        <div className="space-y-12">
          {achievements.map((item) => (
            <div key={item.id}>
              {/* MOBILE: stacked single-column */}
              <div className="md:hidden flex flex-col items-start gap-4">
                <div className="flex items-center gap-4">
                  <span className="w-3 h-3 bg-[#50C8DC] rounded-full ml-4" />
                  <AchievementCard
                    item={item}
                    isActive={active?.id === item.id}
                    onClick={() => setActive(active?.id === item.id ? null : item)}
                  />
                </div>

                {active?.id === item.id && (
                  <AchievementDetails item={item} />
                )}
              </div>

              {/* DESKTOP: original 3-col timeline layout (unchanged) */}
              <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-10 items-start">
                {/* LEFT COLUMN */}
                <div className="flex justify-end">
                  {item.side === "left" && (
                    <AchievementCard
                      item={item}
                      isActive={active?.id === item.id}
                      onClick={() => setActive(active?.id === item.id ? null : item)}
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
                      onClick={() => setActive(active?.id === item.id ? null : item)}
                    />
                  )}

                  {/* DETAILS FOR LEFT-SIDE CARD */}
                  {active?.id === item.id && item.side === "left" && (
                    <AchievementDetails item={item} className="ml-6" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
