// src/components/TechTicker.tsx
"use client";

import React from 'react';
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaSass } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiNextdotjs, SiHugo, SiRuby, SiStimulus, SiJquery } from 'react-icons/si';

// Define your technologies using the imported icon components
const technologies = [
    { name: "HTML", Icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", Icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", Icon: IoLogoJavascript, color: "#F7DF1E" },
    { name: "React", Icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Sass", Icon: FaSass, color: "#CC6699" },
    { name: "Bootstrap", Icon: FaBootstrap, color: "#7952B3" },
    { name: "jQuery", Icon: SiJquery, color: "#0769AD" },
    { name: "Stimulus", Icon: SiStimulus, color: "#77C0C5" },
    { name: "Hugo", Icon: SiHugo, color: "#FF4088" },
    { name: "ERB", Icon: SiRuby, color: "#CC342D" },
];

const TechTicker = () => {
    return (
        // Main section container with background and padding
        <div className="w-full py-12 md:py-16 my-50 bg-muted overflow-hidden"> {/* Adjusted padding */}

            {/* Container for the heading to keep it centered */}
            <div className="container mx-auto px-4 mb-8 md:mb-10 text-center">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-600 sm:text-3xl">
                    Technologies I Work With {/* Or "My Tech Stack", "Skills", etc. */}
                </h2>
            </div>

            {/* Marquee component for scrolling logos */}
            <Marquee
                gradient={false}
                speed={50}
                pauseOnHover={true}
                autoFill={true}
            >
                {technologies.map((tech) => (
                    <div key={tech.name} className="mx-8 md:mx-12 flex items-center justify-center" title={tech.name}>
                        <tech.Icon
                            size={40} // Icon size
                            color={tech.color || "currentColor"} // Use brand color or fallback
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default TechTicker;
