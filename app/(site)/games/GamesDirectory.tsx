"use client";

import { startTransition, useDeferredValue, useMemo, useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { ArrowUpDown, ExternalLink, SlidersHorizontal, X } from "lucide-react";
import StaggerContainer, { StaggerItem } from "../../components/animations/StaggerContainer";
import GameStatusBadge from "../../components/ui/GameStatusBadge";
import ContentLanguageBadge, { getLanguageLabel } from "../../components/ui/ContentLanguageBadge";
import { GameDirectoryItem, getGameActions, sortGames } from "./gameUtils";

type FilterState = {
    status: string;
    platform: string;
    engine: string;
    genre: string;
    sortBy: string;
};

const defaultFilters: FilterState = {
    status: "all",
    platform: "all",
    engine: "all",
    genre: "all",
    sortBy: "release-latest",
};

const fieldClasses = "h-11 rounded-xl border border-foreground/15 bg-background px-4 text-sm text-foreground focus:border-accent/40 focus:outline-none";

export default function GamesDirectory({ games }: { games: GameDirectoryItem[] }) {
    const [filters, setFilters] = useState<FilterState>(defaultFilters);
    const deferredFilters = useDeferredValue(filters);

    const options = useMemo(() => {
        return {
            statuses: Array.from(new Set(games.map((game) => game.status))).sort(),
            platforms: Array.from(new Set(games.flatMap((game) => game.platforms))).sort(),
            engines: Array.from(new Set(games.map((game) => game.engine))).sort(),
            genres: Array.from(new Set(games.map((game) => game.genre))).sort(),
        };
    }, [games]);

    const filteredGames = useMemo(() => {
        const nextGames = games.filter((game) => {
            if (deferredFilters.status !== "all" && game.status !== deferredFilters.status) {
                return false;
            }

            if (deferredFilters.platform !== "all" && !game.platforms.includes(deferredFilters.platform)) {
                return false;
            }

            if (deferredFilters.engine !== "all" && game.engine !== deferredFilters.engine) {
                return false;
            }

            if (deferredFilters.genre !== "all" && game.genre !== deferredFilters.genre) {
                return false;
            }

            return true;
        });

        return sortGames(nextGames, deferredFilters.sortBy);
    }, [deferredFilters, games]);

    function updateFilter<K extends keyof FilterState>(key: K, value: FilterState[K]) {
        startTransition(() => {
            setFilters((current) => ({ ...current, [key]: value }));
        });
    }

    const hasActiveFilters = Object.entries(filters).some(([key, value]) => key !== "sortBy" && value !== "all");

    return (
        <div className="space-y-10">
            <section className="rounded-[2rem] border border-foreground/10 bg-foreground/[0.02] p-6 md:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-foreground/45">
                            <SlidersHorizontal className="h-4 w-4 text-accent" />
                            Browse by fit
                        </div>
                        <p className="text-sm leading-relaxed text-foreground/55">
                            Site UI stays in English. Project writeups may be in English or Bahasa Indonesia, and each card shows the content language up front.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-foreground/45">
                        <ArrowUpDown className="h-4 w-4 text-accent" />
                        {filteredGames.length} of {games.length} projects
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
                    <select value={filters.status} onChange={(event) => updateFilter("status", event.target.value)} className={fieldClasses} aria-label="Filter by status">
                        <option value="all">All status</option>
                        {options.statuses.map((status) => (
                            <option key={status} value={status}>
                                {status.replace(/-/g, " ")}
                            </option>
                        ))}
                    </select>

                    <select value={filters.platform} onChange={(event) => updateFilter("platform", event.target.value)} className={fieldClasses} aria-label="Filter by platform">
                        <option value="all">All platforms</option>
                        {options.platforms.map((platform) => (
                            <option key={platform} value={platform}>
                                {platform}
                            </option>
                        ))}
                    </select>

                    <select value={filters.engine} onChange={(event) => updateFilter("engine", event.target.value)} className={fieldClasses} aria-label="Filter by engine">
                        <option value="all">All engines</option>
                        {options.engines.map((engine) => (
                            <option key={engine} value={engine}>
                                {engine}
                            </option>
                        ))}
                    </select>

                    <select value={filters.genre} onChange={(event) => updateFilter("genre", event.target.value)} className={fieldClasses} aria-label="Filter by genre">
                        <option value="all">All genres</option>
                        {options.genres.map((genre) => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>

                    <select value={filters.sortBy} onChange={(event) => updateFilter("sortBy", event.target.value)} className={fieldClasses} aria-label="Sort games">
                        <option value="release-latest">Sort: Newest release</option>
                        <option value="release-oldest">Sort: Oldest release</option>
                        <option value="title-az">Sort: Title A-Z</option>
                        <option value="title-za">Sort: Title Z-A</option>
                        <option value="status">Sort: Status</option>
                    </select>
                </div>

                {hasActiveFilters && (
                    <button
                        type="button"
                        onClick={() => setFilters(defaultFilters)}
                        className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground/45 transition-colors hover:text-accent"
                    >
                        <X className="h-4 w-4" />
                        Clear filters
                    </button>
                )}
            </section>

            {filteredGames.length === 0 ? (
                <div className="rounded-[2rem] border border-dashed border-foreground/15 px-6 py-16 text-center">
                    <p className="text-lg font-bold uppercase tracking-tight text-foreground">No games match those filters.</p>
                    <p className="mt-3 text-sm text-foreground/50">Try resetting one or two filters and the directory will open back up.</p>
                </div>
            ) : (
                <StaggerContainer className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {filteredGames.map((game, index) => {
                        const actions = getGameActions(game);
                        const primaryAction = actions[0];

                        return (
                            <StaggerItem key={game.slug} className="group">
                                <article className="rounded-[2rem] border border-foreground/8 bg-background/80 p-4 transition-colors hover:border-accent/25 md:p-5">
                                    <Link href={`/games/${game.slug}`} className="block">
                                        <div className="relative mb-6 aspect-video overflow-hidden rounded-[1.5rem] border border-foreground/8">
                                            <NextImage
                                                src={game.coverImage || "/images/placeholders/game-cover.jpg"}
                                                alt={`${game.title} cover art`}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />

                                            <div className="absolute left-5 top-5 z-10 flex flex-wrap gap-2">
                                                {game.platforms.map((platform) => (
                                                    <span
                                                        key={platform}
                                                        className="rounded-full border border-foreground/10 bg-[#F5F0E8]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground"
                                                    >
                                                        {platform}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="absolute right-5 top-5 z-10 flex flex-col items-end gap-2">
                                                <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                                                    {game.engine}
                                                </span>
                                                <ContentLanguageBadge language={game.language} compact />
                                            </div>

                                            <div className="absolute bottom-5 left-5 z-10">
                                                <GameStatusBadge status={game.status} />
                                            </div>
                                        </div>

                                        <div className="flex items-start justify-between gap-4">
                                            <div className="min-w-0">
                                                <div className="mb-3 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/35">
                                                    <span>{game.genre}</span>
                                                    <span className="text-foreground/20">&middot;</span>
                                                    <span>{getLanguageLabel(game.language)}</span>
                                                </div>
                                                <h3 className="mb-2 text-2xl font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-accent md:text-3xl">
                                                    {game.title}
                                                </h3>
                                                <p className="max-w-md line-clamp-2 text-foreground/50">
                                                    {game.description}
                                                </p>
                                            </div>

                                            <span className="shrink-0 pt-1 text-2xl text-accent transition-transform group-hover:translate-x-2">
                                                -&gt;
                                            </span>
                                        </div>
                                    </Link>

                                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                        <GameActionLink
                                            href={primaryAction.href}
                                            external={primaryAction.external}
                                            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition-all hover:bg-accent/90"
                                        >
                                            {primaryAction.label}
                                            {primaryAction.external && <ExternalLink className="h-4 w-4" />}
                                        </GameActionLink>

                                        <Link
                                            href={`/games/${game.slug}`}
                                            className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </article>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            )}
        </div>
    );
}

function GameActionLink({
    href,
    external,
    className,
    children,
}: {
    href: string;
    external: boolean;
    className: string;
    children: React.ReactNode;
}) {
    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}
