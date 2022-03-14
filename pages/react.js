import React from 'react'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'


export default function ReactPage({ resources }) {
    return (
        <>
            <Container>
                <Nav />
                <p>
                    Agrega tus Libros de Programación Favoritos
                </p>

                <div>
                    {resources.map(resource => (
                        <div key={resource.id}>
                            <h2>{resource.title}</h2>
                            <p>{resource.description}</p>
                            <p>{resource.url}</p>
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

export async function getStaticProps() {
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

