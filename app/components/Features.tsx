"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Duru_Sans } from "next/font/google";
import { useRef } from "react";

export const Features = () => {
	const oneRef = useRef<HTMLDivElement>(null);
	const twoRef = useRef<HTMLDivElement>(null);
	const threeRef = useRef<HTMLDivElement>(null);
	const fourRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (
			oneRef.current &&
			twoRef.current &&
			threeRef.current &&
			fourRef.current
		) {
			const rect = oneRef.current?.getBoundingClientRect();
			const animateOne = () => {
				gsap.to(oneRef.current, {
					scaleX: 2,
					transformOrigin: "left",
					duration: 1,
					backgroundColor: "black",
				});
				gsap.to(twoRef.current, { xPercent: 100, duration: 1 });
			};

			const animateTwo = () => {
				gsap.to(twoRef.current, {
					scaleX: 2,
					transformOrigin: "left",
					duration: 1,
					backgroundColor: "black",
				});
			};

			const animateFour = () => {
				gsap.to(fourRef.current, {
					scaleX: 2,
					transformOrigin: "right",
					duration: 1,
					backgroundColor: "black",
				});
			};

			const exitFour = () => {
				gsap.to(fourRef.current, {
					scaleX: 1,
					duration: 1,
					backgroundColor: "white",
				});
			};
			const exitOne = () => {
				gsap.to(oneRef.current, {
					scaleX: 1,
					duration: 1,
					backgroundColor: "white",
				});
				gsap.to(twoRef.current, { xPercent: 0, duration: 1 });
			};
			const exitTwo = () => {
				gsap.to(twoRef.current, {
					scaleX: 1,
					duration: 1,
					backgroundColor: "white",
				});
			};

			twoRef.current.addEventListener("mouseenter", animateTwo);
			twoRef.current.addEventListener("mouseleave", exitTwo);
			oneRef.current.addEventListener("mouseenter", animateOne);
			oneRef.current.addEventListener("mouseleave", exitOne);
			fourRef.current.addEventListener("mouseenter", animateFour);
			fourRef.current.addEventListener("mouseleave", exitFour);
		}
	}, {});

	return (
		<div className="w-full h-full py-10">
			<div className="flex w-full h-[50vh]">
				<div
					ref={oneRef}
					className="border-y-2 border-r-2 w-full border-black"
				/>
				<div
					ref={twoRef}
					className="border-r-2 border-y-2 w-full border-black"
				/>
				<div ref={threeRef} className=" border-y-2 w-full border-black" />
				<div
					ref={fourRef}
					className=" border-y-2 border-l-2 w-full border-black"
				/>
			</div>
		</div>
	);
};
