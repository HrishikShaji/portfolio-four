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
			console.log(refTwo.current.offsetWidth / refTwo.current.offsetHeight);
			gsap.set(boxTwo, {
				top: elTwo.top,
				left: elTwo.left,
				width: refTwo.current.offsetWidth,
				height: refTwo.current.offsetHeight,
				scaleX: 0.3,
				transformOrigin: "right",
				borderRadius: "50%",
			});

			tl.fromTo(
				boxOne,
				{
					xPercent: -100,
					top: elOne.top,
					width: refOne.current.offsetHeight,
					height: refOne.current.offsetHeight,
					borderRadius: "50%",
				},
				{
					xPercent: 0,
					top: elOne.top,
					left: elOne.left,
					duration: 0.5,
				},
			)
				.to(boxOne, {
					duration: 0.25,
					borderTopLeftRadius: "0%",
					borderBottomLeftRadius: "0%",
				})
				.to(boxOne, {
					duration: 1,
					width: refOne.current.offsetWidth,
					borderTopRightRadius: "9999px",
					borderBottomRightRadius: "9999px",
				})
				.fromTo(
					boxTwo,
					{
						x: 300,
					},
					{
						x: 0,
						duration: 2,
					},
				)
				.to(boxTwo, {
					scaleX: 1,
					duration: 1,
					borderBottomLeftRadius: "9999px",
					borderBottomRightRadius: "9999px",
					borderTopRightRadius: "9999px",
					borderTopLeftRadius: "9999px",
				});
		}
	}, {});
	return (
		<div className="p-10 pt-40 h-screen overflow-hidden">
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
			<div className="box-one   mix-blend-difference  bg-white  absolute" />
			<div className="box-two  mix-blend-difference  bg-white absolute" />
		</div>
	);
};
