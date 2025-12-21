import { useEffect, useRef, useState } from "react";
import {
  Users,
  Briefcase,
  HeartHandshake,
  Mail
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
    <section className="px-8 md:px-16 py-20 text-white text-center">

      {/* BUTTON ONLY */}
      {!showForm && !submitted && (
        <button
          onClick={() => setShowForm(true)}
          className="px-8 py-4 rounded-xl bg-[#0078D4] hover:bg-[#50C8DC] transition font-semibold text-lg"
        >
          Join Us as a Sponsor
        </button>
      )}

      {/* SUCCESS MESSAGE */}
      {submitted && (
        <div className="mt-12 max-w-2xl mx-auto rounded-xl bg-green-600/20 border border-green-500 p-6 text-green-300">
          <h3 className="text-xl font-semibold mb-2">
            Sponsorship Inquiry Sent Successfully!
          </h3>
          <p>
            Thank you for reaching out. Our team will contact you within
            24–48 hours.
          </p>
        </div>
      )}

      {/* FORM */}
      {showForm && !submitted && (
        <div
          ref={formRef}
          className="mt-16 max-w-7xl mx-auto rounded-2xl bg-gradient-to-br from-[#223B5A] to-[#182C4A] p-10 shadow-xl
                     animate-slideUp"
        >

          {/* HEADER */}
          <h2 className="text-3xl md:text-4xl font-bold">
            Sponsor MLSC
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Partner with MLSC to empower the next generation of technology leaders.
          </p>

          {/* BENEFITS */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <BenefitCard
              title="Brand Visibility"
              desc="Reach 500+ engaged students"
              icon={<Users size={32} />}
            />
            <BenefitCard
              title="Talent Pipeline"
              desc="Connect with top talent early"
              icon={<Briefcase size={32} />}
            />
            <BenefitCard
              title="Community Impact"
              desc="Support education & innovation"
              icon={<HeartHandshake size={32} />}
            />
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-14 rounded-xl bg-[#243E5C] p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
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
              <label className="block mb-2 font-medium">
                Sponsorship Interest *
              </label>
              <select required className="input">
                <option value="">Select an option</option>
                <option>Event Sponsorship</option>
                <option>Annual Partnership</option>
                <option>Workshop Sponsorship</option>
                <option>Hackathon Sponsorship</option>
                <option>General Support</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">
                Additional Information
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your sponsorship goals..."
                className="w-full rounded-lg bg-[#506A85] px-4 py-3 text-white outline-none focus:ring-2 focus:ring-[#50C8DC]"
              />
            </div>


            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#0078D4] hover:bg-[#50C8DC] transition py-3 font-semibold"
              >
                <Mail size={18} />
                Submit Sponsorship Inquiry
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
      <label className="block mb-2 font-medium">{label}</label>
      <input
        {...props}
        className="input"
      />
    </div>
  );
}

function BenefitCard({ title, desc, icon }) {
  return (
    <div className="rounded-xl bg-[#2C4766] p-6 text-center hover:scale-[1.02] transition">
      <div className="flex justify-center mb-4 text-[#50C8DC]">
        {icon}
      </div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-2 text-gray-300">{desc}</p>
    </div>
  );
}
