export interface Game {
    title: string;
    description: string;
    slug: string;
    image: string;
    platforms: string[];
    engine: string;
    releaseDate?: string;
}

export const games: Game[] = [
    {
        title: "GALACTIC ODYSSEY",
        description: "An epic space exploration RPG where you discover uncharted worlds and build your own stellar empire.",
        slug: "galactic-odyssey",
        image: "/images/games/galactic-odyssey.jpg",
        platforms: ["PC", "PS5", "XBOX"],
        engine: "Unreal Engine 5",
        releaseDate: "2025"
    },
    {
        title: "ECHOES OF ELDORIA",
        description: "A breathtaking open-world fantasy adventure with deep soul-like combat and ancient mysteries.",
        slug: "echoes-of-eldoria",
        image: "/images/games/eldoria.jpg",
        platforms: ["PC", "Switch"],
        engine: "Unity",
        releaseDate: "TBA"
    },
    {
        title: "NEON VELOCITY",
        description: "High-octane cyberpunk racing game featuring gravity-defying tracks and intense electronic soundtrack.",
        slug: "neon-velocity",
        image: "/images/games/neon-velocity.jpg",
        platforms: ["PC", "PS5"],
        engine: "Unreal Engine 5",
        releaseDate: "2024"
    },
    {
        title: "SHADOW PROTOCOL",
        description: "A tactical stealth-action game set in a dystopian future where information is the ultimate weapon.",
        slug: "shadow-protocol",
        image: "/images/games/shadow.jpg",
        platforms: ["PC", "XBOX"],
        engine: "Unity",
        releaseDate: "Coming Soon"
    }
];
