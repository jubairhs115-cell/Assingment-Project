 import type { Technology } from "./Type";

interface Props {
  selected: Technology[];
  onRemove: (name: string) => void;
  onClear: () => void;
}

const Stack = ({ selected, onRemove, onClear }: Props) => {
  return (
    <div className="h-fit rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      
      <h2 className="text-sm font-bold text-slate-800">
        Your Stack
      </h2>

      <p className="mt-1 text-[9px] text-slate-400">
        {selected.length} Technology Selected
      </p>

      <div className="mt-4 space-y-2">
        {selected.length === 0 ? (
          <p className="rounded-lg border border-dashed border-slate-200 p-5 text-center text-[9px] text-slate-400">
            No technology selected
          </p>
        ) : (
          selected.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-lg border border-slate-200 p-2"
            >
              
              <div className="flex items-center gap-2">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-7 w-7 object-contain"
                />

                <div>
                  <p className="text-[10px] font-semibold text-slate-700">
                    {item.name}
                  </p>

                  <p className="text-[8px] text-slate-400">
                    {item.category}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onRemove(item.name)}
                className="px-2 text-sm text-slate-400 hover:text-red-500"
              >
                ×
              </button>

            </div>
          ))
        )}
      </div>

      {selected.length > 0 && (
        <button
          onClick={onClear}
          className="mt-5 w-full rounded-md border border-red-200 py-2 text-[9px] font-medium text-red-500 hover:bg-red-50"
        >
          Remove All
        </button>
      )}

    </div>
  );
};

export default Stack;