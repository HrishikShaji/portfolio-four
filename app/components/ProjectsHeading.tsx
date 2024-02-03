"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const ProjectsHeading = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLHeadingElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (
      containerRef.current &&
      targetRef.current &&
      endRef.current &&
      overlay.current
    ) {
      const amountToScroll = targetRef.current.offsetWidth - window.innerWidth;
      const textLength = amountToScroll - endRef.current.offsetWidth;

      const tween = gsap.to(targetRef.current, {
        x: -amountToScroll,
        duration: 2,
        scrollTrigger: {
          trigger: containerRef.current,
          pin: containerRef.current,
          start: "top 20%",
          end: "+=" + amountToScroll,
          scrub: 1,
        },
      });
      const tl = gsap.timeline();

      gsap.set(overlay.current, {
        yPercent: 100,
        display: "block",
        transformOrigin: "bottom",
      });
      gsap.set(endRef.current, {
        scale: 0,
      });

      tl.to(endRef.current, {
        scale: 1,
        scrollTrigger: {
          containerAnimation: tween,
          trigger: endRef.current,
          start: "left 75%",
          end: "left 50%",
          scrub: 1,
          markers: true,
        },
      });
      gsap.to(overlay.current, {
        yPercent: 0,

        scrollTrigger: {
          containerAnimation: tween,
          trigger: overlay.current,
          start: "left 10%",
          end: "left 1%",
          scrub: 1,
          markers: true,
        },
      });
    }
  }, {});
  return (
    <div ref={containerRef} className="overflow-x-scroll flex gap-10">
      <div className="flex gap-10" ref={targetRef}>
        <h1 className="text-[400px]  whitespace-nowrap ">
          THESE ARE MY PROJECTS.
        </h1>
        <div className="flex w-screen overflow-hidden justify-center items-center relative">
          <div
            ref={overlay}
            className="w-full h-full bg-white mix-blend-difference absolute top-0 left-0 hidden"
          />
          <h1
            ref={endRef}
            className="mix-blend-difference text-[400px] whitespace-nowrap  "
          >
            hello
          </h1>
        </div>
      </div>
    </div>
  );
};
