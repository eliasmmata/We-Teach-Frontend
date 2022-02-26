import Image from "next/image";
import { Container } from "../components/Container"
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

export default function Profile() {
    return (
        <Container>
            <Nav />
            <Footer></Footer>
        </Container>
    )
}