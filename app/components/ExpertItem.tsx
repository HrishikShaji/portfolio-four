"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { XIcon } from "./Xicon";
import { XSvg } from "./XSvg";

export const ExpertItem = () => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (overlayRef.current && containerRef.current) {
			const animateOverlay = (event: MouseEvent) => {
				gsap.set(overlayRef.current, {
					display: "block",
					yPercent: 100,
				});

				gsap.to(overlayRef.current, {
					yPercent: 0,
					duration: 1,
				});
			};

			const exit = (event: MouseEvent) => {
				gsap.to(overlayRef.current, {
					yPercent: 100,
					duration: 1,
				});
			};

			containerRef.current.addEventListener("mouseenter", animateOverlay);
			containerRef.current.addEventListener("mouseleave", exit);
		}
	}, {});
	return (
		<div
			ref={containerRef}
			className="border-2 border-black p-2  h-full w-full overflow-hidden relative"
		>
			<div className="w-40 h-40 stroke-black">
				<XSvg />
			</div>
			<div
				ref={overlayRef}
				className="w-full h-full absolute bg-white mix-blend-difference hidden top-0 left-0"
			/>
			<h1 className="">koko</h1>
		</div>
	);
};
