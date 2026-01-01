import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MlscLogo from "../assets/mlsc_logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Events", id: "events" },
    { label: "Achievements", id: "achievements" },
    { label: "The Team", id: "team" },
    { label: "About Us", id: "about" },
    { label: "Contact Us", id: "contact" },
  ];

  /* ---------- First load reveal ---------- */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ---------- Check if on specific pages ---------- */
  useEffect(() => {
    if (location.pathname.startsWith("/achievement/")) {
      setActiveSection("achievements");
    } else if (location.pathname === "/team") {
      setActiveSection("team");
    }
  }, [location]);

  /* ---------- Scroll spy + glow ---------- */
  useEffect(() => {
    // Don't do scroll spy if we're on achievement detail page or team page
    if (location.pathname.startsWith("/achievement/") || location.pathname === "/team") {
      return;
    }

    const sections = navLinks.map((link) =>
      document.getElementById(link.id)
    );

    const onScroll = () => {
      const scrollPosition = window.scrollY + 120;

      setScrolled(window.scrollY > 10);

      sections.forEach((section) => {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location]);

  /* ---------- Handle Scroll or Navigation ---------- */
  const handleScroll = (sectionId) => {
    if (sectionId === "team") {
      navigate("/team");
      setOpen(false);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      setOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + offset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setOpen(false);
    }
  };

  /* ---------- Scroll to section if coming from another page ---------- */
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          const offset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
          window.scrollTo({ top: y, behavior: "smooth" });

          // Clear state to avoid scrolling on refresh
          window.history.replaceState({}, document.title);
        }, 100); // Small delay to ensure DOM is ready
      }
    }
  }, [location]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full backdrop-blur-md
        transition-all duration-[1200ms] ease-out
        ${mounted ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"}
        ${scrolled
          ? "bg-[#182C4A]/95 shadow-[0_0_25px_rgba(80,200,220,0.25)] border-b border-[#50C8DC]/30"
          : "bg-[#182C4A]/80 border-b border-[#50C8DC]/10"
        }
      `}
    >
      {/* One-time scanline */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="navbar-scanline" />
        </div>
      )}

      <div className="px-6 md:px-10 py-4 flex items-center justify-between relative">

        {/* Logo (delayed reveal) */}
        <div
          className={`flex items-center gap-3 transition-all duration-[900ms] delay-[300ms]
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
          `}
        >
          <img
            src={MlscLogo}
            alt="MLSC Logo"
            className="w-10 h-10 object-contain"
          />
          <div>
            <h1 className="font-orbitron font-bold text-xl text-white tracking-wider">
              MLSC
            </h1>
            <p className="font-vt323 text-sm text-[#50C8DC] tracking-wide">
              Microsoft Learn Student Chapter
            </p>
          </div>
        </div>

        {/* Desktop Nav (delayed reveal) */}
        <ul
          className={`hidden md:flex gap-10 text-base font-orbitron font-semibold tracking-widest text-white
            transition-all duration-[900ms] delay-[600ms]
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
          `}
        >
          {navLinks.map((item) => (
            <li key={item.id} className="relative group">
              <button
                onClick={() => handleScroll(item.id)}
                className={`transition-all duration-300
                  ${activeSection === item.id
                    ? "text-[#50C8DC]"
                    : "glitch-hover group-hover:text-[#50C8DC]"
                  }
                `}
              >
                {item.label}

                {/* Neon underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#50C8DC]
                    transition-all duration-300 shadow-[0_0_12px_#50C8DC]
                    ${activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#182C4A]/95 backdrop-blur-lg border-t border-[#50C8DC]/10">
          <ul className="flex flex-col py-8 px-6 gap-6 text-lg font-orbitron font-semibold tracking-widest text-white">
            {navLinks.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="w-full text-left transition-all hover:text-[#50C8DC] hover:translate-x-2"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
