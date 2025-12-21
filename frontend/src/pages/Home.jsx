import Carousel from "../components/Carousel";
import Events from "./Events.jsx";
import Contact from "./Contact.jsx";
import Achievements from "./Achievements.jsx";
import Footer from "../components/Footer.jsx";
export default function Home() {
  return (
     <>
         <Carousel/>
         <Events/>
         <Achievements/>
         <Contact/>
         <Footer />
      
     </>
  );
}