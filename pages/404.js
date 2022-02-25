import Link from "next/link";
import { Container } from "../components/Container";

export default function Custom404() {
    return (
        <Container>
            <div
                className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-darkpurple to-spacecadet"
            >
                <div className="md:px-20 md:py-10 lg:px-40 lg:py-20 bg-white rounded-md shadow-xl">
                    <div className="flex flex-col items-center p-3 ">
                        <h1 className="font-bold text-spacecadet text-7xl md:text-9xl">404</h1>

                        <h6 className="mb-2 text-2xl font-bold text-center text-tuscany md:text-3xl">
                            <span className="text-spacecadet">Oops!</span> Page not found
                        </h6>

                        <p className="mb-8 text-center text-independance md:text-lg">
                            The page you are looking for does not exist.
                        </p>
                        <Link href="/" className="px-6 py-2 text-sm font-semibold text-spacecadet bg-spacecadet">
                            <a className="bg-wintergreen hover:bg-spacecadet text-white font-bold py-2 px-4 rounded">
                                Go Home
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}
