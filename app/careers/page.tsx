"use client";

import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import FadeIn from "../components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "../components/animations/StaggerContainer";
import { jobs } from "../data/jobs";
import { motion, AnimatePresence } from "framer-motion";
import {
    RocketLaunchIcon,
    HeartIcon,
    SparklesIcon,
    MapPinIcon,
    BriefcaseIcon,
    ClockIcon,
    GlobeAltIcon,
    XMarkIcon,
    CheckCircleIcon
} from "@heroicons/react/24/outline";

export default function CareersPage() {
    const [activeTab, setActiveTab] = useState("All");
    const [selectedJob, setSelectedJob] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const departments = ["All", ...new Set(jobs.map(job => job.department))];

    const filteredJobs = activeTab === "All"
        ? jobs
        : jobs.filter(job => job.department === activeTab);

    const handleApply = (job: any = null) => {
        setSelectedJob(job);
        setShowModal(true);
        setIsSuccess(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
        // Reset after 3 seconds
        setTimeout(() => {
            setShowModal(false);
            setIsSuccess(false);
        }, 3000);
    };

    return (
        <div className="pb-40">
            <PageHeader
                title="Careers"
                description="Join the crew. We're looking for passionate explorers to build the future of interactive entertainment."
                breadcrumbs={[{ label: "Careers", href: "/careers" }]}
                backgroundImage="/images/placeholders/careers-header.jpg"
            />

            {/* 1. Why Join Us (Culture) */}
            <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-32">
                <FadeIn className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#E2494B]/30 bg-[#E2494B]/5 backdrop-blur-sm">
                        <span className="text-[#E2494B] text-xs font-bold tracking-[0.3em] uppercase">The Culture</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#FCEBD7] tracking-tighter uppercase mb-6">Beyond the Code</h2>
                    <p className="text-[#FCEBD7]/60 max-w-2xl mx-auto text-lg leading-relaxed">
                        At Ariverse Studio, we don't just build games; we forge digital universes. Our culture is rooted in exploration, creativity, and the relentless pursuit of excellence.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Remote First",
                            desc: "Work from anywhere in the world. We value results over time-zones.",
                            icon: <GlobeAltIcon className="w-8 h-8" />
                        },
                        {
                            title: "Latest Frontier",
                            desc: "Get your hands on the latest tech, from UE5 to bleeding-edge XR hardware.",
                            icon: <RocketLaunchIcon className="w-8 h-8" />
                        },
                        {
                            title: "Health & Heart",
                            desc: "Comprehensive health coverage and a focus on keeping your explorer heart healthy.",
                            icon: <HeartIcon className="w-8 h-8" />
                        }
                    ].map((benefit, i) => (
                        <StaggerItem key={i} className="group relative bg-[#61422D]/10 border border-[#61422D]/20 p-10 rounded-[2rem] hover:border-[#E2494B]/50 transition-all duration-500">
                            <div className="w-16 h-16 rounded-2xl bg-[#250804] border border-[#61422D]/30 flex items-center justify-center text-[#FCEBD7] group-hover:text-[#E2494B] group-hover:bg-[#E2494B]/5 transition-all duration-500 mb-8">
                                <div className="w-8 h-8">{benefit.icon}</div>
                            </div>
                            <h3 className="text-2xl font-bold text-[#FCEBD7] mb-4 group-hover:text-[#E2494B] transition-colors">{benefit.title}</h3>
                            <p className="text-[#FCEBD7]/50 text-sm leading-relaxed">{benefit.desc}</p>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </section>

            {/* 2. Open Positions */}
            <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-32 bg-[#250804]/30">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                    <div>
                        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#E2494B]/30 bg-[#E2494B]/5 backdrop-blur-sm">
                            <span className="text-[#E2494B] text-xs font-bold tracking-[0.3em] uppercase">Join Us</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-[#FCEBD7] tracking-tighter uppercase">Open Positions</h2>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {departments.map((dept) => (
                            <button
                                key={dept}
                                onClick={() => setActiveTab(dept)}
                                className={`px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase transition-all duration-300 border ${activeTab === dept
                                    ? "bg-[#E2494B] border-[#E2494B] text-[#FCEBD7] shadow-[0_5px_15px_rgba(226,73,75,0.3)]"
                                    : "border-[#FCEBD7]/10 text-[#FCEBD7]/40 hover:border-[#FCEBD7]/30"
                                    }`}
                            >
                                {dept}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-6 max-w-5xl mx-auto">
                    <AnimatePresence mode="popLayout">
                        {filteredJobs.map((job) => (
                            <motion.div
                                key={job.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="group relative bg-[#250804] border border-[#61422D]/20 p-8 rounded-3xl hover:border-[#E2494B]/50 transition-all duration-500 overflow-hidden"
                            >
                                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-[#E2494B] text-[10px] font-black tracking-[0.2em] uppercase px-2 py-0.5 rounded-md bg-[#E2494B]/10 border border-[#E2494B]/20">
                                                {job.department}
                                            </span>
                                            <span className="text-[#FCEBD7]/30 text-xs flex items-center gap-1.5">
                                                <ClockIcon className="w-3 h-3" /> {job.type}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#FCEBD7] group-hover:text-[#E2494B] transition-colors mb-4">{job.title}</h3>
                                        <div className="flex flex-wrap gap-6 text-[#FCEBD7]/40 text-sm">
                                            <span className="flex items-center gap-2">
                                                <MapPinIcon className="w-4 h-4 text-[#E2494B]" /> {job.location}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <BriefcaseIcon className="w-4 h-4 text-[#E2494B]" /> {job.experience}
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleApply(job)}
                                        className="flex items-center gap-3 bg-[#FCEBD7]/5 text-[#FCEBD7] px-8 py-4 rounded-2xl font-bold text-sm border border-[#FCEBD7]/10 group-hover:bg-[#E2494B] group-hover:border-[#E2494B] transition-all duration-300"
                                    >
                                        APPLY NOW
                                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>

                                {/* Background Hover Glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E2494B]/5 rounded-full blur-[80px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {filteredJobs.length === 0 && (
                        <div className="text-center py-20 text-[#FCEBD7]/30 border border-dashed border-[#61422D]/20 rounded-3xl">
                            <SparklesIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p>No open paths in this department right now. Try another one!</p>
                        </div>
                    )}
                </div>
            </section>

            {/* 3. General Application CTA */}
            <section className="max-w-4xl mx-auto px-4 md:px-6 py-32 text-center">
                <FadeIn direction="up">
                    <div className="bg-[#61422D]/5 border border-[#61422D]/20 p-16 rounded-[3rem] backdrop-blur-xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#E2494B]/10 to-transparent pointer-events-none" />
                        <h2 className="text-3xl md:text-5xl font-bold text-[#FCEBD7] mb-6 relative z-10">Don't see your path?</h2>
                        <p className="text-lg text-[#FCEBD7]/60 mb-10 max-w-xl mx-auto relative z-10">
                            If you're an explorer with a unique skillset, we still want to hear from you. We're always looking for geniuses to join the crew.
                        </p>
                        <button
                            onClick={() => handleApply()}
                            className="bg-[#E2494B] text-[#FCEBD7] px-12 py-5 rounded-full font-black tracking-widest text-sm hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(226,73,75,0.4)] relative z-10 uppercase font-black"
                        >
                            Submit General Application
                        </button>
                    </div>
                </FadeIn>
            </section>

            {/* 4. Application Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => !isSubmitting && setShowModal(false)}
                            className="absolute inset-0 bg-[#250804]/80 backdrop-blur-xl"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-[#250804] border border-[#61422D]/30 rounded-[2.5rem] shadow-2xl overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="relative p-8 md:p-12 border-b border-[#61422D]/20">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="absolute top-8 right-8 text-[#FCEBD7]/40 hover:text-[#E2494B] transition-colors"
                                >
                                    <XMarkIcon className="w-8 h-8" />
                                </button>

                                <div className="inline-block mb-4 px-3 py-1 rounded-md bg-[#E2494B]/10 border border-[#E2494B]/20">
                                    <span className="text-[#E2494B] text-[10px] font-black tracking-widest uppercase">
                                        {selectedJob ? `Applying for ${selectedJob.department}` : "General Application"}
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-[#FCEBD7] tracking-tighter uppercase">
                                    {selectedJob ? selectedJob.title : "Join the Expedition"}
                                </h2>
                            </div>

                            <div className="p-8 md:p-12">
                                <AnimatePresence mode="wait">
                                    {isSuccess ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-10"
                                        >
                                            <div className="w-20 h-20 bg-[#E2494B]/10 border border-[#E2494B]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <CheckCircleIcon className="w-12 h-12 text-[#E2494B]" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-[#FCEBD7] mb-2">Transmission Received!</h3>
                                            <p className="text-[#FCEBD7]/60">Your application has been logged in our systems. Our crew will review your coordinates shortly.</p>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            onSubmit={handleSubmit}
                                            className="space-y-6"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-[#E2494B] tracking-widest uppercase">Full Name</label>
                                                    <input required type="text" placeholder="John Explorer" className="w-full bg-[#61422D]/10 border border-[#61422D]/20 rounded-xl px-4 py-4 text-[#FCEBD7] placeholder-[#FCEBD7]/20 outline-none focus:border-[#E2494B]/50 transition-all" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-[#E2494B] tracking-widest uppercase">Email Address</label>
                                                    <input required type="email" placeholder="john@ariverse.com" className="w-full bg-[#61422D]/10 border border-[#61422D]/20 rounded-xl px-4 py-4 text-[#FCEBD7] placeholder-[#FCEBD7]/20 outline-none focus:border-[#E2494B]/50 transition-all" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-[#E2494B] tracking-widest uppercase">Portfolio / LinkedIn URL</label>
                                                <input required type="url" placeholder="https://..." className="w-full bg-[#61422D]/10 border border-[#61422D]/20 rounded-xl px-4 py-4 text-[#FCEBD7] placeholder-[#FCEBD7]/20 outline-none focus:border-[#E2494B]/50 transition-all" />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-[#E2494B] tracking-widest uppercase">Why join the Ariverse?</label>
                                                <textarea rows={4} placeholder="Tell us about your passion for digital universes..." className="w-full bg-[#61422D]/10 border border-[#61422D]/20 rounded-xl px-4 py-4 text-[#FCEBD7] placeholder-[#FCEBD7]/20 outline-none focus:border-[#E2494B]/50 transition-all resize-none" />
                                            </div>

                                            <button
                                                disabled={isSubmitting}
                                                type="submit"
                                                className="w-full bg-[#E2494B] text-[#FCEBD7] py-5 rounded-2xl font-black tracking-widest uppercase text-sm hover:bg-[#E2494B]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(226,73,75,0.3)]"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-4 h-4 border-2 border-[#FCEBD7]/30 border-t-[#FCEBD7] rounded-full animate-spin" />
                                                        Sending Transmission...
                                                    </>
                                                ) : (
                                                    "Submit Application"
                                                )}
                                            </button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}



