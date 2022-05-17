/* import { parseCookies } from "nookies"*/
import { useRouter } from "next/router"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import CookieConsent, { Cookies, getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container } from "../../components/Container";
import axios from "axios";

import { loadUser } from "../../redux/userAction"
export default function ResetPasswordPage() {
    const router = useRouter()
    const [userState, setUserState] = useState("")
    const [isLoggedIn, setisLoggedIn] = useState(true)

    const { data: session } = useSession()
    const dispatch = useDispatch()

    const profile = useSelector((state) => state.profile)
    const { loading, error, dbUser } = profile

    const user = Cookies?.user
        ? JSON.parse(Cookies.user)
        : session?.user
            ? session?.user
            : ""

    console.log(userState)
    useEffect(() => {
        session ? setUserState(session.user) : setUserState(user)

        if (user) {
            dispatch(loadUser(user.email, user))
        }
    }, [router, setUserState])
    useEffect(() => {
        if (user) {
            setisLoggedIn(true)
        }
        if (!user) {
            /* router.push("/") */
        }
    }, [isLoggedIn])

    const logoutHandler = async () => {
        if (session) {
            signOut()
        }
        setisLoggedIn(false)
        setUserState("")
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const result = new FormData(event.currentTarget)
        // eslint-disable-next-line no-console

        try {
            const email = result.get("email")

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            }

            const { data } = await axios.post(`/api/user/forget`, { email }, config)
            router.push("/login")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Container>
                <p> Email Reset Link </p>
                <form
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate>
                    <input
                        margin="normal"
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <button type="submit" onSubmit={handleSubmit}> Submit </button>

                    <div>
                        <Link href="/src/user/login">
                            Have an account ? Login
                        </Link>
                    </div>
                    <div>
                        <Link href="/src/user/register">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </div>
                </form>
            </Container>
        </>
    )
}

