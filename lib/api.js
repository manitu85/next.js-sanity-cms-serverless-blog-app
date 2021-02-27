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

// offset = how many data you want to skip, limit = how many date you want to fetch
export async function getAllBlogs() {
  const query = `*[_type == "blog"] | order(date desc){${blogFields}}`;
  const res = await client.fetch(query);
  return res;
}

// prettier-ignore
export async function getPaginatedBlogs({ offset = 0, date = 'desc' } = { offset: 0, date: 'desc' }) {
  const query = `*[_type == "blog"] | order(date ${date}){${blogFields}}[${offset}...${offset + 6}]`;
  const res = await client.fetch(query);
  return res;
}

export async function getBlogBySlug(slug) {
  const query = `*[_type == "blog" && slug.current == $slug]{${blogFields} content[]{..., "asset": asset->}}`;
  const res = await client.fetch(query, { slug });
  const blogBySlug = res?.[0];
  return blogBySlug;
}
