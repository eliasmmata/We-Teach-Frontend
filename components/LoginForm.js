import React, { useState } from 'react';
import { useSession, signIn, signOut, getCsrfToken, getSession } from "next-auth/react"
import CookieConsent, { Cookies, getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent";
import Image from "next/image";

import Typewriter from 'typewriter-effect';

import { ToastContainer, toast } from 'react-toastify';

export default function LoginForm({ csrfToken }) {
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
        /* toast.success("Logging in", {
            position: toast.POSITION.TOP_CENTER
        }); */
        toast.promise(
            data,
            {
                undefined: 'Promise is loading',
                Session: 'Promise resolved 👌',
                null: 'Promise rejected 🤯'
            }
        )
        const res = await signIn("credentials", options)
        setMessage(null)
        if (res?.error) {
            /* toast.error("Log In error", {
                position: toast.POSITION.TOP_LEFT
            }); */
            setMessage(res.error)
        }
        // no hace falta creo return Router.push("/")
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
            toast("Registered in");
            const res = await signIn("credentials", options)
            return Router.push("/")
        }
    }
    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{ minHeight: `92vh` }}>
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <div className="text-center text-4xl font-extrabold text-900" style={{ color: `#2B193D`, minHeight: `45px` }}>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 'natural',
                                    deleteSpeed: 'natural',
                                    pauseFor: 3000,
                                    cursorClassName: 'typewriter-cursor-1',
                                    strings: [
                                        "W T F",
                                        "We Teach Frontend",
                                    ],
                                }}
                            />
                        </div>
                        <div className="text-center text-3xl font-extrabold text-900 mt-4" style={{ color: `#C5979D`, minHeight: `45px` }}>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 80,
                                    deleteSpeed: 60,
                                    cursorClassName: 'typewriter-cursor-2',
                                    strings: [
                                        "React & NextJs",
                                        "CSS & SASS",
                                        "TypeScript",
                                        "Tailwind",
                                        "Bootstrap",
                                        "¡ Y mucho más !",
                                    ],
                                }}
                            />
                        </div>
                        <h3 className="mt-3 text-center text-3xl font-bold text-600" style={{ color: `#2B193D` }}>Crea tu cuenta</h3>
                        <p className="mt-2 text-center text-sm text-spacecadet">
                            ( O inicia sesión si ya estás registrado ) </p>
                    </div>
                    <form className="mt-8 space-y-6" method="post" action="/api/auth/signin/email">
                        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email</label>
                                <input onChange={e => setEmail(e.target.value)} value={email} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-spacecadet focus:border-spacecadet focus:z-10 sm:text-sm" placeholder="Email address" />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Contraseña</label>
                                <input onChange={e => setPassword(e.target.value)} value={password} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-spacecadet focus:border-spacecadet focus:z-10 sm:text-sm" placeholder="Password" />
                            </div>
                            <p className="font-MontserratBold" style={{ color: `red`, paddingLeft: `1rem` }}>{message}</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-spacecadet focus:ring-spacecadet border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-darkpurple"> Recuérdame </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-600 hover:text-500" style={{ color: `#C5979D` }}> ¿Olvidaste tu contraseña? </a>
                            </div>
                        </div>
                        <div>
                            <button onClick={(e) => signInUser(e)} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" style={{ background: `#2C365E` }}>
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-indigo-100 group-hover:text-indigo-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Inicia Sesión
                            </button>
                            <ToastContainer autoClose={1500} />
                            <button onClick={(e) => signUpUser(e)} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" style={{ background: `#484D6D` }}>
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-indigo-100 group-hover:text-indigo-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                                        <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                                        <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                                    </svg>
                                </span>
                                Registrarse
                            </button>
                        </div>
                    </form>
                    <div className="col-xs-12 center-xs .d-xl-flex d-sm-flex justify-content-between" style={{ gap: `1rem` }}>
                        <button onClick={() => signIn('github')} id="github-btn" className="btn btn-default btn-raised s-btn-sm p-left-xs-40 p-right-xs-40">
                            <svg style={{ 'fontSize': '1em', marginRight: `5px`, background: `white`, borderRadius: `50%` }} aria-hidden="true" className="svg-icon iconGitHub" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 9 1Z" fill="#010101"></path></svg>
                            Log in with GitHub
                        </button>
                        <button onClick={() => signIn('google')} id="google-btn" className="btn btn-default btn-raised s-btn-sm p-left-xs-40 p-right-xs-40">
                            <svg style={{ 'fontSize': '1em', marginRight: `5px` }} aria-hidden="true" className="native svg-icon iconGoogle" width="18" height="18" viewBox="0 0 18 18"><path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z" fill="#4285F4"></path><path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z" fill="#34A853"></path><path d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z" fill="#FBBC05"></path><path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z" fill="#EA4335"></path></svg>
                            Log in with Google
                        </button>
                    </div>
                </div>
            </div>
            <footer className="copyright-area-login" style={{ width: `100%`, position: `absolute`, bottom: `0` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                            <div className="copyright-text" style={{ display: `flex`, justifyContent: `center` }}>
                                <span>
                                    <Image src="/images/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                                </span>
                                <svg style={{ margin: `0 1rem`, color: `#C5979D` }} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                                <span style={{ display: `flex`, flexDirection: `row-reverse` }}>
                                    <a id="click" href="https://eliasmmataportfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <svg style={{ marginTop: `-3px` }} xmlns="http://www.w3.org/2000/svg" className="mouse h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a id="elias" href="https://eliasmmataportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="font-MontserratBold">
                                        Eliasmmata
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <CookieConsent className="d-block"
                enableDeclineButton={true}
                expires={365}
                overlay
                disableButtonStyles={true}
                flipButtons={true}
                buttonText="Estoy de acuerdo con todas las cookies"
                declineButtonText="Quiero administrar las cookies"
                containerClasses="cookies-text-container"
                buttonWrapperClasses="cookies-btn-container"
                debug={true}
            >
                <h5 style={{ padding: `0 0.5rem` }}>WTF y las Cookies</h5>
                <p style={{ fontSize: `0.75rem`, marginBottom: `0`, padding: `0 0.5rem` }}>Nuestra web usa cookies propias y de terceros. Utilizamos cookies esenciales y, con su consentimiento, cookies de rendimiento, funcionalidad y perfilado que nos permiten operar en el sitio web, recopilar información sobre cómo utiliza la web, mejorar el funcionamiento de la web, recordar las elecciones que hace en la web, adaptarla para proporcionarle características y contenidos mejorados en función de su uso de la web. Puede elegir entre administrar sus preferencias o aceptar todas las cookies. También puede leer nuestra <a href="/privacidad" style={{ color: `#C5979D` }}>Política de Privacidad</a> y <a href="/politica-cookies" style={{ color: `#C5979D` }}>Política de Cookies</a> para obtener más información.</p>
            </CookieConsent>
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

