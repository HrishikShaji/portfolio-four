"use client";
import { Hero } from "./components/Hero";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Skills } from "./components/Skills";
import { Expertise } from "./components/Expertise";
import { Testimonials } from "./components/Testimonials";
import { ProjectsHeading } from "./components/ProjectsHeading";
import { Spacer } from "./components/Spacer";
import { Projects } from "./components/Projects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  return (
    <main className="main-container w-full h-full bg-white  text-black">
      <Hero />
      <About />
      <Features />
      <Skills />
      <Expertise />
      <Testimonials />
      <ProjectsHeading />
      <Projects />
    </main>
  );
}
