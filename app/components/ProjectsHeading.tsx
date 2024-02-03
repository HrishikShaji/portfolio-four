"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const ProjectsHeading = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const targetRef = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		if (containerRef.current && targetRef.current) {
			const amountToScroll = targetRef.current.offsetWidth - window.innerWidth;

			gsap.to(targetRef.current, {
				x: -amountToScroll,
				duration: 2,
				scrollTrigger: {
					trigger: containerRef.current,
					pin: containerRef.current,
					start: "top 20%",
					end: "+=" + amountToScroll,
					scrub: 1,
					markers: true,
				},
			});
		}
	}, {});
	return (
		<div ref={containerRef} className="overflow-x-scroll flex gap-10">
			<div className="flex gap-10" ref={targetRef}>
				<h1 className="text-[400px]  whitespace-nowrap ">
					THESE ARE MY PROJECTS.
				</h1>
				<h1 className="text-[400px] whitespace-nowrap text-red-500">END</h1>
			</div>
		</div>
	);
};
