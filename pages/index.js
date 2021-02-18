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
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </Container>
    </div>
  );
}
