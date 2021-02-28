import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import AuthorIntro from '@/components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';
// import CardListItem from '@/components/CardListItem';
// import CardItem from '@/components/CardItem';
// import { useGetBlogs } from 'actions';

import { useGetBlogsPages } from 'actions/pagination';
import { getPaginatedBlogs, getAllBlogs } from 'lib/api';

export async function getStaticProps(context) {
  // const blogs = await getPaginatedBlogs({ offset: 0, date: 'desc' });
  const blogs = await getPaginatedBlogs({ offset: 0, date: 'desc' });

  return {
    props: { blogs },
    revalidate: 1
  };
}

const Home = ({ blogs }) => {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 }
  });

  const { pages, isLoadingMore, isReachingEnd, loadMore } = useGetBlogsPages({
    blogs,
    filter
  });

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
