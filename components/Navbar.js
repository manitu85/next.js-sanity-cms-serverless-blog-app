import NextLink from 'next/link';

import { Navbar, Nav } from 'react-bootstrap';
import ThemeToggle from 'components/ThemeToggle';

const BlogNavbar = ({ theme, toggleTheme }) => {
  return (
    <Navbar
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg"
      variant={theme.type}
    >
      <NextLink href="/">
        <Navbar.Brand style={{ cursor: 'pointer' }} className="fj-navbar-brand">
          <a style={{ textDecoration: 'none', color: theme.fontColor }}>
            Alex Burke
          </a>
        </Navbar.Brand>
      </NextLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <ThemeToggle onChange={toggleTheme} />
          <NextLink href="/" passHref>
            <a className="fj-navbar-item fj-navbar-link">Home</a>
          </NextLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BlogNavbar;
