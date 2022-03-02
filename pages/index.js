// import 'flowbite';
import { useSession } from "next-auth/react"
import { Container } from "../components/Container";
import LoginForm from "../components/LoginForm";
import LoginOk from "../components/LoginOk";
import { Footer } from "../components/Footer";

export default function Home(/* { posts } */) {
  const { data: session } = useSession()
  if (session) {
    return (
      <Container>
        <LoginOk />

        {/* Instagram no puede hacerse como componente por Next js no pasa props de fetch */}
        <Footer />
      </Container>
    )
  }
  return (
    <LoginForm />
  )
}

/* export async function getStaticProps(context) {
  const client = new Instagram({ username: 'singwithmeloud', password: process.env.PASSWORD_API_IG });
  try {
    await client.login()
  } catch (err) {
    if (err.error && err.error.message === 'checkpoint_required') {
      const challengeUrl = err.error.checkpoint_url;
      await client.updateChallenge({ challengeUrl, choice: 1 })
    }
  }

  const response = await client.getPhotosByUsername({
    username: 'singwithmeloud',
  });

  return {
    props: {
      posts: response.user.edge_owner_to_timeline_media.edges,
    }, // will be passed to the page component as props
  };
} */