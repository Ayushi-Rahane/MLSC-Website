import { Code, Brain, Coins, Layers } from "lucide-react";

const icons = {
    CodeSphere: Code,
    SkillSphere: Brain,
    AssetSphere: Layers, // Fallback icon
};

export default function TeamTabs({ domains, activeTab, onTabChange }) {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-16 overflow-x-auto pb-4 md:flex-wrap md:justify-center">
            {domains.map((domain) => {
                const Icon = icons[domain.domainName] || Layers;
                const isActive = activeTab === domain.id;

                return (
                    <button
                        key={domain.id}
                        onClick={() => onTabChange(domain.id)}
                        className={`
              relative flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300
              ${isActive
                                ? `bg-white/10 border-2 border-[#50C8DC] text-white shadow-[0_0_20px_rgba(80,200,220,0.4)] scale-105`
                                : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:border-white/30 hover:text-white"
                            }
            `}
                    >
                        <Icon size={24} className={isActive ? "text-[#50C8DC] animate-pulse" : ""} />
                        <span className={`text-xl font-orbitron font-bold tracking-wider ${isActive ? "text-[#50C8DC]" : ""}`}>
                            {domain.domainName}
                        </span>

                        {/* Active glow flair */}
                        {isActive && (
                            <div className="absolute inset-0 rounded-xl bg-[#50C8DC]/10 animate-pulse pointer-events-none" />
                        )}
                    </button>
                );
            })}
        </div>
    );
}
