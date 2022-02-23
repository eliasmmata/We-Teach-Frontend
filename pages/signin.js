import { getCsrfToken, getProviders, signIn, getSession } from "next-auth/react"
import Router from "next/router";
import { useState } from "react";

export default function SignIn({ csrfToken, providers }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(null)

    const signInUser = async (e) => {
        console.log(email,password)
        e.preventDefault();
        let options = {redirect:false, email, password}
        const res = await signIn("credentials", options)
        setMessage(null)
        if(res?.error) {
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
            let options = {redirect:false, email, password}
            const res = await signIn("credentials", options)
            return Router.push("/")
        }
    }

    return (
        <>
            <form method="post" action="/api/auth/signin/email">
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <label>
                    Email address
                    <input type="email" id="email" name="email" />
                </label>
                <button type="submit">Sign in with Email</button>
            </form>
            <form action="">
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <label>
                <p style={{margin:`2rem`, borderBottom:`1px solid green`}}>Email</p>
                    <input type="email" id="email" name="email" value={email} style={{marginLeft:`2rem`, border:`1px solid green`, width: `25vw`}}
                    onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p style={{margin:`2rem`, borderBottom:`1px solid green`}}>Password</p>
                    <input type="email" id="email" name="email" value={password} style={{marginLeft:`2rem`, border:`1px solid green`,width: `25vw`}}
                    onChange={e => setPassword(e.target.value)} />
                </label>
                <p style={{color:`red`}}>{message}</p>
                <button onClick={(e) => signInUser(e)}>Sign in with credentials</button>
                <br/>
                <button onClick={(e) => signUpUser(e)} style={{marginLeft:`4rem`, border:`1px solid black`,width: `25vw`}} >Registrarse</button>
            </form>
            {Object.values(providers).map((provider) => {
                if (provider.name === "Email" || provider.name === "Credentials") {
                    return;
                } return (
                    <div key={provider.name}>
                        <button onClick={() => signIn(provider.id)}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                )
            })}
        </>
    )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
    const {req} = context;
    const session = await getSession({ req })
    if(session) {
        // signed in
        return {
            redirect: {destination: "/"}
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

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await getCsrfToken(context)
  }
}
*/