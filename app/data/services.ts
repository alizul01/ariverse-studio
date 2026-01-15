export interface Service {
    title: string;
    description: string;
    icon?: string; // We can expand this later to use actual icons
}

export const services: Service[] = [
    {
        title: "Game Development",
        description: "Full-cycle development using Unreal Engine 5 & Unity. From prototype to gold master."
    },
    {
        title: "3D Art & Animation",
        description: "High-fidelity assets, character design, and motion capture integration."
    },
    {
        title: "Gamification",
        description: "Turning business logic into engaging interactive experiences."
    }
];
