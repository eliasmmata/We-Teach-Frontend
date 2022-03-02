import Image from 'next/image'
import React from 'react'

export default function Team() {
    return (
        <div className="bg-background-100">
            <div className="container flex justify-center mx-auto pt-16">
                <div>
                    <p className="text-independence text-lg text-center font-MontserratBold pb-3">EQUIPO</p>
                    <p className="xl:text-4xl text-3xl text-center text-darkpurple font-MontserratBold sm:w-100 mx-auto">Behind the Scenes</p>
                </div>
            </div>
            <div className="w-full py-4" style={{background:`#F8F2F3`}}>
                <div className="container mx-auto">
                    <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-center flex-wrap md:justify-center sm:justify-center lg:justify-center">
                        <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-3/5 relative mt-16 py-12 xl:w-2/5 lg:w-3/5">
                            <div className="rounded overflow-hidden shadow-md bg-white">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <Image src={'/images/alterego.jpeg'} width={120} height={120} alt="profile pic" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div className="px-6 mt-16">
                                    <h1 className="text-darkpurple font-MontserratBold text-3xl text-center mb-1">Elías Moreno</h1>
                                    <p className="text-tuscany text-sm text-center">Frontend Developer</p>
                                    <p className="text-center text-spacecadet text-base pt-3 font-MontserratBold">Apasionado del desarrollo web, Frontend y diseño. Enamorado de React y Tailwindcss.</p>
                                    <p className="text-center text-spacecadet text-base pt-3 font-MontserratBold">¡ Aquí puedes conocerme !</p>
                                    <div className="flex justify-center pt-4 pb-4">
                                        <a href="https://github.com/eliasmmata" className="icon-team mx-3" target="_blank" rel='noreferrer'>
                                            <div aria-label="Github" role="img" style={{border: `1px solid #C5979D`, borderRadius: `50%`,padding: `0.5rem`}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5979D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="https://www.linkedin.com/in/pabloeliasmorenomata/" className="icon-team mx-3" target="_blank" rel='noreferrer'>
                                            <div aria-label="Linkedin" role="img" style={{border: `1px solid #C5979D`, borderRadius: `50%`,padding: `0.5rem`}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="none" stroke="#C5979D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6  fill-current text-tuscany">
                                                    <path
                                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </a>

                                        <a href="https://eliasmmataportfolio.netlify.app/" className="icon-team mx-3" target="_blank" rel='noreferrer'>
                                            <div aria-label="Portfolio" role="img" style={{border: `1px solid #C5979D`, borderRadius: `50%`,padding: `0.5rem`}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#C5979D" strokeWidth="2" className="h-6 w-6 text-tuscany" >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
