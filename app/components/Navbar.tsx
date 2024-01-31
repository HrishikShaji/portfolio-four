import Link from "next/link";
import { data } from "../data";

export const Navbar = () => {
  return (
    <div className="w-full z-50 fixed top-0 pt-4 pb-10 px-4 border-black border-b-2 flex ">
      <div className="flex-1 ">
        <h1 className="text-3xl font-semibold">{data.personal.name}</h1>
      </div>
      <div className="flex flex-1 justify-between">
        <div className="flex gap-2">
          {data.navLinks.map((item, i) => (
            <Link key={i} href={item.path}>
              {item.title}
            </Link>
          ))}
        </div>
        <button>DARK</button>
      </div>
    </div>
  );
};
