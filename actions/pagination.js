import { useSWRPages } from 'swr';
import { Col } from 'react-bootstrap';
import moment from 'moment';

import CardListItem from '@/components/CardListItem';
import CardItem from '@/components/CardItem';
import CardItemSkeleton from '@/components/CardItemSkeleton';

import { useGetBlogs } from 'actions';
import CardListItemSkeleton from '@/components/CardListItemSkeleton';

const BlogList = ({ blogs, filter }) => {
  return blogs.map((blog) =>
    filter.view.list ? (
      <Col key={`${blog.slug}-list`} md="9">
        <CardListItem
          author={blog.author}
          title={blog.title}
          subtitle={blog.subtitle}
          date={moment(blog.date).format('LLL')}
          image={blog.coverImage}
          slug={blog.slug}
        />
      </Col>
    ) : (
      <Col key={blog.slug} md="6" lg="4">
        <CardItem
          author={blog.author}
          title={blog.title}
          subtitle={blog.subtitle}
          date={moment(blog.date).format('LLL')}
          image={blog.coverImage}
          slug={blog.slug}
        />
      </Col>
    )
  );
};

export const useGetBlogsPages = ({ blogs, filter }) => {
  return useSWRPages(
    'index-page',
    ({ offset, withSWR }) => {
      const { data: paginatedBlogs, error } = withSWR(
        useGetBlogs({ offset, filter })
      );

      if (!offset && !paginatedBlogs && !error) {
        return <BlogList blogs={blogs} filter={filter} />;
      }

      // Loading more items
      if (!paginatedBlogs) {
        return Array(3)
          .fill(0)
          .map((_, idx) =>
            filter.view.list ? (
              <Col key={`${idx}-item`} md="9">
                <CardListItemSkeleton />
              </Col>
            ) : (
              <Col key={idx} md="6" lg="4">
                <CardItemSkeleton />
              </Col>
            )
          );
      }

      return <BlogList blogs={paginatedBlogs} filter={filter} />;
    },
    // here you will compute offset that will get passed into previous callback function with 'withSWR'
    // SWR: data you will get from 'withSWR' function
    // index: number of current page
    (SWR, index) => {
      // Computed offset here!
      if (SWR.data && SWR.data.length === 0) return null;
      return (index + 1) * 6;
    },
    [filter]
  );
};
