import { Linkedin, Github } from "lucide-react";

export default function TeamMemberCard({ member, color, isLead = false }) {
    // Parsing color to get hex for inline styles
    let hexColor = "#50C8DC"; // Default Teal

    if (color) {
        // Check for 'border-[#hex]' format (e.g. from subDivisions)
        const borderMatch = color.match(/border-\[(#[0-9a-fA-F]+)\]/);
        if (borderMatch) {
            hexColor = borderMatch[1];
        }
        // Check for 'from-[#hex]' format (e.g. from domains)
        else if (color.includes("from-")) {
            const fromMatch = color.match(/from-\[(#[0-9a-fA-F]+)\]/);
            if (fromMatch) {
                hexColor = fromMatch[1];
            }
        }
    }

    const cardHeight = isLead ? "h-[28rem]" : "h-96";
    const imageSize = isLead ? "w-48 h-48" : "w-32 h-32";
    const fontSize = isLead ? "text-2xl" : "text-xl";

    return (
        <div
            className={`group relative w-full ${cardHeight} flex flex-col items-center animate-float has-glow-effect`}
            style={{ animationDelay: `${Math.random() * 2}s` }}
        >

            {/* Glassmorphism Card */}
            <div
                className={`
            relative w-full h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl 
            flex flex-col items-center justify-start pt-8 pb-4 px-4
            transition-all duration-500 hover:bg-white/10 hover:scale-105
            ${isLead ? "shadow-lg" : "shadow-md"}
        `}
                style={{
                    // Dynamic hover border and shadow using CSS variables/inline styles
                    "--hover-color": hexColor
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${hexColor}50`; // 50 is hex for ~30% alpha
                    e.currentTarget.style.boxShadow = `0 0 30px ${hexColor}30`;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                }}
            >

                {/* Cyberpunk Accents */}
                <div
                    className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/20 rounded-tl-xl transition-colors duration-300"
                    style={{ borderColor: "rgba(255,255,255,0.2)" }}
                />
                {/* We can use style prop for conditional rendering colors */}
                <style>{`
           .group:hover .cyber-corner {
               border-color: ${hexColor} !important;
               opacity: 0.8;
           }
           /* Force text color change on group hover for dynamic color */
           .group:hover .dynamic-text-hover {
               color: ${hexColor} !important;
           }
        `}</style>

                <div className="cyber-corner absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/20 rounded-tl-xl transition-all duration-300" />
                <div className="cyber-corner absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/20 rounded-br-xl transition-all duration-300" />

                {/* Image Container */}
                <div className={`${imageSize} mb-6 rounded-full p-1 bg-gradient-to-br from-white/10 to-transparent relative group-hover:scale-105 transition-transform duration-500`}>
                    {/* Glowing ring around image */}
                    <div
                        className="absolute inset-0 rounded-full border-2 border-dashed animate-spin-slow opacity-30 group-hover:opacity-80 transition-opacity"
                        style={{ borderColor: hexColor }}
                    />

                    {isLead && (
                        <div
                            className="absolute inset-0 rounded-full border animate-ping opacity-20"
                            style={{ borderColor: hexColor }}
                        />
                    )}

                    <img
                        src={member.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-slate-800 relative z-10"
                    />
                </div>

                {/* Details Section */}
                <div className="text-center w-full z-10 flex flex-col flex-grow">
                    <h3
                        className={`${fontSize} font-orbitron font-bold text-white mb-1 transition-colors drop-shadow-md dynamic-text-hover`}
                    >
                        {member.name}
                    </h3>

                    <p
                        className="text-sm font-vt323 tracking-widest uppercase mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
                        style={{ color: hexColor }}
                    >
                        {member.role}
                    </p>

                    <div className="w-12 h-[1px] bg-white/10 mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>

                    <p className="text-white/60 font-mono text-xs mb-1 group-hover:text-white/90 transition-colors">
                        {member.classDept || "N/A"}
                    </p>

                    <div className="flex-grow"></div>

                    <div className="flex gap-4 mt-4 justify-center">
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all hover:scale-110 shadow-sm group-hover:animate-shake"
                        >
                            <Linkedin size={18} />
                        </a>

                        {/* Always show GitHub with fallback or actual link */}
                        <a
                            href={member.github || "#"}
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
        </div>
    );
}
