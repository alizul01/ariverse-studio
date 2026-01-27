import React from 'react';
import FadeIn from '../animations/FadeIn';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const PRESS_ITEMS = [
    {
        outlet: "GameDev Weekly",
        logo: "/images/press/gamedev-weekly.png", // Functionality will be robust even if these images are missing
        quote: "Ariverse Studio is redefining what it means to be an indie developer in Southeast Asia.",
        link: "#",
        date: "Jan 12, 2025"
    },
    {
        outlet: "Pixel Perfect",
        logo: "/images/press/pixel-perfect.png",
        quote: "A stunning display of visual prowess and storytelling depth.",
        link: "#",
        date: "Dec 05, 2024"
    },
    {
        outlet: "Indie Corner",
        logo: "/images/press/indie-corner.png",
        quote: "The Nightwatch at the Museum is a masterclass in atmospheric horror.",
        link: "#",
        date: "Nov 20, 2024"
    }
];

const FEATURED_COVERAGE = {
    outlet: "TechCrunch",
    title: "Inside the Creative Chaos of Ariverse Studio",
    image: "/images/press/featured-coverage.jpg",
    link: "#",
    description: "We sat down with the team to discuss their upcoming projects and the philosophy behind their 'creative chaos'."
};

export default function PressCoverage() {
    return (
        <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-32 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E2494B]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <FadeIn className="mb-16 text-center md:text-left">
                <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#E2494B]/30 bg-[#E2494B]/5 backdrop-blur-sm">
                    <span className="text-[#E2494B] text-xs font-bold tracking-[0.3em] uppercase">In The News</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#FCEBD7] tracking-tight uppercase">Press Coverage</h2>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left: Featured Coverage (Big Card) */}
                <FadeIn delay={0.1} className="relative group">
                    <a href={FEATURED_COVERAGE.link} className="block h-full">
                        <div className="h-full bg-[#61422D]/10 border border-[#61422D]/20 rounded-[2.5rem] overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-[#E2494B]/50 hover:shadow-[0_20px_50px_rgba(226,73,75,0.1)]">
                            {/* Fake Image Placeholder if real one missing */}
                            <div className="relative w-full aspect-video bg-[#250804] flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#250804] to-transparent opacity-60 z-10" />
                                {/* Ideally we use Next Image here, but fallback to div for placeholder */}
                                <div className="text-[#FCEBD7]/20 text-6xl font-black uppercase tracking-tighter">Feature</div>
                            </div>

                            <div className="p-8 md:p-12 relative z-20">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-[#E2494B] font-bold tracking-widest uppercase text-sm">{FEATURED_COVERAGE.outlet}</span>
                                    <ArrowTopRightOnSquareIcon className="w-5 h-5 text-[#FCEBD7]/50 group-hover:text-[#E2494B] transition-colors" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#FCEBD7] mb-4 leading-tight group-hover:text-[#E2494B] transition-colors">
                                    {FEATURED_COVERAGE.title}
                                </h3>
                                <p className="text-[#FCEBD7]/60 leading-relaxed">
                                    {FEATURED_COVERAGE.description}
                                </p>
                            </div>
                        </div>
                    </a>
                </FadeIn>

                {/* Right: List of smaller mentions */}
                <div className="flex flex-col gap-6">
                    {PRESS_ITEMS.map((item, index) => (
                        <FadeIn key={index} delay={0.2 + (index * 0.1)}>
                            <a href={item.link} className="block group">
                                <div className="bg-[#61422D]/5 border border-[#61422D]/10 p-8 rounded-[2rem] backdrop-blur-sm transition-all duration-300 hover:bg-[#61422D]/10 hover:border-[#E2494B]/30 hover:translate-x-2">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#FCEBD7]/10 flex items-center justify-center text-[10px] text-[#FCEBD7]">LOGO</div>
                                            <span className="text-[#FCEBD7] font-bold">{item.outlet}</span>
                                        </div>
                                        <span className="text-[#FCEBD7]/30 text-xs font-mono">{item.date}</span>
                                    </div>
                                    <blockquote className="relative">
                                        <span className="text-[#E2494B]/20 text-4xl absolute -top-4 -left-2">"</span>
                                        <p className="text-[#FCEBD7]/80 italic text-lg relative z-10 pl-4">{item.quote}</p>
                                    </blockquote>
                                </div>
                            </a>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
