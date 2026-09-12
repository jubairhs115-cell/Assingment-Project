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

            <div className="flex items-center justify-between">

              <div className="flex h-8 w-8 items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[8px] font-semibold text-emerald-600">
                {item.badge}
              </span>

            </div>

            <h3 className="mt-4 text-sm font-bold text-slate-800">
              {item.name}
            </h3>

            <p className="mt-2 min-h-[52px] text-[10px] leading-4 text-slate-400">
              {item.description}
            </p>

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