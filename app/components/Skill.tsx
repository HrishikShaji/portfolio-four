"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

interface SkillProps {
  item: string;
}

export const Skill: React.FC<SkillProps> = ({ item }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (
      overlayRef.current &&
      titleRef.current &&
      containerRef.current &&
      rect
    ) {
      const animateOverlay = (event: MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          const containerAspectRatio = rect.width / rect.height;

          const entryPointX = event.clientX - rect.left;
          const entryPointY = event.clientY - rect.top;

          const deltaX = entryPointX - rect.width / 2;
          const deltaY = entryPointY - rect.height / 2;

          if (Math.abs(deltaX) / Math.abs(deltaY) > containerAspectRatio) {
            // Movement is primarily horizontal
            gsap.set(overlayRef.current, {
              display: "block",
              yPercent: 0,
              xPercent: deltaX > 0 ? 100 : -100,
            });
          } else {
            // Movement is primarily vertical
            gsap.set(overlayRef.current, {
              display: "block",
              xPercent: 0,
              yPercent: deltaY > 0 ? 100 : -100,
            });
          }

          gsap.to(overlayRef.current, {
            yPercent: 0,
            xPercent: 0,
            duration: 0.5,
          });
        }
      };

      const exitAnimation = (event: MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          const containerAspectRatio = rect.width / rect.height;

          const entryPointX = event.clientX - rect.left;
          const entryPointY = event.clientY - rect.top;

          const deltaX = entryPointX - rect.width / 2;
          const deltaY = entryPointY - rect.height / 2;

          if (Math.abs(deltaX) / Math.abs(deltaY) > containerAspectRatio) {
            // Movement is primarily horizontal
            gsap.to(overlayRef.current, {
              xPercent: deltaX > 0 ? 100 : -100,
              duration: 0.5,
            });
          } else {
            // Movement is primarily vertical
            gsap.to(overlayRef.current, {
              yPercent: deltaY > 0 ? 100 : -100,
              duration: 0.5,
            });
          }
        }
      };

      containerRef.current.addEventListener("mouseenter", animateOverlay);
      containerRef.current.addEventListener("mouseleave", exitAnimation);
    }
  }, {});
  return (
    <div
      ref={containerRef}
      className="overflow-hidden border-2 border-black relative p-2 h-40"
    >
      <div
        ref={overlayRef}
        className="w-full h-full hidden  absolute z-40  top-0 left-0  bg-white mix-blend-difference"
      ></div>
      <h1 ref={titleRef} className="">
        {item}
      </h1>
    </div>
  );
};
