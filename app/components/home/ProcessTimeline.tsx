"use client";

import { motion } from "framer-motion";

export default function ProcessTimeline() {
    return (
        <div className="hidden md:block absolute top-[45px] left-0 w-full h-[1px] bg-[#61422D]/30 -z-10">
            <motion.div
                className="h-full bg-[#E2494B] relative"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#E2494B] shadow-[0_0_15px_#E2494B]"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>
        </div>
    );
}
