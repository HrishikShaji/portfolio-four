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
				gsap.fromTo(
					overlayRef.current,
					{
						scaleY: 0,
						transformOrigin: "bottom",
					},
					{
						scaleY: 1,
						duration: 1,
					},
				);
			};
			const exitAnimation = () => {
				gsap.to(overlayRef.current, {
					scaleY: 0,
					duration: 1,
					transformOrigin: "bottom",
				});
			};

			containerRef.current.addEventListener("mouseenter", animateOverlay);
			containerRef.current.addEventListener("mouseleave", exitAnimation);
		}
	}, {});
	return (
		<div ref={containerRef} className="border-2 relative p-2 h-40 border-black">
			<div
				ref={overlayRef}
				className="w-full h-full absolute  top-0 left-0  bg-white mix-blend-difference"
			></div>
			<h1 ref={titleRef}>{item}</h1>
		</div>
	);
};
