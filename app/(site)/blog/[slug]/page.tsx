import { reader } from "../../../../lib/keystatic";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import PageHeader from "../../../components/ui/PageHeader";
import { DocumentRenderer } from '@keystatic/core/renderer';

interface BlogPostProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const posts = await reader.collections.posts.all();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage(props: BlogPostProps) {
    const params = await props.params;
    const post = await reader.collections.posts.read(params.slug);

    if (!post) {
        notFound();
    }

    // Determine content to render. If it's a function (as it might be in some versions), call it.
    // However, reader.collections.posts.read(slug) returns the entry object directly with fields.
    // For document fields, it returns the JSON structure directly.

    return (
        <div className="pb-40">
            <PageHeader
                title={post.title}
                description="Latest transmission from the studio."
                breadcrumbs={[
                    { label: "Blog", href: "/blog" },
                    { label: post.title, href: `/blog/${params.slug}` }
                ]}
                backgroundImage={post.coverImage || "/images/placeholders/blog-header.jpg"}
            />

            <div className="max-w-4xl mx-auto px-4 md:px-6 mt-20">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#E2494B] font-bold tracking-widest uppercase text-xs mb-8 hover:-translate-x-1 transition-transform"
                >
                    <ArrowLeft size={16} />
                    Back to Transmissions
                </Link>

                <article>
                    <header className="mb-12">
                        <div className="flex items-center gap-6 text-[#FCEBD7]/60 text-sm font-bold tracking-widest uppercase mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-[#E2494B]" />
                                <span>{post.publishedDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-[#E2494B]" />
                                <span>5 min read</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#FCEBD7] leading-tight">
                            {post.title}
                        </h1>
                    </header>

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-[#FCEBD7] prose-p:text-[#FCEBD7]/70 prose-strong:text-[#E2494B] prose-a:text-[#E2494B]">
                        <DocumentRenderer document={await post.content()} />
                    </div>
                </article>
            </div>
        </div>
    );
}
