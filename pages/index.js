import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import AuthorIntro from '@/components/AuthorIntro';
import CardListItem from '@/components/CardListItem';
import CardItem from '@/components/CardItem';
import FilteringMenu from 'components/FilteringMenu';

import { getAllBlogs } from '@/lib/api';

export async function getStaticProps(context) {
  // console.log('Calling getStaticProps');
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    }
  };
}

const Home = ({ blogs }) => {
  const [filter, setFilter] = useState({
    view: { list: 1 }
  });
  return (
    <div className="blog-detail-page">
      <AuthorIntro />
      <FilteringMenu onChange={() => {}} />
      <hr />
      <Row className="mb-5">
        <Col md="10">
          <CardListItem />
        </Col>
        {blogs.map((blog) =>
          filter.view.list ? (
            <Col md="9">
              <CardListItem />
            </Col>
          ) : (
            <Col key={blog.slug} md="4">
              <CardItem
                author={blog.author}
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                image={blog.coverImage}
                link={{
                  href: '/blogs/[slug]',
                  as: `/blogs/${blog.slug}`
                }}
              />
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default Home;
