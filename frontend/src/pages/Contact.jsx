import ContactForm from "../components/ContactForm";
import ContactInfoCard from "../components/ContactInfoCard";
import FollowUs from "../components/FollowUs";
import SponsorSection from "../components/SponsorSection";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  return (
    <section ref={ref} className={`min-h-screen px-8 md:px-16 lg:px-24 py-20 text-white ${visible ? 'animate-slide-up' : 'opacity-0'}`}>
      {/* Heading */}
      <div className="flex flex-col items-center mb-12">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <div className="w-16 h-1 bg-[#0078D4] mt-3 mx-auto" />
      </div>
      <p className="text-gray-300 mb-1 text-center">
        Get in touch with us. We'd love to hear from you!
      </p>
       <SponsorSection/>
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ContactForm />
         {/* Right column */}
        <div>
            <ContactInfoCard />
            <FollowUs />
        </div>
      </div>
    </section>
  );
}
