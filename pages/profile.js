import { Container } from "../components/Container"
import Cube from "../components/Cube";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import Team from "../components/Team";
import Tech from "../components/Tech";
import Topresources from "../components/Topresources";

export default function Profile() {
    return (
        <Container>
            <Nav />
            <Cube />
            <Topresources />
            <Tech />
            <Team />
            <Footer></Footer>
        </Container>
    )
}