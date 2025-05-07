"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import { Mail } from 'lucide-react';

const scrollVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.1 },
    viewport: { once: true, amount: 0.2 }
};

const CallToAction = () => {
    return (
        <motion.section
            className="w-full bg-background py-16 md:py-24"
            initial={scrollVariants.initial}
            whileInView={scrollVariants.whileInView}
            transition={scrollVariants.transition}
            viewport={scrollVariants.viewport}
            aria-label="Contact call to action"
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">
                    Crafting Top-Tier User Experiences for Web Applications
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">As a software engineer specializing in front-end development, I focus on creating intuitive, responsive, and visually appealing user interfaces, with a special emphasis on working with React and the Next.js framework. Whether you&apos;re looking to enhance the user experience of your existing web application, ensure it&apos;s exceptionally fast and efficient, or are developing a completely new digital product, I&apos;m open to discussing how best front-end practices can contribute to your success. Feel free to reach out to exchange ideas.</p>

                <div className="mt-10">
                    <Link
                        href="/contact"
                        className="relative inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-gradient-to-r from-sky-500 to-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg transition-opacity hover:shadow-sky-500/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background overflow-hidden group"
                        aria-label="Contact me"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-sky-400 to-sky-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                        <span className="relative z-10 flex items-center gap-2">
                            <Mail size={18} />
                            <span>Get In Touch</span>
                         </span>
                    </Link>
                </div>
            </div>
        </motion.section>
    );
};

export default CallToAction;
