"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../data";
import { useRef, useState } from "react";
import gsap from "gsap";
import { Testimonial } from "./Testimonial";

export const Testimonials = () => {
  const [item, setItem] = useState<Record<string, any>>({});
  return (
    <div className="flex h-[60vh] w-full">
      <div className="w-[35%] h-full border-2 border-black overflow-y-scroll">
        {data.testimonials.map((item, i) => (
          <Testimonial item={item} key={i} setItem={setItem} />
        ))}
      </div>
      <div className="w-[65%] p-20 h-full border-2 border-black">
        <h1 className="text-6xl">{`"`}</h1>
        <p className="text-3xl">{item.desc}</p>
      </div>
    </div>
  );
};
