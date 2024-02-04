"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const QuotesStart = () => {
	const pathOne = useRef<SVGPathElement>(null);

	useGSAP(() => {
		if (pathOne.current) {
			const length = pathOne.current.getTotalLength();
			if (length) {
				const animation = () => {
					gsap.set(pathOne.current, {
						scaleY: 0,
					});

					const tl = gsap.timeline();

					tl.to(pathOne.current, {
						scaleY: 1,
						duration: 1,
						transformOrigin: "top",
					});
				};
				animation();
			}
		}
	}, {});

	return (
		<svg viewBox="0 0 170 98" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				ref={pathOne}
				d="M41.4946 70.6463C41.4946 84.2594 66.0271 81.6323 38.537 81.6323C11.0469 81.6323 1.63794 68.6951 1.63794 55.082C1.63794 41.4688 41.8494 0 69.3395 0C96.8296 0 41.4946 57.0331 41.4946 70.6463Z"
				fill="black"
			/>
			<path
				d="M69.8854 63.7377C69.8854 81.5557 54.241 96 34.9427 96C15.6444 96 2.66277e-05 81.5557 2.66277e-05 63.7377C2.66277e-05 45.9197 15.6444 31.4754 34.9427 31.4754C54.241 31.4754 69.8854 45.9197 69.8854 63.7377Z"
				fill="#D9D9D9"
			/>
			<path
				d="M134.495 72.6463C134.495 86.2594 159.027 83.6323 131.537 83.6323C104.047 83.6323 94.6379 70.6951 94.6379 57.082C94.6379 43.4688 134.849 2 162.339 2C189.83 2 134.495 59.0331 134.495 72.6463Z"
				fill="#D9D9D9"
			/>
			<path
				d="M162.885 65.7377C162.885 83.5557 147.241 98 127.943 98C108.644 98 93 83.5557 93 65.7377C93 47.9197 108.644 33.4754 127.943 33.4754C147.241 33.4754 162.885 47.9197 162.885 65.7377Z"
				fill="#D9D9D9"
			/>
		</svg>
	);
};
