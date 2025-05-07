// src/components/PageTransitionWrapper.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionWrapperProps {
    children: React.ReactNode;
}

const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({ children }) => {
    const pathname = usePathname();

    const pageVariants = {
        initial: {
            opacity: 0,
            y: 5
        },
        in: {
            opacity: 1,
            y: 0
        },
        out: {
            opacity: 0,
            y: -5
        }
    };

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.4
    };

    return (
        <AnimatePresence
            mode="wait"
            // *** UKLONJENO: initial={false} ***
            // initial={false}
        >
            <motion.div
                key={pathname}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransitionWrapper;
