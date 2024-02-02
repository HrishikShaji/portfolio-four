"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../data";
import { Dispatch, SetStateAction, useRef } from "react";
import gsap from "gsap";

interface TestimonialProps {
	item: Record<string, any>;
	setItem: Dispatch<SetStateAction<Record<string, any>>>;
}

export const Testimonial: React.FC<TestimonialProps> = ({ item, setItem }) => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (overlayRef.current && containerRef.current) {
			const animateOverlay = (event: MouseEvent) => {
				gsap.set(overlayRef.current, {
					display: "block",
					xPercent: -100,
				});

				gsap.to(overlayRef.current, {
					xPercent: 0,
					duration: 1,
				});
			};

			const exit = (event: MouseEvent) => {
				gsap.to(overlayRef.current, {
					xPercent: -100,
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
			className="border-2 border-black p-5 w-full overflow-hidden relative"
		>
			<div
				ref={overlayRef}
				className="w-full h-full absolute bg-white mix-blend-difference hidden top-0 left-0"
			/>
			<h1>{item.name}</h1>
		</div>
	);
};
