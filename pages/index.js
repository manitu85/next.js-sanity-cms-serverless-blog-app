import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import AuthorIntro from '@/components/AuthorIntro';
import CardListItem from '@/components/CardListItem';
import CardItem from '@/components/CardItem';
import FilteringMenu from 'components/FilteringMenu';

import { getAllBlogs } from '@/lib/api';
import { useGetBlogs } from 'actions';

export async function getStaticProps(context) {
  const blogs = await getAllBlogs({ offset: 0 });
  return {
    props: {
      blogs
    },
    revalidate: 1
  };
}

const Home = ({ blogs: initialData }) => {
  const [filter, setFilter] = useState({
    view: { list: 0 }
  });

  const { data: blogs, error } = useGetBlogs(initialData);

  if (error) return <div>failed to load</div>;
  if (!blogs) return <div>loading...</div>;

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
