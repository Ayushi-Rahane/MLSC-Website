import { Mail, Phone, MapPin } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function ContactInfoCard() {
  const { ref, visible } = useScrollReveal();
  return (
    <div 
      ref={ref} 
      className={`bg-[#243A57] rounded-xl p-8 space-y-6 border border-[#50C8DC]/30 transition-all duration-700 ${
        visible ? 'animate-slide-up' : 'opacity-0'
      } animate-float-y`}
      style={{
        boxShadow: visible ? "inset 0 0 20px rgba(80, 200, 220, 0.1), 0 0 30px rgba(80, 200, 220, 0.2)" : "none"
      }}
    >
      <h2 className="text-2xl font-semibold text-[#50C8DC]">
        Get in Touch
      </h2>

      {/* Email */}
      <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
        <div className="p-3 rounded-lg bg-[#0078D4] group-hover:bg-[#50C8DC] group-hover:shadow-lg group-hover:shadow-[#50C8DC]/50 transition-all duration-300">
          <Mail className="group-hover:rotate-12 transition-transform" />
        </div>
        <div>
          <p className="font-semibold text-white">Email</p>
          <p className="text-gray-300">mlsc.ccew@cumminscollege.in</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
        <div className="p-3 rounded-lg bg-[#50C8DC] group-hover:bg-[#0078D4] group-hover:shadow-lg group-hover:shadow-[#0078D4]/50 transition-all duration-300">
          <Phone className="group-hover:rotate-12 transition-transform" />
        </div>
        <div>
          <p className="font-semibold text-white">Phone</p>
          <p className="text-gray-300">Eesha Kamath: +91 8767121158 <br/>
                                        Vaishnavi Ahire: +91 8530017432</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
        <div className="p-3 rounded-lg bg-[#0078D4] group-hover:bg-[#50C8DC] group-hover:shadow-lg group-hover:shadow-[#50C8DC]/50 transition-all duration-300">
          <MapPin className="group-hover:rotate-12 transition-transform" />
        </div>
        <div>
          <p className="font-semibold text-white">Location</p>
          <p className="text-gray-300">
            MKSSS's Cummins College of Engineering,<br />
            Pune, Maharashtra 411052, IN
          </p>
        </div>
      </div>
     
    </div>
  );
}
