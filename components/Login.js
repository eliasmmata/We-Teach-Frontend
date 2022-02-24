import { useSession, signIn, signOut, getCsrfToken } from "next-auth/react"
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";


export function Login({ csrfToken }) {
  const { data: session } = useSession()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)

  const signInUser = async (e) => {
    console.log(email, password)
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
    if (data.message == "Registered succesfully") {
      let options = { redirect: false, email, password }
      const res = await signIn("credentials", options)
      return Router.push("/")
    }
  }

  if (!session) {
    return (
      <>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{minHeight:`92vh`}}>
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="text-center text-5xl font-extrabold text-gray-900">We Teach Frontend</h2>
              <h3 className="mt-4 text-center text-3xl font-bold text-gray-600">Crea tu cuenta</h3>
              {/* <p className="mt-2 text-center text-sm text-gray-600">
                Or
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a>
              </p> */}
            </div>
            <form className="mt-8 space-y-6" method="post" action="/api/auth/signin/email">
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">Email</label>
                  <input onChange={e => setEmail(e.target.value)} value={email} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Contraseña</label>
                  <input onChange={e => setPassword(e.target.value)} value={password} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                </div>
                <p style={{ color: `red` }}>{message}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Recuérdame </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> ¿Olvidaste tu contraseña? </a>
                </div>
              </div>

              <div>
                <button onClick={(e) => signInUser(e)} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Inicia Sesión
                </button>
                <button onClick={(e) => signUpUser(e)} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Registrarse
                </button>
              </div>
            </form>
            <div className="col-xs-12 center-xs .d-xl-flex d-sm-flex justify-content-between" style={{gap: `1rem`}}>
              <button onClick={() => signIn('github')} id="github-btn" className="btn btn-default btn-raised s-btn-sm p-left-xs-40 p-right-xs-40"><i className="pi pi-github" style={{ 'fontSize': '1em', marginRight: `5px` }}></i>Log in with GitHub</button>
              <button onClick={() => signIn('google')} id="google-btn" className="btn btn-default btn-raised s-btn-sm p-left-xs-40 p-right-xs-40"><i className="pi pi-google" style={{ 'fontSize': '1em', marginRight: `5px` }}></i>Log in with Google</button>
            </div>
          </div>
        </div>
        <footer className="copyright-area" style={{width:`100%`, position:`absolute`, bottom:`0`}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                <div className="copyright-text">

                  <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Powered by{" "}
                    <span>
                      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </footer>
      </>
    )
  }
  return (
    <>
      <Nav />
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
