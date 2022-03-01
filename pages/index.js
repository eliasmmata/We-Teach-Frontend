// import 'flowbite';
import { useSession } from "next-auth/react"
import { Container } from "../components/Container";
import { Login } from "../components/Login";
import Instagram from 'instagram-web-api';
import Image from "next/image";

export default function Home({ posts }) {
  const { data: session } = useSession()
  if (session) {
    return (
      <Container>
        <Login />
        <div className="bg-background-100 pb-16">
          <p className="xl:text-4xl text-3xl text-center text-darkpurple font-MontserratBold pb-6 sm:w-100 mx-auto">Instagram</p>
          <div>
            <ul className="ig-list">
              {posts.slice(0, 5).map(({ node }, post) => {
                if (post === 1 || post === 3) {
                  return false; // skip
                }
                return (
                  <li key={post} className="ig-li">
                    <a href={`https://instagram.com/p/${node.shortcode}`} target="_blank" rel="noreferrer" passhref="true" className="hover:brightness-110 cursor-pointer">
                      <Image src={node.display_resources[0].src} alt="instagram pic" width={250} height={250} />
                    </a>
                    <span className="text-ig-container">
                      <p className="font-Montserrat text-darkpurple pt-2">{node.edge_media_to_caption.edges[0]?.node.text}</p>
                    </span>
                    <a className="w-4/5 bg-darkpurple rounded-[3px] mx-auto my-4 hover:bg-spacecadet" href={`https://instagram.com/p/${node.shortcode}`} target="_blank" rel="noreferrer">
                      <button className="w-100 text-background-100 font-MontserratBold text-sm rounded-[3px] hover:bg-[#3D2357]" style={{ display: `flex`, justifyContent: `center`, padding: `0.75rem 0` }}>
                        Ir a Ig
                        <i className="pi pi-instagram ml-4 my-auto" style={{ 'fontSize': '1.5em' }}></i>
                      </button>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    )
  }
  return (
    <h1>not Logged</h1>
  )
}

export async function getStaticProps(context) {
  const client = new Instagram({ username: 'eliasmmata', password: process.env.PASSWORD_API_IG });
  await client.login()
  /*  try {
       await client.login()
   } catch (err) {
       if (err.error && err.error.message === 'checkpoint_required') {
           const challengeUrl = err.error.checkpoint_url;
           await client.updateChallenge({ challengeUrl, choice: 1 })
       }
   } */

  const response = await client.getPhotosByUsername({
    username: 'eliasmmata',
  });

  return {
    props: {
      posts: response.user.edge_owner_to_timeline_media.edges,
    }, // will be passed to the page component as props
  };
}