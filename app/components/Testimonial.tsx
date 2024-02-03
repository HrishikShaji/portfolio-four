"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../data";
import { Dispatch, SetStateAction, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

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
			onMouseEnter={() => setItem(item)}
			className="border-2 border-black w-full flex gap-5 overflow-hidden relative"
		>
			<div
				ref={overlayRef}
				className="w-full h-full absolute bg-white mix-blend-difference hidden top-0 left-0"
			/>
			<div className="w-[30%] h-40">
				<Image
					src={item.img}
					alt="image"
					className="w-full h-full object-cover mix-blend-difference"
					height={1000}
					width={1000}
				/>
			</div>
			<div className="flex flex-col justify-center w-[70%] gap-2">
				<h1 className="text-3xl ">{item.name}</h1>
				<p className=" line-clamp-3 ">{item.desc}</p>
			</div>
		</div>
	);
};
