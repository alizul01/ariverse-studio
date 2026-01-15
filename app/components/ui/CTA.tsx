"use client";

import Link from "next/link";
import FadeIn from "../animations/FadeIn";

interface CTAProps {
    title?: string;
    description?: string;
    buttonText?: string;
    href?: string;
    className?: string;
}

export default function CTA({
    title = "READY TO LAUNCH?",
    description = "Let's build the next big thing together. Contact our command center.",
    buttonText = "START MISSION",
    href = "mailto:contact@ariverse.com",
    className = ""
}: CTAProps) {
    return (
        <section className={`max-w-[1440px] mx-auto px-4 md:px-6 text-center py-20 ${className}`}>
            <FadeIn direction="up">
                <h2 className="text-4xl md:text-6xl font-bold text-[#FCEBD7] mb-6">{title}</h2>
                <p className="text-xl text-[#FCEBD7]/70 mb-8 max-w-2xl mx-auto">{description}</p>
                <Link
                    href={href}
                    className="inline-flex items-center justify-center bg-[#FCEBD7] text-[#250804] px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all"
                >
                    {buttonText}
                </Link>
            </FadeIn>
        </section>
    );
}
