import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../components/Carousel";
import Events from "./Events.jsx";
import Contact from "./Contact.jsx";
import Achievements from "./Achievements.jsx";
import Footer from "../components/Footer.jsx";
import About from "./About.jsx";
import Team from "./Team.jsx";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <section id="home">
        <Carousel />
      </section>

      <section id="events">
        <Events />
      </section>

      <section id="achievements">
        <Achievements />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}
/*
   <section id="team">
        <Team />
      </section>
*/
