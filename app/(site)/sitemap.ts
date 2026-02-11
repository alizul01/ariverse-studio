import type { MetadataRoute } from 'next'
import { reader } from '../../lib/keystatic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://ariversestudio.com' // Production domain

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
        const careers = await reader.collections.careers.all();

        // Add Games
        games.forEach(game => {
            routes.push({
                url: `${baseUrl}/games/${game.slug}`,
                lastModified: game.entry.releaseDate ? new Date(game.entry.releaseDate) : new Date(),
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

        // Add Careers (listing is a static route, but if individual pages exist in the future)
        if (careers.length > 0) {
            // Update the careers listing page lastModified based on newest career post
            const careersRoute = routes.find(r => r.url === `${baseUrl}/careers`);
            if (careersRoute) {
                careersRoute.lastModified = new Date();
            }
        }

    } catch (error) {
        console.error("Error generating dynamic sitemap:", error);
    }

    return routes;
}
