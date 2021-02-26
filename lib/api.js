import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogFields = `
  date,
  title,
  subtitle,
  'slug': slug.current,
  'author': author->{name, 'avatar': avatar.asset->url},
  coverImage,
`;

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getAllBlogs(
  { offset = 0, date = 'desc' } = { offset: 0, date: 'desc' }
) {
  const query = `*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${
    offset + 3
  }]`;
  const res = await client.fetch(query);
  return res;
}

export async function getBlogBySlug(slug) {
  const query = `*[_type == "blog" && slug.current == $slug]{${blogFields} content[]{..., "asset": asset->}}`;
  const res = await client.fetch(query, { slug });
  const blogBySlug = res?.[0];
  return blogBySlug;
}
