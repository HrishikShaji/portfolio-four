"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Contact = () => {
	const overlayOne = useRef<HTMLDivElement>(null);
	const overlayTwo = useRef<HTMLDivElement>(null);
	const overlayThree = useRef<HTMLDivElement>(null);
	const container = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (
			overlayThree.current &&
			overlayTwo.current &&
			overlayOne.current &&
			container.current
		) {
			const tl = gsap.timeline();
			tl.fromTo(
				overlayOne.current,
				{ scaleY: 0, transformOrigin: "bottom" },
				{
					scaleY: 1,
					duration: 1,
					scrollTrigger: {
						trigger: container.current,
						start: "top center",
						end: "top 10%",
						scrub: 1,
						markers: true,
					},
				},
			)
				.fromTo(
					overlayTwo.current,
					{ scaleY: 0, transformOrigin: "bottom" },
					{
						scaleY: 1,
						duration: 1,
						scrollTrigger: {
							trigger: container.current,
							start: "top center",
							end: "top 10%",
							scrub: 1,
							markers: true,
						},
					},
				)
				.fromTo(
					overlayThree.current,
					{ scaleY: 0, transformOrigin: "bottom" },
					{
						scaleY: 1,
						duration: 1,
						scrollTrigger: {
							trigger: container.current,
							start: "top center",
							end: "top 10%",
							scrub: 1,
							markers: true,
						},
					},
				);
		}
	}, {});
	return (
		<div
			ref={container}
			className="h-screen w-full flex justify-center items-center"
		>
			<div className="flex">
				<div className="h-[50vh] w-[20vw] relative">
					<div className="absolute  w-full top-[10%] flex gap-2">
						<label>Name</label>
						<input className="p-2 rounded-md" />
					</div>
					<div
						ref={overlayOne}
						className="absolute w-full bottom-0 h-[95%] bg-white mix-blend-difference"
					/>
				</div>
				<div className="h-[50vh] w-[20vw] relative">
					<div className="flex gap-2 absolute  w-full top-[30%]">
						<label>Name</label>
						<input className="p-2  rounded-md w-full" />
					</div>
					<div
						ref={overlayTwo}
						className="absolute w-full bottom-0 h-[75%] bg-white mix-blend-difference"
					/>
				</div>
				<div className="h-[50vh] w-[20vw] relative">
					<div className="flex gap-2 absolute w-full top-[50%]">
						<label>Name</label>
						<input className="p-2 rounded-md w-full" />
					</div>
					<div
						ref={overlayThree}
						className="absolute w-full h-[55%] bottom-0 bg-white mix-blend-difference"
					/>
				</div>
			</div>
		</div>
	);
};
