"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-5rem)] overflow-hidden flex flex-col items-center justify-start pt-8 md:pt-10 px-5 md:px-6">

      {/* Background grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(150,25,26,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(150,25,26,0.06) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 60%, rgba(150,25,26,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] h-[300px] md:h-[400px] rounded-full bg-accent/10 blur-[100px] md:blur-[120px] pointer-events-none z-0" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 border-l-2 border-t-2 border-accent/15 pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 border-r-2 border-t-2 border-accent/15 pointer-events-none z-0" />

      {/* Hero copy */}
      <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4 w-full max-w-5xl text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <span className="w-8 h-px bg-accent/60" />
          <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-foreground/40">
            Est. 2024 — Malang, Indonesia
          </span>
          <span className="w-8 h-px bg-accent/60" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="leading-none"
        >
          <span className="block text-[2.4rem] md:text-6xl xl:text-7xl font-black tracking-tighter uppercase text-foreground leading-[0.95]">
            We Build Worlds,
          </span>
          <span className="block text-[3rem] md:text-7xl xl:text-8xl font-black tracking-tighter uppercase leading-[0.95] mt-1">
            <span className="text-accent">You Play</span>{" "}
            <span className="text-foreground/40">The Story.</span>
          </span>
        </motion.h1>

        {/* Tagline — hidden on very small screens */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22 }}
          className="hidden sm:block text-xs md:text-sm text-foreground/45 tracking-wide max-w-xs leading-relaxed"
        >
          Games rooted in local culture — stories that feel familiar to locals, intriguing to the world.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.32 }}
          className="flex items-center gap-2.5 md:gap-3 mt-1 flex-wrap justify-center"
        >
          <Link
            href="/games"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 md:px-7 py-2.5 md:py-3 rounded-full font-black tracking-widest text-[11px] md:text-xs hover:bg-accent/85 transition-all shadow-[0_8px_28px_rgba(150,25,26,0.28)]"
          >
            EXPLORE GAMES →
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 md:px-7 py-2.5 md:py-3 rounded-full font-bold tracking-widest text-[11px] md:text-xs hover:border-accent hover:text-accent transition-all"
          >
            ABOUT US
          </Link>
        </motion.div>
      </div>

      {/* Floating tags — left (desktop only) */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute left-8 top-1/2 -translate-y-1/4 z-10 flex-col gap-2.5 hidden lg:flex"
      >
        {["Horror", "Adventure", "Story-Driven"].map((tag) => (
          <span key={tag} className="text-[9px] font-bold tracking-[0.22em] uppercase text-foreground/30 border border-foreground/12 px-3 py-1.5 rounded-full bg-background/40 backdrop-blur-sm">
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Floating tags — right (desktop only) */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="absolute right-8 top-1/2 -translate-y-1/4 z-10 flex-col gap-2.5 items-end hidden lg:flex"
      >
        {["Indonesian Dev", "Local Culture", "PC & Mobile"].map((tag) => (
          <span key={tag} className="text-[9px] font-bold tracking-[0.22em] uppercase text-foreground/30 border border-foreground/12 px-3 py-1.5 rounded-full bg-background/40 backdrop-blur-sm">
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Character image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-[min(770px,105vw)] h-[48vh] sm:h-[58vh] md:h-[65vh] lg:h-[72vh]"
      >
        <Image
          src="/Characters LineUp.png"
          alt="Ariverse characters"
          fill
          className="object-contain object-bottom"
          priority
        />
      </motion.div>

      {/* Stats pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="absolute bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center divide-x divide-foreground/10 bg-background/75 backdrop-blur-md border border-foreground/10 rounded-xl md:rounded-2xl px-1 md:px-2 py-1.5 md:py-2 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
      >
        {[
          { num: "3+", label: "Games" },
          { num: "2024", label: "Founded" },
          { num: "INA", label: "Origin" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-1.5 md:gap-2 px-3.5 md:px-5 py-0.5 md:py-1">
            <p className="text-sm md:text-base font-black text-foreground tracking-tighter leading-none">{s.num}</p>
            <p className="text-[8px] md:text-[9px] text-foreground/35 font-bold tracking-widest uppercase leading-tight">{s.label}</p>
          </div>
        ))}
      </motion.div>

    </section>
  );
}
