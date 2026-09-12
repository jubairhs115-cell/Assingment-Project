 import { use, useState } from "react";
import type { Technology } from "./Type";
import CardTwo from "./CardTwo";
import Stack from "./Stack";

interface Props {
  technologyPromise: Promise<Technology[]>;
}

const Card = ({ technologyPromise }: Props) => {
  
  const tech = use(technologyPromise);

  const [selected, setSelected] = useState<Technology[]>([]);

  const handleAdd = (technology: Technology) => {
    setSelected((prev) => [...prev, technology]);
  };

  const handleRemove = (name: string) => {
    setSelected((prev) =>
      prev.filter((item) => item.name !== name)
    );
  };

  const handleClear = () => {
    setSelected([]);
  };

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-slate-800">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Pick one technology per category to build your ideal stack.
        </p>

      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">

        <CardTwo
          tech={tech}
          selected={selected}
          onAdd={handleAdd}
        />

        <Stack
          selected={selected}
          onRemove={handleRemove}
          onClear={handleClear}
        />

      </div>

    </section>
  );
};

export default Card;