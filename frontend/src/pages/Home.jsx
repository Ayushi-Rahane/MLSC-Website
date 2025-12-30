import Carousel from "../components/Carousel";
import Events from "./Events.jsx";
import Contact from "./Contact.jsx";
import Achievements from "./Achievements.jsx";
import Footer from "../components/Footer.jsx";
import About from "./About.jsx";
import Team from "./Team.jsx";
export default function Home() {
  return (
    <>
      <section id="home">
        <Carousel />
      </section>

      <section id="about">
        <About />
      </section>

   

      <section id="achievements">
        <Achievements />
      </section>

      <section id="events">
        <Events />
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
