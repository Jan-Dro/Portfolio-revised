import React, { useRef } from "react";
import Header from "../Header";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_rfdle38', 'template_3qp7xmq', form.current, 'Wx46O5cxdutHOJPly')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section className="section mt-40" id="contact">
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
                        />
                        <input
                            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                            type="email" 
                            name="your_email" 
                            placeholder="Your email"
                        />
                        <textarea
                            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                            name="your_message" 
                            placeholder="message"
                        ></textarea>
                        <button className="btn btn-lg" type="submit">Send message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}