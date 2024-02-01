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
		const rect = containerRef.current?.getBoundingClientRect();
		if (
			overlayRef.current &&
			titleRef.current &&
			containerRef.current &&
			rect
		) {
			const animateOverlay = (event: MouseEvent) => {
				const containerCenterX = rect ? rect.width / 2 : 0;
				const entryPointX = event.clientX - rect?.left;
				const direction = entryPointX < containerCenterX ? -1 : 1;

				gsap.set(overlayRef.current, {
					display: "block",
					xPercent: 100 * direction,
				});
				gsap.to(overlayRef.current, {
					xPercent: 0,
					duration: 1,
				});
			};
			const exitAnimation = (event: MouseEvent) => {
				const containerCenterX = rect ? rect.width / 2 : 0;
				const entryPointX = event.clientX - rect?.left;
				const direction = entryPointX < containerCenterX ? -1 : 1;
				gsap.to(overlayRef.current, {
					xPercent: 100 * direction,
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
