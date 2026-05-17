export interface PressAsset {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    downloadUrl: string;
    type: "Logo" | "Screenshot" | "Video" | "Document";
    fileSize: string;
}

export const presskitDriveUrl = "https://drive.google.com/drive/folders/1LjpbRZXHdLz7D-Uu-Xrl1kuYp_hgzvEO?usp=sharing";

export const pressAssets: PressAsset[] = [
    {
        id: "asset-01",
        title: "Ariverse Studio Logo Kit",
        description: "Logo resmi Ariverse Studio (SVG, PNG, AI) versi Dark/Light.",
        thumbnail: "/images/logo.png",
        downloadUrl: presskitDriveUrl,
        type: "Logo",
        fileSize: "4.2 MB"
    },
    {
        id: "asset-02",
        title: "Game Media - Nightwatch at the Museum",
        description: "Key art and project media for Ariverse Studio's psychological horror title.",
        thumbnail: "/images/games/nightwatch-at-the-museum/coverImage.png",
        downloadUrl: presskitDriveUrl,
        type: "Screenshot",
        fileSize: "15.5 MB"
    },
    {
        id: "asset-03",
        title: "Game Media - MiniMate",
        description: "Puzzle strategy game cover art and supporting media.",
        thumbnail: "/images/games/mini-mate/coverImage.png",
        downloadUrl: presskitDriveUrl,
        type: "Screenshot",
        fileSize: "22 MB"
    },
    {
        id: "asset-04",
        title: "Studio Press Coverage",
        description: "Selected media coverage and editorial screenshots featuring Ariverse Studio.",
        thumbnail: "/images/press/foto-cerita-geliat-imajinasi-digital-di-kota-kreatif/screenshot.jpg",
        downloadUrl: presskitDriveUrl,
        type: "Screenshot",
        fileSize: "35 MB"
    },
    {
        id: "asset-05",
        title: "Studio Fact Sheet",
        description: "Key studio facts, contact information, leadership bio, and current project summary.",
        thumbnail: "/images/header/about-header.jpg",
        downloadUrl: presskitDriveUrl,
        type: "Document",
        fileSize: "1.1 MB"
    }
];

export const studioInfo = {
    foundingDate: "2023",
    location: "Malang, Indonesia",
    teamSize: "15 Explorers",
    founder: "Ali Zulfikar",
    mission: "To forge digital universes that challenge reality and inspire exploration.",
    activeProjects: ["Mana (SaaS ERP)", "Butet Mengajar", "The Dawn: Office"],
    techStack: ["Unity", "Unreal Engine 5", "Next.js", "Supabase"]
};
