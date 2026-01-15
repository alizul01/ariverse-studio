"use client";

import PageHeader from "../components/ui/PageHeader";
import FadeIn from "../components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "../components/animations/StaggerContainer";
import { ShieldCheckIcon, DocumentMagnifyingGlassIcon, UserGroupIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function PrivacyPolicyPage() {
    const sections = [
        {
            icon: <ShieldCheckIcon className="w-8 h-8" />,
            title: "Data Protection",
            content: "We take your digital safety seriously. Any data transmitted to Ariverse Studio is encrypted using military-grade spatial protocols. We never sell your personal information to third-party nebulae."
        },
        {
            icon: <DocumentMagnifyingGlassIcon className="w-8 h-8" />,
            content: "We collect basic information like email and device logs only when you interact with our transmissions (website/games) to ensure optimal performance and communication.",
            title: "Information Collection"
        },
        {
            icon: <LockClosedIcon className="w-8 h-8" />,
            title: "Your Rights",
            content: "You have the right to request a complete extraction of your data or its permanent deletion from our servers. Contact our Data Sentinel at any time."
        }
    ];

    return (
        <div className="pb-40">
            <PageHeader
                title="Privacy Policy"
                description="Our commitment to protecting your digital identity across the Ariverse."
                breadcrumbs={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
                backgroundImage="/images/placeholders/legal-header.jpg"
            />

            <div className="max-w-[1440px] mx-auto px-4 md:px-6">

                {/* Introduction */}
                <section className="mt-32 max-w-4xl">
                    <FadeIn>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-[#E2494B]/10 border border-[#E2494B]/20 flex items-center justify-center text-[#E2494B]">
                                <ShieldCheckIcon className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold text-[#FCEBD7] tracking-tight uppercase">Commitment to Security</h2>
                        </div>
                        <p className="text-xl text-[#FCEBD7]/60 leading-relaxed mb-8">
                            At Ariverse Studio, we believe privacy is a fundamental human (and explorer) right. This document outlines how we handle your data with transparency, integrity, and extreme care. Last updated: January 2026.
                        </p>
                    </FadeIn>
                </section>

                {/* Policy Sections */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20">
                    {sections.map((s, i) => (
                        <StaggerItem key={i} className="bg-[#250804] border border-[#61422D]/20 rounded-3xl p-10 hover:border-[#E2494B]/50 transition-all duration-500">
                            <div className="text-[#E2494B] mb-6">{s.icon}</div>
                            <h3 className="text-xl font-bold text-[#FCEBD7] mb-4 uppercase tracking-tight">{s.title}</h3>
                            <p className="text-[#FCEBD7]/50 text-sm leading-relaxed">{s.content}</p>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Detailed Text */}
                <section className="max-w-4xl py-20">
                    <FadeIn className="space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-[#FCEBD7] font-bold text-2xl uppercase tracking-tight">1. Usage Data</h3>
                            <p className="text-[#FCEBD7]/60 leading-relaxed">
                                When you access our services, we may collect information that your browser sends. This includes IP addresses, browser version, the specific pages you visit, and the time/date of your interaction. This data allows us to optimize the studio experience for all users.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[#FCEBD7] font-bold text-2xl uppercase tracking-tight">2. Cookie Policy</h3>
                            <p className="text-[#FCEBD7]/60 leading-relaxed">
                                We use small data packets (cookies) to remember your preferences and keep your session authenticated. You can adjust your browser settings to refuse cookies, though some parts of our orbit may become inaccessible.
                            </p>
                        </div>

                        <div className="space-y-4 border-t border-[#61422D]/20 pt-12">
                            <h3 className="text-[#E2494B] font-bold text-xl uppercase tracking-widest">Contact the Sentinel</h3>
                            <p className="text-[#FCEBD7]/60">Have questions about your data? Reach out to our privacy officer:</p>
                            <p className="text-[#FCEBD7] font-black tracking-widest text-lg">LEGAL@ARIVERSE.COM</p>
                        </div>
                    </FadeIn>
                </section>

            </div>
        </div>
    );
}

