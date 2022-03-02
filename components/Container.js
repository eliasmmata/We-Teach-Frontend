/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Image from "next/image";

export function Container({ children }) {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flowbite@1.3.3/dist/flowbite.min.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" ></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossOrigin="anonymous"></script>
                {/* IG FEED STATIC FILE */}
                <script src="/scripts/instafeed.min.js" strategy="beforeInteractive"></script>
            </Head>
            <main>
                {children}
            </main>
        </div>

    )
}