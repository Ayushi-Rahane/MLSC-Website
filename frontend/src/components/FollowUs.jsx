import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function FollowUs() {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className={`bg-[#243A57] rounded-xl p-8 shadow-lg mt-8 ${visible ? 'animate-slide-up' : 'opacity-0'}`}>
      <h2 className="text-2xl font-semibold mb-6">
        Follow Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/microsoft-learn-student-chapter-ccew/posts/?feedView=all"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-[#3A4A63] px-5 py-4 rounded-lg hover:bg-[#4A5C78] transition"
        >
          <Linkedin className="text-[#0078D4]" />
          <span className="font-medium">LinkedIn</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/mlsc_ccoew/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-[#3A4A63] px-5 py-4 rounded-lg hover:bg-[#4A5C78] transition"
        >
          <Instagram className="text-[#c050dc]" />
          <span className="font-medium">Instagram</span>
        </a>

        {/* Twitter 
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-[#3A4A63] px-5 py-4 rounded-lg hover:bg-[#4A5C78] transition"
        >
          <Twitter className="text-[#50C8DC]" />
          <span className="font-medium">Twitter</span>
        </a>
         */}
        {/* Facebook 
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-[#3A4A63] px-5 py-4 rounded-lg hover:bg-[#4A5C78] transition"
        >
          <Facebook className="text-[#0078D4]" />
          <span className="font-medium">Facebook</span>
        </a> */}
      </div>
    </div>
  );
}
