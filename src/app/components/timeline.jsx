import React from "react";

export default function Timeline() {
    return (
        <div>
            {/* Timeline */}
            {/* Heading */}
            <div className="ps-2 my-2 first:mt-0">
                <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
                    2023, september 4 - present
                </h3>
            </div>
            {/* End Heading */}

            {/* Item */}
            <div className="flex gap-x-3">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700 animate-fadein">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                        <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                    </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                        York University
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                        Bsc, Computer Science
                    </p>
                </div>
                {/* End Right Content */}
            </div>
            {/* End Item */}

            {/* Repeat for other items... */}
            {/* Heading */}
            <div className="ps-2 my-2 first:mt-0">
                <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
                    2019, September 7 - 2023, June 30
                </h3>
            </div>
            {/* End Heading */}

            {/* Item */}
            <div className="flex gap-x-3">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700 animate-fadein">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                        <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                    </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                        Georgetown District High School
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                        High School Diploma
                    </p>
                </div>
                {/* End Right Content */}
            </div>
            {/* End Item */}
            {/* ... */}
        </div>
    );
}
