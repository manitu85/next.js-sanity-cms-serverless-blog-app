import { useRouter } from 'next/router';

const BlogDetail = () => {
  const router = useRouter();
  return <h1>Hello blog detail {router.query.slug}</h1>;
};

export default BlogDetail;
