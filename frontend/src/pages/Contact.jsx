import ContactForm from "../components/ContactForm";
import ContactInfoCard from "../components/ContactInfoCard";
import FollowUs from "../components/FollowUs";
import SponsorSection from "../components/SponsorSection";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  const { ref: sectionRef, visible: sectionVisible } = useScrollReveal();
  const { ref: headingRef, visible: headingVisible } = useScrollReveal();
  return (
    <section ref={sectionRef} className={`min-h-screen px-8 md:px-16 lg:px-24 py-20 text-white ${sectionVisible ? 'animate-slide-up' : 'opacity-0'}`}>
      {/* Heading */}
      <div ref={headingRef} className={`flex flex-col items-center mb-12 relative ${headingVisible ? 'animate-float-header' : ''}`}>
            <h1 className="text-6xl text-white text-center font-zendots font-semibold drop-shadow-[0_0_20px_rgba(0,164,239,0.3)]">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-[#00A4EF] mt-3 mx-auto rounded-full" 
              style={{ boxShadow: "0 0 15px rgba(0, 164, 239, 0.45)" }}
            />
            {headingVisible && (
              <>
                <span className="spark spark-all top-left" />
                <span className="spark spark-all top-right" />
              </>
            )}
      </div>
      <p className="text-gray-300 mb-1 text-center animate-float-x">
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