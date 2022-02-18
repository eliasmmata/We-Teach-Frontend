import Head from "next/head";

import { Login } from "../components/Login";
import { Container } from "../components/Container";

export default function Books({ books }) {
  return (
    <>
      <Container>
        <Login />

        <p>
          Agrega tus Libros de Programación Favoritos
        </p>

        <div>
          {books.map(book => (
            <div key={book.ISBN}>
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