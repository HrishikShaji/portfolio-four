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
		<motion.g
			id="Group 12"
			animate={{ y: [-40, 0, -40], scale: [0, 1, 0] }}
			transition={{
				times: [0, 1],
				duration: 5,
				repeat: Infinity,
				type: "keyframes",
				ease: "easeInOut",
			}}
		>
			<path
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
