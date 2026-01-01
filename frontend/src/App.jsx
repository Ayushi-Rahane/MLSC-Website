import { memo } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AchievementDetail from "./pages/AchievementDetail";
import NetworkBackground from "./components/NetworkBackground";
import Footer from "./components/Footer";

import Team from "./pages/Team";

const MemoizedNetworkBackground = memo(NetworkBackground);
const MemoizedNavbar = memo(Navbar);
const MemoizedHome = memo(Home);
const MemoizedTeam = memo(Team);

function App() {
  return (
    <div className="min-h-screen text-white relative">
      {/* Background (FULL SCREEN, BEHIND EVERYTHING) */}
      <MemoizedNetworkBackground />

      {/* Foreground Content */}
      <div className="relative z-10">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MemoizedNavbar />
                <main className="pt-20">
                  <MemoizedHome />
                </main>
              </>
            }
          />
          <Route path="/achievement/:id" element={<AchievementDetail />} />
          <Route
            path="/team"
            element={
              <>
                <MemoizedNavbar />
                <main className="pt-20">
                  <MemoizedTeam />
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
      <Analytics />
    </div >
  );
}

export default App;
