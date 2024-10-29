"use client";
import React from "react";

export default function Home() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col">{/* Container */}
      {/* intro screen */}
      <div id="Home" className="absolute w-full h-full flex items-center justify-center">
        <div className="absolute w-full h-full bg-neutral-950 animate-fadeout2"></div>
        <h1 className="text-center text-white text-6xl font-bold animate-fadeout">Welcome to my Portfolio!</h1>
      </div>
      
      
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_50%,black)]" />
      
      {/* Content with overflow hidden */}
      <div className="relative w-full h-full overflow-hidden flex-grow">
        {/* Animations for the boxes */}
        <div className="w-full h-full bg-neutral-950 rounded-3xl absolute bottom-0 animate-slide-off-up " />
        <div className="w-full h-full bg-neutral-950 rounded-3xl absolute top-0  animate-slide-off-left " />
        <div className="w-full h-full bg-neutral-950 rounded-3xl absolute top-0  animate-slide-off-down " />
        <div className="w-full h-full bg-neutral-950 rounded-3xl absolute top-0  animate-slide-off-right " />
      </div>
      
      {/* Navbar at the top */}
      <div className="w-full h-[10%] flex fixed items-center justify-center mx-auto animate-fadein">
        <ul className="list-none sm:flex flex-row gap-20">
          <li className="text-white"><a href="#Home">Home</a></li>
          <li className="text-white"><a href="#Education">Education</a></li>
          <li className="text-white"><a href="#Project">Projects</a></li>
          <li className="text-white"><a href="#Skills">Skills</a></li>
          <li className="text-white"><a href="#Contact">Contact Me</a></li>
        </ul>
      </div>

      {/* Main content */}
      <div>
        <span id="Education">

        </span>
      </div>

      <div>
        <span id="Project">
        
        </span>
      </div>

      <div>
        <span id="Skills">
        
        </span>
      </div>
      
      <div>
        <span id="Contact">
        
        </span>
      </div>
    </div>
  );
}
