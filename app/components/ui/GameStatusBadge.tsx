"use client";

const statusConfig: Record<string, { label: string; bg: string; text: string; ring: string; dot: string }> = {
    "in-development": {
        label: "In Development",
        bg: "bg-amber-500/10",
        text: "text-amber-400",
        ring: "border-amber-500/30",
        dot: "bg-amber-400",
    },
    "coming-soon": {
        label: "Coming Soon",
        bg: "bg-blue-500/10",
        text: "text-blue-400",
        ring: "border-blue-500/30",
        dot: "bg-blue-400",
    },
    "released": {
        label: "Released",
        bg: "bg-green-500/10",
        text: "text-green-400",
        ring: "border-green-500/30",
        dot: "bg-green-400",
    },
    "early-access": {
        label: "Early Access",
        bg: "bg-purple-500/10",
        text: "text-purple-400",
        ring: "border-purple-500/30",
        dot: "bg-purple-400",
    },
};

export default function GameStatusBadge({ status }: { status?: string | null }) {
    const config = statusConfig[status || "in-development"] || statusConfig["in-development"];

    return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider border ${config.bg} ${config.text} ${config.ring}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${config.dot} animate-pulse`} />
            {config.label}
        </span>
    );
}
