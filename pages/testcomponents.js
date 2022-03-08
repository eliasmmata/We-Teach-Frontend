import { Container } from "../components/Container"
import Cube from "../components/Cube";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import Team from "../components/Team";
import Tech from "../components/Tech";
import Topresources from "../components/Topresources";
import { Instagram } from "../components/Instagram";

import { ProgressSpinner } from 'primereact/progressspinner';



export default function Testcomponents() {
    return (
        <Container>
            <Nav />
            <Cube />
            <ProgressSpinner />
            <Topresources />
            <Tech />
            <Team />
            <Instagram/>
            <Footer></Footer>


        </Container >
    )



}