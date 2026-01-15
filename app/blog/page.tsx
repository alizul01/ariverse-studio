import PageHeader from "../components/ui/PageHeader";

export default function BlogPage() {
    return (
        <div className="pb-40">
            <PageHeader
                title="Blog"
                description="Latest news from orbit. Stay updated with our latest developments and insights."
                breadcrumbs={[{ label: "Blog", href: "/blog" }]}
                backgroundImage="/images/placeholders/blog-header.jpg"
            />

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 mt-20">
                <p className="text-[#FCEBD7]/80">Explore our latest articles and updates. (Under Construction)</p>
            </div>
        </div>
    );
}
