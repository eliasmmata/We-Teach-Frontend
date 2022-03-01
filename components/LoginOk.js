import { useSession, signIn, signOut, getCsrfToken, getSession } from "next-auth/react"
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
    </>
  )
}