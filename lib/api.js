import client, { previewClient } from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogFields = `
  date,
  title,
  subtitle,
  'slug': slug.current,
  'author': author->{name, 'avatar': avatar.asset->url},
  coverImage,
`;

// Simple func for client or preview mode
const getClient = (preview) => (preview ? previewClient : client);

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// offset = how many data you want to skip, limit = how many date you want to fetch
export async function getAllBlogs() {
  const query = `*[_type == "blog"] | order(date desc){${blogFields}}`;
  try {
    const res = await client.fetch(query);
    return res;
  } catch (err) {
    console.log("Couldn't get paginated blogs :>> ", err);
  }
}

// prettier-ignore
export async function getPaginatedBlogs({ offset = 0, date = 'desc' } = { offset: 0, date: 'desc' }) {
  const query = `*[_type == "blog"] | order(date ${date}){${blogFields}}[${offset}...${offset + 6}]`;
  try {
    const res = await client.fetch(query);
    return res;
  } catch(err){
    console.log("Couldn't get paginated blogs :>> ", err);
  }
}

export async function getBlogBySlug(slug, preview) {
  const query = `*[_type == "blog" && slug.current == $slug]{${blogFields} content[]{..., "asset": asset->}}`;
  try {
    const currentClient = getClient(preview);
    const res = await currentClient.fetch(query, { slug });
    const blogBySlug = preview ? (res?.[1] ? res[1] : res[0]) : res?.[0];
    return blogBySlug;
  } catch (err) {
    console.log("Couldn't get preview mode :>> ", err);
  }
}

// console.log('preview :>> ', preview);
// console.log('currentClient :>> ', currentClient);
