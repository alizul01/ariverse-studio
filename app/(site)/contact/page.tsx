import { Suspense } from "react";
import ContactPageClient, { ContactPageFallback } from "./ContactPageClient";

export default function ContactPage() {
    return (
        <Suspense fallback={<ContactPageFallback />}>
            <ContactPageClient />
        </Suspense>
    );
}
