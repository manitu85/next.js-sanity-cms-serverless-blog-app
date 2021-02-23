import Head from 'next/head';
import { Container } from 'react-bootstrap';
import BlogNavbar from './Navbar';
import Footer from './Footer';

const PageLayout = ({ children, className }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <BlogNavbar />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <Footer />
      </Container>
    </>
  );
};

export default PageLayout;
