import { useState, useEffect } from "react";
import TeamMemberCard from "./TeamMemberCard";

export default function SubTeamView({ domain }) {
    const [activeSubTeam, setActiveSubTeam] = useState(domain.subTeams[0]?.id);
    const [activeDivision, setActiveDivision] = useState(null);

    // Reset subteam when domain changes
    useEffect(() => {
        const firstSub = domain.subTeams[0];
        setActiveSubTeam(firstSub?.id);
        // If the first subteam has divisions, set the first division as active
        if (firstSub?.subDivisions && firstSub.subDivisions.length > 0) {
            setActiveDivision(firstSub.subDivisions[0].name);
        } else {
            setActiveDivision(null);
        }
    }, [domain]);

    // Handle SubTeam Change
    const handleSubTeamChange = (subId) => {
        setActiveSubTeam(subId);
        const sub = domain.subTeams.find(s => s.id === subId);
        if (sub?.subDivisions && sub.subDivisions.length > 0) {
            setActiveDivision(sub.subDivisions[0].name);
        } else {
            setActiveDivision(null);
        }
    };

    const currentSubTeam = domain.subTeams.find(st => st.id === activeSubTeam);

    // Identify if current subteam has divisions
    const hasDivisions = currentSubTeam?.subDivisions && currentSubTeam.subDivisions.length > 0;

    // Get currently active division object
    const currentDivision = hasDivisions
        ? currentSubTeam.subDivisions.find(div => div.name === activeDivision)
        : null;

    return (
        <div className="animate-fade-in-up">
            {/* 1. SubTeam Navigation (Level 2 Tasks: Talent&Tech, Community etc) */}
            {domain.subTeams.length > 1 && (
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {domain.subTeams.map((sub) => (
                        <button
                            key={sub.id}
                            onClick={() => handleSubTeamChange(sub.id)}
                            className={`px-6 py-2 rounded-full font-orbitron text-sm transition-all border
                ${activeSubTeam === sub.id
                                    ? "bg-[#50C8DC] border-[#50C8DC] text-[#050a14] font-bold shadow-[0_0_15px_#50C8DC]"
                                    : "bg-transparent border-white/20 text-white/70 hover:bg-white/10 hover:border-white/40"
                                }
              `}
                        >
                            {sub.name}
                        </button>
                    ))}
                </div>
            )}

            {/* Content Area */}
            <div className="bg-white/5 border border-white/5 rounded-3xl p-4 md:p-12 relative overflow-hidden backdrop-blur-sm">
                <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${domain.color} opacity-10 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2`} />

                {/* 2. SubTeam Lead (Common to all divisions) - MOVED TO TOP */}
                {currentSubTeam?.lead && (
                    <div className="flex flex-col items-center justify-center mb-12 relative z-10 w-full">
                        <div className="text-[#50C8DC] font-vt323 tracking-widest mb-6 text-xl bg-white/5 px-4 py-1 rounded-full uppercase">
                            {currentSubTeam.name} Lead
                        </div>
                        <div className="w-full max-w-sm flex justify-center">
                            <TeamMemberCard member={currentSubTeam.lead} color={domain.color} isLead={true} />
                        </div>

                        {/* Visual separator/connector */}
                        {hasDivisions && (
                            <div className="h-12 w-[1px] bg-gradient-to-b from-[#50C8DC]/50 to-transparent mt-4 mb-2"></div>
                        )}
                    </div>
                )}

                {/* 3. Subdivision Navigation (Level 3 Tabs: Web3, AIML, etc.) - MOVED BELOW LEAD */}
                {hasDivisions && (
                    <div className="flex flex-wrap justify-center gap-6 mb-16 relative z-10">
                        {currentSubTeam.subDivisions.map((div) => (
                            <button
                                key={div.name}
                                onClick={() => setActiveDivision(div.name)}
                                className={`relative px-4 py-2 text-base font-vt323 tracking-widest transition-all
                    ${activeDivision === div.name
                                        ? "text-white font-bold scale-110"
                                        : "text-white/40 hover:text-white/80"
                                    }
                `}
                            >
                                {div.name}
                                {activeDivision === div.name && (
                                    <div className={`absolute bottom-0 left-0 w-full h-[2px] shadow-[0_0_10px_currentColor] 
                    ${div.color
                                            ? (div.color.includes("border-[#") ? `bg-[${div.color.match(/border-\[(#[0-9a-fA-F]+)\]/)?.[1] || "#50C8DC"}] shadow-[0_0_10px_${div.color.match(/border-\[(#[0-9a-fA-F]+)\]/)?.[1] || "#50C8DC"}]` : "bg-[#50C8DC]")
                                            : "bg-[#50C8DC]"}`}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                )}

                {/* 4. Members Grid - Centered Flex */}
                <div className="relative z-10">
                    {hasDivisions && currentDivision ? (
                        /* Show Division Members */
                        <div className="animate-fade-in-up">
                            <div className="flex flex-wrap justify-center gap-8">
                                {currentDivision.members.map((member, mIdx) => (
                                    <div key={mIdx} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] sm:min-w-[280px]">
                                        <TeamMemberCard member={member} color={currentDivision.color || domain.color} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Show Direct Members */
                        currentSubTeam?.members && (
                            <div className="animate-fade-in-up flex flex-wrap justify-center gap-8">
                                {currentSubTeam.members.map((member, idx) => (
                                    <div key={idx} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] sm:min-w-[280px]">
                                        <TeamMemberCard member={member} color={domain.color} />
                                    </div>
                                ))}
                            </div>
                        )
                    )}
                </div>

            </div>
        </div>
    );
}
