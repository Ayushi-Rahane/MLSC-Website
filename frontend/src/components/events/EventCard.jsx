import useScrollReveal from "../../hooks/useScrollReveal";
import { Clock, MapPin } from "lucide-react";

export default function EventCard({ event }) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row gap-6 bg-[#243B55] rounded-xl p-4 md:p-6 transition
      ${visible ? "animate-slide-up" : "opacity-0"}`}
    >
      {/* IMAGE */}
      <div className="w-full md:w-[320px] h-48 md:h-[200px] overflow-hidden rounded-lg flex-shrink-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1 text-white">
        {/* TAG + DATE */}
        <div className="flex items-center gap-4 mb-2">
          <span className="px-3 py-1 text-sm rounded-full bg-[#0078D4]">
            {event.type}
          </span>
          <span className="text-sm text-gray-300">{event.date}</span>
        </div>

        {/* TITLE */}
        <h3 className="text-xl md:text-2xl font-semibold mt-2">
          {event.title}
        </h3>

        {/* META */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-300 mt-2">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#50C8DC]" />
            {event.time}
          </span>

          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#50C8DC]" />
            {event.location}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-4 text-gray-300 text-sm md:text-base">
          {event.description}
        </p>

        {/* BUTTON */}
        <div className="mt-4">
          <a
            href="https://imaginecup.microsoft.com"
            target="_blank"
            rel="noreferrer"
            className="block w-full md:inline-block md:w-auto text-center px-6 py-2 rounded-lg bg-[#0078D4] hover:bg-[#50C8DC] transition font-semibold"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}
