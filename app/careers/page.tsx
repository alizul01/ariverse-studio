import PageHeader from "../components/ui/PageHeader";

export default function CareersPage() {
    return (
        <div className="pb-40">
            <PageHeader
                title="Careers"
                description="Join the crew. We're looking for passionate explorers to build the future of interactive entertainment."
                breadcrumbs={[{ label: "Careers", href: "/careers" }]}
                backgroundImage="/images/placeholders/careers-header.jpg"
            />

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 mt-20">
                <p className="text-[#FCEBD7]/80">Check back later for open positions. (Under Construction)</p>
            </div>
        </div>
    );
}
