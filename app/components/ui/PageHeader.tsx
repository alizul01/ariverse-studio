import Link from "next/link";
import { ChevronRight } from "lucide-react";
import NextImage from "next/image";
import FadeIn from "../animations/FadeIn";

interface PageHeaderProps {
    title: string;
    description?: string;
    backgroundImage?: string;
    breadcrumbs: { label: string; href: string }[];
}

export default function PageHeader({ title, description, backgroundImage, breadcrumbs }: PageHeaderProps) {
    return (
        <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden flex items-end pb-12">
            {/* Background Image with Placeholder Fallback */}
            {/* Background Image with Next.js Image */}
            <div className="absolute inset-0 bg-[#250804]">
                <NextImage
                    src={backgroundImage || '/images/placeholders/header-placeholder.jpg'}
                    alt={`${title} header background`}
                    fill
                    className="object-cover opacity-30"
                    priority
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#250804] via-[#250804]/60 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-6">
                <FadeIn>
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm md:text-base text-[#FCEBD7]/60 mb-4 font-medium uppercase tracking-wider">
                        <Link href="/" className="hover:text-[#E2494B] transition-colors">Home</Link>
                        {breadcrumbs.map((crumb, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <ChevronRight size={14} />
                                {index === breadcrumbs.length - 1 ? (
                                    <span className="text-[#E2494B]">{crumb.label}</span>
                                ) : (
                                    <Link href={crumb.href} className="hover:text-[#E2494B] transition-colors">
                                        {crumb.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-[#FCEBD7] mb-4 uppercase tracking-tight">
                        {title}
                    </h1>

                    {description && (
                        <p className="text-xl text-[#FCEBD7]/80 max-w-2xl leading-relaxed">
                            {description}
                        </p>
                    )}
                </FadeIn>
            </div>
        </div>
    );
}
