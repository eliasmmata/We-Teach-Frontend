import React, { useEffect, useState } from 'react';
import { useChannel } from "./AblyReactEffect";
import styles from './AblyChatComponent.module.css';
import { useSession } from 'next-auth/react';

const AblyChatComponent = ({ chatAnimation }) => {

    const { data: session, status } = useSession();

    let inputBox = null;
    let messageEnd = null;

    const [messageText, setMessageText] = useState("");
    const [receivedMessages, setMessages] = useState([]);
    const messageTextIsEmpty = messageText.trim().length === 0;

    const [channel, ably] = useChannel("weteachfrontend", (message) => {
        const history = receivedMessages.slice(-199);
        setMessages([...history, message]);
    });

    const sendChatMessage = (messageText) => {
        channel.publish({ name: "weteachfrontend", data: messageText });
        setMessageText("");
        inputBox.focus();
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();
        sendChatMessage(messageText);
    }

    const handleKeyPress = (event) => {
        if (event.charCode !== 13 || messageTextIsEmpty) {
            return;
        }
        sendChatMessage(messageText);
        event.preventDefault();
    }

    const messages = receivedMessages.map((message, index) => {
        let dateTimeNow = new Date().toString().slice(0, 21);

        const author = message.connectionId === ably.connection.id ? "me" : "other";
        return <span key={index} className={styles.message} data-author={author}>{message.data}
            <span style={{ display: `block`, fontSize: `0.5rem` }}>Sent by {session.user.email} {dateTimeNow}</span>
        </span>;
    });

    useEffect(() => {
        /* messageEnd.scrollIntoView({ behaviour: "smooth" }); */
    });

    return (
        <div key={chatAnimation} className={styles.chatHolder}>
            <p className={styles.title}>Chat WTF <span style={{ display: `block`, fontSize: `0.75rem` }}>{session.user.email}</span></p>
            <div className={styles.chatText}>
                {messages}
                <div ref={(element) => { messageEnd = element; }}></div>
            </div>
            <form onSubmit={handleFormSubmission} className={styles.form}>
                <textarea
                    ref={(element) => { inputBox = element; }}
                    value={messageText}
                    placeholder="Escribe tu mensaje..."
                    onChange={e => setMessageText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={styles.textarea}
                ></textarea>
                <button type="submit" className={styles.button} disabled={messageTextIsEmpty}>
                    <i className="pi pi-telegram"></i>
                </button>
            </form>
        </div>
    )
}

export default AblyChatComponent;