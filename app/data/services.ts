export interface Service {
    title: string;
    description: string;
    slug: string;
    image: string; // Path to background image
    icon?: string;
}

export const services: Service[] = [
    {
        title: "Game Development",
        description: "Full-cycle development using Unreal Engine 5 & Unity. From prototype to gold master.",
        slug: "game-development",
        image: "/images/services/game-dev-bg.jpg"
    },
    {
        title: "3D Art & Animation",
        description: "High-fidelity assets, character design, and motion capture integration.",
        slug: "3d-art-animation",
        image: "/images/services/art-bg.jpg"
    },
    {
        title: "Gamification",
        description: "Turning business logic into engaging interactive experiences.",
        slug: "gamification",
        image: "/images/services/gamification-bg.jpg"
    }
];
