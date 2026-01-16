import type { MetadataRoute } from 'next'
import { reader } from '../../lib/keystatic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://ariversestudio.com/' // Placeholder domain

    // Base routes
    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/games`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/careers`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]

    // Fetch dynamic content
    try {
        const games = await reader.collections.games.all();
        const posts = await reader.collections.posts.all();

        // Add Games
        games.forEach(game => {
            routes.push({
                url: `${baseUrl}/games/${game.slug}`,
                lastModified: new Date(), // Ideally this comes from content
                changeFrequency: 'monthly',
                priority: 0.8,
            })
        });

        // Add Blog Posts
        posts.forEach(post => {
            routes.push({
                url: `${baseUrl}/blog/${post.slug}`,
                lastModified: new Date(post.entry.publishedDate || new Date()),
                changeFrequency: 'never',
                priority: 0.6,
            })
        });

    } catch (error) {
        console.error("Error generating dynamic sitemap:", error);
    }

    return routes;
}
