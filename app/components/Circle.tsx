"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Circle = () => {
	const circleRef = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		const main = document.querySelector(".main-container");

		if (main && circleRef.current)
			gsap.fromTo(
				circleRef.current,
				{ x: 300, backgroundColor: "red" },
				{
					x: 700,
					backgroundColor: "blue",
					scrollTrigger: {
						trigger: circleRef.current,
						start: "top center",
						end: "center center ",
						scrub: true,
						markers: true,
					},
				},
			);
	}, {});
	return (
		<div
			ref={circleRef}
			className=" rounded-full  left-20 z-20 h-[200px] w-[200px] bg-black "
		></div>
	);
};
