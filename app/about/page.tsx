"use client";

import PageHeader from "../components/ui/PageHeader";
import FadeIn from "../components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "../components/animations/StaggerContainer";
import { RocketLaunchIcon, HeartIcon, SparklesIcon, GlobeAltIcon, UsersIcon, FingerPrintIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function AboutPage() {
    const values = [
        {
            icon: <SparklesIcon className="w-8 h-8" />,
            title: "Unbound Creativity",
            description: "We believe the best ideas come from the intersection of technology and raw imagination. No horizon is too far."
        },
        {
            icon: <GlobeAltIcon className="w-8 h-8" />,
            title: "Global Perspective",
            description: "Based in Jakarta, but operating on a galactic scale. We build experiences that resonate across cultures and borders."
        },
        {
            icon: <HeartIcon className="w-8 h-8" />,
            title: "Player Centric",
            description: "Every mechanic and every pixel is forged with the player's wonder in mind. We build worlds people want to live in."
        }
    ];

    const milestones = [
        { year: "2021", event: "Studio Orbit Initialized in Jakarta." },
        { year: "2022", event: "Launch of Project Aether (Alpha) and XR Research Wing." },
        { year: "2023", event: "Expansion to 15+ specialized explorers across Game Ops & Design." },
        { year: "2024", event: "First major partnership with Global XR publishers." },
        { year: "2026", event: "Launching Echoes of Eldoria - our largest universe yet." }
    ];

    return (
        <div className="pb-40">
            <PageHeader
                title="Our Story"
                description="We are a collective of explorers, creators, and engineers dedicated to forging the next generation of digital universes."
                breadcrumbs={[{ label: "About", href: "/about" }]}
                backgroundImage="/images/placeholders/about-header.jpg"
            />

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 mt-32">

                {/* 1. The Vision (Cinematic Hero) */}
                <section className="mb-40">
                    <FadeIn>
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="w-full lg:w-1/2">
                                <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#E2494B]/30 bg-[#E2494B]/5 backdrop-blur-sm">
                                    <span className="text-[#E2494B] text-xs font-bold tracking-[0.3em] uppercase">The Vision</span>
                                </div>
                                <h2 className="text-4xl md:text-7xl font-bold text-[#FCEBD7] tracking-tighter uppercase mb-8 leading-none">
                                    Forging the <br /><span className="text-[#E2494B]">Infinite</span> Horizon
                                </h2>
                                <p className="text-xl text-[#FCEBD7]/60 leading-relaxed mb-10">
                                    Ariverse Studio was founded on a simple yet radical idea: that games shouldn't just be played—they should be inhabited. We blend high-fidelity technology with deep narrative roots to create experiences that stay with you long after the transmission ends.
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-bold text-[#FCEBD7]">24</span>
                                        <span className="text-[10px] font-black text-[#E2494B] tracking-widest uppercase">Explorers</span>
                                    </div>
                                    <div className="w-px h-10 bg-[#FCEBD7]/10" />
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-bold text-[#FCEBD7]">03</span>
                                        <span className="text-[10px] font-black text-[#E2494B] tracking-widest uppercase">Active Worlds</span>
                                    </div>
                                    <div className="w-px h-10 bg-[#FCEBD7]/10" />
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-bold text-[#FCEBD7]">05+</span>
                                        <span className="text-[10px] font-black text-[#E2494B] tracking-widest uppercase">Years Orbit</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="aspect-square relative rounded-[4rem] overflow-hidden border border-[#61422D]/30">
                                    <div className="absolute inset-0 bg-[#E2494B]/10 animate-pulse" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <RocketLaunchIcon className="w-40 h-40 text-[#E2494B] opacity-20 group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    {/* For production use actual studio/team image here */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#250804] to-transparent" />
                                </div>
                                <div className="absolute -inset-8 bg-[#E2494B]/5 blur-3xl -z-10 rounded-full" />
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* 2. Our Values (The Galaxy) */}
                <section className="py-32 border-y border-[#61422D]/10">
                    <FadeIn className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#FCEBD7] tracking-tighter uppercase mb-6">Our Core DNA</h2>
                        <p className="text-[#FCEBD7]/50 max-w-xl mx-auto uppercase text-[10px] font-black tracking-widest leading-relaxed font-sans">
                            These principles are the gravity that holds our universe together.
                        </p>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <StaggerItem key={i} className="group p-10 rounded-[2.5rem] bg-[#250804] border border-[#61422D]/20 hover:border-[#E2494B]/50 transition-all duration-500">
                                <div className="w-16 h-16 rounded-2xl bg-[#E2494B]/10 border border-[#E2494B]/20 flex items-center justify-center text-[#E2494B] mb-8 group-hover:rotate-12 transition-transform">
                                    {v.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-[#FCEBD7] mb-4 uppercase tracking-tight">{v.title}</h3>
                                <p className="text-[#FCEBD7]/60 leading-relaxed italic font-sans text-sm">
                                    "{v.description}"
                                </p>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>

                {/* 3. The Journey (Timeline) */}
                <section className="py-40">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl font-bold text-[#FCEBD7] tracking-tighter uppercase sticky top-32">The Orbit <br /><span className="text-[#E2494B]">Timeline</span></h2>
                        </div>
                        <div className="lg:w-2/3 space-y-12 relative border-l border-[#FCEBD7]/10 ml-4 lg:ml-0 pl-10 pr-4">
                            {milestones.map((m, i) => (
                                <FadeIn key={i} className="relative group">
                                    <div className="absolute -left-[51px] top-2 w-5 h-5 rounded-full bg-[#250804] border-2 border-[#E2494B] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(226,73,75,0.5)]" />
                                    <div className="space-y-2">
                                        <span className="text-[#E2494B] text-xl font-black italic tracking-widest uppercase">{m.year}</span>
                                        <p className="text-xl md:text-2xl font-bold text-[#FCEBD7] leading-snug max-w-xl group-hover:text-[#F1DABA] transition-colors">{m.event}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Leadership Section */}
                <section className="py-32 text-center">
                    <FadeIn>
                        <div className="inline-block mb-10 w-24 h-24 rounded-full border border-[#E2494B]/30 p-2 relative">
                            <div className="absolute inset-0 bg-[#E2494B]/10 rounded-full animate-ping opacity-20" />
                            <div className="w-full h-full rounded-full bg-[#E2494B]/20 border border-[#E2494B]/40 flex items-center justify-center">
                                <UsersIcon className="w-10 h-10 text-[#E2494B]" />
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-[#FCEBD7] tracking-tighter uppercase mb-6">Join the Mission</h2>
                        <p className="text-[#FCEBD7]/60 max-w-2xl mx-auto text-lg mb-12">
                            We're always looking for brilliant minds to help us build what's next. Whether you're a designer, developer, or dreamer—there's a place for you in our orbit.
                        </p>
                        <a
                            href="/careers"
                            className="inline-block bg-[#E2494B] text-[#FCEBD7] px-10 py-4 rounded-full font-black tracking-widest uppercase text-sm hover:scale-110 transition-transform shadow-2xl"
                        >
                            View Open Roles
                        </a>
                    </FadeIn>
                </section>

            </div>
        </div>
    );
}
