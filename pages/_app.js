import PageLayout from '@/components/PageLayout';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/index.scss';
import 'highlight.js/styles/rainbow.css';

const App = ({ Component, pageProps }) => {
  return (
    <PageLayout>
      <Component {...pageProps} />;
    </PageLayout>
  );
};

export default App;
