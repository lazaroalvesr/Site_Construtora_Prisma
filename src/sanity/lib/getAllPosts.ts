import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
});

export async function getAllPosts(limit: number, offset: number) {
  const query = `
        *[_type == "post"]
        | order(_createdAt desc)
        [${offset}...${offset + limit}] {
          _id,
          title,
          "slug": slug.current,
          "imageUrl": mainImage.asset->url,
          body,
          "plainText": body[].children[].text
        }
    `;

  return client.fetch(query);
}

export async function getTotalPostCount() {
  return client.fetch(`count(*[_type == "post"])`);
}
