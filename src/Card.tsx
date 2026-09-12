import { use } from "react";
import type { Technology } from "./Type";
import CardTwo from "./CardTwo";

interface Props {
  technologyPromise: Promise<Technology[]>;
}

const Card = ({ technologyPromise }: Props) => {
  const tech = use(technologyPromise);

  return (
    <div>

      <div className="text-center md:text-left">
        <h1 className="text-[40px] font-extrabold">Explore the  <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent mb-11">Technologies</span></h1>

        <p className="text-[16px] font-normal text-[#64748B] mb-13">Pick one technology per category to build your ideal stack.</p>
      </div>
      <CardTwo tech={tech} />
    </div>
  );
};

export default Card;