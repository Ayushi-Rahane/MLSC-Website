import Carousel from "../components/Carousel";
import EventsSection from "../components/events/EventsSection";
import Contact from "./Contact.jsx";
import Achievements from "./Achievements.jsx";
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

      <section id="team">
        <Team />
      </section>

      <section id="achievements">
        <Achievements />
      </section>

      <section id="events">
        <EventsSection />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}