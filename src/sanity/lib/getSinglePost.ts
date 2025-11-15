import { SinglePost } from "@/app/lib/interface";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: "2023-05-03",
    useCdn: false,
});


export async function getSinglePost(slug: string): Promise<SinglePost | null> {
    const query = `
        *[_type == "post" && slug.current == $slug][0]{
            _id,
            title,
            "slug": slug.current,
            "imageUrl": mainImage.asset->url,
            body[],
            "author": author->name,
            "createdAt": _createdAt
        }
    `;
    
    return client.fetch(query, { slug });
}
