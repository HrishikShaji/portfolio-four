import { data } from "../data";

export const Testimonials = () => {
  return (
    <div className="flex h-[60vh] w-full">
      <div className="w-[35%] h-full border-2 border-black overflow-y-scroll">
        {data.testimonials.map((item, i) => (
          <div key={i} className="flex flex-col gap-1 p-5">
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
      <div className="w-[65%] h-full border-2 border-black"></div>
    </div>
  );
};
