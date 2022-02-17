import { Container } from "../components/Container"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";

export default function Profile() {
    const { data: session } = useSession();
    console.log(session)
    return (
        <Container>
            <p>{session?.user?.email}</p>
            <p>{session?.user?.name}</p>
            <span className={styles.logo}>
                <Image src={session?.user?.image} alt="profile pic" width={72} height={16} />
            </span>
        </Container>
    )
}