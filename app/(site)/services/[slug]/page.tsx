import { notFound } from "next/navigation";
import FadeIn from "../../../components/animations/FadeIn";
import CTA from "../../../components/ui/CTA";
import PageHeader from "../../../components/ui/PageHeader";
import DocumentContent from "../../../components/ui/DocumentContent";
import { reader } from "../../../../lib/keystatic";
import type { Metadata } from "next";

interface ServiceDetailProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const services = await reader.collections.services.all();
    return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailProps): Promise<Metadata> {
    const { slug } = await params;
    const service = await reader.collections.services.read(slug);

    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} | Ariverse Studio`,
        description: service.description,
        openGraph: {
            title: `${service.title} | Ariverse Studio`,
            description: service.description,
            images: service.image ? [service.image] : [],
        },
    };
}

export default async function ServiceDetailPage(props: ServiceDetailProps) {
    const params = await props.params;
    const service = await reader.collections.services.read(params.slug);

    if (!service) notFound();

    return (
        <div className="pb-20">
            <PageHeader
                title={service.title}
                description={service.description}
                breadcrumbs={[
                    { label: "Services", href: "/services" },
                    { label: service.title, href: `/services/${params.slug}` }
                ]}
            />

            <div className="max-w-4xl mx-auto px-4 md:px-6 py-20">
                <FadeIn delay={0.2}>
                    {/* Capabilities */}
                    {service.capabilities.length > 0 && (
                        <div className="mb-16">
                            <p className="text-foreground font-black text-[10px] tracking-[0.2em] uppercase opacity-40 mb-6">Core Capabilities</p>
                            <div className="flex flex-wrap gap-3">
                                {service.capabilities.map((cap, i) => (
                                    <span key={i} className="px-5 py-2 rounded-xl bg-foreground/10 border border-foreground/20 text-foreground/80 text-xs font-bold">
                                        {cap}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Rich Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        {service.content ? (
                            <DocumentContent document={await service.content()} />
                        ) : (
                            <p className="text-foreground/40">No content available.</p>
                        )}
                    </div>
                </FadeIn>
            </div>

            <CTA title="START YOUR PROJECT" description={`Ready to take your ${service.title.toLowerCase()} to the next level?`} />
        </div>
    );
}
