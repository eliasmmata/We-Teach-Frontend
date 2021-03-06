This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Desplegado en Vercel

Ve a [https://www.weteachfrontend.com/](https://www.weteachfrontend.com/) y regístrate o logueate con Google o Github para ver el todo el contenido : )

## Qué tiene

Login con NextAuth con usuario (a través de BBDD MongoDB), Google o Github.

Llamada a la api de Instagram para insertar los posts (package instafeed.js).

Display de Post de Instagram de otros usuarios a través de librería React-Social-Media-Embed.

Fetch de recursos a través de las librerías AXIOS y SWR (React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate))

Filtros dependiendo del nivel del usuario.

Barra de búsqueda con Hooks y JavaScript filter.

Botón Load More Hook.

Estilos con TailwindCss.

Google Analytics Y Google Tag Manager.

Estilos condicionales dependiendo del valor del dato.

Chat Realtime powered by Ably API.

Set Up pruebas y manejo de errores (Jest, React Testing Library)
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

