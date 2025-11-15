/* eslint-disable */

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getSinglePost } from "@/sanity/lib/getSinglePost";
import Link from "next/link";
import { portableTextComponents } from "@/app/_components/portableTextComponents";

interface Props {
    params: { slug: string };
}

export default async function PostPage({ params }: Props) {
    const post = await getSinglePost(params.slug);

    if (!post) {
        return <p className="p-10 text-center">Post not found.</p>;
    }

    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <div>
                <div className="flex items-center gap-4">
                    <div className="bg-[#E97527] w-[41px] h-[6px]"></div>
                    <Link
                        href="/blog"
                        className="text-[#0D194F] font-semibold text-lg"
                    >
                        Voltar

                    </Link>
                </div>

            </div>
            <article className="max-w-4xl mx-auto py-10 px-4">
                <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

                <div className="text-sm text-gray-500 mb-6">
                    <span>By {post.author || "Unknown author"}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.createdAt).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric"
                    })}</span>
                </div>

                {post.imageUrl && (
                    <div className="mb-6">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            width={1200}
                            height={700}
                            className="rounded-lg object-cover w-full"
                        />
                    </div>
                )}

                <div className="prose prose-lg max-w-none [&_h1]:text-3xl [&_h2]:text-2xl [&_h3]:text-xl">
                    <PortableText
                        value={post.body}
                        components={portableTextComponents}
                    />
                </div>

            </article>
        </div>

    );
}
