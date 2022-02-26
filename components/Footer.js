import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function Footer() {
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };

    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-4 pb-4">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 py-2">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>The Company</h4>
                                        <span>
                                            <a href='https://www.philjackson.es' target="_blank" rel="noreferrer">www.philjackson.es</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 py-2">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>LLámanos</h4>
                                        <span>674547596</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 py-2">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Escríbenos</h4>
                                        <span>eliasmmata@hotmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-4 pb-4">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget" style={{padding:`0 15px`}}>
                                    <div className="footer-logo my-2" >
                                        <Link href="/" passHref ><i className="pi pi-home text-white text-xl"></i></Link>
                                        <i onClick={scrollToTop} className="pi pi-arrow-up text-white text-xl ml-4" style={{'fontSize': '1em'}}></i>
                                    </div>
                                    <div className="footer-text pt-2 pb-2">
                                        <p>Un espacio ecléctico para aprender Frontend, desarrollo web y las últimas tecnologías. Pero también información sobre la actualidad, música, y aplicaciones interesantes en el mundo del desarrollo</p>
                                    </div>
                                    <div className="footer-social-icon pb-4">
                                        <span>Sígueme</span>
                                        <a href="#"><i className="pi pi-github" style={{'fontSize': '1.5em', marginLeft: `-8px`}}></i></a>
                                        <a href="#"><i className="pi pi-linkedin" style={{'fontSize': '1.5em'}}></i></a>
                                        <a href="#"><i className="pi pi-instagram" style={{'fontSize': '1.5em'}}></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 my-2">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading" style={{paddingLeft:`15px`}}>
                                        <h3>Links Útiles</h3>
                                    </div>
                                    <ul>
                                        <li  style={{paddingLeft:`15px`}}><a href="#">home</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="#">about</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="#">services</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="#">portfolio</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="#">Contact</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="#">About us</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="#">Our Services</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="#">Expert Team</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="#">Contact us</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="#">Latest News</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 my-2">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading" style={{paddingLeft:`15px`}}>
                                        <h3>Trabajos y Proyectos</h3>
                                    </div>
                                    <ul style={{paddingLeft:`15px`}}>
                                        <li style={{paddingLeft:`15px`}}><a href="#">Portfolio</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="#">Oeste Vaquero</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="#">Gastrobar La Cueva</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="#">services</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="#">Contact</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="#">About us</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="#">Our Services</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="#">Expert Team</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="#">Contact us</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="#">Latest News</a></li>
                                    </ul>
                                   {/*  <div className="footer-text mb-25">
                                        <p>Dont miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i className="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2" style={{textAlign: `center`}}>
                        <i onClick={scrollToTop} className="pi pi-arrow-up text-white text-xl" style={{'fontSize': '1em', textAlign: `center`, marginLeft: `-3rem`}}></i>
                    </div>
                </div>
                <div className="copyright-area" style={{padding: `15px`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                                <div className="copyright-text" style={{ display: `flex`, justifyContent: `center` }}>
                                    <span style={{marginTop: `2px`}}>
                                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                                    </span>
                                    <svg style={{ margin: `0 1rem`, color: `#2B193D`}} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                    </svg>
                                    <span style={{ display: `flex`, flexDirection: `row-reverse` }}>
                                        <span id="click">
                                            <svg style={{marginTop: `0`}}xmlns="http://www.w3.org/2000/svg" className="mouse h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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
                </div>
            </footer>
        </>
    )
}
