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
            <footer className="footer-section font-Montserrat">
                <div className="container">
                    <div className="footer-cta pt-4 pb-4">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 py-2">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4 className="font-MontserratBold">The Company</h4>
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
                                        <h4 className="font-MontserratBold">LLámanos</h4>
                                        <a href="tel:+34674547596">674547596</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 py-2">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4 className="font-MontserratBold">Escríbenos</h4>
                                        <a target="_blank" rel="noreferrer"  href="mailto:eliasmmata@hotmail.com?Subject=Contacta%20con%20Phil%20WTF">eliasmmata@hotmail.com</a>
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
                                        <Link href="/" passHref ><i className="pi pi-home text-white text-xl" style={{cursor:"pointer"}}></i></Link>
                                    </div>
                                    <div className="footer-text pt-2 pb-2">
                                        <p>Un espacio ecléctico para aprender Frontend, desarrollo web y las últimas tecnologías. Pero también información sobre la actualidad, música, y aplicaciones interesantes en el mundo del desarrollo</p>
                                    </div>
                                    <div className="footer-social-icon pb-4">
                                        <span className='font-MontserratBold'><p>Sígueme</p></span>
                                        <a href="https://github.com/eliasmmata" target="_blank" rel="noreferrer" ><i className="pi pi-github" style={{'fontSize': '1.5em', marginLeft: `-8px`}}></i></a>
                                        <a href="https://www.linkedin.com/in/pabloeliasmorenomata/" target="_blank" rel="noreferrer"><i className="pi pi-linkedin" style={{'fontSize': '1.5em'}}></i></a>
                                        <a href="https://www.instagram.com/eliasmmata/" target="_blank" rel="noreferrer"><i className="pi pi-instagram" style={{'fontSize': '1.5em'}}></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 my-2">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading" style={{paddingLeft:`15px`}}>
                                        <h3 className="font-MontserratBold">Qué uso</h3>
                                    </div>
                                    <ul>
                                        <li  style={{paddingLeft:`15px`}}><a href="https://nextjs.org/docs/getting-started" target="_blank" rel="noreferrer">Next.Js</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="https://docs.mongodb.com/" target="_blank" rel="noreferrer">MongoDB</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="https://es.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">React</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="https://vercel.com/docs" target="_blank" rel="noreferrer">Vercel</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">TypeScript</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="https://docs.github.com/es" target="_blank" rel="noreferrer">GitHub</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noreferrer">Tailwind</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="https://www.primefaces.org/primereact/">Prime React</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" target="_blank" rel="noreferrer">Bootstrap</a></li>
                                        <li  style={{paddingLeft:`15px`}}><a href="https://animate.style/" target="_blank" rel="noreferrer">Animate css</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 my-2">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading" style={{paddingLeft:`15px`}}>
                                        <h3 className="font-MontserratBold">Trabajos y Proyectos</h3>
                                    </div>
                                    <ul style={{paddingLeft:`15px`}}>
                                        <li style={{paddingLeft:`15px`}}><a href="https://eliasmmataportfolio.netlify.app/" target="_blank" rel="noreferrer">Portfolio</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="https://filter-react.herokuapp.com/" target="_blank" rel="noreferrer">React Filter</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="https://bangstudio.es/" target="_blank" rel="noreferrer">Sneakers Store</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="http://carousel-owl-react.herokuapp.com/" target="_blank" rel="noreferrer">React Slider</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="https://www.gastrobarlacueva.com/" target="_blank" rel="noreferrer">Restaurant Webpage</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="https://cards-project-react.netlify.app/" target="_blank" rel="noreferrer">React Fetch Posts</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="https://www.oestevaquero.com/" target="_blank" rel="noreferrer">Western Amazon Store</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="https://angular-rick-morty.herokuapp.com/" target="_blank" rel="noreferrer">Angular Rick & Morty</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="https://www.oestevaquero.com/zarzaparrilla-saloon/" target="_blank" rel="noreferrer">Wordpress Blog</a></li>
                                        <li style={{paddingLeft:`15px`}}><a href="https://github.com/eliasmmata/react-taskList" target="_blank" rel="noreferrer">React Task List</a></li>
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
                    <div className="pt-1 pb-4" style={{textAlign: `center`}}>
                        <i onClick={scrollToTop} className="pi pi-chevron-up" style={{'fontSize': '1.25em', textAlign: `center`, marginLeft: `-3rem`, cursor: `pointer`, color: `#2B193D`, background: `#E2CBCE`,borderRadius: `50%`,padding: `17px 10px`,lineHeight: `5px`}}></i>
                    </div>
                </div>
                <div className="copyright-area" style={{padding: `15px`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                                <div className="copyright-text" style={{ display: `flex`, justifyContent: `center` }}>
                                    <span style={{marginTop: `2px`}}>
                                        <Image src="/images/vercel.svg" alt="Vercel Logo" width={72} height={16} />
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
