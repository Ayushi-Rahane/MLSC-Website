import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Facebook,
  Heart,
  Instagram,
} from "lucide-react";
import mlscLogo from "../assets/mlsc_logo.png";

export default function Footer() {
  return (
    <footer className="mt-32 bg-gradient-to-b from-[#0E1F36] to-[#09162A] text-gray-300">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <img src={mlscLogo} alt="MLSC Logo" className="w-16 h-auto mb-3" />
             <h3 className="text-xl font-bold text-white">
               Microsoft Learn Student Club
             </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Empowering students through technology, innovation, and
              collaboration. Building future-ready tech leaders.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-[#50C8DC]">About Us</a></li>
              <li><a href="#team" className="hover:text-[#50C8DC]">The Team</a></li>
              <li><a href="#events" className="hover:text-[#50C8DC]">Events</a></li>
              <li><a href="#achievements" className="hover:text-[#50C8DC]">Achievements</a></li>
              <li><a href="#contact" className="hover:text-[#50C8DC]">Contact Us</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-[#50C8DC]" />
                        mlsc.ccew@cumminscollege.in
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-[#50C8DC]" />           
                    Eesha Kamath: +91 8767121158 <br/>
                    Vaishnavi Ahire: +91 8530017432
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-[#50C8DC]" />
               MKSSS's Cummins College of Engineering, <br/>
               Pune, Maharashtra 411052, IN
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a className="p-3 rounded-lg bg-white/5 hover:bg-[#0078D4] transition" href="https://www.linkedin.com/company/microsoft-learn-student-chapter-ccew/posts/?feedView=all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a className="p-3 rounded-lg bg-white/5 hover:bg-[#0078D4] transition" href="github.com">
                <Github className="w-5 h-5" />
              </a>
              <a className="p-3 rounded-lg bg-white/5 hover:bg-[#0078D4] transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a className="p-3 rounded-lg bg-white/5 hover:bg-[#0078D4] transition" href="https://www.instagram.com/mlsc_ccoew/">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm gap-4">
          <p>
            © {new Date().getFullYear()} MLSC CCEW. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by MLSC Team
          </p>
        </div>
      </div>
    </footer>
  );
}
