import PageLayout from '@/components/PageLayout';
import ThemeProvider from '@/theme/ThemeProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/index.scss';
import 'highlight.js/styles/rainbow.css';

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
