"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    }

    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.2, ease: "easeOut" }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, ease: "easeIn" }
        }
    };

    const navBackgroundClasses = isMobileMenuOpen
        ? "bg-white dark:bg-gray-900"
        : "bg-background/80 backdrop-blur-lg";

    return (
        <nav className={`sticky top-0 z-50 w-full relative ${navBackgroundClasses}`}>
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link
                    href="/"
                    className="relative group inline-block text-xl font-bold text-foreground dark:text-sky-400 transition-colors duration-300 z-50"
                    onClick={closeMobileMenu}
                >
                    Blind-Code
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 origin-left bg-sky-400 transition-all duration-300 ease-out group-hover:w-full"></span>
                </Link>

                <div className="hidden md:flex space-x-6">
                    <Link href="/about" className="relative group inline-block text-sm text-foreground dark:text-sky-400 transition-colors duration-300">
                        About <span className="absolute bottom-0 left-0 h-[2px] w-0 origin-left bg-sky-400 transition-all duration-300 ease-out group-hover:w-full"></span>
                    </Link>
                    <Link href="/projects" className="relative group inline-block text-sm text-foreground dark:text-sky-400 transition-colors duration-300">
                        Projects <span className="absolute bottom-0 left-0 h-[2px] w-0 origin-left bg-sky-400 transition-all duration-300 ease-out group-hover:w-full"></span>
                    </Link>
                    <Link href="/contact" className="relative group inline-block text-sm text-foreground dark:text-sky-400 transition-colors duration-300">
                        Contact <span className="absolute bottom-0 left-0 h-[2px] w-0 origin-left bg-sky-400 transition-all duration-300 ease-out group-hover:w-full"></span>
                    </Link>
                </div>

                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                        className="relative z-[60] p-2 rounded-md text-foreground dark:text-sky-400 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-400 origin-left"
                style={{ scaleX: scaleX }}
            />

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        // *** ISPRAVLJENO OVDJE: Uklonjeno slovo 'w' na kraju className ***
                        className="absolute top-16 left-0 right-0 z-40 bg-white dark:bg-gray-900 shadow-md border-t border-sky-400 rounded-b-lg md:hidden"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <div className="flex flex-col space-y-1 px-4 py-4">
                            <Link
                                href="/about"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 dark:text-sky-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                onClick={closeMobileMenu}
                            >
                                About
                            </Link>
                            <Link
                                href="/projects"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 dark:text-sky-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                onClick={closeMobileMenu}
                            >
                                Projects
                            </Link>
                            <Link
                                href="/contact"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 dark:text-sky-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                onClick={closeMobileMenu}
                            >
                                Contact
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
