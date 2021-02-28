import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import moment from 'moment';

import { Row, Col } from 'react-bootstrap';
import PreviewAlert from '@/components/PreviewAlert';
import BlogHeader from '@/components/BlogHeader';
import BlogContent from '@/components/BlogContent';

import { getAllBlogs, getBlogBySlug, urlFor } from '@/lib/api';

export async function getStaticProps({ params, preview = false, previewData }) {
  const blog = await getBlogBySlug(params.slug, preview);
  return {
    props: {
      blog,
      preview
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs?.map((blog) => ({ params: { slug: blog.slug } }));

  return {
    paths,
    fallback: true
  };
}

const BlogDetail = ({ blog, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode="404" />;
  }

  if (router.isFallback) {
    return <div className="blog-detail-page">Loading...</div>;
  }

  return (
    <>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          {preview && <PreviewAlert />}
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

// console.log('params :>> ', params);
// console.log('Loading blog detail page');
// console.log('Preview is:', preview);
// console.log('Preview previewData:', previewData);
// console.log('Loading fallback page');
// console.log('paths :>> ', paths);
// console.log('blogs :>> ', blogs);
