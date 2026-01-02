import EventCard from "./EventCard";
import { events } from "../../data/events";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function EventsSection() {
  const { ref: headingRef, visible: headingVisible } = useScrollReveal();
  return (
    <section className="min-h-screen px-8 md:px-16 lg:px-24 py-20 text-white">

      {/* PAGE TITLE */}
    <div ref={headingRef} className={`flex flex-col items-center mb-12 relative ${headingVisible ? 'animate-float-header' : ''}`}>
  <h1 className="text-6xl text-center font-zendots font-semi bold text-white drop-shadow-[0_0_20px_rgba(255,185,0,0.3)]">
    Events
  </h1>
  <div className="w-24 h-1 bg-[#50C8DC] mt-3 mx-auto rounded-full" style={{ boxShadow: "0 0 15px rgba(80,200,220,0.45)" }} />
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
