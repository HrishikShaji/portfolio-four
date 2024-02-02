"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

export const XIcon = () => {
  const lineOneRef = useRef<SVGPathElement>(null);
  const lineTwoRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    if (lineOneRef.current && lineTwoRef.current) {
      const lineOneLength = lineOneRef.current.getTotalLength();
      const lineTwoLength = lineTwoRef.current.getTotalLength();
      const tl = gsap.timeline();
      gsap.set(lineTwoRef.current, {
        strokeDasharray: lineOneLength, // initially no stroke
        strokeDashoffset: -lineOneLength, // offset to hide the stroke
      });
      gsap.set(lineOneRef.current, {
        strokeDasharray: lineOneLength,
        strokeDashoffset: -lineOneLength,
        x: -50,
      });
      tl.to(
        lineTwoRef.current,

        {
          strokeDashoffset: 0, // no offset to show full stroke
          duration: 1,
        },
      )
        .to(lineOneRef.current, {
          x: 0,
          duration: 1,
        })
        .to(lineOneRef.current, {
          strokeDashoffset: 0,
          duration: 1,
        });
    }
  }, {});

  return (
    <svg
      width="156"
      height="156"
      viewBox="0 0 156 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 12">
        <path
          ref={lineOneRef}
          d="M38.8909 116.673L116.673 38.8909"
          stroke="red"
          strokeWidth="20"
          strokeLinecap="round"
        />
        <path
          ref={lineTwoRef}
          d="M116.673 116.673L38.8908 38.8909"
          stroke="red"
          strokeWidth="20"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
