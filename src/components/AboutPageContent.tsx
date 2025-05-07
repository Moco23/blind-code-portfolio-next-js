"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaSass } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiNextdotjs, SiHugo, SiRuby, SiStimulus, SiJquery } from 'react-icons/si';

const technologies = [
    { name: "HTML", Icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", Icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", Icon: IoLogoJavascript, color: "#F7DF1E" },
    { name: "React", Icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", Icon: SiNextdotjs, color: "currentColor" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Sass/SCSS", Icon: FaSass, color: "#CC6699" },
    { name: "Bootstrap", Icon: FaBootstrap, color: "#7952B3" },
    { name: "jQuery", Icon: SiJquery, color: "#0769AD" },
    { name: "Stimulus", Icon: SiStimulus, color: "#77C0C5" },
    { name: "Hugo", Icon: SiHugo, color: "#FF4088" },
    { name: "ERB", Icon: SiRuby, color: "#CC342D" },
];

const sectionScrollVariants = {
    initial: {
        opacity: 0,
        y: 100,
        scale: 0.9
    },
    whileInView: {
        opacity: 1,
        y: 0,
        scale: 1
    },
    transition: {
        duration: 1.0,
        ease: "easeInOut"
    },
    viewport: {
        once: true,
        amount: 0.2
    }
};


export default function AboutPage() {
    const [ingemarkDuration, setIngemarkDuration] = useState<string>("");
    const [age, setAge] = useState<number | null>(null);

    useEffect(() => {
        const currentDate = new Date();
        const startDateIngemark = new Date(2024, 1, 3);
        let yearsIngemark = currentDate.getFullYear() - startDateIngemark.getFullYear();
        let monthsIngemark = currentDate.getMonth() - startDateIngemark.getMonth();
        const daysIngemark = currentDate.getDate() - startDateIngemark.getDate();

        if (daysIngemark < 0) {
            monthsIngemark--;
        }
        if (monthsIngemark < 0) {
            yearsIngemark--;
            monthsIngemark += 12;
        }

        // Ispravljeno: let -> const
        const totalMonths = yearsIngemark * 12 + monthsIngemark;
        let durationString = "";

        if (totalMonths >= 12) {
            const years = Math.floor(totalMonths / 12);
            const remainingMonths = totalMonths % 12;
            durationString = `${years} year${years > 1 ? 's' : ''}`;
            if (remainingMonths > 0) {
                durationString += `, ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
            }
        } else if (totalMonths > 0) {
            durationString = `${totalMonths} month${totalMonths > 1 ? 's' : ''}`;
        } else if (daysIngemark >= 0) {
            durationString = "Less than a month";
        } else {
            durationString = "Just starting!";
        }
        setIngemarkDuration(durationString);

        const birthDate = new Date(1997, 2, 23);
        let calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDiff = currentDate.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
            calculatedAge--;
        }
        setAge(calculatedAge);

    }, []);

    return (
        <div className="container mx-auto px-4 py-16">
            <motion.div
                className="flex flex-col items-center text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-2 border-primary shadow-lg md:h-40 md:w-40">
                    <Image
                        src="/images/momcilo-nikolic.JPG"
                        alt="Photo of Momčilo Nikolić"
                        width={160}
                        height={160}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
                <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl">
                    About Me
                </h1>
                <h4 className="mb-2 text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl">
                    Momcilo Nikolic
                </h4>
                {age !== null && (
                    <p className="text-lg text-muted-foreground mb-4">({age} years old)</p>
                )}
            </motion.div>

            <div className="mx-auto max-w-3xl space-y-12 text-left text-foreground">
                <motion.section
                    initial={sectionScrollVariants.initial}
                    whileInView={sectionScrollVariants.whileInView}
                    transition={sectionScrollVariants.transition}
                    viewport={sectionScrollVariants.viewport}
                >
                    <h2 className="text-2xl font-semibold text-gray-600 mb-4">Who I Am</h2>
                    <p className="leading-7 text-muted-foreground">
                        Based in Zagreb, Croatia (originally from Pula, Istra), I work as a Software Engineer with a strong preference for the Frontend. I thrive on the challenge of transforming designs into reality, enjoying the process of building intuitive, performant, and visually engaging user interfaces. My current role at Ingemark centers around bringing Figma designs to life by developing pixel-perfect layouts and reusable components using modern web technologies.
                    </p>
                </motion.section>

                <motion.section
                    initial={sectionScrollVariants.initial}
                    whileInView={sectionScrollVariants.whileInView}
                    transition={sectionScrollVariants.transition}
                    viewport={sectionScrollVariants.viewport}
                >
                    <h2 className="text-2xl font-semibold text-gray-600 mb-4">Experience</h2>
                    <div>
                        <h3 className="text-lg font-medium text-foreground">Software Engineer</h3>
                        <p className="text-muted-foreground">
                            <a href="https://www.ingemark.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary/90">
                                Ingemark d.o.o.
                            </a>
                            {ingemarkDuration && (
                                <span className="ml-2 text-sm">({ingemarkDuration})</span>
                            )}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            My primary responsibility involves translating Figma designs into functional web layouts and reusable components.
                        </p>
                    </div>
                </motion.section>

                <motion.section
                    initial={sectionScrollVariants.initial}
                    whileInView={sectionScrollVariants.whileInView}
                    transition={sectionScrollVariants.transition}
                    viewport={sectionScrollVariants.viewport}
                >
                    <h2 className="text-2xl font-semibold text-gray-600 mb-6">Tech Stack</h2>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-6">
                        {technologies.map(tech => (
                            <div key={tech.name} className="flex flex-col items-center gap-2 text-center">
                                <tech.Icon
                                    size={32}
                                    color={tech.color === "currentColor" ? undefined : tech.color}
                                    className="text-muted-foreground"
                                />
                                <span className="text-xs font-medium text-muted-foreground">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
