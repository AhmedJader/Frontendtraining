"use client";
import React from "react";

export default function Home() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col">{/* Container */}
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_50%,black)]" />
      
      {/* Content with overflow hidden */}
      <div className="relative w-full h-full overflow-hidden flex-grow">
        {/* Animations for the boxes */}
        <div className="w-full h-[25%] bg-neutral-950 rounded-3xl absolute top-0 left-0 animate-slide-off-up delay-[1s]" />
        <div className="w-full h-full bg-neutral-950 rounded-3xl absolute top-0 left-0 animate-slide-off-left delay-[1s]" />
        <div className="w-full h-[25%] bg-neutral-950 rounded-3xl absolute bottom-0 left-0 animate-slide-off-down delay-[1s]" />
        <div className="w-full h-full bg-neutral-950 rounded-3xl absolute top-0 right-0 animate-slide-off-right delay-[1s]" />
      </div>
      
      {/* Navbar at the top */}
      <div className="w-full h-[10%] fixed flex items-center justify-center mx-auto animate-fadein">
        <ul className="list-none sm:flex flex-row gap-20">
          <li className="text-white">Home</li>
          <li className="text-white">About</li>
          <li className="text-white">Projects</li>
          <li className="text-white">Contact</li>
        </ul>
      </div>
    </div>
  );
}
