import React from 'react'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'

import useSWR from 'swr';
import axios from "axios";
import { ProgressSpinner } from 'primereact/progressspinner';


const fetcher = url => axios.get(url).then(res => res.data)

export default function ReactPage() {
  const { data, error } = useSWR('api/resources', fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <span style={{padding: `25vw 25vw`}}><ProgressSpinner /></span>

    return (
        <>
            <Container>
                <Nav />
                <p>
                    Agrega tus Libros de Programación Favoritos
                </p>

                <div>
                    {data.map(resource => (
                        <div key={resource.id}>
                            <h2>{resource.title}</h2>
                            <p>{resource.description}</p>
                            <a href={resource.url} target="_blank" rel="noreferrer">{resource.url}</a>
                            {/* <ul>
                                {book.authors.map(author => (
                                    <li key={author}>{author}</li>
                                ))}
                            </ul> */}
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