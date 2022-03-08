import { Container } from "../components/Container"
import Cube from "../components/Cube";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import Team from "../components/Team";
import Tech from "../components/Tech";
import Topresources from "../components/Topresources";
import { Instagram } from "../components/Instagram";
import Increment from "../components/redux/Increment";
import Decrement from "../components/redux/Decrement";
import { useSelector } from "react-redux";


export default function Testcomponents() {
    const count = useSelector((state) => state.counter.value)
    return (
        <Container>
            <Nav />
            <Cube />
            <Increment/>
            <Decrement/>
            {count}
            <Topresources />
            <Tech />
            <Team />
            <Instagram/>
            <Footer></Footer>


        </Container >
    )



}