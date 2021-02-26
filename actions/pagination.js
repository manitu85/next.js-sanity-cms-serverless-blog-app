import useSWRPages from 'swr';
import { Col } from 'react-bootstrap';

import CardListItem from '@/components/CardListItem';
import CardItem from '@/components/CardItem';

import { useGetBlogs } from 'actions';

export const useGetBlogsPages = ({ blogs: initialData, filter }) => {
  return useSWRPages(
    'index-page',
    ({ offset, withSWR }) => {
      const { data: blogs } = withSWR(useGetBlogs(initialData));

      if (!blogs) return 'Loading...';

      return blogs.map((blog) =>
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
      );
    },
    // here you will compute offset that will get passed into previous callback function with 'withSWR'
    // SWR: data you will get from 'withSWR' function
    // index: number of current page
    (SWR, index) => {
      return 0;
    },
    [filter]
  );
};
