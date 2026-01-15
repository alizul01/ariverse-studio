"use client";

import Link from "next/link";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "../../components/animations/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export interface Game {
    title: string;
    description: string;
    slug: string;
    image: string;
    platforms: readonly string[];
    // engine: string;
    // releaseDate?: string;
}

export default function GameShowcase({ games }: { games: Game[] }) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % games.length);
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? games.length - 1 : prev - 1));

    useEffect(() => {
        if (games.length <= 1) return;
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [games.length]);

    if (!games || games.length === 0) {
        return null; // Or a loading state / fallback
    }

    return (
        <section className="relative w-full max-w-[1382px] mx-auto mt-4 px-4">
            <div className="relative h-[500px] md:h-[722px] rounded-[2.5rem] overflow-hidden group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        {/* Game Background Image with Overlay */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-100 group-hover:scale-110"
                            style={{ backgroundImage: `url(${games[current].image})` }}
                        >
                            {/* Visual Fix for missing images */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#250804]/90 via-[#250804]/40 to-transparent" />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
                            <div className="max-w-3xl">
                                <FadeIn delay={0.2} direction="up" key={`title-${current}`}>
                                    <div className="flex gap-2 mb-6">
                                        {games[current].platforms.map((platform) => (
                                            <span key={platform} className="px-3 py-1 rounded-full border border-[#FCEBD7]/20 bg-[#250804]/40 backdrop-blur-md text-[#FCEBD7]/80 text-[10px] font-bold tracking-widest">
                                                {platform}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="text-5xl md:text-8xl font-black text-[#FCEBD7] leading-none mb-6 tracking-tighter uppercase italic">
                                        {games[current].title}
                                    </h2>
                                    <p className="text-xl text-[#FCEBD7]/70 mb-10 max-w-xl leading-relaxed">
                                        {games[current].description}
                                    </p>

                                    <div className="flex flex-wrap gap-6 items-center">
                                        <Link
                                            href={`/games/${games[current].slug}`}
                                            className="group inline-flex items-center gap-3 bg-[#E2494B] text-[#FCEBD7] px-10 py-5 rounded-full font-black tracking-widest text-sm hover:bg-[#E2494B]/90 transition-all shadow-[0_10px_30px_rgba(226,73,75,0.3)]"
                                        >
                                            EXPLORE UNIVERSE
                                            <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                                        </Link>

                                        <button className="inline-flex items-center gap-3 text-[#FCEBD7] font-bold tracking-widest text-sm hover:text-[#E2494B] transition-colors">
                                            <div className="w-12 h-12 rounded-full border border-[#FCEBD7]/20 flex items-center justify-center bg-[#FCEBD7]/5 backdrop-blur-sm group-hover:border-[#E2494B]/50">
                                                <Play fill="currentColor" size={14} className="ml-1" />
                                            </div>
                                            WATCH TRAILER
                                        </button>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 pointer-events-none">
                    <button
                        onClick={prevSlide}
                        className="w-14 h-14 rounded-full border border-[#FCEBD7]/10 bg-[#250804]/20 backdrop-blur-md flex items-center justify-center text-[#FCEBD7] hover:bg-[#E2494B] hover:border-[#E2494B] transition-all duration-300 pointer-events-auto transform -translate-x-12 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-14 h-14 rounded-full border border-[#FCEBD7]/10 bg-[#250804]/20 backdrop-blur-md flex items-center justify-center text-[#FCEBD7] hover:bg-[#E2494B] hover:border-[#E2494B] transition-all duration-300 pointer-events-auto transform translate-x-12 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-10 right-10 flex gap-3">
                    {games.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-1.5 transition-all duration-500 rounded-full ${current === i ? "w-12 bg-[#E2494B]" : "w-3 bg-[#FCEBD7]/20 hover:bg-[#FCEBD7]/40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
