import { useSession, signIn, signOut, getCsrfToken, getSession } from "next-auth/react"
import CookieConsent, { Cookies, getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import Typewriter from 'typewriter-effect';
import Cube from "./Cube";
import Topresources from "./Topresources";
import Tech from "./Tech";
import Team from "./Team";
import LoginForm from "./LoginForm";

export function Login({ csrfToken }) {
  const { data: session } = useSession()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)

  // true una vez aceptadas las cookies
  console.log(getCookieConsentValue());
  // consentimiento
  console.log(resetCookieConsentValue());

  const signInUser = async (e) => {
    e.preventDefault();
    let options = { redirect: false, email, password }
    const res = await signIn("credentials", options)
    setMessage(null)
    if (res?.error) {
      setMessage(res.error)
    }
    // return Router.push("/")
  }

  const signUpUser = async (e) => {
    e.preventDefault();
    setMessage(null)

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    let data = await res.json()
    if (data.message) {
      setMessage(data.message)
    }
    if (data.message == "Registrado satisfactoriamente") {
      let options = { redirect: false, email, password }
      const res = await signIn("credentials", options)
      return Router.push("/")
    }
  }
  if (!session) {
    return (
      <LoginForm/>

    )
  }
  return (
    <>
      <Nav />
      <Cube />
      <Topresources />
      <Tech />
      <Team />
      <Footer />
    </>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req })
  if (session) {
    // signed in
    return {
      redirect: { destination: "/" }
    }
  }
  const csrfToken = await getCsrfToken(context)
  const providers = await getProviders()
  return {
    props: {
      csrfToken,
      /* csrfToken: JSON.parse(JSON.stringify(csrfToken)), */
      providers,
    },
  }
}
