import Image from "next/image";
import { Hero } from "./components/Hero";

export default function Home() {
	return (
		<main className="w-full h-full bg-white  text-black">
			<Hero />
		</main>
	);
}
