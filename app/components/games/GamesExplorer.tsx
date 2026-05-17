"use client";

import Link from "next/link";
import { useState } from "react";
import NextImage from "next/image";
import { ArrowUpRight, SlidersHorizontal, X } from "lucide-react";
import GameStatusBadge from "../ui/GameStatusBadge";
import LanguageBadge from "../ui/LanguageBadge";
import { getGameCtas, getStatusSortRank } from "../../../lib/game-presentation";

type GameCard = {
    slug: string;
    title: string;
    description: string;
    coverImage: string;
    platforms: string[];
    engine: string;
    genre: string;
    status: string;
    language: string;
    releaseDate?: string | null;
    websiteUrl?: string | null;
    wishlistUrl?: string | null;
    demoUrl?: string | null;
    downloadUrl?: string | null;
};

type FilterState = {
    status: string;
    platform: string;
    engine: string;
    genre: string;
    sort: string;
};

const defaultFilters: FilterState = {
    status: "all",
    platform: "all",
    engine: "all",
    genre: "all",
    sort: "release-desc",
};

function SelectField({
    label,
    value,
    onChange,
    options,
}: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: Array<{ label: string; value: string }>;
}) {
    return (
        <label className="flex flex-col gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-foreground/40">
                {label}
            </span>
            <select
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="rounded-2xl border border-foreground/12 bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent/45"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    );
}

