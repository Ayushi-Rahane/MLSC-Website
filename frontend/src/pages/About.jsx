import { Lightbulb, Zap, Code, Users, Sparkles, Handshake, Award } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
  const { ref: headingRef, visible: headingVisible } = useScrollReveal();
  const { ref: contentRef, visible: contentVisible } = useScrollReveal();

  return (
    <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Heading with Animation */}
      <div 
        ref={headingRef}
        className={`mb-16 transition-all duration-700 ${
          headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className={`${headingVisible ? 'animate-float-header' : ''} inline-block relative`}>
          <h1 className="text-6xl text-white font-zendots font-semibold mb-6 relative inline-block drop-shadow-[0_0_20px_rgba(80,200,220,0.3)]">
            About Us
          </h1>
          {/* Underline (gradient removed) */}
          <div
            className="absolute -bottom-2 left-0 h-1 bg-[#50C8DC] w-full rounded-full"
            style={{ boxShadow: "0 0 20px rgba(80, 200, 220, 0.45)" }}
          />
          {headingVisible && (
            <>
              <span className="spark spark-all top-left" />
              <span className="spark spark-all top-right" />
            </>
          )}
        </div>
      </div>

      {/* Who we are + Vision */}
      <div 
        ref={contentRef}
        className={`grid md:grid-cols-2 gap-12 mb-16 transition-all duration-700 ${
          contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="animate-float-y">
          <h2 className="text-3xl mb-6 text-white relative inline-block">
            Who We Are
            <div className="absolute -bottom-1 left-0 h-0.5 bg-[#50C8DC] w-0 group-hover:w-full transition-all duration-300" />
          </h2>
          <p className="text-white/80 mb-4 leading-relaxed">
            Microsoft Learn Student Club (MLSC) is a student-led technical community
            focused on learning, collaboration, and innovation. We bring together
            passionate students to explore modern technologies and real-world
            problem solving.
          </p>
          <p className="text-white/80 leading-relaxed">
            Our goal is to create a space where students grow technically,
            professionally, and creatively through hands-on experiences.
          </p>
        </div>

        <div className="animate-float-x bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10"  style={{ boxShadow: "inset 0 0 20px rgba(80, 200, 220, 0.1)" }}>
          <h3 className="text-2xl mb-6 text-[#50C8DC] flex items-center gap-2">
            <Sparkles size={24} />
            Our Vision
          </h3>
          <p className="text-white/80 leading-relaxed">
            To build a strong student tech ecosystem that nurtures innovation,
            teamwork, and industry-ready skills using Microsoft technologies.
          </p>
        </div>
      </div>

      {/* What we do */}
      <div className="mb-16">
        <h2 className="text-3xl mb-8 text-white text-center relative inline-block w-full">
          What We Do
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[#50C8DC] to-[#0078D4] w-32 rounded-full" style={{ boxShadow: "0 0 20px rgba(80, 200, 220, 0.6)" }} />
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* Workshops */}
          <div className="group bg-white/5 p-6 rounded-lg border border-white/10 text-center hover:border-[#50C8DC] hover:bg-gradient-to-br hover:from-[#50C8DC]/10 hover:to-[#0078D4]/10 transition-all duration-300 animate-float-y" style={{ boxShadow: "inset 0 0 15px rgba(80, 200, 220, 0)" }}>
            <div className="flex justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Code size={32} className="text-[#50C8DC]" />
            </div>
            <h3 className="text-xl mb-2 text-white">Workshops</h3>
            <p className="text-white/70 text-sm">
              Hands-on sessions on web, cloud, AI and development tools.
            </p>
          </div>

          {/* Hackathons */}
          <div className="group bg-white/5 p-6 rounded-lg border border-white/10 text-center hover:border-[#50C8DC] hover:bg-gradient-to-br hover:from-[#50C8DC]/10 hover:to-[#0078D4]/10 transition-all duration-300 animate-float-x animate-float-slow">
            <div className="flex justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Zap size={32} className="text-[#50C8DC]" />
            </div>
            <h3 className="text-xl mb-2 text-white">Hackathons</h3>
            <p className="text-white/70 text-sm">
              Competitive events focused on real-world problem solving.
            </p>
          </div>

          {/* Projects */}
          <div className="group bg-white/5 p-6 rounded-lg border border-white/10 text-center hover:border-[#50C8DC] hover:bg-gradient-to-br hover:from-[#50C8DC]/10 hover:to-[#0078D4]/10 transition-all duration-300 animate-float-y animate-float-slow">
            <div className="flex justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Lightbulb size={32} className="text-[#50C8DC]" />
            </div>
            <h3 className="text-xl mb-2 text-white">Projects</h3>
            <p className="text-white/70 text-sm">
              Collaborative projects using modern frameworks and cloud platforms.
            </p>
          </div>

          {/* Networking */}
          <div className="group bg-white/5 p-6 rounded-lg border border-white/10 text-center hover:border-[#50C8DC] hover:bg-gradient-to-br hover:from-[#50C8DC]/10 hover:to-[#0078D4]/10 transition-all duration-300 animate-float-x">
            <div className="flex justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Users size={32} className="text-[#50C8DC]" />
            </div>
            <h3 className="text-xl mb-2 text-white">Networking</h3>
            <p className="text-white/70 text-sm">
              Interacting with seniors, peers, mentors and industry professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gradient-to-r from-[#0078D4]/20 to-[#50C8DC]/20 p-12 rounded-lg border border-white/10 hover:border-[#50C8DC]/50 transition-all duration-300 animate-float-y animate-float-slow" style={{ boxShadow: "0 0 30px rgba(80, 200, 220, 0.2)" }}>
        <h2 className="text-3xl mb-6 text-white text-center relative inline-block w-full">
          Our Values
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[#50C8DC] to-[#0078D4] w-32 rounded-full" style={{ boxShadow: "0 0 20px rgba(80, 200, 220, 0.6)" }} />
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center mt-12">
          <div className="group">
            <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <Award size={32} className="text-[#50C8DC]" />
            </div>
            <h3 className="text-xl mb-3 text-[#50C8DC]">Innovation</h3>
            <p className="text-white/70">
              Encouraging creativity and exploring new technologies.
            </p>
          </div>

          <div className="group">
            <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <Handshake size={32} className="text-[#50C8DC]" />
            </div>
            <h3 className="text-xl mb-3 text-[#50C8DC]">Collaboration</h3>
            <p className="text-white/70">
              Learning and growing together as a community.
            </p>
          </div>

          <div className="group">
            <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <Sparkles size={32} className="text-[#50C8DC]" />
            </div>
            <h3 className="text-xl mb-3 text-[#50C8DC]">Excellence</h3>
            <p className="text-white/70">
              Striving for quality, consistency, and impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
