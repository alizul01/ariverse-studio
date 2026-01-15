export interface Service {
    id: string;
    title: string;
    description: string;
    slug: string;
    image: string;
    capabilities: string[];
}

export const services: Service[] = [
    {
        id: "game-dev",
        title: "Game Development",
        description: "End-to-end production for PC, Console, and Mobile. We handle the entire life cycle from concept to post-launch orbit.",
        slug: "game-development",
        image: "/images/services/game-dev-bg.jpg",
        capabilities: ["PC & Console", "UE5 / Unity", "Agile Production", "Multiplayer", "Live-Ops"]
    },
    {
        id: "gamification",
        title: "Studio Gamification",
        description: "Transform business objectives into engaging interactive systems. We build tools that make work feel like exploration.",
        slug: "gamification",
        image: "/images/services/gamification-bg.jpg",
        capabilities: ["E-Learning", "Loyalty Systems", "Training Sims", "Behavioral Loops"]
    },
    {
        id: "xr",
        title: "Extended Reality (XR)",
        description: "Pushing the boundaries of spatial computing. We create immersive VR/AR experiences for the next frontier.",
        slug: "xr-development",
        image: "/images/services/xr-bg.jpg",
        capabilities: ["VR Training", "AR Marketing", "Spatial Design", "Metaverse Ops", "Hardware R&D"]
    },
    {
        id: "learning",
        title: "Interactive Learning",
        description: "Gamified educational platforms that inspire and educate through immersive storytelling and mechanics.",
        slug: "game-based-learning",
        image: "/images/services/learning-bg.jpg",
        capabilities: ["Serious Games", "Simulations", "EdTech", "Scenario Based"]
    }
];
