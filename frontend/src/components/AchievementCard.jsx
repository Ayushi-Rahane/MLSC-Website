import useScrollAnimation from "../hooks/useScrollAnimation";

export default function AchievementCard({ item, isActive, onClick }) {
  const [ref, visible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`
        cursor-pointer w-full md:max-w-md rounded-xl bg-[#243A57] overflow-hidden
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        ${isActive ? "ring-2 ring-[#50C8DC]" : ""}
      `}
    >
      <img src={item.image} className="w-full h-48 object-cover" />

      <div className="p-5">
        <p className="text-xs text-[#50C8DC]">{item.date}</p>
        <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
        <p className="text-sm text-gray-300 mt-2">{item.short}</p>

        <p className="text-[#50C8DC] text-sm mt-3">
          {isActive ? "← Click to collapse" : "Click to view details →"}
        </p>
      </div>
    </div>
  );
}
