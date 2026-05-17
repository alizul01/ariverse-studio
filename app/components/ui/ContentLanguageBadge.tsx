"use client";

const languageConfig = {
    en: {
        label: "English",
        shortLabel: "EN",
        className: "bg-sky-100 text-sky-800 border-sky-300",
    },
    id: {
        label: "Bahasa Indonesia",
        shortLabel: "ID",
        className: "bg-emerald-100 text-emerald-800 border-emerald-300",
    },
    bilingual: {
        label: "Bilingual",
        shortLabel: "EN/ID",
        className: "bg-stone-100 text-stone-800 border-stone-300",
    },
} as const;

type LanguageValue = keyof typeof languageConfig;

export function getLanguageLabel(language?: string | null) {
    const config = languageConfig[(language as LanguageValue) || "en"] || languageConfig.en;
    return config.label;
}

export default function ContentLanguageBadge({
    language,
    compact = false,
}: {
    language?: string | null;
    compact?: boolean;
}) {
    const config = languageConfig[(language as LanguageValue) || "en"] || languageConfig.en;

    return (
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${config.className}`}>
            {compact ? config.shortLabel : config.label}
        </span>
    );
}
