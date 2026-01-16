"use client";

import { useState } from "react";
import PageHeader from "../../components/ui/PageHeader";
import FadeIn from "../../components/animations/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import {
    CalendarIcon,
    ClockIcon,
    ChevronRightIcon,
    PaperAirplaneIcon,
    ArrowUpRightIcon
} from "@heroicons/react/24/outline";
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
    author: {
        name: string;
        role: string;
    };
    featured: boolean;
};

export default function BlogList({ posts }: { posts: BlogPost[] }) {
    const [activeTab, setActiveTab] = useState("All");
    /* If no posts, handle gracefully */
    if (!posts || posts.length === 0) {
        return (
            <div className="pb-40">
                <PageHeader
                    title="Blog"
                    description="Latest news from orbit. Stay updated with our latest developments, tech insights, and studio culture."
                    breadcrumbs={[{ label: "Blog", href: "/blog" }]}
                    backgroundImage="/images/placeholders/blog-header.jpg"
                />
                <div className="max-w-[1440px] mx-auto px-4 md:px-6 mt-20 text-center text-[#FCEBD7]">
                    No posts found.
                </div>
            </div>
        )
    }

    const categories = ["All", ...new Set(posts.map(post => post.category))];

    const featuredPost = posts.find(p => p.featured) || posts[0];
    const otherPosts = posts.filter(p => p.slug !== featuredPost.slug);

    const filteredPosts = activeTab === "All"
        ? otherPosts
        : otherPosts.filter(post => post.category === activeTab);

    return (
        <div className="pb-40">
            <PageHeader
                title="Blog"
                description="Latest news from orbit. Stay updated with our latest developments, tech insights, and studio culture."
                breadcrumbs={[{ label: "Blog", href: "/blog" }]}
                backgroundImage="/images/placeholders/blog-header.jpg"
            />

            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                {/* 1. Featured Post Hero */}
                <section className="mt-20">
                    <FadeIn>
                        <Link
                            href={`/blog/${featuredPost.slug}`}
                            className="group relative flex flex-col lg:flex-row bg-[#250804] border border-[#61422D]/20 rounded-[2.5rem] overflow-hidden hover:border-[#E2494B]/50 transition-all duration-500"
                        >
                            <div className="lg:w-3/5 h-[400px] lg:h-[600px] relative overflow-hidden">
                                <Image
                                    src={featuredPost.coverImage}
                                    alt={featuredPost.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#250804] lg:bg-gradient-to-r lg:from-transparent lg:to-[#250804]/50" />
                                <div className="absolute top-8 left-8">
                                    <span className="bg-[#E2494B] text-[#FCEBD7] px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
                                        Featured Mission
                                    </span>
                                </div>
                            </div>

                            <div className="lg:w-2/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-6 text-[#FCEBD7]/40 text-xs font-bold uppercase tracking-widest">
                                    <span className="flex items-center gap-1.5">
                                        <CalendarIcon className="w-4 h-4 text-[#E2494B]" /> {featuredPost.date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <ClockIcon className="w-4 h-4 text-[#E2494B]" /> {featuredPost.readTime}
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-[#FCEBD7] leading-tight mb-6 group-hover:text-[#E2494B] transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-lg text-[#FCEBD7]/60 mb-8 line-clamp-3">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full border border-[#61422D]/30 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-[#E2494B]/10" />
                                            {/* Author Avatar Placeholder */}
                                        </div>
                                        <div>
                                            <p className="text-[#FCEBD7] font-bold text-sm">{featuredPost.author.name}</p>
                                            <p className="text-[#FCEBD7]/40 text-[10px] uppercase font-bold tracking-widest">{featuredPost.author.role}</p>
                                        </div>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-[#FCEBD7]/10 flex items-center justify-center group-hover:bg-[#E2494B] group-hover:border-[#E2494B] group-hover:text-[#FCEBD7] text-[#E2494B] transition-all">
                                        <ArrowUpRightIcon className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </FadeIn>
                </section>

                {/* 2. Filter & Grid */}
                <section className="py-32">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                        <h2 className="text-4xl font-bold text-[#FCEBD7] tracking-tighter uppercase">Transmissions</h2>

                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase transition-all duration-300 border ${activeTab === cat
                                        ? "bg-[#E2494B] border-[#E2494B] text-[#FCEBD7] shadow-[0_5px_15px_rgba(226,73,75,0.3)]"
                                        : "border-[#FCEBD7]/10 text-[#FCEBD7]/40 hover:border-[#FCEBD7]/30"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredPosts.map((post) => (
                                <motion.div
                                    key={post.slug}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                >
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="group block h-full bg-[#250804] border border-[#61422D]/20 rounded-[2rem] overflow-hidden hover:border-[#E2494B]/50 transition-all duration-500"
                                    >
                                        <div className="h-64 relative overflow-hidden">
                                            <Image
                                                src={post.coverImage}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-6 left-6">
                                                <span className="bg-[#250804]/80 backdrop-blur-md text-[#FCEBD7] px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase border border-[#FCEBD7]/10">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-8">
                                            <div className="flex items-center gap-4 mb-4 text-[#FCEBD7]/30 text-[10px] font-bold uppercase tracking-widest">
                                                <span className="flex items-center gap-1.5"><CalendarIcon className="w-3.5 h-3.5" /> {post.date}</span>
                                                <span className="flex items-center gap-1.5"><ClockIcon className="w-3.5 h-3.5" /> {post.readTime}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-[#FCEBD7] mb-4 group-hover:text-[#E2494B] transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-[#FCEBD7]/50 text-sm mb-8 line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between pt-6 border-t border-[#61422D]/20">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-[#E2494B]/10 border border-[#61422D]/30" />
                                                    <span className="text-[#FCEBD7]/60 text-xs font-bold">{post.author.name}</span>
                                                </div>
                                                <span className="text-[#E2494B] text-xs font-black tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase">
                                                    Read More <ChevronRightIcon className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </section>

            </div>
        </div>
    );
}
