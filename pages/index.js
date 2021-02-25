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
    view: { list: 0 }
  });

  return (
    <div className="blog-detail-page">
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />
      <hr />
      <Row className="mb-5">
        {blogs.map((blog) =>
          filter.view.list ? (
            <Col key={`${blog.slug}-list`} md="9">
              <CardListItem
                author={blog.author}
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                image={blog.coverImage}
                slug={blog.slug}
              />
            </Col>
          ) : (
            <Col key={blog.slug} md="4">
              <CardItem
                author={blog.author}
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                image={blog.coverImage}
                slug={blog.slug}
              />
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default Home;
