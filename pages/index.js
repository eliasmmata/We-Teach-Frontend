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
      {status === "authenticated" &&
      <>
          <div style={{width: `100vw`, height: `100vh`, padding: `90vh 90vw`, background: `#fff`}}>
            <ProgressSpinner className="animate__animated animate__fadeOut animate__infinite" />
            <h3>Bienvenido {session.user.email}</h3>
          </div>
          <Container>
            <Script src="/scripts/instafeed.min.js"></Script>
            <LoginOk />
            <Instagram />
            <Footer />
          </Container>
      </>
        }
    </>
  )
}
