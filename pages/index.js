import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { Container } from 'reactstrap';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Navbar />
        <main className={styles.main}>
          <h1 className={styles.title}>
            <a href="https://nextjs.org">Next.js + Sanity CMS Blog App</a>
          </h1>
        </main>
      </Container>
    </div>
  );
}
