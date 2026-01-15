"use client";

import PageHeader from "../../components/ui/PageHeader";
import FadeIn from "../../components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "../../components/animations/StaggerContainer";
import { pressAssets, studioInfo } from "../../data/presskit";
import {
    CloudArrowDownIcon,
    InformationCircleIcon,
    PhotoIcon,
    VideoCameraIcon,
    DocumentTextIcon,
    Squares2X2Icon,
    ArrowDownTrayIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function PresskitPage() {
    return (
        <div className="pb-40">
            <PageHeader
                title="Presskit"
                description="Everything you need to cover Ariverse Studio. High-res assets, studio facts, and media resources."
                breadcrumbs={[{ label: "Presskit", href: "/presskit" }]}
                backgroundImage="/images/placeholders/press-header.jpg"
            />

            <div className="max-w-[1440px] mx-auto px-4 md:px-6">

                {/* 1. Global Download CTA */}
                <section className="mt-20">
                    <FadeIn>
                        <div className="relative group overflow-hidden rounded-[3rem] bg-[#250804] border border-[#61422D]/20 p-12 md:p-20 text-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#E2494B]/10 to-transparent pointer-events-none" />
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E2494B]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10 max-w-2xl mx-auto">
                                <CloudArrowDownIcon className="w-16 h-16 text-[#E2494B] mx-auto mb-8 animate-bounce" />
                                <h2 className="text-3xl md:text-5xl font-black text-[#FCEBD7] tracking-tighter uppercase mb-6">
                                    The Explorer's Media Kit
                                </h2>
                                <p className="text-[#FCEBD7]/60 text-lg mb-10">
                                    Download the complete studio package including high-res logos, team photos, and the latest project media (582 MB).
                                </p>
                                <button className="bg-[#E2494B] text-[#FCEBD7] px-12 py-5 rounded-full font-black tracking-widest text-sm hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(226,73,75,0.4)] uppercase">
                                    Download All Assets (.ZIP)
                                </button>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* 2. Asset Universe & Studio Intel Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-32">

                    {/* Asset Universe (Left Col) */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-10 h-10 rounded-xl bg-[#E2494B]/10 border border-[#E2494B]/20 flex items-center justify-center text-[#E2494B]">
                                <Squares2X2Icon className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold text-[#FCEBD7] tracking-tighter uppercase">Asset Universe</h2>
                        </div>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {pressAssets.map((asset) => (
                                <StaggerItem key={asset.id} className="group bg-[#61422D]/5 border border-[#61422D]/20 rounded-3xl overflow-hidden hover:border-[#E2494B]/50 transition-all duration-500">
                                    <div className="h-48 relative overflow-hidden bg-[#250804]">
                                        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                                            {asset.type === "Logo" && <Squares2X2Icon className="w-20 h-20" />}
                                            {asset.type === "Screenshot" && <PhotoIcon className="w-20 h-20" />}
                                            {asset.type === "Document" && <DocumentTextIcon className="w-20 h-20" />}
                                            {asset.type === "Video" && <VideoCameraIcon className="w-20 h-20" />}
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-[#250804]/80 backdrop-blur-md border border-[#FCEBD7]/10 text-[#FCEBD7] text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-widest">
                                                {asset.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-[#FCEBD7] group-hover:text-[#E2494B] transition-colors">{asset.title}</h3>
                                            <span className="text-[#FCEBD7]/30 text-[10px] font-bold mt-1 uppercase">{asset.fileSize}</span>
                                        </div>
                                        <p className="text-[#FCEBD7]/50 text-sm mb-8 leading-relaxed line-clamp-2">
                                            {asset.description}
                                        </p>
                                        <button className="w-full flex items-center justify-center gap-3 bg-[#FCEBD7]/5 border border-[#FCEBD7]/10 text-[#FCEBD7] py-4 rounded-xl text-xs font-bold tracking-widest uppercase hover:bg-[#E2494B] hover:border-[#E2494B] transition-all">
                                            <ArrowDownTrayIcon className="w-4 h-4" /> Download
                                        </button>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Studio Intel (Right Col) */}
                    <aside>
                        <FadeIn>
                            <div className="bg-[#250804] border border-[#61422D]/20 rounded-[2.5rem] p-10 sticky top-32">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-10 h-10 rounded-xl bg-[#E2494B]/10 border border-[#E2494B]/20 flex items-center justify-center text-[#E2494B]">
                                        <InformationCircleIcon className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#FCEBD7] tracking-tighter uppercase">Studio Intel</h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black text-[#E2494B] tracking-[0.2em] uppercase">Founded</p>
                                        <p className="text-[#FCEBD7] font-bold text-lg">{studioInfo.foundingDate}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black text-[#E2494B] tracking-[0.2em] uppercase">Headquarters</p>
                                        <p className="text-[#FCEBD7] font-bold text-lg">{studioInfo.location}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black text-[#E2494B] tracking-[0.2em] uppercase">Team Size</p>
                                        <p className="text-[#FCEBD7] font-bold text-lg">{studioInfo.teamSize}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black text-[#E2494B] tracking-[0.2em] uppercase">Founder</p>
                                        <p className="text-[#FCEBD7] font-bold text-lg">{studioInfo.founder}</p>
                                    </div>

                                    <div className="pt-8 border-t border-[#61422D]/20 space-y-4">
                                        <p className="text-[10px] font-black text-[#E2494B] tracking-[0.2em] uppercase">Active Frontiers</p>
                                        <div className="flex flex-wrap gap-2">
                                            {studioInfo.activeProjects.map((project, i) => (
                                                <span key={i} className="px-3 py-1 rounded-md bg-[#61422D]/10 border border-[#61422D]/20 text-[#FCEBD7]/70 text-[10px] font-bold uppercase tracking-widest">
                                                    {project}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 p-6 rounded-2xl bg-[#E2494B]/5 border border-[#E2494B]/10">
                                    <p className="text-[#FCEBD7]/40 text-[10px] font-bold uppercase tracking-widest mb-3">Press Contact</p>
                                    <p className="text-[#FCEBD7] font-bold text-sm">press@ariverse.com</p>
                                </div>
                            </div>
                        </FadeIn>
                    </aside>

                </div>
            </div>
        </div>
    );
}
