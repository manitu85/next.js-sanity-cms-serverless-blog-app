import NextLink from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';

const BlogNavbar = () => {
  return (
    <Navbar className="fj-navbar fj-nav-base" bg="transparent" expand="lg">
      <NextLink href="/">
        <Navbar.Brand style={{ cursor: 'pointer' }} className="fj-navbar-brand">
          <a style={{ textDecoration: 'none' }}>Alex Burke</a>
        </Navbar.Brand>
      </NextLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NextLink href="/" passHref>
            <Nav.Link className="fj-navbar-item fj-navbar-link">Home</Nav.Link>
          </NextLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BlogNavbar;
