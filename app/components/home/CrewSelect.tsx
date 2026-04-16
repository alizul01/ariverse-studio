"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface CrewMember {
  name: string;
  role: string;
  photo: string | null;
}

export default function CrewSelect({ crew }: { crew: CrewMember[] }) {
  const [selected, setSelected] = useState<number>(0);
  const active = crew[selected];

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-stretch">

      {/* Left — character detail panel */}
      <div className="relative w-full lg:w-72 shrink-0 rounded-2xl overflow-hidden border border-[#101010]/10 bg-[#101010]/4 min-h-[340px] flex flex-col">

        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, #101010 0px, #101010 1px, transparent 1px, transparent 4px)",
          }}
        />

        {/* Corner accents */}
        <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#96191A] rounded-tl z-20" />
        <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#96191A] rounded-tr z-20" />
        <span className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#96191A] rounded-bl z-20" />
        <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#96191A] rounded-br z-20" />

        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col flex-1 p-7 z-20 relative"
          >
            {/* Photo */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 bg-[#D6C9B6]/40">
              {active.photo ? (
                <Image
                  src={active.photo}
                  alt={active.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#101010]/20 text-4xl font-black">
                  {active.name.charAt(0)}
                </div>
              )}
              {/* Gradient bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#F5F0E8]/60 to-transparent" />
            </div>

            {/* Info */}
            <div className="mt-auto">
              <p className="text-[#96191A] text-[10px] font-black tracking-[0.35em] uppercase mb-1">
                Selected
              </p>
              <h3 className="text-[#101010] font-black text-xl tracking-tight leading-tight uppercase">
                {active.name}
              </h3>
              <p className="text-[#101010]/50 text-sm font-medium mt-1">
                {active.role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right — character select grid */}
      <div className="flex-1">
        {/* Grid header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#101010]/35 text-[10px] font-black tracking-[0.3em] uppercase">
            Select Astronaut — {crew.length} crew
          </span>
          <span className="text-[#101010]/25 text-[10px] font-bold tracking-widest uppercase">
            {String(selected + 1).padStart(2, "0")} / {String(crew.length).padStart(2, "0")}
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {crew.map((member, i) => {
            const isActive = i === selected;
            return (
              <motion.button
                key={i}
                onClick={() => setSelected(i)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className={`
                  group relative rounded-xl overflow-hidden border-2 aspect-square cursor-pointer text-left
                  transition-colors duration-200
                  ${isActive
                    ? "border-[#96191A] shadow-[0_0_0_3px_rgba(150,25,26,0.15)]"
                    : "border-[#101010]/10 hover:border-[#101010]/25"
                  }
                `}
              >
                {/* Photo */}
                <div className="relative w-full h-full bg-[#D6C9B6]/30">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className={`object-cover transition-all duration-400 ${isActive ? "grayscale-0" : "grayscale group-hover:grayscale-0"}`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#101010]/25 text-lg font-black">
                      {member.name.charAt(0)}
                    </div>
                  )}

                  {/* Dark overlay when inactive */}
                  <div
                    className={`absolute inset-0 bg-[#101010] transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-20 group-hover:opacity-0"}`}
                  />

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="active-badge"
                      className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#96191A]"
                    />
                  )}
                </div>

                {/* Name tooltip on hover */}
                <div className={`
                  absolute inset-x-0 bottom-0 px-2 py-1.5
                  bg-gradient-to-t from-[#101010]/75 to-transparent
                  transition-opacity duration-200
                  ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                `}>
                  <p className="text-white text-[9px] font-bold tracking-wide truncate leading-tight">
                    {member.name.split(" ")[0].toUpperCase()}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Instruction hint */}
        <p className="mt-5 text-[#101010]/25 text-[10px] font-medium tracking-widest uppercase">
          ↑ Tap to inspect
        </p>
      </div>

    </div>
  );
}
