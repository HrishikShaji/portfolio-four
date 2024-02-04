"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Contact = () => {
  const overlayOne = useRef<HTMLDivElement>(null);
  const overlayTwo = useRef<HTMLDivElement>(null);
  const overlayThree = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (
      overlayThree.current &&
      overlayTwo.current &&
      overlayOne.current &&
      container.current
    ) {
      const tl = gsap.timeline();
      tl.fromTo(
        overlayOne.current,
        { scaleY: 0, transformOrigin: "bottom" },
        {
          scaleY: 1,
          duration: 1,
          scrollTrigger: {
            trigger: container.current,
            start: "top center",
            end: "top 10%",
            scrub: 1,
            markers: true,
          },
        },
      )
        .fromTo(
          overlayTwo.current,
          { scaleY: 0, transformOrigin: "bottom" },
          {
            scaleY: 1,
            duration: 1,
            scrollTrigger: {
              trigger: container.current,
              start: "top center",
              end: "top 10%",
              scrub: 1,
              markers: true,
            },
          },
        )
        .fromTo(
          overlayThree.current,
          { scaleY: 0, transformOrigin: "bottom" },
          {
            scaleY: 1,
            duration: 1,
            scrollTrigger: {
              trigger: container.current,
              start: "top center",
              end: "top 10%",
              scrub: 1,
              markers: true,
            },
          },
        );
    }
  }, {});
  return (
    <div
      ref={container}
      className="h-screen w-full bg-black flex flex-col gap-20 justify-center items-center"
    >
      <div className="w-full">
        <h1 className="text-8xl text-white">Feel Free to Contact Me.</h1>
      </div>
      <form className="flex gap-20 items-center">
        <div className="flex gap-5 text-white  px-5 flex-col">
          <div className="flex gap-5">
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <input className="p-2 rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input className="p-2 rounded-md" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Message</label>
            <textarea className="p-2 rounded-md w-full h-[20vh]" />
          </div>
        </div>
        <button className="h-20 w-20 rounded-full bg-white">SEND</button>
      </form>
    </div>
  );
};
