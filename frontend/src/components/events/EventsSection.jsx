import EventCard from "./EventCard";
import { events } from "../../data/events";

export default function EventsSection() {
  return (
    <section className="min-h-screen px-8 md:px-16 lg:px-24 py-20 text-white">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold">Events</h1>
      <div className="w-16 h-1 bg-[#0078D4] mt-3 mb-12" />

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
