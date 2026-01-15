export interface Service {
    title: string;
    description: string;
    slug: string;
    image: string; // Path to background image
    icon?: string;
}

export const services: Service[] = [
    {
        title: "Game Development Life Cycle",
        description: "We offer end-to-end game development services, covering concept creation, prototyping, production, and post-launch support. Our Agile approach ensures your product meets the highest quality standards.",
        slug: "game-development",
        image: "/images/services/game-dev-bg.jpg"
    },
    {
        title: "Gamification Services",
        description: "We integrate game mechanics into your business, education, or training programs to enhance engagement, motivation, and user experience.",
        slug: "gamification",
        image: "/images/services/gamification-bg.jpg"
    },
    {
        title: "XR Development Services",
        description: "Our team specializes in creating immersive Virtual Reality (VR) and Augmented Reality (AR) applications for education, culture, and entertainment.",
        slug: "xr-development",
        image: "/images/services/xr-bg.jpg"
    },
    {
        title: "Game Based Learning Services",
        description: "We provide interactive and engaging game-based learning solutions designed to make education and training both effective and enjoyable.",
        slug: "game-based-learning",
        image: "/images/services/learning-bg.jpg"
    }
];
