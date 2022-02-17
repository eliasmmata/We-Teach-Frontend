import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";


export function Container({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>LibrosDEV</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    <a href="https://nextjs.org">LibrosDEV</a>
                </h1>
                {children}
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    )
}