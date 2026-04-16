import { DocumentRenderer, DocumentRendererProps } from '@keystatic/core/renderer';
import React from 'react';

const renderers: DocumentRendererProps['renderers'] = {
    inline: {
        bold: ({ children }) => (
            <strong className="text-[#101010] font-bold">{children}</strong>
        ),
        italic: ({ children }) => (
            <em className="text-[#101010]/80 italic">{children}</em>
        ),
        underline: ({ children }) => (
            <span className="underline underline-offset-4">{children}</span>
        ),
        strikethrough: ({ children }) => (
            <s className="text-[#101010]/40">{children}</s>
        ),
        link: ({ href, children }) => (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#96191A] underline underline-offset-4 hover:text-[#101010] transition-colors"
            >
                {children}
            </a>
        ),
    },
    block: {
        paragraph: ({ children, textAlign }) => (
            <p
                className="text-[#101010]/65 text-lg leading-relaxed mb-6"
                style={{ textAlign }}
            >
                {children}
            </p>
        ),
        heading: ({ level, children, textAlign }) => {
            const base = "font-bold text-[#101010] uppercase tracking-tight mb-4 mt-10";
            const sizes: Record<number, string> = {
                1: "text-4xl md:text-5xl",
                2: "text-2xl md:text-3xl",
                3: "text-xl md:text-2xl",
                4: "text-lg md:text-xl",
                5: "text-base md:text-lg",
                6: "text-sm md:text-base",
            };
            return React.createElement(
                `h${level}`,
                { className: `${base} ${sizes[level] ?? "text-xl"}`, style: { textAlign } },
                children
            );
        },
        divider: () => (
            <hr className="border-none h-px bg-[#101010]/10 my-10" />
        ),
        blockquote: ({ children }) => (
            <blockquote className="relative my-8 pl-6 border-l-2 border-[#96191A]">
                <div className="text-[#101010]/55 italic text-lg leading-relaxed">{children}</div>
            </blockquote>
        ),
        list: ({ type, children }) =>
            type === 'ordered' ? (
                <ol className="space-y-3 mb-6 pl-6 list-decimal marker:text-[#96191A] marker:font-bold">
                    {children.map((child, i) => (
                        <li key={i} className="text-[#101010]/65 text-base leading-relaxed">{child}</li>
                    ))}
                </ol>
            ) : (
                <ul className="space-y-2 mb-6 pl-0 list-none">
                    {children.map((child, i) => (
                        <li key={i} className="relative pl-5 text-foreground/65 text-base leading-relaxed [&_p]:mb-0 [&_p]:text-base before:absolute before:left-0 before:top-[0.55em] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">{child}</li>
                    ))}
                </ul>
            ),
        code: ({ children }) => (
            <pre className="bg-[#101010]/4 border border-[#101010]/8 rounded-2xl p-6 my-6 overflow-x-auto">
                <code className="text-[#101010]/70 text-sm font-mono leading-relaxed">{children}</code>
            </pre>
        ),
        image: ({ src, alt }) => (
            <figure className="my-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={src}
                    alt={alt ?? ""}
                    className="w-full rounded-2xl border border-[#101010]/8 object-cover"
                />
                {alt && (
                    <figcaption className="mt-3 text-center text-[#101010]/40 text-sm italic">
                        {alt}
                    </figcaption>
                )}
            </figure>
        ),
    },
};

type Props = {
    document: Parameters<typeof DocumentRenderer>[0]['document'];
};

export default function DocumentContent({ document }: Props) {
    return <DocumentRenderer document={document} renderers={renderers} />;
}
