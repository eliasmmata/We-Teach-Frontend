import { Container } from "../components/Container"
import Cube from "../components/Cube";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import Team from "../components/Team";
import Tech from "../components/Tech";
import Topresources from "../components/Topresources";

import Script from 'next/script';
import Image from "next/image";


export default function Profile() {
    return (
        <Container>
            <Nav />
            <Cube />
            <Topresources />
            <Tech />
            <Team />
            <p className="bg-background-100 mx-auto pb-4 lg:pb-8  text-center text-darkpurple font-MontserratBold sm:w-100 xl:text-4xl text-3xl">Instagram</p>
            <div id="instafeed-container" className="bg-background-100 pb-16">
            </div>
            <Footer></Footer>
            <Script id="show-banner">
                {`var userFeed = new Instafeed({
                get: 'user',
                target: "instafeed-container",
                resolution: 'low_resolution',
                accessToken: 'IGQVJYcFVGWDYzS0Y3eWZAHM2N5U29rdzFfdk9PTE4wR1VGWTZAvYnUyZAWh0U3kySnR6T3dJVWZARaS0tOEdXLWFoT1FLaXlMUXUyRmMtWXJ3dE5MRm9US08wbl90X0pOZAUR4Tk5JMzFOOThQRzRkT1ZAtTwZDZD',
                limit: 6,
                template: '<div class="ig-li">' +
                            '<ul class="ig-list">' +
                                '<a href="{{link}}" target="_blank" rel="noreferrer">' +
                                    '<img title="{{caption}}" src="{{image}}" />' +
                                '</a>' +
                                '<div class="text-ig-container">' +
                                    '<p>{{caption}}</p>' +
                                '</div>' +
                                '<a href="{{link}}" class="button-link" target="_blank" rel="noreferrer">' +
                                    '<button>' +
                                    'Ir a Ig' +
                                    '<i class="pi pi-instagram ml-4 my-auto"></i>' +
                                    '</button>' +
                                '</a>' +
                            '</ul>' +
                          '</div>'
            });
            userFeed.run();`}
            </Script>

        </Container >
    )



}