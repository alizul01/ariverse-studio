export interface Service {
    slug: string;
    entry: {
        title: string;
        description: string;
        icon: string;
        image: string;
        capabilities: string[];
    };
    imageCard: string;
}

export const services: Service[] = [
    {
        slug: "game-development",
        entry: {
            title: "Full Cycle Services",
            description: "We craft immersive, high-performance games using Unreal Engine and cutting-edge pipelines — from concept to gold master.",
            icon: "rocket",
            image: "/images/services/game-dev-bg.jpg",
            capabilities: ["Unreal Engine 5", "Multiplayer Systems", "Console Porting", "Live Service", "Optimization"],
        },
        imageCard: "/images/services/our-service/FullCycleServices-NOVA.jpg",
    },
    {
        slug: "gamification",
        entry: {
            title: "Gamification Services",
            description: "Transform your product or workflow into an engaging experience with game mechanics that drive real user behavior.",
            icon: "variable",
            image: "/images/services/gamification-bg.jpg",
            capabilities: ["Reward Systems", "Leaderboards", "Progress Tracking", "Behavioral Design", "Analytics"],
        },
        imageCard: "/images/services/our-service/GamificationServices-LUMA.jpg",
    },
    {
        slug: "Software Services",
        entry: {
            title: "Software Services",
            description: "Educational experiences powered by game design — making complex subjects intuitive, engaging, and measurable.",
            icon: "academic",
            image: "/images/services/gbl-bg.jpg",
            capabilities: ["Serious Games", "Simulation", "Assessment Design", "LMS Integration", "Accessibility"],
        },
        imageCard: "/images/services/our-service/SoftwareServices-REX.jpg",
    },
    {
        slug: "2D3DArtCreationServices",
        entry: {
            title: "2D 3D Art Creation Services",
            description: "We build AR, VR, and MR experiences that blur the line between physical and digital worlds.",
            icon: "globe",
            image: "/images/services/xr-bg.jpg",
            capabilities: ["Meta Quest", "HoloLens", "WebXR", "Spatial Audio", "Hand Tracking"],
        },
        imageCard: "/images/services/our-service/2D_3DArtCreationServices-KIP.jpg",
    },
];