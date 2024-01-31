"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Hero = () => {
	const refOne = useRef<HTMLSpanElement>(null);
	const refTwo = useRef<HTMLSpanElement>(null);
	useGSAP(() => {
		const boxOne = document.querySelector(".box-one");
		const boxTwo = document.querySelector(".box-two");
		if (refOne.current && refTwo.current) {
			const elOne = refOne.current.getBoundingClientRect();
			const elTwo = refTwo.current.getBoundingClientRect();
			const tl = gsap.timeline();
			tl.fromTo(
				boxOne,
				{
					x: -100,
					scaleX: 0,
					top: elOne.top,
					width: refOne.current.offsetWidth,
					height: refOne.current.offsetHeight,
				},
				{
					x: 0,
					transformOrigin: "left",
					scaleX: 1,
					top: elOne.top,
					left: elOne.left,
					duration: 1,
				},
			).fromTo(
				boxTwo,
				{
					x: 600,
					scaleX: 0,
					top: elTwo.top,
					width: refTwo.current.offsetWidth,
					height: refTwo.current.offsetHeight,
				},
				{
					x: 0,
					scaleX: 1,
					transformOrigin: "right",
					top: elTwo.top,
					left: elTwo.left,
					duration: 1,
				},
			);
		}
	}, {});
	return (
		<div className="p-10 pt-40 h-screen">
			<h1 className="text-9xl font-semibold  relative">
				I SIMPLY DESIGN COOL{" "}
				<span className="px-5" ref={refOne}>
					WEBSITES
				</span>{" "}
				,AND MY NAME IS{" "}
				<span className="px-5" ref={refTwo}>
					ANAKIN
				</span>
			</h1>
			<div className="box-one  mix-blend-difference rounded-r-full bg-white  absolute" />
			<div className="box-two  mix-blend-difference rounded-full bg-white absolute" />
		</div>
	);
};
