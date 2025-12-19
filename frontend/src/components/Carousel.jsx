import { useEffect, useState } from "react";
import Imagine_cup from "../assets/imagine_cup_banner.png";
const slides = [
  // SLIDE 1 — HERO (UNCHANGED)
  {
    id: 1,
    content: (
      <>
        <h1 className="text-5xl md:text-6xl font-bold text-[#50C8DC] leading-tigh ">
          Microsoft Learn Student
          <br />
          <span className="text-[#0078D4]">Club</span>
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Empowering students through technology, innovation, and collaboration
        </p>

        <button className="mt-10 px-8 py-3 rounded-lg bg-[#0078D4] hover:bg-[#50C8DC] transition font-semibold">
          Explore Our Club
        </button>
      </>
    ),
  },

  // SLIDE 2 — IMAGINE CUP (UPDATED)
{
  id: 2,
  content: (
    <div className="relative w-screen min-h-[85vh] flex items-center overflow-hidden">

      {/* FULL WIDTH BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Imagine_cup})`,
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#182C4A]/95 via-[#182C4A]/80 to-[#182C4A]/60" />

      {/* CONTENT CONTAINER */}
    <div className="relative z-10 w-full max-w-7xl mx-auto pl-32 pr-16 flex justify-end">


        {/* RIGHT: TEXT CONTENT */}
        <div className="max-w-[28rem] text-left">

          <h2 className="text-4xl font-bold text-[#50C8DC] animate-slide delay-100">
            Upcoming Event
          </h2>

          <h3 className="mt-4 text-3xl font-semibold text-[#0078D4] animate-slide delay-100">
            Imagine Cup 2026
          </h3>

          <p className="mt-4 text-gray-200 animate-slide delay-100">
            Imagine Cup is Microsoft’s global student startup competition where
            students turn bold ideas into real-world solutions using AI and cloud
            technologies.
          </p>

          <ul className="mt-4 text-gray-200 list-disc list-inside space-y-2 animate-slide delay-100">
            <li>Up to $5,000 Azure credits</li>
            <li>Build real-world AI solutions</li>
            <li>Mentorship from Microsoft experts</li>
            <li>Global recognition</li>
          </ul>

          <div className="mt-8 flex gap-4">
            <a
              href="https://imaginecup.microsoft.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg bg-[#0078D4] hover:bg-[#50C8DC] transition font-semibold animate-slide delay-100"
            >
              Register Now
            </a>

            <button className="px-6 py-3 rounded-lg border border-[#50C8DC] text-[#50C8DC] hover:bg-[#50C8DC] hover:text-[#182C4A] transition font-semibold animate-slide delay-100">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
}




];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
    const AUTO_SLIDE = true;
    useEffect(() => {
    if (!AUTO_SLIDE) return;

    const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
    }, []);


  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6">
      {/* Slide Content */}
        <div
        key={current}
        className="
            animate-slide
            transition-all
            duration-700
            ease-out
        "
        >
        {slides[current].content}
        </div>

      {/* Left Arrow */}
      <button
        onClick={() =>
          setCurrent(current === 0 ? slides.length - 1 : current - 1)
        }
        className="absolute left-6 w-10 h-10 rounded-full bg-[#0078D4] hover:bg-[#50C8DC] flex items-center justify-center"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-6 w-10 h-10 rounded-full bg-[#0078D4] hover:bg-[#50C8DC] flex items-center justify-center"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 flex gap-3">
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
