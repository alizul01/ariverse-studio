import ContactPageClient from "./ContactPageClient";

type SearchParams = Promise<{
    subject?: string;
    type?: string;
    message?: string;
}>;

export default async function ContactPage({
    searchParams,
}: {
    searchParams: SearchParams;
}) {
    const params = await searchParams;

    return (
        <ContactPageClient
            initialSubject={params.subject}
            initialType={params.type}
            initialMessage={params.message}
        />
    );
}
