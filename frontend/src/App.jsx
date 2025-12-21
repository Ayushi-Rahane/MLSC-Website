import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-grid text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