export default function GamesExplorer({ games }: { games: GameCard[] }) {
    const [filters, setFilters] = useState<FilterState>(defaultFilters);

    const statusOptions = [
        { label: "All statuses", value: "all" },
        ...Array.from(new Set(games.map((game) => game.status))).map((status) => ({
            label: status.replace(/-/g, " "),
            value: status,
        })),
    ];

    const platformOptions = [
        { label: "All platforms", value: "all" },
        ...Array.from(new Set(games.flatMap((game) => game.platforms))).sort().map((platform) => ({
            label: platform,
            value: platform,
        })),
    ];

    const engineOptions = [
        { label: "All engines", value: "all" },
        ...Array.from(new Set(games.map((game) => game.engine))).sort().map((engine) => ({
            label: engine,
            value: engine,
        })),
    ];

    const genreOptions = [
        { label: "All genres", value: "all" },
        ...Array.from(new Set(games.map((game) => game.genre))).sort().map((genre) => ({
            label: genre,
            value: genre,
        })),
    ];

    const sortOptions = [
        { label: "Latest release", value: "release-desc" },
        { label: "Oldest release", value: "release-asc" },
        { label: "Status priority", value: "status" },
        { label: "A-Z", value: "title-asc" },
        { label: "Z-A", value: "title-desc" },
    ];

    const filteredGames = games
        .filter((game) => filters.status === "all" || game.status === filters.status)
        .filter((game) => filters.platform === "all" || game.platforms.includes(filters.platform))
        .filter((game) => filters.engine === "all" || game.engine === filters.engine)
        .filter((game) => filters.genre === "all" || game.genre === filters.genre)
        .sort((left, right) => {
            if (filters.sort === "title-asc") {
                return left.title.localeCompare(right.title);
            }

            if (filters.sort === "release-desc") {
                const leftDate = left.releaseDate ? new Date(left.releaseDate).getTime() : 0;
                const rightDate = right.releaseDate ? new Date(right.releaseDate).getTime() : 0;
                return rightDate - leftDate || left.title.localeCompare(right.title);
            }

            if (filters.sort === "release-asc") {
                const leftDate = left.releaseDate ? new Date(left.releaseDate).getTime() : Number.MAX_SAFE_INTEGER;
                const rightDate = right.releaseDate ? new Date(right.releaseDate).getTime() : Number.MAX_SAFE_INTEGER;
                return leftDate - rightDate || left.title.localeCompare(right.title);
            }

            if (filters.sort === "title-desc") {
                return right.title.localeCompare(left.title);
            }

            return getStatusSortRank(left.status) - getStatusSortRank(right.status)
                || left.title.localeCompare(right.title);
        });

    const activeFilterCount = Object.entries(filters).filter(([key, value]) => key !== "sort" && value !== "all").length;

    return (
        <div className="space-y-10">
            <section className="rounded-[2rem] border border-foreground/10 bg-foreground/[0.03] p-6 md:p-8">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl">
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-accent">
                                <SlidersHorizontal className="h-3.5 w-3.5" />
                                Browse Projects
                            </div>
                            <p className="text-sm leading-relaxed text-foreground/60">
                                Interface copy stays in English. Each project keeps its original writing language, and we mark it clearly with EN or ID so the mix feels intentional instead of messy.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-foreground/45">
                            <span>{filteredGames.length} projects</span>
                            {activeFilterCount > 0 && (
                                <button
                                    type="button"
                                    onClick={() => setFilters(defaultFilters)}
                                    className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-4 py-2 font-bold uppercase tracking-[0.18em] text-[10px] text-foreground/55 transition-colors hover:border-accent/40 hover:text-accent"
                                >
                                    <X className="h-3.5 w-3.5" />
                                    Clear Filters
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
                        <SelectField label="Status" value={filters.status} onChange={(value) => setFilters((current) => ({ ...current, status: value }))} options={statusOptions} />
                        <SelectField label="Platform" value={filters.platform} onChange={(value) => setFilters((current) => ({ ...current, platform: value }))} options={platformOptions} />
                        <SelectField label="Engine" value={filters.engine} onChange={(value) => setFilters((current) => ({ ...current, engine: value }))} options={engineOptions} />
                        <SelectField label="Genre" value={filters.genre} onChange={(value) => setFilters((current) => ({ ...current, genre: value }))} options={genreOptions} />
                        <SelectField label="Sort" value={filters.sort} onChange={(value) => setFilters((current) => ({ ...current, sort: value }))} options={sortOptions} />
                    </div>
                </div>
            </section>

            {filteredGames.length === 0 ? (
                <div className="rounded-[2rem] border border-dashed border-foreground/15 bg-background px-6 py-16 text-center">
                    <p className="text-lg font-bold uppercase tracking-[0.12em] text-foreground">No matching projects</p>
                    <p className="mt-3 text-sm text-foreground/50">
                        Try widening one of the filters to bring more games back into view.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {filteredGames.map((game) => {
                        const ctas = getGameCtas(game);
                        const primaryCta = ctas[0];

                        return (
                            <div key={game.slug} className="group">
                                <article className="rounded-[2rem] border border-foreground/8 bg-background p-4 transition-colors hover:border-accent/25 md:p-5">
                                    <Link href={`/games/${game.slug}`} className="block">
                                        <div className="relative mb-6 aspect-video overflow-hidden rounded-[1.5rem] border border-foreground/8">
                                            <NextImage
                                                src={game.coverImage || "/images/placeholders/game-cover.jpg"}
                                                alt={`${game.title} cover art`}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/55 via-transparent to-transparent" />

                                            <div className="absolute left-5 top-5 z-10 flex flex-wrap gap-2">
                                                {game.platforms.map((platform) => (
                                                    <span
                                                        key={platform}
                                                        className="rounded-full border border-foreground/10 bg-[#F5F0E8]/88 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground backdrop-blur-md"
                                                    >
                                                        {platform}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="absolute right-5 top-5 z-10">
                                                <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                                                    {game.engine}
                                                </span>
                                            </div>

                                            <div className="absolute bottom-5 left-5 z-10 flex flex-wrap items-center gap-2">
                                                <GameStatusBadge status={game.status} />
                                                <LanguageBadge language={game.language} />
                                            </div>
                                        </div>
                                    </Link>

                                    <div className="flex items-start justify-between gap-4">
                                        <div className="min-w-0">
                                            <div className="mb-2 flex flex-wrap gap-2">
                                                <span className="rounded-full border border-foreground/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/45">
                                                    {game.genre}
                                                </span>
                                            </div>
                                            <Link href={`/games/${game.slug}`} className="block">
                                                <h3 className="mb-2 text-2xl font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-accent md:text-3xl">
                                                    {game.title}
                                                </h3>
                                            </Link>
                                            <p className="max-w-md text-sm leading-relaxed text-foreground/50">
                                                {game.description}
                                            </p>
                                        </div>
                                        <span className="shrink-0 pt-1 text-2xl text-accent transition-transform group-hover:translate-x-1">
                                            <ArrowUpRight className="h-6 w-6" />
                                        </span>
                                    </div>

                                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <Link
                                            href={`/games/${game.slug}`}
                                            className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/12 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/60 transition-colors hover:border-accent/35 hover:text-accent"
                                        >
                                            View Details
                                        </Link>

                                        {primaryCta && (
                                            <Link
                                                href={primaryCta.href}
                                                target={primaryCta.external ? "_blank" : undefined}
                                                rel={primaryCta.external ? "noopener noreferrer" : undefined}
                                                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-accent/90"
                                            >
                                                {primaryCta.label}
                                            </Link>
                                        )}
                                    </div>
                                </article>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
