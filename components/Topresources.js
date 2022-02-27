import React from 'react'

export default function Topresources() {
    return (
        <>
            <h3 className="home-title lg:my-0">Top Recursos</h3>
            <section className="card-area my-8 md:mb-0 md:py-16 font-Montserrat">
                <section className="card-section">
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--city">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                        </svg>

                                        <h2 className="card-front__heading font-MontserratBold">
                                            Waka Time
                                        </h2>
                                        <p className="card-front__text-price">
                                            Controla tu tiempo
                                        </p>
                                    </div>
                                    <div className="card-front__bt font-MontserratBold">
                                        <p className="card-front__text-view card-front__text-view--city">
                                            Saber más<i className="pi pi-external-link ml-4"></i>

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
                                <h3 className="inside-page__heading inside-page__heading--city font-MontserratBold">
                                    MÍDETE
                                </h3>
                                <p className="inside-page__text">
                                    Plugin de código abierto para métricas sobre tu programación.
                                </p>
                                <a href="https://wakatime.com/" target='_blank' rel='noreferrer' className="inside-page__btn inside-page__btn--city font-MontserratBold">Ver web</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="card-section">
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--ski">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                        </svg>

                                        <h2 className="card-front__heading font-MontserratBold">
                                            Free Code Camp
                                        </h2>
                                        <p className="card-front__text-price">
                                            Aprende gratis
                                        </p>
                                    </div>

                                    <div className="card-front__bt font-MontserratBold">
                                        <p className="card-front__text-view card-front__text-view--ski">
                                            Saber más<i className="pi pi-external-link ml-4"></i>

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
                                <h3 className="inside-page__heading inside-page__heading--ski font-MontserratBold">
                                    ENTRENA
                                </h3>
                                <p className="inside-page__text">
                                    Practica y consigue certificados gratis en las principales tecnologías.
                                </p>
                                <a href="https://www.freecodecamp.org/" target='_blank' rel='noreferrer' className="inside-page__btn inside-page__btn--ski font-MontserratBold">Ver web</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="card-section">
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--beach">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                        </svg>

                                        <h2 className="card-front__heading font-MontserratBold">
                                            Pexels
                                        </h2>
                                        <p className="card-front__text-price">
                                            Imágenes Top
                                        </p>
                                    </div>

                                    <div className="card-front__bt font-MontserratBold">
                                        <p className="card-front__text-view card-front__text-view--beach">
                                            Saber más<i className="pi pi-external-link ml-4"></i>

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
                                <h3 className="inside-page__heading inside-page__heading--beach font-MontserratBold">
                                    CREA
                                </h3>
                                <p className="inside-page__text">
                                    Las mejores fotos y vídeos de stock gratis, por creadores.
                                </p>
                                <a href="https://www.pexels.com/" target='_blank' rel='noreferrer' className="inside-page__btn inside-page__btn--beach font-MontserratBold">Ver web</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="card-section">
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--camping">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                        </svg>

                                        <h2 className="card-front__heading font-MontserratBold">
                                            Looka
                                        </h2>
                                        <p className="card-front__text-price">
                                            Tu logo en 3 clicks
                                        </p>
                                    </div>

                                    <div className="card-front__bt font-MontserratBold">
                                        <p className="card-front__text-view card-front__text-view--camping">
                                            Saber más<i className="pi pi-external-link ml-4"></i>

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
                                <h3 className="inside-page__heading inside-page__heading--camping font-MontserratBold">
                                    ENTRENA
                                </h3>
                                <p className="inside-page__text">
                                    Diseña con la IA de Looka tu logotipo y crea tu marca.
                                </p>
                                <a href="https://looka.com/" target='_blank' rel='noreferrer' className="inside-page__btn inside-page__btn--camping font-MontserratBold">Ver web</a>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <div className="home-text-largedevice font-MontserratBold">
                <h3>Los mejores recursos para Frontend, diseño y más...</h3>
                <h3 className="mt-3">¡ Comparte tus favoritos !</h3>
                <a href="#footer">
                    <i className="pi pi-share-alt my-3"></i>
                </a>
                <h3 className="mt-2" style={{fontSize:`1rem`}}>Porque el código no lo es todo.<span style={{display:`block`, textAlign:`center`}} className="mt-2">Pero casi : )</span></h3>
            </div>
        </>
    )
}


