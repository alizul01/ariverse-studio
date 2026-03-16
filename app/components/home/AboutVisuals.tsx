"use client";

import { motion } from "framer-motion";

const facts = [
    { label: "Founded", value: "2021" },
    { label: "Based In", value: "Malang, ID" },
    { label: "Genre Focus", value: "Horror & Narrative" },
];

export default function AboutVisuals() {
    return (
        <div className="relative flex flex-col gap-6 justify-center h-[500px] lg:h-[600px]">

            {/* Studio identity card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border border-[#61422D]/30 rounded-3xl p-8 bg-[#61422D]/5"
            >
                <div className="text-[#E2494B] text-xs font-bold tracking-[0.3em] uppercase mb-4">
                    PT. Studio Karya Semesta — Malang, Indonesia
                </div>
                <p className="text-[#FCEBD7]/80 text-lg leading-relaxed">
                    We are a small, focused team building games rooted in Indonesian culture —
                    stories that feel familiar to locals and intriguing to the world.
                </p>
            </motion.div>

            {/* Fact chips */}
            <div className="grid grid-cols-3 gap-4">
                {facts.map((item, i) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="border border-[#61422D]/20 rounded-2xl p-4 bg-[#61422D]/5"
                    >
                        <div className="text-[#FCEBD7]/40 text-[10px] tracking-widest uppercase mb-2">
                            {item.label}
                        </div>
                        <div className="text-[#FCEBD7] font-bold text-sm">{item.value}</div>
                    </motion.div>
                ))}
            </div>

            {/* Producer quote */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="border-l-2 border-[#E2494B] pl-6"
            >
                <blockquote className="text-[#FCEBD7]/60 italic text-base leading-relaxed">
                    &ldquo;Fear doesn&apos;t always need a jump scare. Sometimes, the dimly-lit
                    hallway of an old museum is enough.&rdquo;
                </blockquote>
                <p className="text-[#E2494B] text-xs font-bold tracking-widest uppercase mt-3">
                    — Muhammad Ali Zulfikar, Producer
                </p>
            </motion.div>

            {/* In-production pulse indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-3"
            >
                <span className="w-2 h-2 rounded-full bg-[#E2494B] animate-pulse shrink-0" />
                <span className="text-[#FCEBD7]/40 text-xs tracking-widest uppercase">
                    In production: Nightwatch at the Museum — Steam, Q3 2026
                </span>
            </motion.div>
        </div>
    );
}
