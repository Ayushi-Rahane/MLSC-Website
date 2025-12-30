import useScrollAnimation from "../hooks/useScrollAnimation";
import { Link } from "react-router-dom";

export default function AchievementCard({ item, isActive, onClick }) {
  const [ref, visible] = useScrollAnimation();

  return (
    <Link to={`/achievement/${item.id}`}>
      <div
        ref={ref}
        onClick={onClick}
        className={`
          cursor-pointer w-full md:max-w-md rounded-xl bg-[#243A57] overflow-hidden group
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
          ${isActive ? "ring-2 ring-[#50C8DC]" : ""}
          hover:ring-2 hover:ring-[#50C8DC] relative
        `}
        style={{
          boxShadow: visible && isActive ? "0 0 30px rgba(80, 200, 220, 0.6)" : "none",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
        }}
      >
        <div className="relative overflow-hidden h-48">
          <img 
            src={item.image} 
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
          />
          {/* Glow overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0078D4]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-5 relative">
          {/* Glowing line */}
          <div 
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#50C8DC] to-[#0078D4] w-0 group-hover:w-full transition-all duration-500"
            style={{
              boxShadow: "0 0 15px rgba(80, 200, 220, 0.8)"
            }}
          />
          
          <p className="text-xs text-[#50C8DC]">{item.date}</p>
          <h3 className="text-lg font-semibold mt-1 text-white">{item.title}</h3>
          <p className="text-sm text-gray-300 mt-2">{item.short}</p>

          <p className="text-[#50C8DC] text-sm mt-3 group-hover:translate-x-1 transition-transform">
            {isActive ? "← Click to collapse" : "Click to view details →"}
          </p>
        </div>
      </div>
    </Link>
  );
}
