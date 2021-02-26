import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import AuthorIntro from '@/components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';
// import CardListItem from '@/components/CardListItem';
// import CardItem from '@/components/CardItem';

import { useGetBlogsPages } from 'actions/pagination';
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

// const Home = ({ blogs: initialData }) => {
const Home = ({ blogs }) => {
  const [filter, setFilter] = useState({
    view: { list: 0 }
  });

  // const { data: blogs, error } = useGetBlogs(initialData);

  const { pages, isLoadingMore, isReachingEnd, loadMore } = useGetBlogsPages({
    blogs,
    filter
  });

  // console.log('pages from ssr :>> ', pages);

  return (
    <div className="blog-detail-page">
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => setFilter({ ...filter, [option]: value })}
      />
      <hr />
      <Row className="mb-5">{pages}</Row>
      <div style={{ textAlign: 'center' }}>
        <Button
          onClick={loadMore}
          disabled={isReachingEnd || isLoadingMore}
          size="lg"
          variant="outline-secondary"
        >
          {isLoadingMore
            ? '...'
            : isReachingEnd
            ? 'No more blogs'
            : 'More Blogs'}
        </Button>
      </div>
    </div>
  );
};

export default Home;

{
  /* {blogs.map((blog) =>
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
        )} */
}
