import * as React from "react";
import { SVGProps } from "react";
import { motion } from "framer-motion";

export const XSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 156 156"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <motion.g id="Group 12">
      <motion.path
        initial={{ pathLength: 0, strokeDasharray: "0 1000" }}
        animate={{ pathLength: 1 }}
        transition={{
          times: [0, 1],
          duration: 2,
          repeat: Infinity,
          type: "keyframes",
          ease: "easeInOut",
        }}
        id="Line 1"
        d="M38.8909 116.673L116.673 38.8909"
        stroke="black"
        strokeWidth={20}
        strokeLinecap="round"
      />
      <path
        id="Line 2"
        d="M116.673 116.673L38.8908 38.8909"
        stroke="black"
        strokeWidth={20}
        strokeLinecap="round"
      />
    </motion.g>
  </svg>
);
