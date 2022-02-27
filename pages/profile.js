import Image from "next/image";
import CookieConsent from "react-cookie-consent";
import { Container } from "../components/Container"
import Cube from "../components/Cube";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

export default function Profile() {
    return (
        <Container>
            <Nav />
            <Cube/>
            <h2 className="home-title">Frontend and so much more</h2>
            <Footer></Footer>
            <CookieConsent className="d-block"
                enableDeclineButton={true}
                expires={365}
                overlay
                disableButtonStyles={true}
                flipButtons={true}
                buttonText="Estoy de acuerdo con todas las cookies"
                declineButtonText="Quiero administrar las cookies"
                containerClasses="cookies-text-container"
                buttonWrapperClasses="cookies-btn-container"
                debug={true}
            >
                <h5 style={{ padding: `0 0.5rem` }}>WTF y las Cookies</h5>
                <p style={{ fontSize: `0.75rem`, marginBottom: `0`, padding: `0 0.5rem` }}>Nuestra web usa cookies propias y de terceros. Utilizamos cookies esenciales y, con su consentimiento, cookies de rendimiento, funcionalidad y perfilado que nos permiten operar en el sitio web, recopilar información sobre cómo utiliza la web, mejorar el funcionamiento de la web, recordar las elecciones que hace en la web, adaptarla para proporcionarle características y contenidos mejorados en función de su uso de la web. Puede elegir entre administrar sus preferencias o aceptar todas las cookies. También puede leer nuestra <a href="/privacidad" style={{ color: `#C5979D` }}>Política de Privacidad</a> y <a href="/politica-cookies" style={{ color: `#C5979D` }}>Política de Cookies</a> para obtener más información.</p>
            </CookieConsent>
        </Container>
    )
}