import { Container } from "../components/Container"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Profile() {
    const { data: session } = useSession();
    console.log(session)
    return (
        <Container>
            Hola
        </Container>
    )
}