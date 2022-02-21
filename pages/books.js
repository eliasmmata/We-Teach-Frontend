import { Container } from "../components/Container";

export default function Books({ books }) {
  return (
    <>
      <Container>
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
  var res = await fetch(
    `${API_URL}/api/books`,
    {
      method: "GET",
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent': '*',
      },
    }
  );
  const books = await res.json(JSON.stringify())
  console.log('res ', res);

  return {
    props: {
      books,
    },
    revalidate: 10,
  }
}

// test t
