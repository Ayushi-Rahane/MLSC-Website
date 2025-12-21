import MlscLogo from "../assets/mlsc_logo.png";

export default function Navbar() {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full px-10 py-4 flex items-center justify-between bg-[#182C4A] fixed top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center">
          <img src={MlscLogo} alt="MLSC Logo" />
        </div>
        <div>
          <h1 className="font-semibold text-lg">MLSC</h1>
          <p className="text-sm text-[#50C8DC]">
            Microsoft Learn Student Club
          </p>
        </div>
      </div>

      <ul className="flex gap-8 text-sm font-medium">
        <li className="hover:text-[#50C8DC] transition cursor-pointer">
          <button onClick={() => handleScroll('home')}>Home</button>
        </li>
        <li className="hover:text-[#50C8DC] transition cursor-pointer">
          <button onClick={() => handleScroll('about')}>About Us</button>
        </li>
        <li className="hover:text-[#50C8DC] transition cursor-pointer">
          <button onClick={() => handleScroll('team')}>The Team</button>
        </li>
        <li className="hover:text-[#50C8DC] transition cursor-pointer">
          <button onClick={() => handleScroll('achievements')}>Achievements</button>
        </li>
        <li className="hover:text-[#50C8DC] transition cursor-pointer">
          <button onClick={() => handleScroll('events')}>Events</button>
        </li>
        <li className="hover:text-[#50C8DC] transition cursor-pointer">
          <button onClick={() => handleScroll('contact')}>Contact Us</button>
        </li>
      </ul>
    </nav>
  );
}