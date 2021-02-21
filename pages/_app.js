import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/index.scss';
import PageLayout from '@/components/PageLayout';

const App = ({ Component, pageProps }) => {
  return (
    <PageLayout>
      <Component {...pageProps} />;
    </PageLayout>
  );
};

export default App;
