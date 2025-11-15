import { createClient } from 'next-sanity'; 

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2023-05-03',
    useCdn: true, 
});

export async function getCategories() {
    const query = `
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      "slug": slug.current
    }
  `;

    const categories = await client.fetch(query);

    return categories;
}