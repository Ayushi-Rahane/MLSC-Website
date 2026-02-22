import useScrollReveal from "../../hooks/useScrollReveal";
import { Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  const { ref, visible } = useScrollReveal();

  return (
    <Link
      to={`/events/${event.id}`}
      ref={ref}
      className={`
    group relative flex flex-col md:flex-row gap-6
    bg-[#1B2B42]
    rounded-xl p-4 md:p-6
    transition-all duration-500
    ${visible ? "animate-slide-up animate-float" : "opacity-0"}
    hover:scale-[1.03] cursor-pointer
  `}
    >
      {visible && (
        <>
          <span className="spark spark-all top-left" />
          <span className="spark spark-all top-right" />
          <span className="spark spark-all bottom-left" />
          <span className="spark spark-all bottom-right" />
        </>
      )}
      {/* MICROSOFT OUTLINE (HOVER ONLY ROTATION) */}
      <div className="pointer-events-none absolute inset-0 rounded-xl
  opacity-0 group-hover:opacity-100 transition duration-300
">

        {/* OUTLINE */}
        <div
          className={`
    absolute inset-0 rounded-xl transition-all duration-300 group-hover:animate-pulse
    ${event.ongoing ? "group-hover:ms-rotating-outline-fast" : ""}
  `}
          style={{
            border: "2px solid transparent",
            background:
              "linear-gradient(#1B2B42, #1B2B42) padding-box, linear-gradient(90deg, #0e0ae2ff, #006cbaff, #00A4EF, #0480d9ff, #889be5ff) border-box",
          }}
        />


        {/* ELECTRIC SPARKS — ALL AT ONCE */}
        <span className="spark spark-all top-left" />
        <span className="spark spark-all top-right" />
        <span className="spark spark-all bottom-left" />
        <span className="spark spark-all bottom-right" />

      </div>


      {/* IMAGE */}
      <div className="relative w-full md:w-[320px] h-48 md:h-[200px] overflow-hidden rounded-lg flex-shrink-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* ONGOING BADGE */}
        {event.ongoing && (
          <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold
            text-black bg-[#7CFF00]
            rounded-full
            shadow-[0_0_15px_#7CFF00]
            animate-pulse
          ">
            ● ONGOING
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex-1 z-10">
        {/* TAG + DATE */}
        <div className="flex items-center gap-4 mb-2">
          <span className="px-3 py-1 text-sm rounded-full bg-[#0078D4] text-white">
            {event.type}
          </span>
          <span className="text-sm text-[#9BB7D4]">{event.date}</span>
        </div>

        {/* TITLE */}
        <h3 className="text-xl md:text-2xl font-semibold mt-2 text-[#E6F1FF]">
          {event.title}
        </h3>

        {/* META */}
        <div className="flex flex-wrap gap-6 text-sm text-[#BFD7ED] mt-2">
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
        <p className="mt-4 text-[#C7D8E8] text-sm md:text-base leading-relaxed">
          {event.description}
        </p>

        {/* BUTTON */}
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <a
            href="https://imaginecup.microsoft.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-2 rounded-lg
              bg-[#0078D4] hover:bg-[#50C8DC]
              text-white font-semibold
              transition z-20 relative"
            onClick={(e) => e.stopPropagation()}
          >
            Register Now
          </a>

          <span className="text-[#50C8DC] text-sm group-hover:translate-x-1 transition-transform">
            Click to view details →
          </span>
        </div>
      </div>
    </Link>
  );
}
