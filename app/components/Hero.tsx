"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Hero = () => {
	const refOne = useRef<HTMLSpanElement>(null);
	const refTwo = useRef<HTMLSpanElement>(null);
	const ballOne = useRef<HTMLDivElement>(null);
	const ballTwo = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		if (
			ballOne.current &&
			ballTwo.current &&
			refOne.current &&
			refTwo.current
		) {
			const elOne = refOne.current.getBoundingClientRect();
			const elTwo = refTwo.current.getBoundingClientRect();
			const tl = gsap.timeline();

			tl.to(ballOne.current, {
				opacity: 1,
				top: elOne.top,
				duration: 1,
			})
				.to(ballOne.current, { left: elOne.left, duration: 1 })
				.to(ballOne.current, {
					width: refOne.current.offsetWidth,
					height: refOne.current.offsetHeight,
					duration: 1,
				})
				.to(ballTwo.current, {
					opacity: 1,
					top: elTwo.top,
					duration: 1,
				})
				.to(ballTwo.current, {
					right: window.innerWidth - elTwo.right,
					duration: 1,
				})
				.to(ballTwo.current, {
					width: refTwo.current.offsetWidth,
					height: refTwo.current.offsetHeight,
					duration: 1,
				});
		}
	}, {});
	return (
		<div className="p-10 pt-40 relative h-screen overflow-hidden">
			<div
				ref={ballOne}
				className="w-40 mix-blend-difference h-40 absolute top-0 left-0  rounded-full bg-white"
			/>
			<div
				ref={ballTwo}
				className="w-40 mix-blend-difference h-40 absolute top-0 right-0 rounded-full  bg-white"
			/>
			<h1 className="text-9xl font-semibold text-black ">
				I SIMPLY DESIGN COOL
				<span ref={refOne} className="px-5 ">
					WEBSITES
				</span>
				,AND MY NAME IS
				<span ref={refTwo} className="px-5  ">
					ANAKIN
				</span>
			</h1>
		</div>
	);
};
