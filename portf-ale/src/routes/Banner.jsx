import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {fadein} from '../variant';
import { IoLogoGithub as Github } from "react-icons/io";
import { FaLinkedin as  Linkedin } from "react-icons/fa";
import { IoNewspaperOutline as cv} from "react-icons/io5";

import { Link } from "react-router-dom";
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
                    <div className="flex items-center space-x-4"> {/* Horizontal layout with some space between icons */}
                    <Link to='http://www.github.com/jan-dro'>
                        <Github className="text-3xl" /> {/* Increase icon size */}
                    </Link>
                    <Link to='https://www.linkedin.com/in/jesusaalejandro'>
                        <Linkedin className="text-3xl" />
                    </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}