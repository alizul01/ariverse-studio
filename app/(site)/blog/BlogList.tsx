"use client";

import { useState } from "react";
import PageHeader from "../../components/ui/PageHeader";
import FadeIn from "../../components/animations/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    excerpt: string;
    category: string;
    readTime: string;
    author: { name: string; role: string };
    featured: boolean;
};

export default function BlogList({ posts }: { posts: BlogPost[] }) {
    const [activeTab, setActiveTab] = useState("All");

    if (!posts || posts.length === 0) {
        return (
            <div>
                <PageHeader
                    title="Blog"
                    description="Devlogs, insights, and studio updates."
                    breadcrumbs={[{ label: "Blog", href: "/blog" }]}
                />
                <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-20 text-center text-foreground/40 text-sm">
                    No posts yet — check back soon.
                </div>
            </div>
        );
    }

    const categories = ["All", ...Array.from(new Set(posts.map(p => p.category)))];
    const featured = posts.find(p => p.featured) || posts[0];
    const rest = posts.filter(p => p.slug !== featured.slug);
    const filtered = activeTab === "All" ? rest : rest.filter(p => p.category === activeTab);

    return (
        <div className="pb-24">
            <PageHeader
                title="Blog"
                description="Devlogs, insights, and studio updates."
                breadcrumbs={[{ label: "Blog", href: "/blog" }]}
            />

            <div className="max-w-[1440px] mx-auto px-4 md:px-6">

                {/* Divider */}
                <div className="border-t border-foreground/8 mb-12" />

                {/* Featured post */}
                <FadeIn>
                    <Link
                        href={`/blog/${featured.slug}`}
                        className="group grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center"
                    >
                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-secondary/30">
                            <Image
                                src={featured.coverImage}
                                alt={featured.title}
                                fill
                                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="text-[9px] font-black tracking-[0.25em] uppercase bg-accent text-white px-3 py-1 rounded-full">
                                    Featured
                                </span>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-foreground/35 mb-4">
                                <Calendar size={11} />
                                {featured.date}
                                <span className="text-foreground/20">·</span>
                                <span className="text-accent">{featured.category}</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground group-hover:text-accent transition-colors duration-200 mb-3 leading-tight">
                                {featured.title}
                            </h2>
                            <p className="text-foreground/50 text-sm leading-relaxed mb-6 line-clamp-3">
                                {featured.excerpt}
                            </p>
                            <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase text-accent group-hover:gap-3 transition-all duration-200">
                                Read Post <ArrowUpRight size={13} />
                            </span>
                        </div>
                    </Link>
                </FadeIn>

                {/* Category filter */}
                {categories.length > 2 && (
                    <div className="flex items-center gap-2 mb-10 flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`text-[10px] font-black tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border transition-all duration-200 ${
                                    activeTab === cat
                                        ? "bg-accent text-white border-accent"
                                        : "border-foreground/15 text-foreground/40 hover:border-accent/40 hover:text-foreground"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                )}

                {/* Post grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((post) => (
                            <motion.div
                                key={post.slug}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                <Link href={`/blog/${post.slug}`} className="group block">
                                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-secondary/30 mb-4">
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-foreground/30 mb-2">
                                        <Calendar size={10} />
                                        {post.date}
                                        <span className="text-foreground/15">·</span>
                                        <span className="text-accent/70">{post.category}</span>
                                    </div>
                                    <h3 className="text-base font-black uppercase tracking-tight text-foreground group-hover:text-accent transition-colors duration-200 line-clamp-2">
                                        {post.title}
                                    </h3>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
}
