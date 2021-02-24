import { getAllBlogs, getBlogBySlug } from '@/lib/api';

export async function getStaticPaths() {
  const blogs = await getAllBlogs();

  const paths = blogs?.map((blog) => ({ params: { slug: blog.slug } }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  console.log('Fetching blog by', params.slug);

  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog }
  };
}

const BlogDetail = ({ blog }) => {
  console.log('Displaying page');
  return <h1>Hello Detail Page - {blog?.slug}</h1>;
};

export default BlogDetail;
