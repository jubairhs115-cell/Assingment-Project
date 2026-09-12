import { use, useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import type { Technology } from "./Type";

import CardTwo from "./CardTwo";

import Stack from "./Stack";

import "react-toastify/dist/ReactToastify.css";

interface Props {
  technologyPromise: Promise<Technology[]>;
}

const Card = ({ technologyPromise }: Props) => {
  const tech = use(technologyPromise);

  const [selected, setSelected] = useState<Technology[]>([]);

  const handleAdd = (technology: Technology) => {
    setSelected((prev) => [...prev, technology]);

    toast.success(`${technology.name} added successfully!`);
  };

  const handleRemove = (name: string) => {
    setSelected((prev) =>
      prev.filter((item) => item.name !== name)
    );

    toast.success(`${name} removed successfully!`);
  };

  const handleClear = () => {
    setSelected([]);

    toast.success("All technologies removed successfully!");
  };

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      
      <div className="mb-8 text-center lg:text-left">
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

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
      
    </section>
  );
};

export default Card;