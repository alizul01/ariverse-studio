import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/ui/BackToTop";
import "../globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    style: ["normal", "italic"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL('https://ariversestudio.com/'),
    title: {
        default: "Ariverse Studio | Game Developer Malang Indonesia",
        template: "%s | Ariverse Studio"
    },
    description: "Crafting immersive digital experiences across the universe. Game Development, 3D Art, and Gamification.",
    keywords: ["Game Development", "Unreal Engine", "3D Art", "Gamification", "Indie Game Studio"],
    openGraph: {
        title: "Ariverse Studio",
        description: "Crafting immersive digital experiences.",
        url: 'https://ariversestudio.com/',
        siteName: 'Ariverse Studio',
        locale: 'en_US',
        type: 'website',
    },
};

export default function SiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${plusJakartaSans.variable} ${plusJakartaSans.className} antialiased min-h-screen flex flex-col`}>
            <a href="#main-content" className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#E2494B] focus:text-[#FCEBD7] focus:px-4 focus:py-2 focus:rounded-md focus:font-bold">
                Skip to main content
            </a>
            <Navbar />
            <main id="main-content" className="grow">
                {children}
            </main>
            <Footer />
            <BackToTop />
            <Analytics />
        </div>
    );
}
