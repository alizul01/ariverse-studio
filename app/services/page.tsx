import { services } from "../data/services";
import { technologies } from "../data/technologies";
import FadeIn from "../components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "../components/animations/StaggerContainer";
import CTA from "../components/ui/CTA";

export default function ServicesPage() {
    return (
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-20 pb-40">
            {/* Header */}
            <FadeIn>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-sm font-bold tracking-widest text-[#96191A] mb-4 uppercase">Our Services</h1>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#FCEBD7] mb-6">How can we Help?</h2>
                    <p className="text-xl text-[#FCEBD7]/70">
                        We transform your ideas into immersive digital realities using cutting-edge technology and creative expertise.
                    </p>
                </div>
            </FadeIn>

            {/* Services List (Vertical) */}
            <StaggerContainer className="flex flex-col gap-8 max-w-4xl mx-auto mb-32">
                {services.map((service, index) => (
                    <StaggerItem key={index} className="bg-[#61422D]/10 border border-[#61422D]/30 p-8 md:p-10 rounded-3xl hover:bg-[#61422D]/20 transition-all cursor-pointer group flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                        <div className="w-16 h-16 bg-[#96191A] rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform flex items-center justify-center text-[#FCEBD7] font-bold text-2xl">
                            {/* Placeholder Icon */}
                            {index + 1}
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#FCEBD7] mb-2">{service.title}</h3>
                            <p className="text-lg text-[#FCEBD7]/70 leading-relaxed">{service.description}</p>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>

            {/* Key Platforms and Technologies */}
            <section className="mb-32">
                <FadeIn className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#FCEBD7]">OUR TECH & PLATFORMS</h2>
                </FadeIn>

                <StaggerContainer className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {technologies.map((tech, index) => (
                        <StaggerItem key={index}>
                            <div className="px-6 py-3 rounded-full border border-[#FCEBD7]/20 bg-[#250804]/50 text-[#FCEBD7] font-medium hover:border-[#96191A] hover:text-[#96191A] transition-colors cursor-default">
                                {tech.name}
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </section>

            {/* Modular CTA */}
            <CTA />
        </div>
    );
}
