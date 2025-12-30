import { useEffect, useState } from "react";
import Imagine_cup from "../assets/imagine_cup_banner.png";

const slides = [
  // SLIDE 1 — HERO
  {
    id: 1,
    content: (
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-0">
        {/* College Badge */}
        <p className="text-xs sm:text-base text-[#50C8DC] tracking-wide mb-2 sm:mb-3">
          MKSSS's Cummins College of Engineering for Women, Pune
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight font-orbitron">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078D4] to-[#50C8DC]">
            Microsoft Learn Student Club
          </span>
        </h1>

        {/* Chapter Identity */}
        <p className="mt-2 sm:mt-3 text-sm sm:text-lg font-vt323 text-mlsc-dark-2">
          Official Microsoft Learn Student Chapter at CCEW
        </p>

        {/* Tagline */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg font-vt323 text-mlsc-dark-3 max-w-2xl mx-auto">
          Empowering students through technology, innovation, and collaboration
        </p>

        {/* CTA */}
        <button className="mt-6 sm:mt-10 px-6 sm:px-8 py-3 rounded-lg bg-[#0078D4] hover:bg-[#50C8DC] transition font-semibold">
          Explore Our Club
        </button>
      </div>
    ),
  },

  // SLIDE 2 — IMAGINE CUP
  {
    id: 2,
    content: (
      <div className="relative w-screen min-h-[75vh] sm:min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Imagine_cup})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#182C4A]/95 via-[#182C4A]/80 to-[#182C4A]/60" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:pl-32 sm:pr-16 flex justify-center sm:justify-end">
          <div className="max-w-full sm:max-w-[28rem] text-left">
            <h2 className="text-xl sm:text-4xl font-bold text-[#50C8DC]">
              Upcoming Event
            </h2>

            <h3 className="mt-2 sm:mt-4 text-2xl sm:text-3xl font-semibold text-[#0078D4]">
              Imagine Cup 2026
            </h3>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-200">
              Imagine Cup is Microsoft’s global student startup competition where
              students turn bold ideas into real-world solutions using AI and cloud
              technologies.
            </p>

            <ul className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-200 list-disc list-inside space-y-1 sm:space-y-2">
              <li>Up to $5,000 Azure credits</li>
              <li>Build real-world AI solutions</li>
              <li>Mentorship from Microsoft experts</li>
              <li>Global recognition</li>
            </ul>

            <div className="mt-6 sm:mt-8 flex gap-4">
              <a
                href="https://imaginecup.microsoft.com"
                target="_blank"
                rel="noreferrer"
                className="px-5 sm:px-6 py-2 sm:py-3 rounded-lg bg-[#0078D4] hover:bg-[#50C8DC] transition font-semibold"
              >
                Register Now
              </a>

              <button className="px-5 sm:px-6 py-2 sm:py-3 rounded-lg border border-[#50C8DC] text-[#50C8DC] hover:bg-[#50C8DC] hover:text-[#182C4A] transition font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center px-4 sm:px-6">
      {/* Slide */}
      <div key={current} className="animate-slide transition-all duration-700">
        {slides[current].content}
      </div>

      {/* Arrows */}
      <button
        onClick={() => setCurrent(current === 0 ? slides.length - 1 : current - 1)}
        className="absolute left-3 sm:left-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0078D4] flex items-center justify-center"
      >
        ‹
      </button>

      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-3 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0078D4] flex items-center justify-center"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 sm:bottom-10 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-[#50C8DC]" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
