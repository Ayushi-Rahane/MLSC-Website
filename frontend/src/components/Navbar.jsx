import { useState } from "react";
import { Menu, X } from "lucide-react";
import MlscLogo from "../assets/mlsc_logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "About Us",
    "The Team",
    "Achievements",
    "Events",
    "Contact Us",
  ];

  return (
    <nav className="w-full px-6 md:px-10 py-4 flex items-center justify-between bg-[#182C4A] relative z-50">
      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        <img
          src={MlscLogo}
          alt="MLSC Logo"
          className="w-10 h-10 object-contain"
        />
        <div>
          <h1 className="font-semibold text-lg">MLSC</h1>
          <p className="text-sm text-[#50C8DC]">
            Microsoft Learn Student Club
          </p>
        </div>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {navLinks.map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-[#50C8DC] transition"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#182C4A] border-t border-white/10 md:hidden">
          <ul className="flex flex-col py-6 px-6 gap-6 text-sm font-medium">
            {navLinks.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-[#50C8DC] transition"
                onClick={() => setOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}