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
            <StaggerContainer className="flex flex-col gap-8 max-w-[1440px] mx-auto mb-32">
                {services.map((service, index) => (
                    <StaggerItem key={index} className="relative w-full overflow-hidden rounded-3xl h-[400px] md:h-[500px] group border border-[#61422D]/30">
                        {/* Background Image Placeholder (In production use Next/Image) */}
                        <div className="absolute inset-0 bg-[#250804]">
                            {/* We will simulate the image with a different colored div for now since we don't have actual files,
                                but the structure is ready for <Image src={service.image} ... /> */}
                            <div
                                className="w-full h-full opacity-40 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage: `url('${service.image || '/images/placeholders/service-placeholder.jpg'}')`,
                                    backgroundColor: '#250804' // Fallback color
                                }}
                            ></div>
                        </div>

                        {/* Gradient Overlay - Left to Right */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#250804] via-[#250804]/90 to-transparent"></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 max-w-3xl">
                            <h3 className="text-4xl md:text-5xl font-bold text-[#FCEBD7] mb-4">{service.title}</h3>
                            <p className="text-xl text-[#FCEBD7]/80 mb-8 leading-relaxed line-clamp-3">{service.description}</p>

                            <div>
                                <a
                                    href={`/services/${service.slug}`}
                                    className="inline-flex items-center gap-2 border-b-0 text-[#FCEBD7] pb-1 font-bold tracking-wide hover:text-[#96191A] transition-colors hover-underline-animation"
                                >
                                    MORE INFO
                                </a>
                            </div>
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
