// import 'flowbite';
import { useSession } from "next-auth/react"
import { Container } from "../components/Container";
import LoginForm from "../components/LoginForm";
import LoginOk from "../components/LoginOk";
import { Footer } from "../components/Footer";
import Script from "next/script";
import { Instagram } from "../components/Instagram";

export default function Home() {
  const { data: session } = useSession()
  if (!session) {
    return (
      <>
        <LoginForm />
      </>
    )
  }
  return (
    <>
      <Container>
        <LoginOk />
        <Script src="/scripts/instafeed.min.js" strategy="beforeInteractive" />
        <Instagram />
        <Footer />
      </Container>
    </>
  )
}
