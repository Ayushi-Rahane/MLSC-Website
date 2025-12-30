import { useEffect, useState, useRef } from "react";
import Imagine_cup from "../assets/imagine_cup_banner.png";

const spinnerFrames = ["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"];

const slides = [
  {
    id: 1,
    content: ({
      mounted,
      scanDone,
      setScanDone,
      typedText,
      typingDone,
      rotatingText,
      spinnerFrame,
      cursorVisible,
    }) => (
      <div
        className={`relative w-full min-h-[75vh] sm:min-h-[85vh]
          flex flex-col items-center justify-center text-center px-4
          transition-all duration-[2000ms] ease-out
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <div className="mb-6 px-4 py-1 rounded-full border border-[#50C8DC]/40 text-xs tracking-widest text-[#50C8DC] font-vt323">
          SYSTEM ONLINE • v2.0.24
        </div>

        <h1
          className="font-orbitron font-extrabold text-[3.5rem] sm:text-[6rem] md:text-[7.5rem] leading-none text-white"
          style={{
            WebkitTextStroke: "1.5px rgba(255,255,255,0.9)",
            textShadow:
              "0 0 20px rgba(0,120,212,0.4), 0 0 40px rgba(0,120,212,0.2)",
          }}
        >
          MICROSOFT
        </h1>

        <h2
          className="relative overflow-hidden mt-2
            text-[2.5rem] sm:text-[4.5rem] md:text-[5.5rem]
            font-orbitron font-extrabold tracking-widest text-transparent"
          style={{
            WebkitTextStroke: "1.5px rgba(255,255,255,0.9)",
            textShadow:
              "0 0 20px rgba(0,120,212,0.4), 0 0 40px rgba(0,120,212,0.2)",
          }}
        >
          CHAPTER
          {mounted && !scanDone && (
            <span
              className="chapter-scanline"
              onAnimationEnd={() => setScanDone(true)}
            />
          )}
        </h2>

        {/* TERMINAL */}
        <p className="mt-6 text-sm sm:text-base font-vt323 text-[#9BB7D4] tracking-wide">
          &gt; {typedText}
          {typingDone && (
            <>
              <span className="mx-2 text-[#50C8DC]">
                {spinnerFrame}
              </span>
              <span>{rotatingText}</span>
            </>
          )}
          <span className="ml-1">
            {cursorVisible ? "_" : " "}
          </span>
        </p>
      </div>
    ),
  },


  // SLIDE 2 — IMAGINE CUP
  {
    id: 2,
    content: () => (
      <div className="relative w-screen min-h-[75vh] sm:min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Imagine_cup})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#182C4A]/95 via-[#182C4A]/80 to-[#182C4A]/60" />

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
  const [mounted, setMounted] = useState(false);
  const [scanDone, setScanDone] = useState(false);

  // TERMINAL TEXT LOGIC
  const staticText = "Initializing neural link...";
  const rotatingTexts = [
    "Building the next generation of tech",
    "Empowering students through technology, innovation, and collaboration",
  ];

  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  const [rotationIndex, setRotationIndex] = useState(0);
  const [spinnerIndex, setSpinnerIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const tickSound = useRef(null);

  // INIT SOUND
  useEffect(() => {
    tickSound.current = new Audio("/sounds/tick.mp3");
    tickSound.current.volume = 0.25;
  }, []);

  // MOUNT
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // TYPING (WITH SOUND)
  useEffect(() => {
    if (!mounted || typingDone) return;

    if (charIndex < staticText.length) {
      const timeout = setTimeout(() => {
        setTypedText((p) => p + staticText[charIndex]);
        setCharIndex((p) => p + 1);
        tickSound.current?.play().catch(() => {});
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      setTypingDone(true);
    }
  }, [mounted, charIndex, typingDone]);

  // SPINNER + CURSOR SYNC + SOUND
  useEffect(() => {
    if (!typingDone) return;

    const interval = setInterval(() => {
      setSpinnerIndex((p) => (p + 1) % spinnerFrames.length);
      setCursorVisible((p) => !p);
      tickSound.current?.play().catch(() => {});
    }, 120);

    return () => clearInterval(interval);
  }, [typingDone]);

  // ROTATING TEXT
  useEffect(() => {
    if (!typingDone) return;

    const interval = setInterval(() => {
      setRotationIndex((p) => (p + 1) % rotatingTexts.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [typingDone]);

  // CAROUSEL AUTO-ADVANCE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // KEYBOARD NAVIGATION
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrent((prev) => (prev + 1) % slides.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // SWIPE NAVIGATION
  useEffect(() => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrent((prev) => (prev + 1) % slides.length);
    } else if (isRightSwipe) {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  }, [touchEnd]);

  return (
    <section 
      className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center"
      onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
      onTouchEnd={(e) => setTouchEnd(e.changedTouches[0].clientX)}
    >
      <div key={current}>
        {slides[current].content({
          mounted,
          scanDone,
          setScanDone,
          typedText,
          typingDone,
          rotatingText: rotatingTexts[rotationIndex],
          spinnerFrame: spinnerFrames[spinnerIndex],
          cursorVisible,
        })}
      </div>
      {/* LEFT ARROW */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="carousel-arrow absolute left-4 sm:left-8 z-20
                  w-10 h-10 sm:w-12 sm:h-12
                  rounded-full
                  bg-[#0078D4]/90 hover:bg-[#50C8DC]
                  text-white text-2xl
                  flex items-center justify-center
                  backdrop-blur-md
                  transition
                  border border-[#50C8DC]/50 hover:border-[#50C8DC]"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev + 1) % slides.length)
        }
        className="carousel-arrow absolute right-4 sm:right-8 z-20
                  w-10 h-10 sm:w-12 sm:h-12
                  rounded-full
                  bg-[#0078D4]/90 hover:bg-[#50C8DC]
                  text-white text-2xl
                  flex items-center justify-center
                  backdrop-blur-md
                  transition
                  border border-[#50C8DC]/50 hover:border-[#50C8DC]"
      >
        ›
      </button>

    </section>
  );
}