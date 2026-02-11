export interface PressAsset {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    downloadUrl: string;
    type: "Logo" | "Screenshot" | "Video" | "Document";
    fileSize: string;
}

export const pressAssets: PressAsset[] = [
    {
        id: "asset-01",
        title: "Ariverse Studio Logo Kit",
        description: "Official logos in various formats (SVG, PNG, AI) including dark and light versions.",
        thumbnail: "/images/press/logo-kit-thumb.jpg",
        downloadUrl: "/downloads/ariverse-logo-kit.zip",
        type: "Logo",
        fileSize: "4.2 MB"
    },
    {
        id: "asset-02",
        title: "Studio Environment Photos",
        description: "High-resolution photos of our workspace and the creative crew in action.",
        thumbnail: "/images/press/studio-photos-thumb.jpg",
        downloadUrl: "/downloads/ariverse-studio-photos.zip",
        type: "Screenshot",
        fileSize: "28.5 MB"
    },
    {
        id: "asset-03",
        title: "Echoes of Eldoria Media Pack",
        description: "Key art, screenshots, and character renders for our flagship title.",
        thumbnail: "/images/press/eldoria-assets-thumb.jpg",
        downloadUrl: "/downloads/eldoria-media-pack.zip",
        type: "Screenshot",
        fileSize: "45.1 MB"
    },
    {
        id: "asset-04",
        title: "Studio Fact Sheet",
        description: "Key stats, founder bios, and mission statement in PDF format.",
        thumbnail: "/images/press/fact-sheet-thumb.jpg",
        downloadUrl: "/downloads/ariverse-fact-sheet.pdf",
        type: "Document",
        fileSize: "1.2 MB"
    }
];

export const studioInfo = {
    foundingDate: "January 2021",
    location: "Jakarta, Indonesia (Remote First)",
    teamSize: "15 Explorers",
    founder: "Ali Zulfikar",
    mission: "To forge digital universes that challenge reality and inspire exploration.",
    activeProjects: ["Echoes of Eldoria", "Neon Velocity", "Project Aether"]
};
