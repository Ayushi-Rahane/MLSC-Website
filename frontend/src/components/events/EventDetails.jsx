import { useParams, Link } from "react-router-dom";
import { events } from "../../data/events";
import { Clock, MapPin, ArrowLeft, Download, Calendar } from "lucide-react";

export default function EventDetails() {
    const { id } = useParams();
    const event = events.find((e) => e.id === Number(id));

    if (!event) {
        return (
            <div className="min-h-screen text-white flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Event not found</h2>
                <Link to="/" className="text-[#50C8DC] hover:underline">
                    Return to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen text-white pt-24 px-8 md:px-16 lg:px-24 pb-20">
            <Link
                to="/"
                className="inline-flex items-center gap-2 text-[#50C8DC] hover:text-[#0078D4] transition mb-8"
            >
                <ArrowLeft className="w-5 h-5" />
                Back to Events
            </Link>

            <div className="max-w-5xl mx-auto">
                {/* HEADER IMAGE */}
                <div className="relative rounded-2xl overflow-hidden mb-8 group shadow-2xl border border-[#243A57]">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
                </div>

                {/* HEADER INFO */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-4 py-1.5 text-sm font-bold tracking-wide rounded-full bg-[#0078D4] text-white shadow-lg shadow-blue-900/50">
                            {event.type}
                        </span>
                        {event.ongoing && (
                            <span className="px-3 py-1 text-xs font-bold text-black bg-[#7CFF00] rounded-full animate-pulse shadow-[0_0_15px_#7CFF00]">
                                ● ONGOING
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
                        {event.title}
                    </h1>

                    <div className="flex flex-wrap gap-6 text-[#BFD7ED] text-lg">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-[#50C8DC]" />
                            {event.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-[#50C8DC]" />
                            {event.time}
                        </span>
                        <span className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-[#50C8DC]" />
                            {event.location}
                        </span>
                    </div>
                </div>

                {/* CONTENT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* LEFT: INFO & STEPS */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* OVERVIEW */}
                        <section className="bg-[#1B2B42]/50 p-8 rounded-2xl border border-[#243A57] backdrop-blur-sm">
                            <h2 className="text-2xl font-bold mb-6 text-[#E6F1FF] flex items-center gap-3">
                                Overview
                                <div className="h-1 w-12 bg-[#50C8DC] rounded-full" />
                            </h2>
                            <p className="text-[#C7D8E8] leading-relaxed whitespace-pre-line text-lg">
                                {event.overview || event.description}
                            </p>
                        </section>

                        {/* TIMELINE / STEPS */}
                        {event.steps && (
                            <section>
                                <h2 className="text-2xl font-bold mb-8 text-[#E6F1FF] flex items-center gap-3">
                                    Event Timeline
                                    <div className="h-1 w-12 bg-[#50C8DC] rounded-full" />
                                </h2>
                                <div className="space-y-6">
                                    {event.steps.map((step, index) => (
                                        <div key={index} className="flex gap-6 group">
                                            <div className="flex flex-col items-center">
                                                <div className="w-8 h-8 rounded-full bg-[#50C8DC] text-[#0F172A] font-bold flex items-center justify-center flex-shrink-0 z-10 group-hover:scale-110 transition-transform">
                                                    {index + 1}
                                                </div>
                                                {index !== event.steps.length - 1 && (
                                                    <div className="w-0.5 h-full bg-[#243A57] group-hover:bg-[#50C8DC]/50 transition-colors my-2" />
                                                )}
                                            </div>
                                            <div className="bg-[#1B2B42] p-6 rounded-xl flex-1 border border-[#243A57] hover:border-[#50C8DC] transition-all">
                                                <span className="text-sm font-semibold text-[#50C8DC]">{step.date}</span>
                                                <h3 className="text-xl font-bold text-white mt-1 mb-2">{step.title}</h3>
                                                <p className="text-[#9BB7D4] text-sm">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* RIGHT: SIDEBAR */}
                    <div className="space-y-8">
                        {/* ACTIONS CARD */}
                        <div className="bg-[#1B2B42] p-6 rounded-2xl border border-[#243A57] sticky top-24">
                            <h3 className="text-xl font-bold text-white mb-6">Action Center</h3>

                            <div className="space-y-4">
                                <a
                                    href="https://imaginecup.microsoft.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center w-full py-4 rounded-xl bg-[#0078D4] hover:bg-[#50C8DC] text-white font-bold transition shadow-[0_0_20px_rgba(0,120,212,0.4)] hover:shadow-[0_0_30px_rgba(80,200,220,0.6)]"
                                >
                                    Register for Event
                                </a>

                                {event.rulesLink && (
                                    <a
                                        href={event.rulesLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#243A57] hover:bg-[#334E6F] text-[#E6F1FF] font-semibold border border-[#334E6F] transition"
                                    >
                                        <Download className="w-5 h-5" />
                                        Download RuleBook
                                    </a>
                                )}
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#243A57]">
                                <p className="text-sm text-[#9BB7D4] text-center">
                                    Have questions? <a href="/#contact" className="text-[#50C8DC] hover:underline">Contact us</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
