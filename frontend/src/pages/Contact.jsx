import ContactForm from "../components/ContactForm";
import ContactInfoCard from "../components/ContactInfoCard";
import FollowUs from "../components/FollowUs";

export default function Contact() {
  return (
    <section className="min-h-screen px-8 md:px-16 lg:px-24 py-20 text-white">
      {/* Heading */}
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <div className="w-16 h-1 bg-[#0078D4] mt-3 mb-6" />

      <p className="text-gray-300 mb-12">
        Get in touch with us. We'd love to hear from you!
      </p>

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