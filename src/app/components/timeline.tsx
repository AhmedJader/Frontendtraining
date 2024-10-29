"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="absolute left-0 top-0 w-auto max-w-[300px]"> {/* Shrink the max-width */}
      <div
        className="w-full bg-white dark:bg-neutral-950/0 font-sans md:px-4" 
        ref={containerRef}
      >
        <div className="max-w-2xl mx-auto py-10 px-2 md:px-4 lg:px-6"> {/* Reduced padding */}
          <h2 className="text-sm md:text-2xl mb-2 text-black dark:text-white max-w-4xl"> {/* Reduced font size */}
            Featured Projects I have worked on
          </h2>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-10"> {/* Reduced bottom padding */}
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-5 md:pt-20 md:gap-4"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-8 absolute left-2 md:left-2 w-8 rounded-full bg-white dark:bg-black flex items-center justify-center"> {/* Reduced size */}
                  <div className="h-3 w-3 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-1" /> {/* Reduced size */}
                </div>
                <h3 className="hidden md:block text-lg md:pl-10 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500"> {/* Reduced font size */}
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-10 pr-2 md:pl-2 w-full">
                <h3 className="md:hidden block text-xl mb-2 text-left font-bold text-neutral-500 dark:text-neutral-500"> {/* Reduced font size */}
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-4 left-4 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
