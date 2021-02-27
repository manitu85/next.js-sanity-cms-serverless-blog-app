import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import moment from 'moment';

import { Row, Col } from 'react-bootstrap';
import BlogHeader from '@/components/BlogHeader';
import BlogContent from '@/components/BlogContent';

import { getAllBlogs, getBlogBySlug, urlFor } from '@/lib/api';

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  console.log('blogs :>> ', blogs);
  const paths = blogs?.map((blog) => ({ params: { slug: blog.slug } }));
  console.log('paths :>> ', paths);
  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  console.log('params :>> ', params);
  console.log('Loading blog detail page');
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog },
    revalidate: 1
  };
}

const BlogDetail = ({ blog }) => {
  const router = useRouter();

  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode="404" />;
  }

  if (router.isFallback) {
    console.log('Loading fallback page');
    return <div className="blog-detail-page">Loading...</div>;
  }

  return (
    <>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={urlFor(blog.coverImage).height(600).url()}
            author={blog.author}
            date={moment(blog.date).format('LLL')}
          />
          <hr />
          {blog.content && <BlogContent content={blog.content} />}
        </Col>
      </Row>
    </>
  );
};

export default BlogDetail;
