import React from "react";
import { motion } from "framer-motion";
import { fadein } from "../variant";
import sugoi from '../assets/SugoiSamurai.png'
import terminal from '../assets/terminal.png'
import stocks from '../assets/SamuraiStocks.png'
import {Link} from 'react-router-dom'
export default function Work(){
    return(
        <section className="section mt-20 " id="work">
            <div className="container mx-auto">
                <div>
                <div className="flex flex-col lg:flex-row gap-x 10">
                    <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
                        <div>
                            <h2 className="h2 leading-tight" >My latest <br />
                            Work.
                            </h2>
                            <p>
                                Here are my latest projects, mostly Fullstack Applications. These are projects I have personally done myself and or while leading a group of engineers in a project.
                            </p>
                            <Link to={'http://www.github.com/jan-dro'}>
                            <button className="btn btn-sm">View all projects
                            </button>                                
                            </Link>

                        </div>
                        <div className="flex-2">
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1" >
                           {/* overlay */}
                           <div className="group-hover:bg-black/70 w-full h-full abosulte z-40 transition-all duration-300"></div>
                            {/* image */}
                            <img className="group-hover:scale-125 transition-all duration-500" src={sugoi} alt="sugoi"  />
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"><span className="text-gradient">Fullstack E-Commerce Website</span></div>
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white" >
                                    Sugoi Samurai
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="flex-1">
                    <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1" >
                           {/* overlay */}
                           <div className="group-hover:bg-black/70 w-full h-full abosulte z-40 transition-all duration-300"></div>
                            {/* image */}
                            <img className="group-hover:scale-125 transition-all duration-500" src={terminal} alt="sugoi"  />
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"><span className="text-gradient">Code Editor web app(COMING SOON)</span></div>
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white">
                                    MythicScript
                                </span>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1" >
                           {/* overlay */}
                           <div className="group-hover:bg-black/70 w-full h-full abosulte z-40 transition-all duration-300"></div>
                            {/* image */}
                            <img className="group-hover:scale-125 transition-all duration-500" src={stocks} alt="sugoi"  />
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"><span className="text-gradient">Fullstack Stock Tracker Website</span></div>
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <Link to='https://github.com/Jan-Dro/samurAI-stocks'>
                                <span className="text-3xl text-black">
                                    Samurai Stock
                                </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}