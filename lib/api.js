import client from './sanity';

export async function getAllBlogs() {
  const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'coverImage': coverImage.asset->url
`;
  const query = `*[_type == "blog"]{${blogFields}}`;
  const res = await client.fetch(query);
  return res;
  // const allBlogs = await res.json();
  // return allBlogs;
}
