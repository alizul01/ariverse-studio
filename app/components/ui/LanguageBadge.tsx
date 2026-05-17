"use client";

import { getLanguageMeta } from "../../../lib/game-presentation";

export default function LanguageBadge({ language }: { language?: string | null }) {
    const meta = getLanguageMeta(language);

    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/65 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {meta.label}
        </span>
    );
}
