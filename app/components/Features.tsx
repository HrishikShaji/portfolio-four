"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Features = () => {
  const oneRef = useRef<HTMLDivElement>(null);
  const twoRef = useRef<HTMLDivElement>(null);
  const threeRef = useRef<HTMLDivElement>(null);
  const fourRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (
      oneRef.current &&
      twoRef.current &&
      threeRef.current &&
      fourRef.current
    ) {
      const animateOne = (event: MouseEvent) => {
        console.log(event);
        const rect = oneRef.current?.getBoundingClientRect();
        if (oneRef.current) {
          gsap.to(oneRef.current, { scaleX: 3, duration: 1 });
        }
      };

      const animateExit = (event: MouseEvent) => {
        if (oneRef.current) {
          gsap.to(oneRef.current, { scaleX: 1, duration: 1 });
        }
      };
      oneRef.current.addEventListener("mouseenter", animateOne);
      oneRef.current.addEventListener("mouseleave", animateExit);
    }
  }, {});

  return (
    <div className="w-full h-full py-10">
      <div className="flex w-full h-[50vh]">
        <div ref={oneRef} className="border-2 w-full border-black" />
        <div ref={twoRef} className="border-2 w-full border-black" />
        <div ref={threeRef} className="border-2 w-full border-black" />
        <div ref={fourRef} className="border-2 w-full border-black" />
      </div>
    </div>
  );
};
