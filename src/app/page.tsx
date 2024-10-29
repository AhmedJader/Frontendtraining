"use client";
import React from "react";
import Timeline from "./components/timeline";

export default function Home() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col">{/* Container */}
      {/* intro screen */}
      <div id="Home" className="absolute w-full h-full flex items-center justify-center">
        <div className="absolute w-full h-full bg-neutral-950 animate-fadeout2"></div>
        <h1 className="text-center text-white text-6xl font-bold animate-fadeout">Welcome to my Portfolio!</h1>
      </div>
      
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Content with overflow hidden */}
      <div className="relative w-full h-full overflow-hidden flex-grow">
        {/* Animations for the boxes */}
        <div className="w-full h-full bg-neutral-950 rounded-3xl fixed bottom-0 animate-slide-off-up " />
        <div className="w-full h-full bg-neutral-950 rounded-3xl fixed top-0  animate-slide-off-left " />
        <div className="w-full h-full bg-neutral-950 rounded-3xl fixed top-0  animate-slide-off-down " />
        <div className="w-full h-full bg-neutral-950 rounded-3xl fixed top-0  animate-slide-off-right " />
      </div>
      
      {/* Navbar at the top */}
      <div className="w-full h-[10%] flex fixed items-center justify-center mx-auto animate-fadein">
        <ul className="list-none sm:flex flex-row gap-20">
          <li className="text-white"><a href="#Home">Home</a></li>
          <li className="text-white"><a href="#Education">Education</a></li>
          <li className="text-white"><a href="#Projects">Projects</a></li>
          <li className="text-white"><a href="#Skills">Skills</a></li>
          <li className="text-white"><a href="#Contact">Contact Me</a></li>
        </ul>
      </div>

      {/* Scrollable content */}
      <div className="w-full h-[90%] flex flex-col items-center justify-center animate-fadein2">

        <section className="w-full h-full flex items-center justify-center" id="Education">
          <p className="text-white text-3xl font-bold">Education</p>
          <Timeline />
        </section>

        <section className="w-full h-full flex items-center justify-center" id="Projects">
          <p className="text-white text-3xl font-bold">Hello, I'm John Doe. I'm a software developer.</p>
        </section>
        
        <section className="w-full h-full flex items-center justify-center" id="Skills">
          <p className="text-white text-3xl font-bold">Hello, I'm John Doe. I'm a software developer.</p>
        </section>

        <section className="w-full h-full flex items-center justify-center" id="Contact">
          <p className="text-white text-3xl font-bold">Hello, I'm John Doe. I'm a software developer.</p>
        </section>
      </div>


    </div>
  );
}
