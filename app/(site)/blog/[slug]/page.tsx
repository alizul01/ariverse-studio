import { reader } from "../../../../lib/keystatic";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import ScrollProgress from "../../../components/ui/ScrollProgress";
import { DocumentRenderer } from '@keystatic/core/renderer';
import { Metadata } from "next";

interface BlogPostProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = await reader.collections.posts.all();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await reader.collections.posts.read(slug);
    if (!post) return { title: "Post Not Found" };
    return {
        title: post.title,
        description: `Read ${post.title} on Ariverse Studio Blog.`,
        openGraph: {
            title: post.title,
            description: `Read ${post.title} on Ariverse Studio Blog.`,
            images: post.coverImage ? [post.coverImage] : [],
        },
    };
}

export default async function BlogPostPage(props: BlogPostProps) {
    const params = await props.params;
    const post = await reader.collections.posts.read(params.slug);
    if (!post) notFound();

    return (
        <div className="pb-24">
            <ScrollProgress />

            <div className="max-w-2xl mx-auto px-4 md:px-6 pt-12">

                {/* Back link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase text-foreground/40 hover:text-accent transition-colors mb-10 group"
                >
                    <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
                    Blog
                </Link>

                <article>
                    <header className="mb-10 pb-10 border-b border-foreground/8">
                        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-foreground/35 mb-5">
                            <Calendar size={11} />
                            {post.publishedDate}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground leading-none">
                            {post.title}
                        </h1>
                        <p className="text-foreground/40 text-xs font-bold tracking-widest uppercase mt-4">
                            Ariverse Studio
                        </p>
                    </header>

                    <div className="prose prose-sm max-w-none
                        prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-foreground
                        prose-p:text-foreground/65 prose-p:leading-relaxed
                        prose-strong:text-foreground prose-strong:font-bold
                        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                        prose-blockquote:border-l-accent prose-blockquote:text-foreground/50
                        prose-code:text-accent prose-code:bg-foreground/5 prose-code:px-1 prose-code:rounded
                        prose-img:rounded-xl">
                        <DocumentRenderer document={await post.content()} />
                    </div>
                </article>

            </div>
        </div>
    );
}
