import { useSession, signIn, signOut, getCsrfToken, getSession } from "next-auth/react"

import { Nav } from "./Nav";
import Cube from "./Cube";
import Topresources from "./Topresources";
import Tech from "./Tech";
import Team from "./Team";
import LoginForm from "./LoginForm";

export default function LoginOk() {
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