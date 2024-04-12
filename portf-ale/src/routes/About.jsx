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
        <section className="section mt-20" id="about" ref={ref}>
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
                            <h2>About me</h2>
                            <h3>
                                I'm a fullstack software engineer with over 2 years of experience.
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sit distinctio fuga. Ducimus nulla culpa similique at ut, id deserunt quos quae dicta, illum consectetur temporibus architecto vero omnis commodi.
                            </p>
                            <div className="flex">
                                <div>
                                    <div className="text-[40px] font-tertiary text-gradient mv-2" >
                                        { inView ?  <CountUp start={0} end={2} duration={6} /> : null}
                                    </div>
                                    <div className="font-primary text-sm tracking-[2px]" >
                                        Years of <br />
                                        Experience
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