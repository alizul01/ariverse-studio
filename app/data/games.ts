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
        title: "Litter Factory",
        description: "A cozy yet chaotic co-op simulation game. Manage a busy recycling plant, sort trash with friends, and save the planet one piece of junk at a time.",
        slug: "litter-factory",
        image: "/images/games/litter-factory.jpg", // Pastikan file gambar ada
        platforms: ["PC", "Switch"],
        engine: "Unreal Engine 5",
        releaseDate: "2026"
    },
    {
        title: "Nightwatch at the Museum",
        description: "A psychological horror experience. Surviving your first shift as a security guard where the exhibits don't just stay on display when the lights go out.",
        slug: "nightwatch-museum",
        image: "/images/games/nightwatch.jpg",
        platforms: ["PC"],
        engine: "Unreal Engine 5",
        releaseDate: "TBA"
    },
    {
        title: "Alex and the Magical Mirror",
        description: "An enchanting fantasy adventure. Follow Alex's journey through a fractured world of reflections to uncover the truth behind the ancient mirror.",
        slug: "alex-magical-mirror",
        image: "/images/games/alex-mirror.jpg",
        platforms: ["PC", "Android"],
        engine: "Unity",
        releaseDate: "Coming Soon"
    }
];