export type GameDirectoryItem = {
    slug: string;
    title: string;
    description: string;
    coverImage: string;
    platforms: string[];
    engine: string;
    genre: string;
    language: string;
    status: string;
    releaseDate: string | null;
    websiteUrl?: string;
    wishlistUrl?: string;
    demoUrl?: string;
    downloadUrl?: string;
};

export type GameAction = {
    label: string;
    href: string;
    external: boolean;
};

export const statusOrder = {
    released: 0,
    "early-access": 1,
    "coming-soon": 2,
    "in-development": 3,
} as const;

export function getStatusLabel(status?: string | null) {
    switch (status) {
        case "released":
            return "Released";
        case "early-access":
            return "Early Access";
        case "coming-soon":
            return "Coming Soon";
        default:
            return "In Development";
    }
}

function isExternalLink(href: string) {
    return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");
}

function pushAction(actions: GameAction[], label: string, href?: string | null) {
    if (!href) {
        return;
    }

    if (actions.some((action) => action.href === href && action.label === label)) {
        return;
    }

    actions.push({
        label,
        href,
        external: isExternalLink(href),
    });
}

export function getGameActions(game: GameDirectoryItem) {
    const actions: GameAction[] = [];
    const hasMobilePlatform = game.platforms.includes("Android") || game.platforms.includes("iOS");
    const hasWebPlatform = game.platforms.includes("Web");

    pushAction(actions, "Wishlist", game.wishlistUrl);
    pushAction(actions, hasWebPlatform ? "Play Demo" : "View Demo", game.demoUrl);
    pushAction(actions, hasWebPlatform ? "Open Site" : "Download", game.websiteUrl);
    pushAction(actions, hasMobilePlatform ? "Get the App" : "Download", game.downloadUrl);

    if (actions.length === 0) {
        if (game.status === "released" && hasWebPlatform) {
            pushAction(actions, "Request Demo", "/contact");
        } else if (game.status === "released" && hasMobilePlatform) {
            pushAction(actions, "Request Access", "/contact");
        } else if (game.status === "coming-soon") {
            pushAction(actions, "Notify Me", "/contact");
        } else {
            pushAction(actions, "Stay Updated", "/contact");
        }
    }

    return actions;
}

export function sortGames(games: GameDirectoryItem[], sortBy: string) {
    const sorted = [...games];

    sorted.sort((left, right) => {
        if (sortBy === "title-az") {
            return left.title.localeCompare(right.title);
        }

        if (sortBy === "title-za") {
            return right.title.localeCompare(left.title);
        }

        if (sortBy === "release-oldest") {
            return getReleaseTimestamp(left.releaseDate) - getReleaseTimestamp(right.releaseDate);
        }

        if (sortBy === "status") {
            const statusDelta = (statusOrder[left.status as keyof typeof statusOrder] ?? 99) - (statusOrder[right.status as keyof typeof statusOrder] ?? 99);
            return statusDelta !== 0 ? statusDelta : left.title.localeCompare(right.title);
        }

        return getReleaseTimestamp(right.releaseDate) - getReleaseTimestamp(left.releaseDate);
    });

    return sorted;
}

function getReleaseTimestamp(dateValue?: string | null) {
    if (!dateValue) {
        return 0;
    }

    const timestamp = Date.parse(dateValue);
    return Number.isNaN(timestamp) ? 0 : timestamp;
}
