import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Learn how Ariverse Studio handles privacy, data protection, cookies, and user rights across our website and products.",
    alternates: {
        canonical: "/privacy-policy",
    },
    openGraph: {
        title: "Privacy Policy | Ariverse Studio",
        description: "Ariverse Studio privacy, data protection, cookies, and user rights.",
        url: "https://ariversestudio.com/privacy-policy",
        images: ["/images/logo.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | Ariverse Studio",
        description: "Ariverse Studio privacy, data protection, cookies, and user rights.",
        images: ["/images/logo.png"],
    },
};

export default function PrivacyPolicyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
