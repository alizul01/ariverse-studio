export interface TechItem {
    name: string;
    category: "Engine" | "Platform" | "Tool";
}

export const technologies: TechItem[] = [
    { name: "Unreal Engine 5", category: "Engine" },
    { name: "Unity", category: "Engine" },
    { name: "PC", category: "Platform" },
    { name: "PlayStation 5", category: "Platform" },
    { name: "Xbox Series X/S", category: "Platform" },
    { name: "Nintendo Switch", category: "Platform" },
    { name: "Mobile (iOS/Android)", category: "Platform" },
    { name: "Blender", category: "Tool" },
    { name: "Maya", category: "Tool" },
];
