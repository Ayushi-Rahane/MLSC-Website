import { useState, useEffect } from "react";
import TeamTabs from "../components/TeamTabs";
import SubTeamView from "../components/SubTeamView";
import TeamMemberCard from "../components/TeamMemberCard";
import { teamData, mlscHead } from "../data/teamData";
import { Linkedin, Github } from "lucide-react";

export default function Team() {
  const [activeTab, setActiveTab] = useState(teamData[0].id);
  const activeDomain = teamData.find(d => d.id === activeTab);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative pb-32 overflow-hidden w-full">
      {/* Transparent container to let App.jsx background show through */}

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-32">

        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in-up flex flex-col items-center">
          <h1 className="text-6xl text-white font-zendots font-semibold drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-4">
            The Minds Behind MLSC
          </h1>
          <div className="w-24 h-1 bg-[#50C8DC] mt-3 mx-auto rounded-full"
            style={{ boxShadow: "0 0 15px rgba(80, 200, 220, 0.45)" }}
          />

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-[#50C8DC] shadow-[0_0_15px_#50C8DC]"></div>
            <p className="font-vt323 text-2xl text-[#50C8DC] tracking-[0.2em] drop-shadow-[0_0_8px_rgba(80,200,220,0.8)]">
              SYSTEM_CREATORS_2025-2026
            </p>
            <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-[#50C8DC] shadow-[0_0_15px_#50C8DC]"></div>
          </div>
        </div>

        {/* MLSC Head Section - The "Core" */}
        <div className="flex justify-center mb-24 relative">
          {/* Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 text-center max-w-2xl w-full relative group hover:border-[#50C8DC]/50 transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {/* Head Avatar */}
            <div className="w-56 h-56 mx-auto mb-8 relative transition-all duration-500 z-20 group-hover:z-50">
              <div className="absolute inset-0 rounded-full border-2 border-[#50C8DC] animate-ping opacity-20"></div>
              <div className="absolute inset-0 rounded-full border border-[#50C8DC] shadow-[0_0_20px_#50C8DC]"></div>
              <img
                src={mlscHead.image}
                alt="Head"
                className="w-full h-full rounded-full object-cover relative z-30 transition-all duration-700 ease-out shadow-2xl group-hover:scale-[1.5] group-hover:-translate-y-12 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_30px_rgba(80,200,220,0.4)]"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#50C8DC] text-[#050a14] font-bold font-orbitron px-4 py-1 rounded text-sm whitespace-nowrap z-40 transition-all duration-500 group-hover:scale-110">
                CHAPTER LEAD
              </div>
            </div>

            <h2 className="text-4xl font-bold text-white mb-2">{mlscHead.name}</h2>
            <p className="text-[#50C8DC] text-xl font-vt323 tracking-widest mb-6">{mlscHead.role}</p>

            <p className="text-white/70 italic text-lg mb-8 font-serif">
              "{mlscHead.quote}"
            </p>

            <div className="flex gap-4 mt-4 justify-center">
              <a
                href={mlscHead.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all hover:scale-110 shadow-sm group-hover:animate-shake"
              >
                <Linkedin size={18} />
              </a>

              {/* Always show GitHub with fallback or actual link */}
              <a
                href={mlscHead.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-[#333] hover:border-[#333] transition-all hover:scale-110 shadow-sm group-hover:animate-shake"
                style={{ animationDelay: "0.1s" }} // Slight stagger for shake
              >
                <Github size={18} />
              </a>
            </div>

          </div>


        </div>

        {/* Domain Selection Tabs */}
        <TeamTabs
          domains={teamData}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Selected Domain Content */}
        {activeDomain && (
          <div className="animate-fade-in-up">

            {/* Domain Lead (Optional - if the domain itself has a lead, distinct from subteams) */}
            {activeDomain.lead && (
              <div className="flex flex-col items-center justify-center mb-16">
                <div className="text-[#50C8DC] font-vt323 tracking-widest mb-4 text-2xl">--- {activeDomain.domainName.toUpperCase()} LEAD ---</div>
                <div className="w-full max-w-sm">
                  <TeamMemberCard member={activeDomain.lead} color={activeDomain.color} isLead={true} />
                </div>
              </div>
            )}

            {/* Subteams View */}
            <SubTeamView domain={activeDomain} />
          </div>
        )}

      </div>
    </div>
  );
}