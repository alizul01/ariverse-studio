import { DocumentRenderer, DocumentRendererProps } from '@keystatic/core/renderer';
import React from 'react';

const renderers: DocumentRendererProps['renderers'] = {
    inline: {
        bold: ({ children }) => (
            <strong className="text-[#FCEBD7] font-bold">{children}</strong>
        ),
        italic: ({ children }) => (
            <em className="text-[#FCEBD7]/80 italic">{children}</em>
        ),
        underline: ({ children }) => (
            <span className="underline underline-offset-4">{children}</span>
        ),
        strikethrough: ({ children }) => (
            <s className="text-[#FCEBD7]/40">{children}</s>
        ),
        link: ({ href, children }) => (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E2494B] underline underline-offset-4 hover:text-[#FCEBD7] transition-colors"
            >
                {children}
            </a>
        ),
    },
    block: {
        paragraph: ({ children, textAlign }) => (
            <p
                className="text-[#FCEBD7]/70 text-lg leading-relaxed mb-6"
                style={{ textAlign }}
            >
                {children}
            </p>
        ),
        heading: ({ level, children, textAlign }) => {
            const base = "font-bold text-[#FCEBD7] uppercase tracking-tight mb-4 mt-10";
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
            <hr className="border-none h-px bg-gradient-to-r from-transparent via-[#61422D]/50 to-transparent my-10" />
        ),
        blockquote: ({ children }) => (
            <blockquote className="relative my-8 pl-6 border-l-2 border-[#E2494B]">
                <div className="text-[#FCEBD7]/60 italic text-lg leading-relaxed">{children}</div>
            </blockquote>
        ),
        list: ({ type, children }) =>
            type === 'ordered' ? (
                <ol className="space-y-3 mb-6 pl-6 list-decimal marker:text-[#E2494B] marker:font-bold">
                    {children}
                </ol>
            ) : (
                <ul className="space-y-3 mb-6 pl-0 list-none">
                    {children}
                </ul>
            ),
        listItem: ({ children }) => (
            <li className="flex items-start gap-3 text-[#FCEBD7]/70 text-base leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#E2494B] shrink-0" />
                <span>{children}</span>
            </li>
        ),
        code: ({ children }) => (
            <pre className="bg-[#61422D]/10 border border-[#61422D]/20 rounded-2xl p-6 my-6 overflow-x-auto">
                <code className="text-[#FCEBD7]/80 text-sm font-mono leading-relaxed">{children}</code>
            </pre>
        ),
        image: ({ src, alt }) => (
            <figure className="my-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={src}
                    alt={alt ?? ""}
                    className="w-full rounded-2xl border border-[#61422D]/20 object-cover"
                />
                {alt && (
                    <figcaption className="mt-3 text-center text-[#FCEBD7]/40 text-sm italic">
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
