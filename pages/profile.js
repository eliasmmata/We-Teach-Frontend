import { Container } from "../components/Container"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Profile() {
    const { data: session } = useSession();
    if(!session) {
        return (
            <>
              Inicia sesión <br />
              <button onClick={() => signIn('github')}>Login</button>
            </>
          )
    }

    return (
        <Container>
            <p>{session?.user?.email}</p>
            <p>{session?.user?.name}</p>
            <span className={styles.logo}>
                <Image src={session?.user?.image} alt="profile pic" width={112} height={112} />
            </span>
        </Container>
    )
}