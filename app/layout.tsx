import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ariverse-studio.com'),
  title: {
    default: "Ariverse Studio | Interactive Entertainment",
    template: "%s | Ariverse Studio"
  },
  description: "Crafting immersive digital experiences across the universe. Game Development, 3D Art, and Gamification.",
  keywords: ["Game Development", "Unreal Engine", "3D Art", "Gamification", "Indie Game Studio"],
  openGraph: {
    title: "Ariverse Studio",
    description: "Crafting immersive digital experiences.",
    url: 'https://ariverse-studio.com',
    siteName: 'Ariverse Studio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
