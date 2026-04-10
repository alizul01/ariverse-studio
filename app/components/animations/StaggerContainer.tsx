"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    staggerDelay?: number;
}

export default function StaggerContainer({ children, delay = 0, className = "", staggerDelay = 0.07 }: StaggerContainerProps) {

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: delay,
                staggerChildren: staggerDelay
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export const StaggerItem = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
        }
    };
    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}
