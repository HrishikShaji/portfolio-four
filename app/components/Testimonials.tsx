"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../data";
import { useRef } from "react";
import gsap from "gsap";

export const Testimonials = () => {
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
		<div className="flex h-[60vh] w-full">
			<div className="w-[35%] h-full border-2 border-black overflow-y-scroll">
				{data.testimonials.map((item, i) => (
					<div
						key={i}
						ref={containerRef}
						className="border-2 border-black p-5 w-full overflow-hidden relative"
					>
						<div
							ref={overlayRef}
							className="w-full h-full absolute bg-white mix-blend-difference hidden top-0 left-0"
						/>
						<h1>{item.name}</h1>
					</div>
				))}
			</div>
			<div className="w-[65%] h-full border-2 border-black"></div>
		</div>
	);
};
