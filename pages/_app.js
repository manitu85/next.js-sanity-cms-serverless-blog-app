import PageLayout from '@/components/PageLayout';
import ThemeProvider from '@/theme/ThemeProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/rainbow.css';
import 'react-toggle/style.css';
import '@/styles/index.scss';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <PageLayout>
        <Component {...pageProps} />;
      </PageLayout>
    </ThemeProvider>
  );
};

export default App;
