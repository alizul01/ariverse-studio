import { services } from "../../../data/services";
import { notFound } from "next/navigation";
import FadeIn from "../../../components/animations/FadeIn";
import CTA from "../../../components/ui/CTA";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ServiceDetailProps {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

import PageHeader from "../../../components/ui/PageHeader";

export default async function ServiceDetailPage(props: ServiceDetailProps) {
    const params = await props.params;
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="pb-20">
            <PageHeader
                title={service.title}
                description={service.description}
                backgroundImage={service.image}
                breadcrumbs={[
                    { label: "Services", href: "/services" },
                    { label: service.title, href: `/services/${service.slug}` }
                ]}
            />

            {/* Main Content Area */}
            <div className="max-w-4xl mx-auto px-4 md:px-6 py-20">
                <FadeIn delay={0.2}>
                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="lead text-[#FCEBD7] border-l-4 border-[#96191A] pl-6 italic">
                            This is a placeholder for the detailed description of {service.title}.
                            We customize every aspect of our work to fit your specific needs.
                        </p>

                        <h3 className="text-[#FCEBD7] font-bold mt-12 mb-4">What We Offer</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <li key={item} className="bg-[#61422D]/10 p-4 rounded-lg flex items-center gap-3 border border-[#61422D]/20">
                                    <div className="w-2 h-2 rounded-full bg-[#96191A]"></div>
                                    <span className="text-[#FCEBD7]/80">Feature or capability {item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-[#FCEBD7] font-bold mt-12 mb-4">Why Choose Us for {service.title}?</h3>
                        <p className="text-[#FCEBD7]/70">
                            Our team combines years of industry experience with a passion for innovation.
                            Whether you need a full-scale production or specialized support, we deliver quality that stands out.
                        </p>
                    </div>
                </FadeIn>
            </div>

            <CTA title="START YOUR PROJECT" description={`Ready to take your ${service.title.toLowerCase()} to the next level?`} />
        </div>
    );
}
