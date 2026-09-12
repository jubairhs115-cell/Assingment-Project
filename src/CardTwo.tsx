 import type { Technology } from "./Type";

interface Props {
  tech: Technology[];
  selected: Technology[];
  onAdd: (technology: Technology) => void;
}

const CardTwo = ({ tech, selected, onAdd }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
      {tech.map((item) => {
        const isSelected = selected.some(
          (technology) => technology.name === item.name
        );

        return (
          <div
            key={item.name}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            {/* Icon + Badge */}
            <div className="flex items-center justify-between">
              <div className="flex h-8 w-8 items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span
                className={`rounded-full px-2.5 py-1 text-[8px] font-semibold ${
                  item.badge === "Popular"
                    ? "bg-cyan-50 text-cyan-500"
                    : item.badge === "Versatile"
                    ? "bg-green-50 text-green-600"
                    : item.badge === "Fast"
                    ? "bg-orange-50 text-orange-500"
                    : item.badge === "SSR/Edge"
                    ? "bg-purple-100 text-purple-800"
                    : item.badge === "Standard"
                    ? "bg-green-50 text-green-600"
                    : item.badge === "Top SQL"
                    ? "bg-blue-50 text-blue-600"
                    : item.badge === "Cache"
                    ? "bg-red-50 text-red-500"
                    : item.badge === "Ubiquitous"
                    ? "bg-yellow-50 text-yellow-600"
                    : item.badge === "Essential"
                    ? "bg-blue-50 text-blue-600"
                    : item.badge === "Robust"
                    ? "bg-red-50 text-red-600"
                    : item.badge === "Modern"
                    ? "bg-cyan-50 text-cyan-600"
                    : item.badge === "Containers"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-slate-50 text-slate-500"
                }`}
              >
                {item.badge}
              </span>
            </div>

            {/* Technology Name */}
            <h3 className="mt-4 text-sm font-bold text-slate-800">
              {item.name}
            </h3>

            {/* Description */}
            <p className="mt-2 min-h-[52px] text-[10px] leading-4 text-slate-400">
              {item.description}
            </p>

            {/* Category + Difficulty + Rating */}
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
              <span className="rounded bg-slate-100 px-2 py-1 text-[8px] text-slate-500">
                {item.category}
              </span>

              <span className="text-[8px] text-slate-400">
                {item.difficulty}
              </span>

              <span className="text-[9px] text-slate-500">
                <span className="text-amber-400">★</span>{" "}
                {item.rating}
              </span>
            </div>

            {/* Add Button */}
            <button
              onClick={() => onAdd(item)}
              disabled={isSelected}
              className={`mt-3 h-8 w-full rounded-md text-[9px] font-medium text-white ${
                isSelected
                  ? "cursor-not-allowed bg-slate-400"
                  : "bg-slate-900 hover:bg-slate-800"
              }`}
            >
              {isSelected ? "Added to Stack" : "Add to Stack"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CardTwo;