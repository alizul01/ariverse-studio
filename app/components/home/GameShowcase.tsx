"use client";

import Link from "next/link";
import NextImage from "next/image";
import FadeIn from "../../components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "../../components/animations/StaggerContainer";

export interface Game {
    title: string;
    description: string;
    slug: string;
    image: string;
    platforms: readonly string[];
}

export default function GameShowcase({ games }: { games: Game[] }) {
    if (!games || games.length === 0) return null;

    return (
        <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-20 w-full">

            {/* Header */}
            <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                <div>
                    <div className="inline-flex items-stretch mb-4 rounded-xl border border-[#101010]/10 overflow-hidden">
                        <div className="flex items-center justify-center px-3 py-2 bg-[#101010]/5">
                            <NextImage src="/emoticon/blink.png" alt="" width={24} height={24} className="object-contain" />
                        </div>
                        <div className="flex items-center px-4 py-2 bg-[#101010]/3">
                            <span className="text-[#96191A] text-xs font-bold tracking-[0.3em] uppercase">Our Games</span>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#101010] tracking-tight uppercase">
                        From Our Universe
                    </h2>
                </div>
                <Link
                    href="/games"
                    className="text-[#101010]/35 hover:text-[#96191A] transition-colors text-sm font-bold tracking-widest uppercase shrink-0"
                >
                    All Games →
                </Link>
            </FadeIn>

            {/* Cards */}
            <div className="max-w-5xl mx-auto">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {games.map((game) => (
                        <StaggerItem key={game.slug}>
                            <Link href={`/games/${game.slug}`} className="group block">

                                {/* Cover image */}
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 border border-[#101010]/8">
                                    <NextImage
                                        src={game.image}
                                        alt={game.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/50 via-transparent to-transparent" />

                                    {/* Platform tags */}
                                    <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                                        {game.platforms.map((p) => (
                                            <span
                                                key={p}
                                                className="text-[9px] font-bold tracking-widest uppercase border border-[#F5F0E8]/30 bg-[#F5F0E8]/70 backdrop-blur-sm px-2.5 py-1 rounded-full text-[#101010]/80"
                                            >
                                                {p}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Hover arrow */}
                                    <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#96191A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                        <span className="text-white text-sm font-bold">→</span>
                                    </div>
                                </div>

                                {/* Text */}
                                <h3 className="text-[#101010] font-black text-lg tracking-tight uppercase leading-tight mb-2 group-hover:text-[#96191A] transition-colors duration-200">
                                    {game.title}
                                </h3>
                                <p className="text-[#101010]/45 text-sm leading-relaxed line-clamp-2">
                                    {game.description}
                                </p>

                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>

        </section>
    );
}
