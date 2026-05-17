import { Suspense } from "react";
import ContactPageClient, { ContactPageFallback } from "./ContactPageClient";
import { reader } from "../../../lib/keystatic";

export default async function ContactPage() {
    const gamesData = await reader.collections.games.all();
    const activeProjects = gamesData
        .filter((g) => g.entry.status === "in-development" || g.entry.status === "coming-soon")
        .map((g) => ({ title: g.entry.title, slug: g.slug }));

    return (
        <Suspense fallback={<ContactPageFallback />}>
            <ContactPageClient activeProjects={activeProjects} />
        </Suspense>
    );
}
