import { Container } from 'react-bootstrap';
import BlogNavbar from './Navbar';
import Footer from './Footer';

const PageLayout = ({ children, className }) => {
  return (
    <Container>
      <BlogNavbar />
      <div className={`page-wrapper ${className}`}>{children}</div>
      <Footer />
    </Container>
  );
};

export default PageLayout;
