import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

export function Login() {
  const { data: session } = useSession()
  if (!session) {
    return (
      <>
        Inicia sesión <br />
        <button onClick={() => signIn('github')}>Login</button>
      </>
    );
  }
  return (
    <>
      <p>Hola {" "}
        <Link href="/profile">
          <a>
            {session.user.email}
          </a>
        </Link>{" "}
      </p>
      <br />
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
}