import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FadeIn from "../animations/FadeIn";

interface PageHeaderProps {
    title: string;
    description?: string;
    breadcrumbs: { label: string; href: string }[];
}

export default function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
    return (
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 pt-12 pb-10">
            <FadeIn>
                <div className="flex items-center gap-2 text-[11px] text-foreground/35 mb-6 font-bold uppercase tracking-[0.2em]">
                    <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                    {breadcrumbs.map((crumb, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <ChevronRight size={10} className="text-foreground/20" />
                            {index === breadcrumbs.length - 1 ? (
                                <span className="text-accent">{crumb.label}</span>
                            ) : (
                                <Link href={crumb.href} className="hover:text-accent transition-colors">
                                    {crumb.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter leading-none">
                    {title}
                </h1>

                {description && (
                    <p className="text-foreground/45 mt-4 max-w-xl text-sm leading-relaxed">
                        {description}
                    </p>
                )}
            </FadeIn>
        </div>
    );
}
