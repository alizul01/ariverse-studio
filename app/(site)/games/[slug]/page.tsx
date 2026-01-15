"use client";

import { games } from "../../../data/games";
import { notFound, useParams } from "next/navigation";
import FadeIn from "../../../components/animations/FadeIn";
import CTA from "../../../components/ui/CTA";
import Link from "next/link";
import { ArrowLeft, Gamepad2, Layers } from "lucide-react";
import React from "react";

import PageHeader from "../../../components/ui/PageHeader";

export default function GameDetailPage() {
    const params = useParams();
    const game = games.find((g) => g.slug === params.slug);

    if (!game) {
        notFound();
    }

    return (
        <div className="pb-20">
            <PageHeader
                title={game.title}
                description={game.description}
                backgroundImage={game.image}
                breadcrumbs={[
                    { label: "Games", href: "/games" },
                    { label: game.title, href: `/games/${game.slug}` }
                ]}
            />

            {/* Main Content Area */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2">
                    <FadeIn delay={0.2}>
                        <h2 className="text-3xl font-bold text-[#FCEBD7] mb-8 uppercase tracking-tight">Mission Briefing</h2>
                        <div className="prose prose-invert prose-lg max-w-none text-[#FCEBD7]/70">
                            <p className="mb-6">
                                Experience the pinnacle of interactive entertainment with {game.title}.
                                Our team has meticulously crafted every detail to provide an unforgettable experience that pushes the boundaries of technology and storytelling.
                            </p>
                            <p className="mb-6 border-l-4 border-[#E2494B] pl-8 py-4 italic bg-[#E2494B]/5 rounded-r-xl">
                                "A masterclass in {game.engine === 'Unreal Engine 5' ? 'visual fidelity' : 'innovative gameplay'}, proving once again that Ariverse Studio is at the forefront of the digital frontier."
                            </p>
                            <p>
                                Join thousands of players in this groundbreaking journey. Whether you're exploring the stars or uncovering ancient secrets,
                                {game.title} offers depth, challenge, and pure excitement.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                <div className="flex flex-col gap-8">
                    <FadeIn delay={0.4} direction="left">
                        <div className="bg-[#61422D]/10 border border-[#61422D]/20 p-10 rounded-[2rem] backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-[#FCEBD7] mb-8 uppercase tracking-widest flex items-center gap-3">
                                <Gamepad2 className="text-[#E2494B]" /> Spec Sheet
                            </h3>
                            <div className="space-y-6">
                                <div className="pb-6 border-b border-[#FCEBD7]/10">
                                    <p className="text-[#FCEBD7]/40 text-xs uppercase mb-2 tracking-widest">Platforms</p>
                                    <p className="text-[#FCEBD7] font-bold text-lg">{game.platforms.join(', ')}</p>
                                </div>
                                <div className="pb-6 border-b border-[#FCEBD7]/10">
                                    <p className="text-[#FCEBD7]/40 text-xs uppercase mb-2 tracking-widest">Engine</p>
                                    <p className="text-[#FCEBD7] font-bold text-lg">{game.engine}</p>
                                </div>
                                <div className="pb-6 border-b border-[#FCEBD7]/10">
                                    <p className="text-[#FCEBD7]/40 text-xs uppercase mb-2 tracking-widest">Status</p>
                                    <p className="text-[#E2494B] font-bold text-lg">{game.releaseDate || 'In Development'}</p>
                                </div>
                                <div>
                                    <p className="text-[#FCEBD7]/40 text-xs uppercase mb-2 tracking-widest">Genre</p>
                                    <p className="text-[#FCEBD7] font-bold text-lg">Interactive Experience</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.6} direction="left">
                        <div className="bg-[#E2494B] p-10 rounded-[2rem] text-[#FCEBD7] hover:scale-[1.02] transition-transform cursor-pointer">
                            <Layers className="mb-6" size={32} />
                            <h3 className="text-2xl font-bold mb-2">Request Presskit</h3>
                            <p className="text-[#FCEBD7]/80 text-sm mb-6">Access high-res assets and professional studio information.</p>
                            <div className="font-bold border-b-2 border-[#FCEBD7] inline-block pb-1">DOWNLOAD NOW</div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <CTA
                title="JOIN THE ODYSSEY"
                description={`Ready to jump into ${game.title}? Connect with us for updates and exclusive content.`}
            />
        </div>
    );
}
