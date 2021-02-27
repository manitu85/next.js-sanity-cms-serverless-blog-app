import Head from 'next/head';
import { useTheme } from '@/theme/ThemeProvider';

import { Container } from 'react-bootstrap';
import BlogNavbar from './Navbar';
import Footer from './Footer';

const PageLayout = ({ children, className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme.type}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <BlogNavbar theme={theme} toggleTheme={toggleTheme} />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <Footer />
      </Container>
      <style jsx global>
        {`
          html,
          body {
            background: ${theme.background};
            color: ${theme.fontColor};
            transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
          }
        `}
      </style>
    </div>
  );
};

export default PageLayout;
