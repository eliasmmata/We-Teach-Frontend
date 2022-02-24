import { Container } from "../components/Container"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import { Nav } from "../components/Nav";

export default function Profile() {
    const { data: session } = useSession();
    return (
        <Container session={session}>
            <Nav session={session}/>
        </Container>
    )
}