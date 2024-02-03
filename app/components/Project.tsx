"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface ProjectProps {
  item: Record<string, any>;
}

export const Project: React.FC<ProjectProps> = ({ item }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (overlayRef.current && containerRef.current) {
      const animateOverlay = (event: MouseEvent) => {
        gsap.set(overlayRef.current, {
          display: "block",
          xPercent: -100,
        });

        gsap.to(overlayRef.current, {
          xPercent: 0,
          duration: 1,
        });
      };

      const exit = (event: MouseEvent) => {
        gsap.to(overlayRef.current, {
          xPercent: 100,
          duration: 1,
        });
      };

      containerRef.current.addEventListener("mouseenter", animateOverlay);
      containerRef.current.addEventListener("mouseleave", exit);
    }
  }, {});

  return (
    <div
      ref={containerRef}
      className="border-y-2 border-white p-5  h-full w-full overflow-hidden relative"
    >
      <div
        ref={overlayRef}
        className="w-full h-full absolute bg-white mix-blend-difference hidden top-0 left-0"
      />
      <h1 className="">{item.title}</h1>
    </div>
  );
};
