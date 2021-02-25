import { Row, Col } from 'react-bootstrap';
import BlogHeader from '@/components/BlogHeader';
import BlogContent from 'components/BlogContent';
import { getAllBlogs, getBlogBySlug, urlFor } from '@/lib/api';

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs?.map((blog) => ({ params: { slug: blog.slug } }));
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog },
    revalidate: 1
  };
}

const BlogDetail = ({ blog }) => {
  // debugger;
  return (
    <>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={urlFor(blog.coverImage).height(600).url()}
            author={blog.author}
            date={blog.date}
          />
          <hr />
          <BlogContent content={blog.content} />
        </Col>
      </Row>
    </>
  );
};

export default BlogDetail;
