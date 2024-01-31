import { Hero } from "./components/Hero";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { About } from "./components/About";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
	return (
		<main className="main-container w-full h-full bg-white  text-black">
			<Hero />
			<About />
		</main>
	);
}
