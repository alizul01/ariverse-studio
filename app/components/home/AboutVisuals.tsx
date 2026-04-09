"use client";

import { motion } from "framer-motion";

export default function AboutVisuals() {
  return (
    <div className="flex flex-col justify-center gap-10">

      {/* Decorative large quote */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative"
      >
        {/* Giant quotation mark */}
        <div
          className="absolute -top-6 -left-4 text-accent font-black select-none pointer-events-none leading-none"
          style={{ fontSize: "10rem", opacity: 0.08, lineHeight: 1 }}
          aria-hidden
        >
          &#8220;
        </div>

        {/* Quote text */}
        <blockquote className="relative z-10 text-2xl md:text-3xl xl:text-4xl font-semibold text-foreground leading-snug tracking-tight">
          Fear doesn&apos;t always need a jump scare.{" "}
          <span className="text-foreground/40">
            Sometimes, the dimly-lit hallway of an old museum is enough.
          </span>
        </blockquote>

        {/* Attribution */}
        <div className="flex items-center gap-3 mt-8">
          <span className="w-6 h-px bg-accent" />
          <p className="text-accent text-xs font-bold tracking-[0.3em] uppercase">
            Muhammad Ali Zulfikar, Producer
          </p>
        </div>
      </motion.div>

      {/* In-production indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center gap-3 pt-4 border-t border-foreground/8"
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
        <p className="text-foreground/40 text-xs tracking-wide">
          In production:{" "}
          <span className="text-foreground/65 font-semibold">Nightwatch at the Museum</span>
          {" "}— Steam, Q3 2026
        </p>
      </motion.div>

    </div>
  );
}
