"use client";

import { motion } from "framer-motion";
import {
    GlobeAltIcon,
    CommandLineIcon,
    RocketLaunchIcon,
    BeakerIcon
} from "@heroicons/react/24/outline";

export default function AboutVisuals() {
    return (
        <div className="relative flex justify-center items-center h-[500px] lg:h-[600px]">
            {/* Main Orb / Core */}
            <motion.div
                className="relative w-64 h-64 rounded-full bg-gradient-to-br from-[#E2494B] to-[#250804] shadow-[0_0_80px_rgba(226,73,75,0.3)] flex items-center justify-center overflow-hidden"
                animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: ["0 0 80px rgba(226,73,75,0.3)", "0 0 120px rgba(226,73,75,0.5)", "0 0 80px rgba(226,73,75,0.3)"]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                <GlobeAltIcon className="w-32 h-32 text-[#FCEBD7]/20 animate-pulse" />
            </motion.div>

            {/* Orbiting Elements */}
            {[
                { icon: <CommandLineIcon />, delay: 0, radius: 180, duration: 20 },
                { icon: <RocketLaunchIcon />, delay: -5, radius: 220, duration: 25 },
                { icon: <BeakerIcon />, delay: -10, radius: 150, duration: 18 }
            ].map((orbit, i) => (
                <motion.div
                    key={i}
                    className="absolute text-[#E2494B]/40"
                    style={{ width: 40, height: 40 }}
                    animate={{
                        rotate: 360,
                    }}
                    transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear", delay: orbit.delay }}
                >
                    <div
                        className="w-12 h-12 bg-[#250804] border border-[#E2494B]/20 rounded-xl flex items-center justify-center backdrop-blur-md shadow-2xl"
                        style={{ transform: `translateY(-${orbit.radius}px)` }}
                    >
                        <div className="w-6 h-6">{orbit.icon}</div>
                    </div>
                </motion.div>
            ))}

            {/* Background Decorative Rings */}
            <div className="absolute w-[400px] h-[400px] border border-[#61422D]/10 rounded-full -z-10" />
            <div className="absolute w-[500px] h-[500px] border border-[#61422D]/5 rounded-full -z-10" />
        </div>
    );
}
