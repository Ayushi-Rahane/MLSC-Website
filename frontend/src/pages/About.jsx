export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Heading */}
      <div className="mb-16">
        <h1 className="text-5xl mb-6 text-white">About Us</h1>
        <div className="w-20 h-1 bg-[#0078D4]"></div>
      </div>

      {/* Who we are + Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl mb-6 text-white">Who We Are</h2>
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

        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h3 className="text-2xl mb-6 text-[#50C8DC]">Our Vision</h3>
          <p className="text-white/80 leading-relaxed">
            To build a strong student tech ecosystem that nurtures innovation,
            teamwork, and industry-ready skills using Microsoft technologies.
          </p>
        </div>
      </div>

      {/* What we do */}
      <div className="mb-16">
        <h2 className="text-3xl mb-8 text-white text-center">What We Do</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
            <h3 className="text-xl mb-2 text-white">Workshops</h3>
            <p className="text-white/70 text-sm">
              Hands-on sessions on web, cloud, AI and development tools.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
            <h3 className="text-xl mb-2 text-white">Hackathons</h3>
            <p className="text-white/70 text-sm">
              Competitive events focused on real-world problem solving.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
            <h3 className="text-xl mb-2 text-white">Projects</h3>
            <p className="text-white/70 text-sm">
              Collaborative projects using modern frameworks and cloud platforms.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
            <h3 className="text-xl mb-2 text-white">Networking</h3>
            <p className="text-white/70 text-sm">
              Interacting with seniors, peers, mentors and industry professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gradient-to-r from-[#0078D4]/20 to-[#50C8DC]/20 p-12 rounded-lg border border-white/10">
        <h2 className="text-3xl mb-6 text-white text-center">Our Values</h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl mb-3 text-[#50C8DC]">Innovation</h3>
            <p className="text-white/70">
              Encouraging creativity and exploring new technologies.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 text-[#50C8DC]">Collaboration</h3>
            <p className="text-white/70">
              Learning and growing together as a community.
            </p>
          </div>

          <div>
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
