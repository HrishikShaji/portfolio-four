"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const XIcon = () => {
	useGSAP(() => {
		const lineOne = document.getElementById("line-one");
		const lineTwo = document.getElementById("line-two");

		const tl = gsap.timeline();
		tl.fromTo(
			lineOne,
			{
				strokeWidth: 0,
				strokeDashoffset: 0,
			},
			{
				strokeWidth: 20,

				strokeDashoffset: 20,
				duration: 1,
			},
		);
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
					id="line-one"
					d="M38.8909 116.673L116.673 38.8909"
					stroke="red"
					stroke-width="20"
					stroke-linecap="round"
				/>
				<path
					id="line-two"
					d="M116.673 116.673L38.8908 38.8909"
					stroke="red"
					stroke-width="20"
					stroke-linecap="round"
				/>
			</g>
		</svg>
	);
};
