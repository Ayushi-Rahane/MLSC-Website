import useScrollReveal from "../hooks/useScrollReveal";

export default function ContactForm() {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className={`bg-[#243A57] rounded-xl p-8 shadow-lg ${visible ? 'animate-slide-up' : 'opacity-0'}`}>
      <h2 className="text-2xl font-semibold mb-6">
        Send us a Message
      </h2>

      <form className="space-y-5">
        {/* Name */}
        <div>
          <label className="block mb-2 text-sm">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-lg bg-[#3A4A63] px-4 py-3 outline-none focus:ring-2 focus:ring-[#50C8DC]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm">Email</label>
          <input
            type="email"
            placeholder="your.email@example.com"
            className="w-full rounded-lg bg-[#3A4A63] px-4 py-3 outline-none focus:ring-2 focus:ring-[#50C8DC]"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-2 text-sm">Subject</label>
          <input
            type="text"
            placeholder="What is this about?"
            className="w-full rounded-lg bg-[#3A4A63] px-4 py-3 outline-none focus:ring-2 focus:ring-[#50C8DC]"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-sm">Message</label>
          <textarea
            rows="4"
            placeholder="Your message..."
            className="w-full rounded-lg bg-[#3A4A63] px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[#50C8DC]"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-4 px-6 py-3 rounded-lg bg-[#0078D4] hover:bg-[#50C8DC] transition font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
