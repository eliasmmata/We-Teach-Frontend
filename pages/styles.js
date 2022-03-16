import React, { useEffect, useState } from 'react'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'

import useSWR from 'swr';
import axios from "axios";

import { ProgressSpinner } from 'primereact/progressspinner';

import Image from 'next/image';
import Custom500 from './500';


export default function StylesPage() {
    const fetcher = url => axios.get(url).then(res => res.data)
    const { data, error } = useSWR('api/tips-styles', fetcher);

    const [state, setState] = useState([]);

    /* IMPORTANTE ESTE USEEFFECT PARA QUE RENDERICE EL CONTENIDO DEL MAP LA PRIMERA VEZ Y CON EL FILTRO SE QUEDEN SOLO LOS QUE QUEREMOS */
    useEffect(() => {
        async function fetchState() {
            setState(data)
        }
        fetchState()
    }, [data]);

    const handleBtns = (e) => {
        let word = e.target.value;

        if (word === 'All') {
            setState(data)
        }
        else if (word === "beginner") {
            const filtered = data.filter(resource => resource.level === "beginner")
            setState(filtered)
            console.log('filtered', filtered)
        }
        else if (word === "intermediate") {
            const filtered = data.filter(resource => resource.level === "intermediate")
            setState(filtered)
            console.log('filtered', filtered)
        }
        else if (word === "advanced") {
            const filtered = data.filter(resource => resource.level === "advanced")
            setState(filtered)
            console.log('filtered', filtered)
        }
    }

    if (error) return <Custom500></Custom500>
    if (!data) return <div style={{ padding: `66vw 25vw` }}><ProgressSpinner /></div>

    return (
        <>
            <Container>
                <Nav />
                <h2 className="font-MontserratBold text-3xl text-center text-tuscany mt-2">Aprende Css y estila como nunca</h2>
                <div className='filter-container font-Montserrat text-white text-xs mt-4 grid gap-3 grid-cols-3 justify-items-center w-[21rem] mx-auto md:text-sm md:w-[80vw] md:mx-[10vw]'>
                    <button value="beginner" onClick={handleBtns}>Beginner</button>
                    <button value="intermediate" onClick={handleBtns}>Intermediate</button>
                    <button value="advanced" onClick={handleBtns}>Advanced</button>
                    <button value="All" onClick={handleBtns} style={{ gridColumnStart: `2`, background: `#626893` }}>Reset</button>
                </div>
                <div className='resourcescontainer font-Montserrat my-4 grid gap-6 md:grid md:grid-cols-2 md:gap-3 lg:mx-[10vw] lg:grid-cols-3 lg:gap-6 lg:my-8'>
                    {state && state.map(resource => (
                        <a key={resource.id} href={resource.url} target="_blank" rel="noreferrer">
                            <div key={resource.id} className="resource px-4 py-3">
                                {resource.level === 'advanced'
                                    ? <p id="level" className='py-1 text-sm' style={{ color: '#70419F' }}>{resource.level}</p>
                                    : <p id="level" className='py-1 text-sm' style={{ color: resource.level === 'beginner' ? '#4B8F8C' : '#8F60BE' }}>{resource.level}</p>
                                }
                                <div className='flex justify-between title-img'>
                                    <h2 className='font-MontserratBold text-xl text-spacecadet w-60 md:w-70'>{resource.title}</h2>
                                    <Image src={resource.image} alt="image" width={50} height={50}></Image>
                                </div>
                                <p className='text-independence py-3'>{resource.description}</p>
                                <button className="flex items-center text-wintergreen pb-4 font-MontserratBold" href={resource.url} target="_blank" rel="noreferrer">
                                    <span>Ver recurso
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </button>
                                <ul className='text-tuscany text-sm'>
                                    {resource.labels.map(label => (
                                        <li key={label}>#{label}</li>
                                    ))}
                                </ul>
                            </div>
                        </a>
                    ))}
                </div>
                <Footer />
            </Container>
        </>
    )
}