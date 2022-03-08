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
import { userInfo } from "os";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(status)

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

  return (
    <>
      <Container>
        <Script src="/scripts/instafeed.min.js"></Script>

        {loading || status === 'undefined' ? <ProgressSpinner /> : <LoginOk />}
        <Instagram />
        <Footer />
      </Container>
    </>
  )
}
