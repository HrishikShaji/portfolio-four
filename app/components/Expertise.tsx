"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ExpertItem } from "./ExpertItem";

export const Expertise = () => {
  return (
    <div className="h-full w-full py-10">
      <div className="flex w-full h-[60vh]">
        <div className="border-2 border-black p-3 flex items-end h-full w-full bg-black">
          <h1 className="text-5xl text-white">My Areas Of Expertise</h1>
        </div>
        {Array.from({ length: 4 }).map((_, i) => (
          <ExpertItem key={i} />
        ))}
      </div>
    </div>
  );
};
