import { reader } from "../../../lib/keystatic";
import StaggerContainer, { StaggerItem } from "../../components/animations/StaggerContainer";
import Link from "next/link";
import PageHeader from "../../components/ui/PageHeader";
import NextImage from "next/image";
import GameStatusBadge from "../../components/ui/GameStatusBadge";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Games",
    description: "Explore the immersive worlds created by Ariverse Studio. From RPGs to simulations, discover our latest releases and upcoming titles.",
    openGraph: {
        title: "Our Games | Ariverse Studio",
        description: "Explore the immersive worlds created by Ariverse Studio. From RPGs to simulations, discover our latest releases and upcoming titles.",
        url: 'https://ariversestudio.com//games',
    },
};

export default async function GamesPage() {
    const games = await reader.collections.games.all();

    return (
        <div className="pb-40">
            <PageHeader
                title="Our Games"
                description="Dive into unique worlds crafted with passion and precision."
                breadcrumbs={[{ label: "Games", href: "/games" }]}
                backgroundImage="/images/placeholders/games-header.jpg"
            />

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 mt-20">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {games.map((game, index) => (
                        <StaggerItem key={index} className="group cursor-pointer">
                            <Link href={`/games/${game.slug}`}>

                                {/* Cover image */}
                                <div className="relative aspect-video overflow-hidden rounded-3xl border border-foreground/8 mb-6 group-hover:border-accent/30 transition-colors">
                                    <NextImage
                                        src={game.entry.coverImage || "/images/placeholders/game-cover.jpg"}
                                        alt={`${game.entry.title} cover art`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Platform badges */}
                                    <div className="absolute top-5 left-5 flex flex-wrap gap-2 z-10">
                                        {game.entry.platforms.map(p => (
                                            <span
                                                key={p}
                                                className="px-3 py-1 bg-[#F5F0E8]/85 backdrop-blur-md rounded-full text-[10px] md:text-xs font-bold text-foreground border border-foreground/10 uppercase tracking-wider"
                                            >
                                                {p}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Engine badge */}
                                    <div className="absolute top-5 right-5 z-10">
                                        <span className="px-3 py-1 bg-accent rounded-full text-[10px] md:text-xs font-bold text-white uppercase tracking-wider shadow-md">
                                            {game.entry.engine}
                                        </span>
                                    </div>

                                    {/* Status badge */}
                                    <div className="absolute bottom-5 left-5 z-10">
                                        <GameStatusBadge status={(game.entry as Record<string, unknown>).status as string} />
                                    </div>
                                </div>

                                {/* Text content */}
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors uppercase tracking-tight">
                                            {game.entry.title}
                                        </h3>
                                        <p className="text-foreground/50 line-clamp-2 max-w-md leading-relaxed">
                                            {game.entry.description}
                                        </p>
                                    </div>
                                    <span className="text-accent text-2xl transform group-hover:translate-x-2 transition-transform pt-1 shrink-0">
                                        →
                                    </span>
                                </div>

                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </div>
    );
}
