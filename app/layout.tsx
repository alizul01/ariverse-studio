import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ariverse Studio",
  description: "Crafting immersive digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
