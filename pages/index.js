// import 'flowbite';
import { useSession } from "next-auth/react"
import { Container } from "../components/Container";
import LoginForm from "../components/LoginForm";
import LoginOk from "../components/LoginOk";
import { Footer } from "../components/Footer";
import { Instagram } from "../components/Instagram";

import Script from 'next/script';

import dynamic from 'next/dynamic'
import { useState } from "react";


const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent'), { ssr: false });


export default function Home() {
  const { data: session, status } = useSession();
  /* console.log(status)
  console.log(session) */

  const [state, setState] = useState('chat-closed')

  if (!session) {
    return (
      <>
        <Container>
          <Script src="/scripts/instafeed.min.js"></Script>
          <LoginForm />
        </Container>
      </>
    )
  }

  return (
    <>
      <Container>
        <Script src="/scripts/instafeed.min.js"></Script>
        <LoginOk />
        <Instagram />
        {state === 'chat-closed' && (
          <div style={{ padding: `2em 0`, backgroundColor: `#F8F2F3` }}>
            <div className="button-chat-container">
              <button onClick={() => setState('open-chat')}>
                <i className="pi pi-comments"></i>
              </button>
            </div>
          </div>

        )}

        {state === 'open-chat' &&
          <div className="chat-container">
            <AblyChatComponent />
            <div style={{ padding: `2em 0`, backgroundColor: `#F8F2F3` }}>
              <div className="button-chat-container">
                <button id="close-chat" onClick={() => setState('chat-closed')}>
                  <i className="pi pi-times"></i>
                </button>
              </div>
            </div>
          </div>}
        <Footer />
      </Container>
    </>
  )
}
