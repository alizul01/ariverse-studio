import { reader } from "../../../lib/keystatic";
import BlogList, { BlogPost } from "./BlogList";

export const revalidate = 60; // Optional: revalidate every 60 seconds

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Latest news, devlogs, and insights from Ariverse Studio. Stay updated on our game development journey and industry thoughts.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "Blog | Ariverse Studio",
        description: "Latest news, devlogs, and insights from Ariverse Studio. Stay updated on our game development journey and industry thoughts.",
        url: 'https://ariversestudio.com/blog',
        images: ["/images/posts/game-development-life-cycle-gdlc/coverImage.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Ariverse Studio",
        description: "Latest news, devlogs, and insights from Ariverse Studio.",
        images: ["/images/posts/game-development-life-cycle-gdlc/coverImage.png"],
    },
};

export default async function BlogPage() {
    // 1. Fetch posts from Keystatic
    const posts = await reader.collections.posts.all();

    // 2. Transform the data to match BlogPost type
    const blogPosts: BlogPost[] = posts.map(post => {
        return {
            slug: post.slug,
            title: post.entry.title, // Handle potential slug object vs string
            date: post.entry.publishedDate || new Date().toISOString().split('T')[0],
            coverImage: post.entry.coverImage || "/images/placeholders/blog-header.jpg", // Fallback
            excerpt: post.entry.excerpt || `Read ${post.entry.title} on the Ariverse Studio blog.`,
            category: post.entry.category || "Studio",
            readTime: post.entry.readTime || "4 min read",
            author: {
                name: post.entry.authorName || "Ariverse Team",
                role: post.entry.authorRole || "Studio"
            },
            featured: post.entry.featured ?? false
        };
    });

    // 3. Pass to Client Component
    return <BlogList posts={blogPosts} />;
}
