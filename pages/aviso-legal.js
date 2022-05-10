import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "../components/Container";

export default function AvisoLegal() {
    const router = useRouter()
    return (
        <Container>
            <div
                className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-darkpurple to-spacecadet"
            >
                <div className="md:px-20 md:py-10 lg:px-40 lg:py-20 bg-white rounded-md shadow-xl">
                    <div className="flex flex-col items-center p-3 ">
                        <h1 className="font-bold text-spacecadet text-2xl md:text-4xl">Aviso Legal</h1>

                        <h6 className="mb-2 text-2xl font-bold text-center text-tuscany md:text-3xl">
                            <span className="text-spacecadet">Coming</span> soon
                        </h6>

                        <p className="mb-8 text-center text-independance md:text-lg">
                            Work in progress
                        </p>
                        <div style={{display:`flex`, justifyContent: "space-around", width:`100%`}}>
                            <Link href="/" className="px-6 py-2 text-sm font-semibold text-spacecadet bg-spacecadet">
                                <a className="bg-wintergreen hover:bg-spacecadet text-white font-bold py-2 px-4 rounded">
                                    Go Home
                                </a>
                            </Link>
                            <button onClick={() => router.back()} className="bg-wintergreen hover:bg-spacecadet text-white font-bold py-2 px-4 rounded">
                                <a className="hover:bg-spacecadet text-white font-bold py-2 px-4 rounded">
                                    Go Back
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
