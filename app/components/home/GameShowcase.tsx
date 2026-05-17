"use client";

import Link from "next/link";
import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "../../components/animations/FadeIn";

export interface Game {
    title: string;
    description: string;
    slug: string;
    image: string;
    platforms: readonly string[];
}

export default function GameShowcase({ games }: { games: Game[] }) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const track = trackRef.current;

        if (!track) {
            return;
        }

        const updateActiveIndex = () => {
            const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-game-card]"));

            if (cards.length === 0) {
                setActiveIndex(0);
                return;
            }

            const leftEdge = track.scrollLeft + 8;
            const nearestIndex = cards.findIndex((card, index) => {
                const nextCard = cards[index + 1];
                if (!nextCard) {
                    return true;
                }

                return leftEdge >= card.offsetLeft && leftEdge < nextCard.offsetLeft;
            });

            setActiveIndex(nearestIndex === -1 ? 0 : nearestIndex);
        };

        updateActiveIndex();
        track.addEventListener("scroll", updateActiveIndex, { passive: true });

        return () => track.removeEventListener("scroll", updateActiveIndex);
    }, [games.length]);

    if (!games || games.length === 0) return null;

    const scrollToIndex = (index: number) => {
        const track = trackRef.current;
        const cards = track?.querySelectorAll<HTMLElement>("[data-game-card]");
        const card = cards?.[index];

        if (!track || !card) {
            return;
        }

        track.scrollTo({
            left: card.offsetLeft,
            behavior: "smooth",
        });
    };

    const handlePrevious = () => {
        const nextIndex = activeIndex === 0 ? games.length - 1 : activeIndex - 1;
        scrollToIndex(nextIndex);
    };

    const handleNext = () => {
        const nextIndex = activeIndex === games.length - 1 ? 0 : activeIndex + 1;
        scrollToIndex(nextIndex);
    };

    return (
        <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-20 w-full">

            <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                <div>
                    <div className="inline-flex items-stretch mb-4 rounded-xl border border-[#101010]/10 overflow-hidden">
                        <div className="flex items-center justify-center px-3 py-2 bg-[#101010]/5">
                            <NextImage src="/emoticon/blink.png" alt="" width={24} height={24} className="object-contain" />
                        </div>
                        <div className="flex items-center px-4 py-2 bg-[#101010]/3">
                            <span className="text-[#96191A] text-xs font-bold tracking-[0.3em] uppercase">Featured Games</span>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#101010] tracking-tight uppercase">
                        From Our Universe
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#101010]/45">
                        A curated lineup from the projects we want front and center on the homepage.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={handlePrevious}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#101010]/12 text-[#101010]/55 transition-colors hover:border-[#96191A]/40 hover:text-[#96191A]"
                            aria-label="Previous featured game"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            type="button"
                            onClick={handleNext}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#101010]/12 text-[#101010]/55 transition-colors hover:border-[#96191A]/40 hover:text-[#96191A]"
                            aria-label="Next featured game"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>

                    <Link
                        href="/games"
                        className="text-[#101010]/35 hover:text-[#96191A] transition-colors text-sm font-bold tracking-widest uppercase shrink-0"
                    >
                        All Games -&gt;
                    </Link>
                </div>
            </FadeIn>

            <div className="space-y-6">
                <div
                    ref={trackRef}
                    className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {games.map((game) => (
                        <div key={game.slug} className="shrink-0 snap-start basis-[92%] sm:basis-[72%] lg:basis-[52%] xl:basis-[44%]">
                            <Link href={`/games/${game.slug}`} className="group block h-full" data-game-card>
                                <article className="h-full rounded-[2rem] border border-[#101010]/8 bg-background p-4 transition-colors hover:border-[#96191A]/25 md:p-5">
                                    <div className="relative aspect-video rounded-[1.5rem] overflow-hidden mb-5 border border-[#101010]/8">
                                        <NextImage
                                            src={game.image}
                                            alt={game.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/60 via-transparent to-transparent" />

                                        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                                            {game.platforms.map((platform) => (
                                                <span
                                                    key={platform}
                                                    className="text-[9px] font-bold tracking-widest uppercase border border-[#F5F0E8]/30 bg-[#F5F0E8]/70 backdrop-blur-sm px-2.5 py-1 rounded-full text-[#101010]/80"
                                                >
                                                    {platform}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                                            <div>
                                                <h3 className="text-white font-black text-xl tracking-tight uppercase leading-tight drop-shadow-md">
                                                    {game.title}
                                                </h3>
                                                <p className="text-white/70 text-xs leading-relaxed line-clamp-2 mt-1 max-w-xs drop-shadow-sm">
                                                    {game.description}
                                                </p>
                                            </div>
                                            <div className="w-9 h-9 rounded-full bg-[#96191A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shrink-0 ml-3">
                                                <span className="text-white text-sm font-bold">-&gt;</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </div>
                    ))}
                </div>

                {games.length > 1 && (
                    <div className="flex items-center justify-center gap-2">
                        {games.map((game, index) => (
                            <button
                                key={game.slug}
                                type="button"
                                onClick={() => scrollToIndex(index)}
                                aria-label={`Go to ${game.title}`}
                                className={`h-2.5 rounded-full transition-all ${
                                    activeIndex === index ? "w-8 bg-[#96191A]" : "w-2.5 bg-[#101010]/15 hover:bg-[#101010]/30"
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

        </section>
    );
}
