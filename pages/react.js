import React from 'react'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'

import useSWR from 'swr';
import axios from "axios";

import { ProgressSpinner } from 'primereact/progressspinner';

import Image from 'next/image';

const fetcher = url => axios.get(url).then(res => res.data)

export default function ReactPage() {
    const { data, error } = useSWR('api/resources', fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <div style={{ padding: `66vw 25vw` }}><ProgressSpinner /></div>

    return (
        <>
            <Container>
                <Nav />
                <h2 className="font-MontserratBold text-3xl text-center text-tuscany mt-2">Top Recursos React</h2>
                <div className='resourcescontainer font-Montserrat md:grid md:grid-cols-2 md:gap-3 lg:mx-[10rem] lg:grid-cols-3 lg:gap-6 lg:my-8'>
                    {data.map(resource => (
                        <div key={resource.id} className="resource px-4 py-3 my-4 md:my-0">
                            <div className='flex justify-around'>
                                <h2 className='font-MontserratBold text-xl text-spacecadet'>{resource.title}</h2>
                                <Image src={resource.image} alt="image" width={40} height={40}></Image>
                            </div>
                            <p className='text-independence py-2 capitalize'>{resource.description}</p>
                            <a className="flex items-center text-wintergreen pb-2" href={resource.url} target="_blank" rel="noreferrer">
                                Ver recurso
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <ul className='text-tuscany'>
                                {resource.labels.map(label => (
                                    <li key={label}>#{label}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <Footer />
            </Container>


        </>

    )
}

/* export async function getStaticProps() {
    const API_URL = process.env.API_URL || 'http://localhost:3000'
    var res = await fetch(
        `${API_URL}/api/resources`,
        {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'User-Agent': '*',
            },
        }
    );
    const resources = await res.json(JSON.stringify())
    console.log('res ', res);

    return {
        props: {
            resources,
        },
        revalidate: 10,
    }
}

 */