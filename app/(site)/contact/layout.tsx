import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contact Ariverse Studio for game development services, collaborations, press inquiries, and studio partnerships.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Ariverse Studio",
        description: "Reach out to Ariverse Studio for collaborations, services, and press inquiries.",
        url: "https://ariversestudio.com/contact",
        images: ["/images/header/about-header.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Ariverse Studio",
        description: "Reach out to Ariverse Studio for collaborations, services, and press inquiries.",
        images: ["/images/header/about-header.jpg"],
    },
};

export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
