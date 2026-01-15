export interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: "Full-time" | "Contract" | "Internship";
    experience: string;
    description: string;
    requirements: string[];
}

export const jobs: Job[] = [
    {
        id: "game-designer-01",
        title: "Senior Game Designer",
        department: "Design",
        location: "Remote / Jakarta",
        type: "Full-time",
        experience: "5+ Years",
        description: "We are looking for a Senior Game Designer to help us architect immersive gameplay mechanics and narrative systems for our upcoming open-world title.",
        requirements: [
            "Strong portfolio of shipped PC/Console titles.",
            "Expertise in combat design and balancing.",
            "Proficiency with Unreal Engine 5 or Unity.",
            "Passion for space exploration and sci-fi narratives."
        ]
    },
    {
        id: "ue5-dev-01",
        title: "Unreal Engine Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        experience: "3+ Years",
        description: "Join our core engineering team to push the boundaries of visual fidelity and performance in UE5.",
        requirements: [
            "Advanced C++ knowledge in Unreal Engine.",
            "Experience with shader development and optimization.",
            "Understanding of network replication for multiplayer.",
            "Strong problem-solving skills."
        ]
    },
    {
        id: "3d-artist-01",
        title: "3D Environmental Artist",
        department: "Art",
        location: "Remote / Jakarta",
        type: "Contract",
        experience: "2+ Years",
        description: "Create breathtaking worlds and alien landscapes for our digital universes.",
        requirements: [
            "Expertise in Blender, ZBrush, and Substance Painter.",
            "Strong understanding of PBR workflows.",
            "Ability to create optimized assets for real-time engines.",
            "Eye for composition and lighting."
        ]
    },
    {
        id: "uiux-designer-01",
        title: "UI/UX Designer",
        department: "Design",
        location: "Remote",
        type: "Full-time",
        experience: "2+ Years",
        description: "Design sleek, futuristic interfaces that enhance player immersion and usability.",
        requirements: [
            "Proficiency in Figma and Adobe Creative Suite.",
            "Experience designing game UIs and HUDs.",
            "Understanding of user psychology and accessibility.",
            "Motion design skills are a big plus."
        ]
    }
];
