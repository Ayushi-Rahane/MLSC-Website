import { Mail, Phone, MapPin } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function ContactInfoCard() {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className={`bg-[#243A57] rounded-xl p-8 shadow-lg space-y-6 ${visible ? 'animate-slide-up' : 'opacity-0'}`}>
      <h2 className="text-2xl font-semibold">
        Get in Touch
      </h2>

      {/* Email */}
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-[#0078D4]">
          <Mail />
        </div>
        <div>
          <p className="font-semibold">Email</p>
          <p className="text-gray-300">mlsc.ccew@cumminscollege.in</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-[#50C8DC]">
          <Phone />
        </div>
        <div>
          <p className="font-semibold">Phone</p>
          <p className="text-gray-300">Eesha Kamath: +91 8767121158 <br/>
                                        Vaishnavi Ahire: +91 8530017432</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-[#0078D4]">
          <MapPin />
        </div>
        <div>
          <p className="font-semibold">Location</p>
          <p className="text-gray-300">
            MKSSS's Cummins College of Engineering,<br />
            Pune, Maharashtra 411052, IN
          </p>
        </div>
      </div>
     
    </div>
  );
}
