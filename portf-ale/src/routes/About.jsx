import React from "react";
import { motion } from "framer-motion";
import { fadein } from "../variant";
import CountUp from 'react-countup'
import { useInView } from "react-intersection-observer";

export default function About(){
    const [ref, inView] = useInView({
        threshold: 0.5
    })
    return(
        <>
        <section className="section mt-20 pb-20" id="about" ref={ref}>
    <div className="container mx-auto">
        <div>
            <div className="flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">
            <motion.div
                variants={fadein('left', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                className="flex-1"
                >
                    <h2 className="text-4xl">About me</h2>
                    <p>
                        Hi! I'm an Army Veteran turned Software Engineer with a little over 2 years of software development experience. I have over 7 years of sales experience as well, but my real passion is tech. I discovered this passion when I was 12 years old, and it was my wife and kid who finally pushed me to make the transition. <br />
                        So let's connect and get to know me! 
                    </p>
                    <div className="flex">
                        <div className="mr-10">
                            <div className="text-[40px] font-tertiary text-gradient mv-2" >
                                { inView ?  <CountUp start={0} end={2} duration={6} /> : null}
                            </div>
                            <div className="font-primary text-sm tracking-[2px]" >
                                Years of <br />
                                Software Engineer Experience
                            </div>
                        </div>
                        <div>
                            <div className="text-[40px] font-tertiary text-gradient mv-2" >
                                { inView ?  <CountUp start={0} end={7} duration={5} /> : null}
                            </div>
                            <div className="font-primary text-sm tracking-[2px]" >
                                Years of <br />
                                Sales Experience
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
</section>
        </>
    )
}