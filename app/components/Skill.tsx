"use client";

import { useGSAP } from "@gsap/react";
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
				const xDirection = entryPointX < containerCenterX ? -1 : 1;

				const containerCenterY = rect ? rect.height / 2 : 0;
				const entryPointY = event.clientY - rect?.top;
				const yDirection = entryPointY < containerCenterY ? -1 : 1;

				gsap.set(overlayRef.current, {
					display: "block",
					yPercent: 100 * yDirection,
					xPercent: 100 * xDirection,
				});
				gsap.to(overlayRef.current, {
					yPercent: 0,
					xPercent: 0,
					duration: 0.5,
				});
			};
			const exitAnimation = (event: MouseEvent) => {
				const containerCenterX = rect ? rect.width / 2 : 0;
				const entryPointX = event.clientX - rect?.left;
				const xDirection = entryPointX < containerCenterX ? -1 : 1;
				const containerCenterY = rect ? rect.height / 2 : 0;
				const entryPointY = event.clientY - rect?.top;
				const yDirection = entryPointY < containerCenterY ? -1 : 1;
				gsap.to(overlayRef.current, {
					yPercent: 100 * yDirection,
					xPercent: 100 * xDirection,
					duration: 0.5,
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
