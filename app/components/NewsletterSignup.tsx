"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, Loader2, Sparkles } from "lucide-react";

export default function NewsletterSignup() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("submitting");

        // Simulate subscription (replace with actual API endpoint when ready)
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setStatus("success");
        setEmail("");

        // Reset after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
    };

    return (
        <section className="relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-24">
                <div className="relative bg-gradient-to-br from-[#E2494B]/10 via-[#250804] to-[#96191A]/10 border border-[#E2494B]/20 rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#E2494B]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#96191A]/5 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-[#E2494B]/10 border border-[#E2494B]/20 rounded-full px-4 py-1.5 mb-6">
                                <Sparkles className="w-4 h-4 text-[#E2494B]" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E2494B]">Stay Updated</span>
                            </div>
                        </motion.div>

                        <motion.h2
                            className="text-3xl md:text-5xl font-bold text-[#FCEBD7] tracking-tight mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Subscribe to Our Newsletter
                        </motion.h2>

                        <motion.p
                            className="text-[#FCEBD7]/60 max-w-lg mx-auto mb-10 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Get the latest game updates, dev logs, and studio news delivered straight to your inbox. No spam, just good stuff.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center justify-center gap-3 text-green-400"
                                    >
                                        <CheckCircle className="w-6 h-6" />
                                        <span className="font-bold text-lg">You&apos;re subscribed! Welcome aboard.</span>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
                                    >
                                        <div className="relative flex-1">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FCEBD7]/30" />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                placeholder="your@email.com"
                                                className="w-full bg-[#250804] border border-[#61422D]/30 rounded-full pl-12 pr-5 py-4 text-[#FCEBD7] placeholder-[#FCEBD7]/30 focus:outline-none focus:border-[#E2494B]/60 focus:ring-1 focus:ring-[#E2494B]/30 transition-all text-sm"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="inline-flex items-center justify-center gap-2 bg-[#E2494B] text-[#FCEBD7] px-8 py-4 rounded-full font-bold tracking-widest text-sm hover:bg-[#E2494B]/90 transition-all shadow-[0_10px_30px_rgba(226,73,75,0.3)] disabled:opacity-50 whitespace-nowrap"
                                        >
                                            {status === "submitting" ? (
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                            ) : (
                                                "SUBSCRIBE"
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        <p className="text-[#FCEBD7]/30 text-xs mt-6">
                            We respect your privacy. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
