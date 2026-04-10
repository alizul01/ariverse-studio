"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}

export default function FadeIn({ children, delay = 0, direction = "up", className = "" }: FadeInProps) {

    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 16 : direction === "down" ? -16 : 0,
            x: direction === "left" ? 16 : direction === "right" ? -16 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: delay,
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
            className={className}
            data-reduce-motion="true"
        >
            {children}
        </motion.div>
    );
}
