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