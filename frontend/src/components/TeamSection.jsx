import TeamMemberCard from "./TeamMemberCard";

export default function TeamSection({ domain }) {
    return (
        <div className="mb-24 last:mb-0 relative">
            {/* Domain Header */}
            <div className="relative mb-12 text-center">
                <h2 className={`text-4xl md:text-5xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r ${domain.color} inline-block mb-4 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]`}>
                    {domain.domainName}
                </h2>
                <p className="text-white/60 font-vt323 text-xl max-w-2xl mx-auto border-l-2 border-r-2 border-white/10 px-4">
                    {domain.description}
                </p>
            </div>

            {/* Subteams Loop */}
            <div className="space-y-16">
                {domain.subTeams.map((subTeam) => (
                    <div key={subTeam.id} className="bg-white/5 border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">

                        {/* Background Flair */}
                        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${domain.color} opacity-5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none`} />

                        {/* Subteam Header */}
                        <div className="text-center mb-10 relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-2">{subTeam.name}</h3>
                            {subTeam.description && (
                                <p className="text-white/50 text-sm max-w-lg mx-auto">{subTeam.description}</p>
                            )}
                        </div>

                        {/* Direct Members (if any - like Matrix Strategists) */}
                        {subTeam.members && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                                {subTeam.members.map((member, idx) => (
                                    <TeamMemberCard key={idx} member={member} color="border-green-500" />
                                ))}
                            </div>
                        )}

                        {/* SubDivisions (if any - like Web3, AIML) */}
                        {subTeam.subDivisions && (
                            <div className="space-y-12 relative z-10 mt-8">
                                {subTeam.subDivisions.map((division, dIdx) => (
                                    <div key={dIdx}>
                                        <h4 className={`text-xl font-orbitron font-bold text-white mb-6 border-l-4 pl-4 ${division.color ? division.color.replace("border", "border") : "border-white"}`}>
                                            {division.name}
                                        </h4>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {division.members.map((member, mIdx) => (
                                                <TeamMemberCard key={mIdx} member={member} color={division.color} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
}
