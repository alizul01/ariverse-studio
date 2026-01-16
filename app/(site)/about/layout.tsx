import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Ariverse Studio",
    description: "Meet the team behind Ariverse Studio. We are a collective of explorers, creators, and engineers dedicated to forging the next generation of digital universes.",
    openGraph: {
        title: "About Ariverse Studio",
        description: "Meet the team behind Ariverse Studio. We are a collective of explorers, creators, and engineers dedicated to forging the next generation of digital universes.",
        url: 'https://ariversestudio.com//about',
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
