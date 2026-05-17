import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "../../../components/animations/FadeIn";
import CTA from "../../../components/ui/CTA";
import { ExternalLink, Gamepad2, Layers } from "lucide-react";
import PageHeader from "../../../components/ui/PageHeader";
import { reader } from "../../../../lib/keystatic";
import DocumentContent from "../../../components/ui/DocumentContent";
import LanguageBadge from "../../../components/ui/LanguageBadge";
import { getGameCtas, getLanguageMeta, getStatusLabel } from "../../../../lib/game-presentation";

interface GameDetailPageProps {
    params: Promise<{ slug: string }>;
}

import { Metadata } from "next";

export async function generateStaticParams() {
    const games = await reader.collections.games.all();
    return games.map((game) => ({
        slug: game.slug,
    }));
}

export async function generateMetadata({ params }: GameDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const game = await reader.collections.games.read(slug);

    if (!game) {
        return { title: "Game Not Found" };
    }

    return {
        title: `${game.title} | Ariverse Studio`,
        description: game.description || `Explore ${game.title}, a new immersive experience by Ariverse Studio.`,
        openGraph: {
            title: game.title,
            description: game.description || `Explore ${game.title}, a new immersive experience by Ariverse Studio.`,
            url: `https://ariversestudio.com/games/${slug}`,
            images: game.coverImage ? [game.coverImage] : [],
        },
        alternates: {
            canonical: `/games/${slug}`,
        },
        twitter: {
            card: "summary_large_image",
            title: `${game.title} | Ariverse Studio`,
            description: game.description || `Explore ${game.title}, a new immersive experience by Ariverse Studio.`,
            images: game.coverImage ? [game.coverImage] : [],
        },
    };
}

export default async function GameDetailPage({ params }: GameDetailPageProps) {
    const { slug } = await params;
    const game = await reader.collections.games.read(slug);

    if (!game) {
        notFound();
    }

    const ctas = getGameCtas({
        slug,
        title: game.title,
        status: game.status,
        platforms: game.platforms,
        websiteUrl: game.websiteUrl,
        wishlistUrl: game.wishlistUrl,
        demoUrl: game.demoUrl,
        downloadUrl: game.downloadUrl,
        language: game.language,
    });
    const languageMeta = getLanguageMeta(game.language);

    return (
        <div className="pb-20">
            <PageHeader
                title={game.title}
                description={game.description}
                breadcrumbs={[
                    { label: "Games", href: "/games" },
                    { label: game.title, href: `/games/${slug}` }
                ]}
            />

            {/* Main Content Area */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-3 gap-16">

                {/* Left: content */}
                <div className="lg:col-span-2">
                    <FadeIn delay={0.2}>
                        <h2 className="text-3xl font-bold text-foreground mb-8 uppercase tracking-tight">Mission Briefing</h2>
                        <div className="max-w-none">
                            {game.content ? (
                                <DocumentContent document={await game.content()} />
                            ) : (
                                <p className="text-foreground/40">No content available.</p>
                            )}
                        </div>
                    </FadeIn>
                </div>

                {/* Right: sidebar */}
                <div className="flex flex-col gap-8">
                    <FadeIn delay={0.4} direction="left">
                        <div className="bg-accent text-white p-10 rounded-[2rem]">
                            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/65">Take action</p>
                            <h3 className="mt-4 text-3xl font-bold uppercase tracking-tight">What you can do next</h3>
                            <p className="mt-4 text-sm leading-relaxed text-white/72">
                                This page keeps the interface in English while the project writeup stays in its original language. Reach out if you want access, updates, or a closer look.
                            </p>

                            <div className="mt-8 flex flex-col gap-3">
                                {ctas.map((cta) => (
                                    <GameActionLink
                                        key={`${cta.label}-${cta.href}`}
                                        href={cta.href}
                                        external={cta.external}
                                        className={cta.variant === "primary"
                                            ? "inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-accent transition-colors hover:bg-white/90"
                                            : "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-colors hover:border-white/45 hover:bg-white/8"
                                        }
                                    >
                                        {cta.label}
                                        {cta.external && <ExternalLink className="h-4 w-4" />}
                                    </GameActionLink>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.5} direction="left">
                        <div className="bg-[#101010]/4 border border-foreground/8 p-10 rounded-[2rem]">
                            <h3 className="text-xl font-bold text-foreground mb-8 uppercase tracking-widest flex items-center gap-3">
                                <Gamepad2 className="text-accent" /> Spec Sheet
                            </h3>
                            <div className="space-y-6">
                                <div className="pb-6 border-b border-foreground/8">
                                    <p className="text-foreground/40 text-xs uppercase mb-2 tracking-widest">Platforms</p>
                                    <p className="text-foreground font-bold text-lg">{game.platforms.join(', ')}</p>
                                </div>
                                <div className="pb-6 border-b border-foreground/8">
                                    <p className="text-foreground/40 text-xs uppercase mb-2 tracking-widest">Engine</p>
                                    <p className="text-foreground font-bold text-lg">{game.engine}</p>
                                </div>
                                <div className="pb-6 border-b border-foreground/8">
                                    <p className="text-foreground/40 text-xs uppercase mb-2 tracking-widest">Status</p>
                                    <p className="text-accent font-bold text-lg">{getStatusLabel(game.status)}</p>
                                </div>
                                <div className="pb-6 border-b border-foreground/8">
                                    <p className="text-foreground/40 text-xs uppercase mb-2 tracking-widest">Genre</p>
                                    <p className="text-foreground font-bold text-lg">{game.genre}</p>
                                </div>
                                <div>
                                    <p className="text-foreground/40 text-xs uppercase mb-2 tracking-widest">Content Language</p>
                                    <div className="flex items-center gap-3">
                                        <LanguageBadge language={game.language} />
                                        <span className="text-foreground font-bold text-lg">{languageMeta.longLabel}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.6} direction="left">
                        <Link href="/presskit" className="block bg-accent p-10 rounded-[2rem] text-white hover:scale-[1.02] transition-transform">
                            <Layers className="mb-6" size={32} />
                            <h3 className="text-2xl font-bold mb-2">Request Presskit</h3>
                            <p className="text-white/70 text-sm mb-6">Access high-res assets and professional studio information.</p>
                            <div className="font-bold border-b-2 border-white inline-block pb-1">VIEW PRESSKIT</div>
                        </Link>
                    </FadeIn>
                </div>
            </div>

            <CTA
                title="JOIN THE ODYSSEY"
                description={`Ready to jump into ${game.title}? Connect with us for updates and exclusive content.`}
            />
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
    external?: boolean;
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
