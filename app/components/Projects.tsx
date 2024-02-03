import { data } from "../data";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <div className="py-10 flex flex-col bg-black text-white">
      {data.projects.data.map((item, i) => (
        <Project key={i} item={item} />
      ))}
    </div>
  );
};
