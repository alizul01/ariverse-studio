import { services } from "../data/services";
import FadeIn from "../components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "../components/animations/StaggerContainer";

export default function ServicesPage() {
    return (
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-20 pb-40">
            <FadeIn>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#FCEBD7] mb-6">OUR SERVICES</h1>
                    <p className="text-xl text-[#FCEBD7]/70">
                        We provide end-to-end game development solutions tailored to your vision.
                        From concept art to final deployment, we handle it all.
                    </p>
                </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <StaggerItem key={index} className="bg-[#61422D]/10 border border-[#61422D]/30 p-8 rounded-2xl hover:bg-[#61422D]/20 transition-all cursor-pointer group flex flex-col h-full">
                        <div className="w-14 h-14 bg-[#96191A] rounded-xl mb-6 group-hover:scale-110 transition-transform flex-shrink-0"></div>
                        <h3 className="text-2xl font-bold text-[#FCEBD7] mb-4">{service.title}</h3>
                        <p className="text-[#FCEBD7]/70 leading-relaxed flex-grow">{service.description}</p>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
    );
}
