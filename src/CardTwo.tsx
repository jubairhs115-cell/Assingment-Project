 import type { Technology } from "./Type";

interface Props {
  tech: Technology[];
}

const CardTwo = ({ tech }: Props) => {
  return (
    <div>
      {tech.map((items) => {
        return (
          <div key={items.name}>
            {items.name}
          </div>
        );
      })}
    </div>
  );
};

export default CardTwo;