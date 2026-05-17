import { reader } from "../../../lib/keystatic";
import PageHeader from "../../components/ui/PageHeader";
import GamesExplorer from "../../components/games/GamesExplorer";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Games",
    description: "Explore the immersive worlds created by Ariverse Studio. Filter by platform, engine, genre, and status to find the right project faster.",
    alternates: {
        canonical: "/games",
    },
    openGraph: {
        title: "Our Games | Ariverse Studio",
        description: "Explore the immersive worlds created by Ariverse Studio. Filter by platform, engine, genre, and status to find the right project faster.",
        url: "https://ariversestudio.com/games",
        images: ["/images/placeholders/games-header.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Games | Ariverse Studio",
        description: "Explore releases and upcoming titles from Ariverse Studio.",
        images: ["/images/placeholders/games-header.jpg"],
    },
};

export default async function GamesPage() {
    const games = await reader.collections.games.all();
    const gameCards = games.map((game) => ({
        slug: game.slug,
        title: game.entry.title,
        description: game.entry.description,
        coverImage: game.entry.coverImage || "/images/placeholders/game-cover.jpg",
        platforms: [...game.entry.platforms],
        engine: game.entry.engine,
        genre: game.entry.genre,
        language: game.entry.language,
        status: game.entry.status,
        releaseDate: game.entry.releaseDate || null,
        websiteUrl: game.entry.websiteUrl || "",
        wishlistUrl: game.entry.wishlistUrl || "",
        demoUrl: game.entry.demoUrl || "",
        downloadUrl: game.entry.downloadUrl || "",
    }));

    return (
        <div className="pb-40">
            <PageHeader
                title="Our Games"
                description="Browse the studio's portfolio by platform, engine, genre, and release stage."
                breadcrumbs={[{ label: "Games", href: "/games" }]}
            />

            <div className="mx-auto mt-20 max-w-[1440px] px-4 md:px-6">
                <GamesExplorer games={gameCards} />
            </div>
        </div>
    );
}
