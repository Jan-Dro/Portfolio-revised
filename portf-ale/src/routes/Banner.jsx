import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {fadein} from '../variant';

export default function Banner(){
    return(
        <section className="section" id="home">
            <div className="container mx-auto">
                <div>
                    <div>
                    <h1>
                        JESUS <span>ALEJANDRO</span>
                    </h1>
                    <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-1" >
                        <span className="text-white mr-4" >I am a</span>
                        <TypeAnimation
                            sequence={[
                            'Developer',
                            2000,
                            'Software Engineer',
                            3000,
                            'Software Developer',
                            4000
                            ]}
                            wrapper='span'
                            speed={10}
                            repeat={Infinity}
                            deletionSpeed={.5}
                        />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptates recusandae. Omnis, atque! Ex, dolorum modi fugit error inventore ipsam illum! Reprehenderit enim laudantium unde et omnis amet ex id!
                    </p>
                    <button className="btn btn-lg">Contact me</button>
                    </div>
                </div>
            </div>
        </section>
    )
}