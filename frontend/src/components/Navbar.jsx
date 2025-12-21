import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MlscLogo from "../assets/mlsc_logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (sectionId) => {
    const pathMap = {
      home: "/",
      about: "/about",
      team: "/team",
      achievements: "/achievements",
      events: "/events",
      contact: "/contact",
    };

    const targetPath = pathMap[sectionId] || "/";

    const scrollToSection = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -80; // navbar height offset
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    if (location.pathname !== targetPath) {
      navigate(targetPath);
      setTimeout(scrollToSection, 150);
    } else {
      scrollToSection();
    }

    setOpen(false); // close mobile menu
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#182C4A]">
      <div className="px-6 md:px-10 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={MlscLogo} alt="MLSC Logo" />
          </div>
          <div>
            <h1 className="font-semibold text-lg text-white">MLSC</h1>
            <p className="text-sm text-[#50C8DC]">
              Microsoft Learn Student Club
            </p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-white">
          {[
            ["home", "Home"],
            ["about", "About Us"],
            ["team", "The Team"],
            ["achievements", "Achievements"],
            ["events", "Events"],
            ["contact", "Contact Us"],
          ].map(([id, label]) => (
            <li key={id}>
              <button
                onClick={() => handleNav(id)}
                className="hover:text-[#50C8DC] transition"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#182C4A] px-6 pb-4 space-y-4 text-white">
          {[
            ["home", "Home"],
            ["about", "About Us"],
            ["team", "The Team"],
            ["achievements", "Achievements"],
            ["events", "Events"],
            ["contact", "Contact Us"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="block w-full text-left hover:text-[#50C8DC]"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
