import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Keystatic Admin',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    // Keystatic Layout must not have html/body tags as it's nested in Root Layout
    return (
        <>
            {children}
        </>
    );
}
