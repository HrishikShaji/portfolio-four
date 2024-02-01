"use client";

import { useGSAP } from "@gsap/react";
import { data } from "../data";
import { useRef } from "react";
import gsap from "gsap";

interface SkillProps {
	item: string;
}

export const Skill: React.FC<SkillProps> = ({ item }) => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		if (overlayRef.current && titleRef.current && containerRef.current) {
			const animateOverlay = () => {
				gsap.set(overlayRef.current, {
					display: "block",
					yPercent: 100,
				});
				gsap.to(overlayRef.current, {
					yPercent: 0,
					duration: 1,
				});
			};
			const exitAnimation = () => {
				gsap.to(overlayRef.current, {
					yPercent: 100,
					duration: 1,
				});
			};

			containerRef.current.addEventListener("mouseenter", animateOverlay);
			containerRef.current.addEventListener("mouseleave", exitAnimation);
		}
	}, {});
	return (
		<div
			ref={containerRef}
			className="overflow-hidden border-2 border-black relative p-2 h-40"
		>
			<div
				ref={overlayRef}
				className="w-full h-full hidden  absolute z-40  top-0 left-0  bg-white mix-blend-difference"
			></div>
			<h1 ref={titleRef} className="">
				{item}
			</h1>
		</div>
	);
};
