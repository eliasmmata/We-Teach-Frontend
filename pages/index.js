import Head from "next/head";

import { Login } from "../components/Login";
import { Container } from "../components/Container";
import styles from "../styles/Home.module.css";

export default function Home({ books }) {
  return (
    <>
      <Container>
        <Login />

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
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const API_URL = process.env.API_URL || 'http://localhost:3000'
  const res = await fetch(
    `${API_URL}/api/books`,
    {
      method: "GET",
      headers: {
        'User-Agent': '*',
        Accept: "application/json; charset=UTF-8",
      },
    }
  );
  const books = await res.json();

  return {
    props: {
      books,
    },
    revalidate: 10,
  }
}