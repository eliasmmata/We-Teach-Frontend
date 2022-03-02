// import 'flowbite';
import { useSession } from "next-auth/react"
import { Container } from "../components/Container";
import LoginForm from "../components/LoginForm";
import LoginOk from "../components/LoginOk";
import { Footer } from "../components/Footer";
import Script from "next/script";

import Head from "next/head";

export default function Home({ posts }) {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Container>
          <LoginOk />
          {/* Instagram no puede hacerse como componente por Next js no pasa props de fetch */}
          <p className="bg-background-100 mx-auto pb-4 lg:pb-8  text-center text-darkpurple font-MontserratBold sm:w-100 xl:text-4xl text-3xl">Instagram</p>
          <div id="instafeed-container" className="bg-background-100 pb-16">
          </div>
          <Footer />
          <Script src="/scripts/instafeed.min.js" strategy="beforeInteractive" />
          <Script id="show-banner" strategy="beforeInteractive">
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
        </Container>
      </>
    )
  }
  return (
    <>
      <p className="bg-background-100 mx-auto pb-4 lg:pb-8  text-center text-darkpurple font-MontserratBold sm:w-100 xl:text-4xl text-3xl">Instagram</p>
      <div id="instafeed-container" className="bg-background-100 pb-16">
      </div>
      <Script src="/scripts/instafeed.min.js" strategy="beforeInteractive" />
      <Script id="show-banner" strategy="lazyOnload">
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
      <LoginForm />
    </>
  )
}
