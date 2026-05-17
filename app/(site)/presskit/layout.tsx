import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Presskit",
    description: "Download Ariverse Studio press assets, studio facts, logos, screenshots, and media resources.",
    alternates: {
        canonical: "/presskit",
    },
    openGraph: {
        title: "Presskit | Ariverse Studio",
        description: "Official press assets, studio facts, logos, screenshots, and media resources for Ariverse Studio.",
        url: "https://ariversestudio.com/presskit",
        images: ["/images/logo.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Presskit | Ariverse Studio",
        description: "Official press assets and media resources for Ariverse Studio.",
        images: ["/images/logo.png"],
    },
};

export default function PresskitLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
