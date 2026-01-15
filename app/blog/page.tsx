import { reader } from "../../lib/keystatic";
import BlogList, { BlogPost } from "./BlogList";

export const revalidate = 60; // Optional: revalidate every 60 seconds

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
            excerpt: "Read more about this topic...", // Keystatic doesn't expose excerpt by default for document field
            category: "General", // Default category
            readTime: "5 min read", // Placeholder
            author: {
                name: "Ariverse Team",
                role: "Editor"
            },
            featured: false // Default
        };
    });

    // 3. Pass to Client Component
    return <BlogList posts={blogPosts} />;
}
