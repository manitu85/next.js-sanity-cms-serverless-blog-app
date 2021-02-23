import client from './sanity';

export async function getAllBlogs() {
  const blogFields = `
  date,
  title,
  subtitle,
  'slug': slug.current,
  'author': author->{name, 'avatar': avatar.asset->url},
  'coverImage': coverImage.asset->url,
`;
  const query = `*[_type == "blog"]{${blogFields}}`;
  const res = await client.fetch(query);
  return res;
  // const allBlogs = await res.json();
  // return allBlogs;
}
