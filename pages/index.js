import { Login } from "../components/Login";
import { Container } from "../components/Container";

export default function Home({ books }) {
  return (
    <>
      <Container>
        <h3>We Teach Frontend </h3>
        <Login />
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