import { PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Quote } from "lucide-react";
import Link from "next/link";

export const portableTextComponents: Partial<PortableTextReactComponents> = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset) return null;

            return (
                <figure className="my-10 -mx-4 sm:mx-0">
                    <div className="relative aspect-video sm:rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src={urlFor(value).width(1200).height(700).url()}
                            alt={value.alt || "Imagem do post"}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {value.caption && (
                        <figcaption className="mt-3 text-center text-sm italic text-gray-600">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            );
        },

        code: ({ value }: any) => {
            const { code, language = "text" } = value;
            return (
                <pre className="bg-gray-900 text-gray-100 p-5 rounded-xl overflow-x-auto text-sm font-mono my-8 border border-gray-800">
                    <code>{code}</code>
                </pre>
            );
        },
    },

    block: {
        h1: ({ children }) => (
            <h1 className="text-4xl md:text-5xl font-bold mt-12 mb-6 text-gray-900 leading-tight">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-3xl md:text-4xl font-bold mt-10 mb-5 text-gray-900 border-l-4 border-orange-500 pl-4">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
                {children}
            </h3>
        ),
        normal: ({ children }) => (
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-orange-400 pl-6 py-4 my-10 italic text-lg text-gray-700 bg-orange-50 rounded-r-xl flex gap-3 items-start">
                <Quote className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>{children}</div>
            </blockquote>
        ),
    },

    marks: {
        link: ({ children, value }) => {
            const isExternal = value?.href?.startsWith("http");
            return isExternal ? (
                <a
                    href={value.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-800 underline decoration-2 underline-offset-2 transition-colors font-medium"
                >
                    {children} ↗
                </a>
            ) : (
                <Link
                    href={value.href}
                    className="text-orange-600 hover:text-orange-800 underline decoration-2 underline-offset-2 transition-colors font-medium"
                >
                    {children}
                </Link>
            );
        },
        strong: ({ children }) => (
            <strong className="font-bold text-gray-900">{children}</strong>
        ),
        em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
        code: ({ children }) => (
            <code className="bg-gray-100 text-orange-700 px-2 py-1 rounded text-sm font-mono">
                {children}
            </code>
        ),
    },

    list: {
        bullet: ({ children }) => (
            <ul className="my-6 ml-6 list-disc space-y-2 text-lg text-gray-700">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="my-6 ml-6 list-decimal space-y-2 text-lg text-gray-700">
                {children}
            </ol>
        ),
    },

    listItem: {
        bullet: ({ children }) => (
            <li className="marker:text-orange-500">{children}</li>
        ),
        number: ({ children }) => (
            <li className="marker:text-orange-600 marker:font-bold">{children}</li>
        ),
    },
};