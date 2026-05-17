export type GameLanguage = "en" | "id" | "bilingual";

export type GamePresentation = {
    slug: string;
    title: string;
    status?: string | null;
    platforms: readonly string[];
    websiteUrl?: string | null;
    wishlistUrl?: string | null;
    demoUrl?: string | null;
    downloadUrl?: string | null;
    language?: string | null;
};

export type GameCta = {
    label: string;
    href: string;
    external?: boolean;
    variant: "primary" | "secondary";
};

const languageMeta: Record<GameLanguage, { label: string; longLabel: string }> = {
    en: { label: "EN", longLabel: "English" },
    id: { label: "ID", longLabel: "Bahasa Indonesia" },
    bilingual: { label: "EN/ID", longLabel: "Bilingual" },
};

export function getLanguageMeta(language?: string | null) {
    return languageMeta[(language as GameLanguage) || "en"] || languageMeta.en;
}

export function getStatusLabel(status?: string | null) {
    const labels: Record<string, string> = {
        released: "Released",
        "early-access": "Early Access",
        "coming-soon": "Coming Soon",
        "in-development": "In Development",
    };

    return labels[status || "in-development"] || labels["in-development"];
}

function isExternalUrl(href: string) {
    return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");
}

function buildContactUrl(subject: string) {
    return `/contact?subject=${encodeURIComponent(subject)}&type=services`;
}

function buildStructuredCtas(game: GamePresentation): GameCta[] {
    const ctas: GameCta[] = [];

    if (game.wishlistUrl) {
        ctas.push({ label: "Wishlist Now", href: game.wishlistUrl, external: isExternalUrl(game.wishlistUrl), variant: "primary" });
    }
    if (game.demoUrl) {
        ctas.push({ label: "Play Demo", href: game.demoUrl, external: isExternalUrl(game.demoUrl), variant: ctas.length === 0 ? "primary" : "secondary" });
    }
    if (game.downloadUrl) {
        const downloadLabel = game.platforms.includes("Android") || game.platforms.includes("iOS")
            ? "Open Store"
            : "Download Now";
        ctas.push({ label: downloadLabel, href: game.downloadUrl, external: isExternalUrl(game.downloadUrl), variant: ctas.length === 0 ? "primary" : "secondary" });
    }
    if (game.websiteUrl) {
        const websiteLabel = game.platforms.includes("Web") ? "Open Experience" : "Visit Website";
        ctas.push({ label: websiteLabel, href: game.websiteUrl, external: isExternalUrl(game.websiteUrl), variant: ctas.length === 0 ? "primary" : "secondary" });
    }

    return ctas;
}

export function getGameCtas(game: GamePresentation): GameCta[] {
    const structured = buildStructuredCtas(game);

    if (structured.length > 0) {
        return structured.slice(0, 3);
    }

    const fallbackByStatus: Record<string, GameCta[]> = {
        released: [
            {
                label: "Request Access",
                href: buildContactUrl(`Access request for ${game.title}`),
                variant: "primary",
            },
        ],
        "early-access": [
            {
                label: "Request Demo",
                href: buildContactUrl(`Demo request for ${game.title}`),
                variant: "primary",
            },
        ],
        "coming-soon": [
            {
                label: "Notify Me",
                href: buildContactUrl(`Notify me about ${game.title}`),
                variant: "primary",
            },
        ],
        "in-development": [
            {
                label: "Notify Me",
                href: buildContactUrl(`Notify me about ${game.title}`),
                variant: "primary",
            },
        ],
    };

    const ctas = fallbackByStatus[game.status || "in-development"] || fallbackByStatus["in-development"];

    if (game.slug === "minimate") {
        return [
            ...ctas,
            {
                label: "Privacy Policy",
                href: "/games/minimate/privacy-policy",
                variant: "secondary",
            },
        ];
    }

    return ctas;
}

export function getStatusSortRank(status?: string | null) {
    const statusRank: Record<string, number> = {
        released: 0,
        "early-access": 1,
        "coming-soon": 2,
        "in-development": 3,
    };

    return statusRank[status || "in-development"] ?? 4;
}
