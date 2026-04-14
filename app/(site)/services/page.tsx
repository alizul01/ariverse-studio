import { reader } from "../../../lib/keystatic";
import { technologies } from "../../data/technologies";
import FadeIn from "../../components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "../../components/animations/StaggerContainer";
import CTA from "../../components/ui/CTA";
import PageHeader from "../../components/ui/PageHeader";
import {
    CpuChipIcon,
    GlobeAltIcon,
    RocketLaunchIcon,
    AcademicCapIcon,
    ArrowRightIcon,
    VariableIcon,
    LightBulbIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description: "Professional game development and gamification services. Unreal Engine, 3D Art, and immersive interactive experiences for your business.",
    openGraph: {
        title: "Services | Ariverse Studio",
        description: "Professional game development and gamification services. Unreal Engine, 3D Art, and immersive interactive experiences for your business.",
        url: 'https://ariversestudio.com//services',
    },
};

function getServiceIcon(icon: string) {
    switch (icon) {
        case 'rocket': return <RocketLaunchIcon className="w-8 h-8" />;
        case 'variable': return <VariableIcon className="w-8 h-8" />;
        case 'globe': return <GlobeAltIcon className="w-8 h-8" />;
        case 'academic': return <AcademicCapIcon className="w-8 h-8" />;
        default: return <CpuChipIcon className="w-8 h-8" />;
    }
}

export default async function ServicesPage() {
    const services = await reader.collections.services.all();

    return (
        <div className="pb-40">
            <PageHeader
                title="Our Services"
                description="We transform your ideas into immersive digital realities using cutting-edge technology and creative expertise."
                breadcrumbs={[{ label: "Services", href: "/services" }]}
            />

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 mt-20">

                {/* Cinematic Services List */}
                <div className="space-y-40 mb-40">
                    {services.map((service, index) => (
                        <FadeIn key={service.slug} direction={index % 2 === 0 ? "left" : "right"}>
                            <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Visual Side */}
                                <div className="w-full lg:w-1/2 group relative">
                                    <div className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden border border-foreground/30 shadow-2xl">
                                        {service.entry.image && (
                                            <Image
                                                src={service.entry.image}
                                                alt={service.entry.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                                        {/* Floating Badge */}
                                        <div className="absolute top-8 left-8 bg-background/80 backdrop-blur-xl border border-foreground/10 p-5 rounded-3xl text-accent">
                                            {getServiceIcon(service.entry.icon)}
                                        </div>
                                    </div>

                                    {/* Decorative Glow */}
                                    <div className="absolute -inset-4 bg-accent/10 blur-3xl -z-10 group-hover:bg-accent/20 transition-colors duration-500 rounded-[4rem]" />
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2 space-y-8">
                                    <div>
                                        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
                                            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase">Service 0{index + 1}</span>
                                        </div>
                                        <h3 className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter uppercase mb-6 leading-none">
                                            {service.entry.title}
                                        </h3>
                                        <p className="text-xl text-foreground/60 leading-relaxed max-w-xl">
                                            {service.entry.description}
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <p className="text-foreground font-black text-[10px] tracking-[0.2em] uppercase opacity-40">Core Capabilities</p>
                                        <div className="flex flex-wrap gap-3">
                                            {service.entry.capabilities.map((cap, i) => (
                                                <span key={i} className="px-5 py-2 rounded-xl bg-foreground/10 border border-foreground/20 text-foreground/80 text-xs font-bold hover:border-accent/50 hover:bg-accent/10 transition-all cursor-default">
                                                    {cap}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-8">
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="group flex items-center gap-4 text-foreground font-black tracking-[0.2em] text-sm uppercase hover:text-accent transition-colors"
                                        >
                                            Explore Mission
                                            <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                                                <ArrowRightIcon className="w-5 h-5" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Key Platforms and Technologies */}
                <section className="py-32 relative overflow-hidden flex flex-col items-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

                    <FadeIn className="text-center mb-16 relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mx-auto mb-6">
                            <LightBulbIcon className="w-8 h-8" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter uppercase mb-4">Tech & Platforms</h2>
                        <p className="text-foreground/50 max-w-xl mx-auto uppercase text-[10px] font-black tracking-widest leading-relaxed">
                            We utilize the most advanced digital forge tools to create your universe.
                        </p>
                    </FadeIn>

                    <StaggerContainer className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto relative z-10">
                        {technologies.map((tech, index) => (
                            <StaggerItem key={index}>
                                <div className="group relative bg-background/40 backdrop-blur-xl border border-foreground/10 p-6 md:px-10 md:py-8 rounded-[2rem] hover:border-accent/50 transition-all duration-500 cursor-default">
                                    <span className="text-lg md:text-xl font-bold text-foreground/80 group-hover:text-foreground transition-colors">{tech.name}</span>
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>

                {/* Modular CTA */}
                <CTA />
            </div>
        </div>
    );
}
