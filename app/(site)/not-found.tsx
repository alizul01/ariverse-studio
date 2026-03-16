"use client";

import Link from "next/link";
import { Rocket, Home, ArrowLeft, Gamepad2, BookOpen, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                {/* Animated Rocket Icon */}
                <motion.div
                    className="relative mb-8"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="w-32 h-32 mx-auto rounded-full bg-[#E2494B]/10 border border-[#E2494B]/30 flex items-center justify-center">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Rocket className="w-16 h-16 text-[#E2494B]" />
                        </motion.div>
                    </div>
                    {/* Stars decoration */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-[#FCEBD7] rounded-full"
                            style={{
                                top: `${20 + Math.random() * 60}%`,
                                left: `${15 + Math.random() * 70}%`,
                            }}
                            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                        />
                    ))}
                </motion.div>

                {/* Error Code */}
                <motion.h1
                    className="text-8xl md:text-9xl font-black text-[#FCEBD7] tracking-tighter mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    4<span className="text-[#E2494B]">0</span>4
                </motion.h1>

                {/* Message */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-[#FCEBD7] mb-6 tracking-tight uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Lost in Space
                </motion.h2>
                <motion.p
                    className="text-lg text-[#FCEBD7]/60 mb-12 max-w-md mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Houston, we have a problem! The page you&apos;re looking for has drifted into a black hole.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-3 bg-[#E2494B] text-[#FCEBD7] px-8 py-4 rounded-full font-bold tracking-widest text-sm hover:bg-[#E2494B]/90 transition-all shadow-[0_10px_30px_rgba(226,73,75,0.3)]"
                    >
                        <Home className="w-5 h-5" />
                        BACK TO HOME
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="group inline-flex items-center gap-3 text-[#FCEBD7] px-8 py-4 rounded-full font-bold tracking-widest text-sm border border-[#FCEBD7]/20 hover:border-[#E2494B]/50 hover:text-[#E2494B] transition-all"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        GO BACK
                    </button>
                </motion.div>

                {/* Suggested Links */}
                <motion.div
                    className="mt-16 pt-8 border-t border-[#61422D]/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <p className="text-sm text-[#FCEBD7]/40 mb-6 uppercase tracking-widest">Or explore these</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/games" className="inline-flex items-center gap-2 text-[#FCEBD7]/60 hover:text-[#E2494B] transition-colors text-sm bg-[#61422D]/10 px-4 py-2 rounded-full border border-[#61422D]/20 hover:border-[#E2494B]/30">
                            <Gamepad2 className="w-4 h-4" /> Our Games
                        </Link>
                        <Link href="/blog" className="inline-flex items-center gap-2 text-[#FCEBD7]/60 hover:text-[#E2494B] transition-colors text-sm bg-[#61422D]/10 px-4 py-2 rounded-full border border-[#61422D]/20 hover:border-[#E2494B]/30">
                            <BookOpen className="w-4 h-4" /> Blog
                        </Link>
                        <Link href="/about" className="inline-flex items-center gap-2 text-[#FCEBD7]/60 hover:text-[#E2494B] transition-colors text-sm bg-[#61422D]/10 px-4 py-2 rounded-full border border-[#61422D]/20 hover:border-[#E2494B]/30">
                            <Briefcase className="w-4 h-4" /> About Us
                        </Link>
                        <Link href="/careers" className="inline-flex items-center gap-2 text-[#FCEBD7]/60 hover:text-[#E2494B] transition-colors text-sm bg-[#61422D]/10 px-4 py-2 rounded-full border border-[#61422D]/20 hover:border-[#E2494B]/30">
                            <Rocket className="w-4 h-4" /> Careers
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
