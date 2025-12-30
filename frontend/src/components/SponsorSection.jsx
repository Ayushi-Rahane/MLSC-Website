import { useEffect, useRef, useState } from "react";
import {
  Users,
  Briefcase,
  HeartHandshake,
  Mail, Sparkles , Rocket 
} from "lucide-react";

export default function SponsorSection() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  // Scroll animation when form opens
  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Hide everything after success
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      e.target.reset();
    }, 4000);
  };

  return (
    <section className="px-4 md:px-16 py-12 md:py-20 text-white text-center">

      {/* BUTTON WITH ANIMATION AND INSTRUCTIONS */}
{!showForm && !submitted && (
  <div className="space-y-4">

    {/* Instruction text with Sparkles */}
    <p className="flex items-center gap-2 text-gray-300 text-sm md:text-base mb-4">
      <Sparkles size={20} className="flex-shrink-0 text-[#50C8DC]" />
      <span>
        Ready to partner with us? Click the button below to showcase your brand and support student innovation!
      </span>
    </p>

    {/* Button */}
    <button
      onClick={() => setShowForm(true)}
      className="relative w-full md:w-auto px-8 py-4 rounded-xl
        bg-gradient-to-r from-[#0078D4] to-[#50C8DC]
        hover:from-[#50C8DC] hover:to-[#0078D4]
        transition font-semibold text-lg
        group overflow-hidden
      "
      style={{
        boxShadow:
          "0 0 20px rgba(0, 120, 212, 0.6), inset 0 0 10px rgba(80, 200, 220, 0.2)",
      }}
    >
      {/* Animated border glow */}
      <div
        className="absolute inset-0 bg-gradient-to-r
          from-[#50C8DC] via-[#0078D4] to-[#50C8DC]
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300 animate-pulse
        "
        style={{ filter: "blur(5px)" }}
      />

      {/* Button content */}
      <span className="relative flex items-center justify-center gap-2">
        <Rocket size={20} className="flex-shrink-0" />
        <span>Join Us as a Sponsor</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </span>
    </button>
  </div>
)}


      {/* SUCCESS MESSAGE */}
      {submitted && (
        <div className="mt-8 md:mt-12 max-w-2xl mx-auto rounded-xl bg-green-600/20 border border-green-500 p-4 md:p-6 text-green-300">
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            Sponsorship Inquiry Sent Successfully!
          </h3>
          <p className="text-sm md:text-base">
            Thank you for reaching out. Our team will contact you within
            24–48 hours.
          </p>
        </div>
      )}

      {/* FORM */}
      {showForm && !submitted && (
        <div
          ref={formRef}
          className="mt-10 md:mt-16 max-w-7xl mx-auto rounded-xl md:rounded-2xl bg-gradient-to-br from-[#223B5A] to-[#182C4A] p-6 md:p-10 shadow-xl animate-slideUp"
        >

          {/* HEADER */}
          <h2 className="text-2xl md:text-3xl font-bold">
            Sponsor MLSC
          </h2>
          <p className="mt-3 md:mt-4 text-gray-300 max-w-3xl mx-auto text-sm md:text-base">
            Partner with MLSC to empower the next generation of technology leaders.
          </p>

          {/* BENEFITS */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <BenefitCard
              title="Brand Visibility"
              desc="Reach 500+ engaged students"
              icon={<Users size={28} />}
            />
            <BenefitCard
              title="Talent Pipeline"
              desc="Connect with top talent early"
              icon={<Briefcase size={28} />}
            />
            <BenefitCard
              title="Community Impact"
              desc="Support education & innovation"
              icon={<HeartHandshake size={28} />}
            />
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 md:mt-14 rounded-xl bg-[#243E5C] p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            <Input label="Company Name *" placeholder="Your company name" required />
            <Input label="Contact Person *" placeholder="Your name" required />

            <Input label="Email Address *" placeholder="company@example.com" type="email" required />
            <Input label="Phone Number" placeholder="+1 (555) 123-4567" />

            <Input
              label="Industry"
              placeholder="e.g., Technology, Finance, Healthcare"
              className="md:col-span-2"
            />

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-sm md:text-base">
                Sponsorship Interest *
              </label>
              <select required className="w-full rounded-lg bg-[#506A85] px-3 py-2 text-white outline-none focus:ring-2 focus:ring-[#50C8DC]">
                <option value="">Select an option</option>
                <option>Event Sponsorship</option>
                <option>Annual Partnership</option>
                <option>Workshop Sponsorship</option>
                <option>Hackathon Sponsorship</option>
                <option>General Support</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-sm md:text-base">
                Additional Information
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your sponsorship goals..."
                className="w-full rounded-lg bg-[#506A85] px-3 py-2 text-white outline-none focus:ring-2 focus:ring-[#50C8DC]"
              />
            </div>


            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#0078D4] hover:bg-[#50C8DC] transition py-3 font-semibold"
              >
                <Mail size={16} />
                <span className="text-sm md:text-base">Submit Sponsorship Inquiry</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

/* ---------- Reusable Components ---------- */

function Input({ label, className = "", ...props }) {
  return (
    <div className={className}>
      <label className="block mb-2 font-medium text-sm md:text-base">{label}</label>
      <input
        {...props}
        className="w-full rounded-lg bg-[#506A85] px-3 py-2 md:px-4 md:py-3 text-white outline-none focus:ring-2 focus:ring-[#50C8DC]"
      />
    </div>
  );
}

function BenefitCard({ title, desc, icon }) {
  return (
    <div className="rounded-xl bg-[#2C4766] p-4 md:p-6 text-center hover:scale-[1.02] transition">
      <div className="flex justify-center mb-3 text-[#50C8DC]">
        {icon}
      </div>
      <h4 className="text-md md:text-lg font-semibold">{title}</h4>
      <p className="mt-2 text-sm md:text-base text-gray-300">{desc}</p>
    </div>
  );
}
