import MlscLogo from "../assets/mlsc_logo.png";
export default function Navbar() {
  return (
    <nav className="w-full px-10 py-4 flex items-center justify-between bg-[#182C4A]">
      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full  flex items-center justify-center">
          <img src={MlscLogo} alt="MLSC Logo" />
        </div>
        <div>
          <h1 className="font-semibold text-lg">MLSC</h1>
          <p className="text-sm text-[#50C8DC]">
            Microsoft Learn Student Club
          </p>
        </div>
      </div>

      {/* Nav Links */}
      <ul className="flex gap-8 text-sm font-medium">
        {[
          "Home",
          "About Us",
          "The Team",
          "Achievements",
          "Events",
          "Contact Us",
        ].map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-[#50C8DC] transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
