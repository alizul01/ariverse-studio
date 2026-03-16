"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import FadeIn from "../../components/animations/FadeIn";
import PageHeader from "../../components/ui/PageHeader";

type FormData = {
    name: string;
    email: string;
    subject: string;
    type: string;
    message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        type: "general",
        message: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Construct mailto link as fallback (no backend)
        const mailtoSubject = encodeURIComponent(`[${form.type}] ${form.subject}`);
        const mailtoBody = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\nType: ${form.type}\n\n${form.message}`
        );
        
        window.location.href = `mailto:hello@ariversestudio.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        
        // Simulate success after opening mail client
        setTimeout(() => {
            setStatus("success");
            setForm({ name: "", email: "", subject: "", type: "general", message: "" });
        }, 1000);
    };

    const inquiryTypes = [
        { value: "general", label: "General Inquiry" },
        { value: "collaboration", label: "Collaboration / Partnership" },
        { value: "services", label: "Game Development Services" },
        { value: "careers", label: "Careers & Hiring" },
        { value: "press", label: "Press & Media" },
        { value: "other", label: "Other" },
    ];

    const contactInfo = [
        { icon: Mail, label: "Email", value: "hello@ariversestudio.com", href: "mailto:hello@ariversestudio.com" },
        { icon: MapPin, label: "Location", value: "Malang, Indonesia", href: null },
        { icon: Clock, label: "Response Time", value: "Within 48 hours", href: null },
    ];

    const inputClasses =
        "w-full bg-[#250804] border border-[#61422D]/30 rounded-xl px-5 py-4 text-[#FCEBD7] placeholder-[#FCEBD7]/30 focus:outline-none focus:border-[#E2494B]/60 focus:ring-1 focus:ring-[#E2494B]/30 transition-all text-sm";

    return (
        <div className="pb-40">
            <PageHeader
                title="Contact Us"
                description="Have a question or want to collaborate? We'd love to hear from you."
                breadcrumbs={[{ label: "Contact", href: "/contact" }]}
                backgroundImage="/images/placeholders/contact-header.jpg"
            />

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                    {/* Contact Info Sidebar */}
                    <FadeIn className="lg:col-span-2" direction="left">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-[#FCEBD7] tracking-tight uppercase mb-4">
                                    Get in Touch
                                </h2>
                                <p className="text-[#FCEBD7]/60 leading-relaxed">
                                    Whether you&apos;re interested in our game development services, looking for a collaboration, 
                                    or just want to say hello — drop us a message.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((item) => (
                                    <div key={item.label} className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#E2494B]/10 border border-[#E2494B]/20 flex items-center justify-center shrink-0">
                                            <item.icon className="w-5 h-5 text-[#E2494B]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#FCEBD7]/40 mb-1">{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} className="text-[#FCEBD7] font-medium hover:text-[#E2494B] transition-colors">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-[#FCEBD7] font-medium">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative card */}
                            <div className="bg-[#E2494B]/5 border border-[#E2494B]/10 rounded-2xl p-6 mt-8">
                                <p className="text-[#FCEBD7]/80 text-sm leading-relaxed">
                                    💡 <strong className="text-[#E2494B]">Looking for game dev services?</strong> Check out our{" "}
                                    <a href="/services" className="text-[#E2494B] underline underline-offset-4 hover:text-[#FCEBD7]">services page</a>{" "}
                                    for detailed information about what we offer.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Contact Form */}
                    <FadeIn className="lg:col-span-3" direction="right">
                        <div className="bg-[#250804] border border-[#61422D]/20 rounded-[2rem] p-8 md:p-10">
                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-center py-16"
                                    >
                                        <div className="w-20 h-20 mx-auto rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6">
                                            <CheckCircle className="w-10 h-10 text-green-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#FCEBD7] mb-3">Message Sent!</h3>
                                        <p className="text-[#FCEBD7]/60 mb-8">Your email client should have opened. We&apos;ll get back to you within 48 hours.</p>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="text-[#E2494B] font-bold text-sm uppercase tracking-widest hover:text-[#FCEBD7] transition-colors"
                                        >
                                            Send Another Message →
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-[#FCEBD7]/40 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="John Doe"
                                                    className={inputClasses}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-[#FCEBD7]/40 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="you@example.com"
                                                    className={inputClasses}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="type" className="block text-[10px] font-bold uppercase tracking-widest text-[#FCEBD7]/40 mb-2">
                                                    Inquiry Type
                                                </label>
                                                <select
                                                    id="type"
                                                    name="type"
                                                    value={form.type}
                                                    onChange={handleChange}
                                                    className={inputClasses}
                                                >
                                                    {inquiryTypes.map((t) => (
                                                        <option key={t.value} value={t.value}>{t.label}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="subject" className="block text-[10px] font-bold uppercase tracking-widest text-[#FCEBD7]/40 mb-2">
                                                    Subject *
                                                </label>
                                                <input
                                                    id="subject"
                                                    type="text"
                                                    name="subject"
                                                    value={form.subject}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="What's this about?"
                                                    className={inputClasses}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-[#FCEBD7]/40 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                placeholder="Tell us more about your project or inquiry..."
                                                className={`${inputClasses} resize-none`}
                                            />
                                        </div>

                                        {status === "error" && (
                                            <div className="flex items-center gap-2 text-red-400 text-sm">
                                                <AlertCircle className="w-4 h-4" />
                                                Something went wrong. Please try again.
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#E2494B] text-[#FCEBD7] px-10 py-4 rounded-full font-bold tracking-widest text-sm hover:bg-[#E2494B]/90 transition-all shadow-[0_10px_30px_rgba(226,73,75,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {status === "submitting" ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    SENDING...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    SEND MESSAGE
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
