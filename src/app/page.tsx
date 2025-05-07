"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import ProjectSlider from "@/components/ProjectSlider";
import TechTicker from "@/components/TechTicker";
import CallToAction from "@/components/CallToAction";
import { ArrowRight } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {

    // Premješteno unutar komponente
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

    return (
        <>
            <motion.section
                className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden px-4 py-16 md:py-24"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="container mx-auto text-center">
                    <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl md:text-6xl lg:text-7xl">
                        Blind Code
                    </motion.h1>
                    <motion.p variants={itemVariants} className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                        A passionate developer building modern web experiences. Welcome to my portfolio.
                    </motion.p>
                    <motion.div variants={itemVariants} className="mt-10">
                        <Link
                            href="/projects"
                            className="relative inline-flex items-center justify-center gap-2 rounded-md border border-transparent
                                       bg-gradient-to-r from-gray-900 to-black
                                       text-white
                                       dark:bg-gradient-to-r dark:from-sky-500 dark:to-primary
                                       dark:text-primary-foreground
                                       px-6 py-3 text-base font-medium shadow-lg
                                       transition-shadow hover:shadow-sky-500/40
                                       focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background
                                       overflow-hidden group"
                        >
                            <span className="absolute inset-0 w-full h-full
                                             bg-gradient-to-r from-black via-gray-800 to-gray-700
                                             dark:bg-gradient-to-r dark:from-primary dark:via-sky-400 dark:to-sky-600
                                             opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            </span>
                            <span className="relative z-10 flex items-center gap-2">
                                <span>View My Work</span>
                                <ArrowRight size={18} />
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </motion.section>

            <motion.div
                initial={sectionScrollVariants.initial}
                whileInView={sectionScrollVariants.whileInView}
                transition={sectionScrollVariants.transition}
                viewport={sectionScrollVariants.viewport}
            >
                <ProjectSlider />
            </motion.div>

            <motion.div
                initial={sectionScrollVariants.initial}
                whileInView={sectionScrollVariants.whileInView}
                transition={sectionScrollVariants.transition}
                viewport={sectionScrollVariants.viewport}
            >
                <TechTicker />
            </motion.div>

            <motion.div
                initial={sectionScrollVariants.initial}
                whileInView={sectionScrollVariants.whileInView}
                // Ispravljen tipfeler: sectionScrollvariants -> sectionScrollVariants
                transition={sectionScrollVariants.transition}
                viewport={sectionScrollVariants.viewport}
            >
                <CallToAction />
            </motion.div>
        </>
    );
}
