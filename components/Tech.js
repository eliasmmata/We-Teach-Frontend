import Link from 'next/link'
import React from 'react'

export default function Tech() {
    return (
        <>
            <h3 className="home-title lg:pt-16 mt-16 lg:mt-0 lg:bg-background-900 lg:text-background-100" style={{ textShadow: `1px 0px 1px rgba(72, 77, 109, 0.75)` }}>Tecnologías y Lenguages</h3>
            <section className="card-area md:mb-0 py-8 lg:py-16 font-Montserrat lg:bg-background-900" style={{ marginTop: `-1px` }}>
                <section className="card-section">
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--one backgroundOne">
                                        <h2 className="card-front__heading font-MontserratBold  text-3xl text-[#00334D]" style={{ textShadow: `2px 1px 1px #61DBFB` }}>
                                            React
                                        </h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#00334D]" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                                        </svg>
                                        <p className="card-front__text-price text-[#00334D]" style={{ textShadow: `2px 1px 1px #C1FAFF` }}>
                                            ¡ Compila !
                                        </p>
                                    </div>
                                    <div className="card-front__bt font-MontserratBold">
                                        <p className="card-front__text-view card-front__text-view--one text-[#00334D]">
                                            Recursos<i className="pi pi-cog ml-4 text-[#00334D]"></i>

                                        </p>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <video className="video__container" autoPlay muted loop>
                                        <source className="video__media" src="https://ak.picdn.net/shutterstock/videos/1063655224/preview/stock-footage-a-computer-processor-with-millions-of-connections-and-signals-technology-cpu-background-pulses.webm" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="inside-page">
                            <div className="inside-page__container">
                                <h3 className="inside-page__heading inside-page__heading--one font-MontserratBold text-[#00334D]">
                                    DOMÍNALO
                                </h3>
                                <p className="inside-page__text text-[#00334D]">
                                    Todo sobre los hooks, errores de compilación y consejos.
                                </p>
                                <Link href="/react">
                                    <a className="inside-page__btn inside-page__btn--one font-MontserratBold text-[#00334D] btnOne" style={{ borderColor: `#00334D` }}>Más React</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="card-section">
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--two backgroundTwo">
                                        <h2 className="card-front__heading font-MontserratBold text-3xl text-[#3A001E]" style={{ textShadow: `2px 1px 1px #FFE7D4` }}>
                                            Css
                                        </h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3A001E]" viewBox="0 0 20 20" fill="currentColor" >
                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                        </svg>
                                        <p className="card-front__text-price text-[#3A001E]" style={{ textShadow: `2px 1px 1px #FFE7D4` }}>
                                            Flex y más
                                        </p>
                                    </div>
                                    <div className="card-front__bt font-MontserratBold">
                                        <p className="card-front__text-view card-front__text-view--two text-[#3A001E]">
                                            Recursos<i className="pi pi-cog ml-4 text-[#3A001E]"></i>

                                        </p>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <video className="video__container" autoPlay muted loop>
                                        <source className="video__media" src="https://ak.picdn.net/shutterstock/videos/18868811/preview/stock-footage-typing-on-keyboard-with-fiber-optics-background-shot-in-hd.webm" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="inside-page">
                            <div className="inside-page__container">
                                <h3 className="inside-page__heading inside-page__heading--two font-MontserratBold text-[#3A001E]">
                                    ENTRENA
                                </h3>
                                <p className="inside-page__text text-[#3A001E]">
                                    Trucos, herramientas útiles, el temido flex y más...
                                </p>
                                <Link href="/styles">
                                    <a className="inside-page__btn inside-page__btn--two font-MontserratBold btnTwo text-[#3A001E]" style={{ borderColor: `#3A001E` }}>Más Css</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="card-section">
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--three backgroundThree">
                                        <h2 className="card-front__heading font-MontserratBold text-[#131313] text-3xl" style={{ textShadow: `2px 2px 1px rgba(240,219,79, 1)` }}>
                                            JavaScript
                                        </h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#131313]" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                        <p className="card-front__text-price text-[#131313]" style={{ textShadow: `2px 2px 1px rgba(240,219,79, 1)` }}>
                                            Consejos.log( )
                                        </p>
                                    </div>

                                    <div className="card-front__bt font-MontserratBold">
                                        <p className="card-front__text-view card-front__text-view--three text-[#131313]">
                                            Recursos<i className="pi pi-cog ml-4 text-[#131313]"></i>

                                        </p>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <video className="video__container" autoPlay muted loop>
                                        <source className="video__media" src="https://ak.picdn.net/shutterstock/videos/1063655224/preview/stock-footage-a-computer-processor-with-millions-of-connections-and-signals-technology-cpu-background-pulses.webm" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="inside-page">
                            <div className="inside-page__container">
                                <h3 className="inside-page__heading inside-page__heading--three font-MontserratBold text-[#131313]">
                                    COMPRENDE
                                </h3>
                                <p className="inside-page__text text-[#131313]">
                                    Todo para convertirte en maestro y subir de nivel rápidamente.
                                </p>
                                <Link href="/javascript">
                                    <a className="inside-page__btn inside-page__btn--three font-MontserratBold btnThree text-[#131313]" style={{ borderColor: `#13313` }}>Más JS</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="card-section">
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--four backgroundFour">
                                        <h2 className="card-front__heading font-MontserratBold text-3xl text-[#132721]" style={{ textShadow: `1px 1px 1px #E9FDFF` }}>
                                            Tailwind
                                        </h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#132721]" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                        </svg>
                                        <p className="card-front__text-price text-[#132721]" style={{ textShadow: `1px 1px 1px #E9FDFF` }}>
                                            Estila como nunca
                                        </p>
                                    </div>

                                    <div className="card-front__bt font-MontserratBold">
                                        <p className="card-front__text-view card-front__text-view--four text-[#132721]">
                                            Recursos<i className="pi pi-cog ml-4 text-[#132721]"></i>

                                        </p>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <video className="video__container" autoPlay muted loop>
                                        <source className="video__media" src="https://ak.picdn.net/shutterstock/videos/18868811/preview/stock-footage-typing-on-keyboard-with-fiber-optics-background-shot-in-hd.webm" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="inside-page">
                            <div className="inside-page__container">
                                <h3 className="inside-page__heading inside-page__heading--four font-MontserratBold text-[#132721]">
                                    AVANZA
                                </h3>
                                <p className="inside-page__text text-[#132721]">
                                    Una herramienta única para avanzar en tu estilado.
                                </p>
                                <Link href="/styles">
                                    <a className="inside-page__btn inside-page__btn--four font-MontserratBold btnFour text-[#132721]" style={{ borderColor: `#132721` }}>Más Tailwind</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <div className="home-text-smalldevice font-MontserratBold lg:bg-background-900 lg:text-background-100" style={{ color: `#2B193D`, marginTop: `-1px`, padding: `0 2rem 3rem 2rem`, fontSize: `1.25rem`, textAlign: `center`, display: `block` }}>
                <h3 className="lg:text-background-100">Errores típicos, dudas, tutoriales, y más...</h3>
                <h3 className="mt-3 lg:text-background-100">¿Quieres añadir?</h3>
                <button className="w-60 my-4 p-3 lg:p-2  text-sm uppercase bg-darkpurple text-white lg:bg-white lg:text-darkpurple lg:hover:bg-background-100" style={{ borderRadius: `3px` }}>
                    <a href="#footer" className="lg:text-darkpurple lg:hover:text-darkpurple">Escríbenos <i className="pi pi-paperclip ml-3 lg:text-darkpurple"></i></a>
                </button>
                <h3 className="mt-2 lg:text-background-100" style={{ fontSize: `1rem` }}>La mejor compilación.<span style={{ display: `block`, textAlign: `center`, margin: `0.75rem 0` }}>En Español.</span></h3>
            </div>
        </>
    )
}