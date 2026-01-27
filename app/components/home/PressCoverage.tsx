import React from 'react';
import FadeIn from '../animations/FadeIn';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { reader } from '../../../lib/keystatic';

export default async function PressCoverage() {
    const pressData = await reader.collections.press.all();

    // Sort by date descending
    const sortedPress = [...pressData].sort((a, b) => {
        const dateA = a.entry.date ? new Date(a.entry.date).getTime() : 0;
        const dateB = b.entry.date ? new Date(b.entry.date).getTime() : 0;
        return dateB - dateA;
    });

    const featured = sortedPress.find(p => p.entry.isFeatured) || sortedPress[0];
    const items = sortedPress.filter(p => p.slug !== featured?.slug);

    if (pressData.length === 0) return null;

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
                {featured && (
                    <FadeIn delay={0.1} className="relative group">
                        <a href={featured.entry.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                            <div className="h-full bg-[#61422D]/10 border border-[#61422D]/20 rounded-[2.5rem] overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-[#E2494B]/50 hover:shadow-[0_20px_50px_rgba(226,73,75,0.1)]">
                                <div className="relative w-full aspect-video bg-[#250804] flex items-center justify-center overflow-hidden">
                                    {featured.entry.screenshot ? (
                                        <Image
                                            src={featured.entry.screenshot}
                                            alt={featured.entry.title || "Press Coverage"}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="text-[#FCEBD7]/20 text-6xl font-black uppercase tracking-tighter">Feature</div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#250804] to-transparent opacity-60 z-10" />
                                </div>

                                <div className="p-8 md:p-12 relative z-20">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-[#E2494B] font-bold tracking-widest uppercase text-sm">{featured.entry.outlet}</span>
                                        <ArrowTopRightOnSquareIcon className="w-5 h-5 text-[#FCEBD7]/50 group-hover:text-[#E2494B] transition-colors" />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-[#FCEBD7] mb-4 leading-tight group-hover:text-[#E2494B] transition-colors">
                                        {featured.entry.title}
                                    </h3>
                                    <p className="text-[#FCEBD7]/60 leading-relaxed line-clamp-3">
                                        {featured.entry.quote}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </FadeIn>
                )}

                {/* Right: List of smaller mentions */}
                <div className="flex flex-col gap-6">
                    {items.map((item, index) => (
                        <FadeIn key={index} delay={0.2 + (index * 0.1)}>
                            <a href={item.entry.link} target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="bg-[#61422D]/5 border border-[#61422D]/10 p-6 rounded-[2rem] backdrop-blur-sm transition-all duration-300 hover:bg-[#61422D]/10 hover:border-[#E2494B]/30 hover:translate-x-2">
                                    <div className="flex gap-6 items-start">
                                        {item.entry.screenshot && (
                                            <div className="relative w-32 aspect-square rounded-2xl overflow-hidden shrink-0 border border-[#FCEBD7]/10">
                                                <Image
                                                    src={item.entry.screenshot}
                                                    alt={item.entry.outlet}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between gap-4 mb-2">
                                                <span className="text-[#FCEBD7] font-bold truncate">{item.entry.outlet}</span>
                                                <span className="text-[#FCEBD7]/30 text-xs font-mono shrink-0">{item.entry.date}</span>
                                            </div>
                                            <blockquote className="relative">
                                                <p className="text-[#FCEBD7]/70 italic text-sm line-clamp-3 pl-2 border-l-2 border-[#E2494B]/30 group-hover:border-[#E2494B] transition-colors">
                                                    {item.entry.quote}
                                                </p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
