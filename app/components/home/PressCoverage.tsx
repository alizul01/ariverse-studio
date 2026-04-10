import FadeIn from '../animations/FadeIn';
import { ArrowUpRight } from 'lucide-react';
import { reader } from '../../../lib/keystatic';

export default async function PressCoverage() {
    const pressData = await reader.collections.press.all();

    const sortedPress = [...pressData].sort((a, b) => {
        const dateA = a.entry.date ? new Date(a.entry.date).getTime() : 0;
        const dateB = b.entry.date ? new Date(b.entry.date).getTime() : 0;
        return dateB - dateA;
    });

    if (pressData.length === 0) return null;

    return (
        <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-20 w-full">
            <FadeIn className="flex items-end justify-between mb-12 gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-5 h-px bg-accent" />
                        <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase">In The News</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter uppercase leading-none">
                        Press Coverage
                    </h2>
                </div>
            </FadeIn>

            {/* Simple table-style list */}
            <div className="border-t border-foreground/8">
                {sortedPress.map((item, i) => (
                    <FadeIn key={item.slug} delay={i * 0.06}>
                        <a
                            href={item.entry.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 md:gap-8 py-5 border-b border-foreground/8 hover:bg-accent/[0.03] -mx-4 px-4 md:-mx-6 md:px-6 transition-colors duration-200"
                        >
                            {/* Date */}
                            <span className="text-[10px] font-mono text-foreground/30 shrink-0 w-20 hidden md:block">
                                {item.entry.date}
                            </span>

                            {/* Outlet */}
                            <span className="text-xs font-black tracking-widest uppercase text-accent shrink-0 w-28 md:w-36 truncate">
                                {item.entry.outlet}
                            </span>

                            {/* Title */}
                            <p className="flex-1 text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-200 truncate">
                                {item.entry.title}
                            </p>

                            {/* Arrow */}
                            <ArrowUpRight
                                size={16}
                                className="text-foreground/20 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
                            />
                        </a>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
