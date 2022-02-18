import Head from "next/head";

import { Login } from "../components/Login";
import { Container } from "../components/Container";

export default function Home({ books }) {
  return (
    <>
      <Container>
        <Login />

      </Container>
    </>
  );
}