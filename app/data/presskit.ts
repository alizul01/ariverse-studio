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
        description: "Logo resmi Ariverse Studio (SVG, PNG, AI) versi Dark/Light.",
        thumbnail: "/images/press/logo-kit-thumb.jpg",
        downloadUrl: "/downloads/ariverse-logo-kit.zip",
        type: "Logo",
        fileSize: "4.2 MB"
    },
    {
        id: "asset-02",
        title: "Product Media - Mana",
        description: "Tangkapan layar UI/UX SaaS ERP 'Mana' (Next.js & Supabase).",
        thumbnail: "/images/press/mana-thumb.jpg",
        downloadUrl: "/downloads/mana-media-kit.zip",
        type: "Screenshot",
        fileSize: "15.5 MB"
    },
    {
        id: "asset-03",
        title: "Game Media - Butet Mengajar",
        description: "Key art dan screenshot aplikasi belajar matematika gamifikasi.",
        thumbnail: "/images/press/butet-thumb.jpg",
        downloadUrl: "/downloads/butet-media-kit.zip",
        type: "Screenshot",
        fileSize: "22 MB"
    },
    {
        id: "asset-04",
        title: "Project Media - The Dawn: Office",
        description: "Early look proyek horor Unreal Engine 5.",
        thumbnail: "/images/press/thedawn-thumb.jpg",
        downloadUrl: "/downloads/thedawn-media-kit.zip",
        type: "Screenshot",
        fileSize: "35 MB"
    },
    {
        id: "asset-05",
        title: "Studio Fact Sheet",
        description: "Statistik kunci, bio founder, dan visi Sharia-compliant business.",
        thumbnail: "/images/press/fact-sheet-thumb.jpg",
        downloadUrl: "/downloads/ariverse-fact-sheet.pdf",
        type: "Document",
        fileSize: "1.1 MB"
    }
];

export const studioInfo = {
    foundingDate: "January 2021",
    location: "Malang, Indonesia",
    teamSize: "15 Explorers",
    founder: "Ali Zulfikar",
    mission: "To forge digital universes that challenge reality and inspire exploration.",
    activeProjects: ["Mana (SaaS ERP)", "Butet Mengajar", "The Dawn: Office"],
    techStack: ["Unity", "Unreal Engine 5", "Next.js", "Supabase"]
};
