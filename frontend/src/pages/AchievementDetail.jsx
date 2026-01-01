import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { achievements } from "../data/achievements";
import AchievementDetails from "../components/AchievementDetails";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useScrollReveal from "../hooks/useScrollReveal";

export default function AchievementDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = achievements.find((a) => a.id === parseInt(id));
  const { ref, visible } = useScrollReveal();

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Achievement Not Found</h1>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mx-auto px-6 py-3 bg-[#0078D4] hover:bg-[#50C8DC] rounded-lg"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white relative">
      <Navbar />
      
      <div className="relative z-10 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-8 px-4 py-2 rounded-lg bg-[#243A57] hover:bg-[#0078D4] transition group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" />
            Back to Achievements
          </button>

          {/* Achievement Image */}
          <div 
            ref={ref}
            className={`mb-12 rounded-xl overflow-hidden transition-all duration-700 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } animate-float-y`}
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Achievement Details Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Title with Glow */}
              <div className="mb-8">
                <h1 
                  className="text-5xl md:text-6xl font-bold mb-4 relative inline-block"
                  style={{
                    background: "linear-gradient(135deg, #50C8DC, #0078D4, #50C8DC)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 20px rgba(80, 200, 220, 0.5))"
                  }}
                >
                  {item.title}
                </h1>
                {/* Glowing underline */}
                <div 
                  className="h-1 w-24 mt-4 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #50C8DC, #0078D4)",
                    boxShadow: "0 0 20px rgba(80, 200, 220, 0.8)"
                  }}
                />
              </div>

              {/* Date Badge */}
              <div className="inline-block px-4 py-2 rounded-full bg-[#0078D4]/30 border border-[#50C8DC] text-[#50C8DC] mb-6">
                {item.date}
              </div>

              {/* Description */}
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#50C8DC] hover:bg-white/10 transition-all duration-300 animate-float-y" style={{ boxShadow: "inset 0 0 20px rgba(80, 200, 220, 0.1)" }}>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {item.details || item.short}
                </p>
              </div>

              {/* Highlights */}
              {item.highlights && (
                <div className="bg-[#243A57]/50 border border-[#50C8DC]/30 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#50C8DC]">Key Highlights</h3>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#50C8DC] mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar Info Card */}
            <div className="md:col-span-1 animate-float-y">
              <div className="bg-gradient-to-br from-[#243A57] to-[#182C4A] rounded-xl p-8 border border-[#50C8DC]/20 sticky top-24">
                <h3 className="text-xl font-bold text-[#50C8DC] mb-4">Achievement Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Achievement Type</p>
                    <p className="text-white font-semibold">{item.type || "Milestone"}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Date</p>
                    <p className="text-white font-semibold">{item.date}</p>
                  </div>
                  {item.impact && (
                    <div>
                      <p className="text-gray-400 text-sm">Impact</p>
                      <p className="text-white font-semibold">{item.impact}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
