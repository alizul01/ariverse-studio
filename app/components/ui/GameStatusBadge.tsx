"use client";

const statusConfig: Record<string, { label: string; bg: string; text: string; ring: string; dot: string }> = {
    "in-development": {
        label: "In Development",
        bg: "bg-amber-100",
        text: "text-amber-800",
        ring: "border-amber-300",
        dot: "bg-amber-600",
    },
    "coming-soon": {
        label: "Coming Soon",
        bg: "bg-blue-100",
        text: "text-blue-800",
        ring: "border-blue-300",
        dot: "bg-blue-600",
    },
    "released": {
        label: "Released",
        bg: "bg-green-100",
        text: "text-green-800",
        ring: "border-green-300",
        dot: "bg-green-600",
    },
    "early-access": {
        label: "Early Access",
        bg: "bg-purple-100",
        text: "text-purple-800",
        ring: "border-purple-300",
        dot: "bg-purple-600",
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
