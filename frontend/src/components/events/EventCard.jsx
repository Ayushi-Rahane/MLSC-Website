export default function EventCard({ event }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-[#243B55] rounded-xl p-6 hover:bg-[#2B4A6A] transition">

      {/* IMAGE */}
      <div className="w-full md:w-[320px] h-[200px] overflow-hidden rounded-lg">
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
        <h3 className="text-2xl font-semibold mt-2">
          {event.title}
        </h3>

        {/* META */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-300 mt-2">
          <span>🕒 {event.time}</span>
          <span>📍 {event.location}</span>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-4 text-gray-300 max-w-2xl">
          {event.description}
        </p>

        {/* BUTTON */}
        <button className="mt-6 px-6 py-2 rounded-lg bg-[#0078D4] hover:bg-[#50C8DC] transition font-semibold">
          Register Now
        </button>
      </div>
    </div>
  );
}
