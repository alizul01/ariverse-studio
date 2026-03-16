import { FeaturedPostSkeleton, BlogCardSkeleton } from "../../components/ui/Skeleton";
import PageHeader from "../../components/ui/PageHeader";

export default function BlogLoading() {
    return (
        <div className="pb-40">
            <PageHeader
                title="Blog"
                description="Latest news from orbit. Stay updated with our latest developments, tech insights, and studio culture."
                breadcrumbs={[{ label: "Blog", href: "/blog" }]}
                backgroundImage="/images/placeholders/blog-header.jpg"
            />
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                <section className="mt-20">
                    <FeaturedPostSkeleton />
                </section>

                <section className="py-32">
                    <div className="flex justify-between items-center mb-16">
                        <div className="h-10 w-48 bg-[#61422D]/20 animate-pulse rounded-lg" />
                        <div className="flex gap-3">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="h-8 w-20 bg-[#61422D]/20 animate-pulse rounded-full" />
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <BlogCardSkeleton key={i} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
