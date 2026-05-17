import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Ariverse Studio",
    description: "Meet the team behind Ariverse Studio. We are a collective of explorers, creators, and engineers dedicated to forging the next generation of digital universes.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Ariverse Studio",
        description: "Meet the team behind Ariverse Studio. We are a collective of explorers, creators, and engineers dedicated to forging the next generation of digital universes.",
        url: 'https://ariversestudio.com/about',
        images: ["/images/header/about-header.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Ariverse Studio",
        description: "Meet the team behind Ariverse Studio from Malang, Indonesia.",
        images: ["/images/header/about-header.jpg"],
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
