// import 'flowbite';
import { useSession } from "next-auth/react"
import { Container } from "../components/Container";
import LoginForm from "../components/LoginForm";
import LoginOk from "../components/LoginOk";
import { Footer } from "../components/Footer";

export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      <Container>
        <LoginOk />

        <Footer />
      </Container>
    )
  }
  return (
    <LoginForm />
  )
}

