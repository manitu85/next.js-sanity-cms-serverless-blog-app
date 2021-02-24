import client from './sanity';

const blogFields = `
  date,
  title,
  subtitle,
  'slug': slug.current,
  'author': author->{name, 'avatar': avatar.asset->url},
  'coverImage': coverImage.asset->url,
`;

export async function getAllBlogs() {
  const query = `*[_type == "blog"]{${blogFields}}`;
  const res = await client.fetch(query);
  return res;
}

export async function getBlogBySlug(slug) {
  const query = `*[_type == "blog" && slug.current == $slug]{${blogFields}}`;
  const res = await client.fetch(query, { slug });
  const blogBySlug = res?.[0];
  return blogBySlug;
}
