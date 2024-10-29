"use client";
import React from "react";
import { Timeline } from "./components/timeline";

export default function Home() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">{/* Container */}
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
      {/* Content */}
      <div className="relative w-full h-screen overflow-hidden">
      <div className="w-full h-[25%] bg-neutral-900/90 rounded-lg absolute top-0 left-0 animate-slide-off-up delay-[0.5s]"></div>
      <div className="w-full h-full bg-neutral-900/90 rounded-lg absolute top-0 left-0 animate-slide-off-left delay-[1s]"></div>
      <div className="w-full h-[25%] bg-neutral-900/90 rounded-lg absolute bottom-0 left-0 animate-slide-off-down delay-[1.5s]"></div>
      <div className="w-full h-full bg-neutral-900/90 rounded-lg absolute top-0 right-0 animate-slide-off-right delay-[2s]"></div>
    </div>
    </div>
  );
}
