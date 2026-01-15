export interface Post {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: {
        name: string;
        role: string;
        avatar: string;
    };
    category: string;
    date: string;
    image: string;
    readTime: string;
    slug: string;
    featured?: boolean;
}

export const posts: Post[] = [
    {
        id: "post-01",
        title: "The Future of Open World Space Exploration in UE5",
        excerpt: "Discover how we're leveraging Unreal Engine 5's Nanite and Lumen to create seamless, planet-to-orbit transitions without loading screens.",
        content: "Detailed content here...",
        author: {
            name: "Zulfikar",
            role: "Game Director",
            avatar: "/images/authors/zulfikar.jpg"
        },
        category: "Tech",
        date: "Jan 12, 2026",
        image: "/images/blog/ue5-space.jpg",
        readTime: "8 min read",
        slug: "future-of-space-exploration-ue5",
        featured: true
    },
    {
        id: "post-02",
        title: "Crafting Immersive Soundscapes for VR",
        excerpt: "Sound is 50% of the experience. Learn our process for building spatial audio systems that bring digital worlds to life.",
        content: "Detailed content here...",
        author: {
            name: "Amelia",
            role: "Lead Audio Engineer",
            avatar: "/images/authors/amelia.jpg"
        },
        category: "Audio",
        date: "Jan 10, 2026",
        image: "/images/blog/vr-audio.jpg",
        readTime: "5 min read",
        slug: "immersive-soundscapes-vr"
    },
    {
        id: "post-03",
        title: "Ariverse Studio's 2026 Roadmap",
        excerpt: "An inside look at our upcoming project releases, studio expansion, and new technical frontiers we're planning to explore this year.",
        content: "Detailed content here...",
        author: {
            name: "Ali",
            role: "Studio Founder",
            avatar: "/images/authors/ali.jpg"
        },
        category: "Studio",
        date: "Jan 05, 2026",
        image: "/images/blog/roadmap-2026.jpg",
        readTime: "6 min read",
        slug: "ariverse-studio-2026-roadmap"
    },
    {
        id: "post-04",
        title: "Balancing Combat Mechanics in Soul-like RPGs",
        excerpt: "How we iterate on player feedback to find the perfect 'swing' and 'dodge' timing in Echoes of Eldoria.",
        content: "Detailed content here...",
        author: {
            name: "Zulfikar",
            role: "Game Director",
            avatar: "/images/authors/zulfikar.jpg"
        },
        category: "Design",
        date: "Dec 28, 2025",
        image: "/images/blog/combat-design.jpg",
        readTime: "10 min read",
        slug: "balancing-soul-like-combat"
    },
    {
        id: "post-05",
        title: "Optimization Tips for Mobile XR",
        excerpt: "Maintaining 90fps on mobile hardware is a challenge. Here are our top tricks for vertex count and draw call reduction.",
        content: "Detailed content here...",
        author: {
            name: "Amelia",
            role: "Lead Audio Engineer",
            avatar: "/images/authors/amelia.jpg"
        },
        category: "Tech",
        date: "Dec 20, 2025",
        image: "/images/blog/mobile-xr-opt.jpg",
        readTime: "7 min read",
        slug: "optimization-tips-mobile-xr"
    }
];
