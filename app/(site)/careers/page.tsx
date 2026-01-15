import PageHeader from "../../components/ui/PageHeader";
import { reader } from "../../../lib/keystatic";
import CareersClient from "./CareersClient";

export default async function CareersPage() {
    const careersData = await reader.collections.careers.all();

    // Filter and map data
    const jobs = careersData
        .filter(job => job.entry.status === 'Active')
        .map(job => ({
            title: job.entry.title,
            department: job.entry.department,
            location: job.entry.location,
            type: job.entry.type,
            experience: job.entry.experience,
            slug: job.slug,
        }));

    return (
        <div className="pb-40">
            <PageHeader
                title="Careers"
                description="Join the crew. We're looking for passionate explorers to build the future of interactive entertainment."
                breadcrumbs={[{ label: "Careers", href: "/careers" }]}
                backgroundImage="/images/placeholders/careers-header.jpg"
            />
            <CareersClient jobs={jobs} />
        </div>
    );
}



