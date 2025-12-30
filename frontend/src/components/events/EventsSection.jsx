import EventCard from "./EventCard";
import { events } from "../../data/events";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function EventsSection() {
  const { ref: headingRef, visible: headingVisible } = useScrollReveal();
  return (
    <section className="min-h-screen px-8 md:px-16 lg:px-24 py-20 text-white">

      {/* PAGE TITLE */}
    <div ref={headingRef} className={`flex flex-col items-center mb-12 relative ${headingVisible ? 'animate-float-header' : ''}`}>
  <h1 className="text-6xl font-black text-center"
    style={{
      background: "linear-gradient(135deg, #FFB900 0%, #50C8DC 50%, #00A4EF 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      filter: "drop-shadow(0 0 20px rgba(255, 185, 0, 0.3))"
    }}
  >
    Events
  </h1>
  <div className="w-24 h-1 bg-gradient-to-r from-[#FFB900] via-[#50C8DC] to-[#00A4EF] mt-3 mx-auto rounded-full" 
    style={{ boxShadow: "0 0 15px rgba(255, 185, 0, 0.6)" }}
  />
</div>
      {headingVisible && (
        <>
          <span className="spark spark-all top-left" />
          <span className="spark spark-all top-right" />
        </>
      )}

      {/* SUBTITLE */}
      <h2 className="text-2xl font-semibold mb-8">
        Upcoming Events
      </h2>

      {/* EVENTS LIST */}
      <div className="flex flex-col gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
