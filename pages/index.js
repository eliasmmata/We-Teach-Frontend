import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Login } from "../components/Login";

export default function Home({ books }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>LibrosDEV</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">LibrosDEV</a>
        </h1>

        <Login></Login>

        <p className={styles.description}>
          Agrega tus Libros de Programación Favoritos
        </p>

        <div className={styles.grid}>
          {books.map(book => (
            <div key={book.ISBN} className={styles.card}>
              <h2>{book.title}</h2>
              <ul>
                {book.authors.map(author => (
                  <li key={author}>{author}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const API_URL = process.env.API_URL || 'http://localhost:3000'
  const res = await fetch(`${API_URL}/api/books`);
  const books = await res.json();

  return {
    props: {
      books,
    },
    revalidate: 1,
  }
}