"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Duru_Sans } from "next/font/google";
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
      const rect = oneRef.current?.getBoundingClientRect();
      const animateOne = () => {
        gsap.to(oneRef.current, {
          scaleX: 2,
          transformOrigin: "left",
          duration: 1,
          backgroundColor: "black",
        });
        gsap.to(twoRef.current, { xPercent: 100, duration: 1 });
      };

      const animateTwo = () => {
        console.log("started");
        gsap.to(twoRef.current, {
          scaleX: 2,
          transformOrigin: "left",
          duration: 1,
          backgroundColor: "black",
        });
      };

      const exitOne = () => {
        gsap.to(oneRef.current, {
          scaleX: 1,
          duration: 1,
          backgroundColor: "white",
        });
        gsap.to(twoRef.current, { xPercent: 0, duration: 1 });
      };
      const exitTwo = () => {
        gsap.to(twoRef.current, {
          scaleX: 1,
          duration: 1,
          backgroundColor: "white",
        });
      };

      twoRef.current.addEventListener("mouseenter", animateTwo);
      twoRef.current.addEventListener("mouseleave", exitTwo);
      oneRef.current.addEventListener("mouseenter", animateOne);
      oneRef.current.addEventListener("mouseleave", exitOne);
    }
  }, {});

  return (
    <div className="w-full h-full py-10">
      <div className="flex w-full h-[50vh]">
        <div ref={oneRef} className="border-2 w-full border-black" />
        <div
          ref={twoRef}
          className="border-r-2 border-y-2 w-full border-black"
        />
        <div
          ref={threeRef}
          className="border-r-2 border-y-2 w-full border-black"
        />
        <div
          ref={fourRef}
          className="border-r-2 border-y-2  w-full border-black"
        />
      </div>
    </div>
  );
};
