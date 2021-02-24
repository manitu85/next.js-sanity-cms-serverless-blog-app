import { Row, Col } from 'react-bootstrap';
import AuthorIntro from '@/components/AuthorIntro';
import CardListItem from '@/components/CardListItem';
import CardItem from '@/components/CardItem';
import { getAllBlogs } from '@/lib/api';

export async function getStaticProps(context) {
  console.log('Calling getStaticProps');
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    }
  };
}

// export async function getStaticPaths() {
//   const blogs = await getAllBlogs();
//   const paths = blogs.map((blog) => ({
//     params: { slug: blog.slug.current }
//   }));
//   return {
//     paths: paths,
//     fallback: false
//   };
// }

const Home = ({ blogs }) => {
  console.log('blogs :>> ', blogs);
  return (
    <div className="blog-detail-page">
      <AuthorIntro />
      <hr />
      <Row className="mb-5">
        <Col md="10">
          <CardListItem />
        </Col>
        {blogs.map((blog) => (
          <Col key={blog.slug} md="4">
            <CardItem
              title={blog.title}
              subtitle={blog.subtitle}
              author={blog.author}
              date={blog.date}
              image={blog.coverImage}
              slug={blog.slug}
            />
          </Col>
        ))}
        {/* <Col md="4">
          <CardItem />
        </Col> */}
      </Row>
    </div>
  );
};

export default Home;
