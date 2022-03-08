// import 'flowbite';
import { useSession } from "next-auth/react"
import { Container } from "../components/Container";
import LoginForm from "../components/LoginForm";
import LoginOk from "../components/LoginOk";
import { Footer } from "../components/Footer";
import { Instagram } from "../components/Instagram";

import Script from 'next/script';

import { ProgressSpinner } from "primereact/progressspinner";
import { useState } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(status)

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  if (!session) {
    return (
      <>
        <Container>
          <Script src="/scripts/instafeed.min.js"></Script>
          <LoginForm />
        </Container>
      </>
    )
  }
  else if(loading) {
    return (
      <ProgressSpinner/>
    )
  }
  else return (
    <>
      <Container>
        <Script src="/scripts/instafeed.min.js"></Script>
        <LoginOk />
        <Instagram />
        <Footer />
      </Container>
    </>
  )
}

