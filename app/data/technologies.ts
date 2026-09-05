export interface TechItem {
    name: string;
    category: "Engine" | "Platform" | "Tool";
    comingSoon?: boolean;
}

export const technologies: TechItem[] = [
    { name: "Unreal Engine 5", category: "Engine" },
    { name: "Unity", category: "Engine" },
    { name: "PC", category: "Platform" },
    { name: "Android", category: "Platform" },
    { name: "PlayStation 5", category: "Platform", comingSoon: true },
    { name: "Xbox Series X/S", category: "Platform", comingSoon: true },
    { name: "Nintendo Switch", category: "Platform", comingSoon: true },
    { name: "Blender", category: "Tool" },
    { name: "Maya", category: "Tool" },
];
