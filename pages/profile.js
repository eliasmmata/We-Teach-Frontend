import Image from "next/image";
import { Container } from "../components/Container"
import { Nav } from "../components/Nav";

export default function Profile() {
    return (
        <Container>
            <Nav />
            <footer className="copyright-area-login" style={{ width: `100%`, position: `absolute`, bottom: `0` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                            <div className="copyright-text" style={{ display: `flex`, justifyContent: `center` }}>
                                <span>
                                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                                </span>
                                <svg style={{ margin: `0 1rem`, color: `#C5979D` }} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                                <span style={{ display: `flex`, flexDirection: `row-reverse` }}>
                                    <span id="click">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mouse h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                                        </svg>
                                    </span>

                                    <a id="elias"
                                        href="https://eliasmmataportfolio.netlify.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-MontserratBold"
                                    >
                                        Eliasmmata
                                    </a>

                                </span>



                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Container>
    )
}