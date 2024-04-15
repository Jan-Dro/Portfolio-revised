import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [notification, setNotification] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_rfdle38', 'template_3qp7xmq', form.current, 'Wx46O5cxdutHOJPly')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    setName("");
                    setEmail("");
                    setMessage("");
                    setNotification("Message sent successfully!");
                    setTimeout(() => {
                        setNotification("");
                    }, 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section className="py-18 lg:section" id="contact">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
                        <div>
                            <h4 className="text-xl uppercase font-medium mb-2 tracking-wide">Get in touch</h4>
                            <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">Lets work together!</h2>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="flex-1">
                        <input
                            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                            type="text"
                            name="your_username"
                            placeholder="Your name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                            type="email"
                            name="your_email"
                            placeholder="Your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <textarea
                            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                            name="your_message"
                            placeholder="Message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        ></textarea>
                        <button className="btn btn-lg" type="submit">Send message</button>
                        {notification && <div className="text-green-500 mt-3">{notification}</div>}
                    </form>
                </div>
            </div>
        </section>
    );
}