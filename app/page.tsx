import Image from "next/image";
import { Hero } from "./components/Hero";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
	return (
		<main className="w-full h-full bg-white  text-black">
			<Hero />
		</main>
	);
}
