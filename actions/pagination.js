import { useEffect } from 'react';
import useSWR, { useSWRPages } from 'swr';
import { Col } from 'react-bootstrap';

import CardListItem from '@/components/CardListItem';
import CardItem from '@/components/CardItem';

import { useGetBlogs } from 'actions';

export const useGetBlogsPages = ({ blogs, filter }) => {
  useEffect(() => {
    window.__pagination__init = true;
  }, []);

  return useSWRPages(
    'index-page',
    ({ offset, withSWR }) => {
      let initialData = !offset && blogs;

      if (typeof window !== 'undefined' && window.__pagination__init) {
        initialData = null;
      }

      const { data: paginatedBlogs, error } = withSWR(
        useGetBlogs({ offset, filter }, initialData)
      );

      if (!paginatedBlogs) return <div>loading...</div>;
      if (error) return <div>failed to load</div>;

      return paginatedBlogs.map((blog) =>
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
      // Computed offset here!
      if (SWR.data && SWR.data.length === 0) return null;
      return (index + 1) * 3;
    },
    [filter]
  );
};
