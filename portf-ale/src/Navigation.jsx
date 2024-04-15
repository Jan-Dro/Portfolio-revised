import React from "react";
import { IoHome as Home } from "react-icons/io5";
import { FaTools as Framework } from "react-icons/fa";
import { BsPersonFill as AboutMe } from "react-icons/bs";
import { FaClipboardCheck as WorkCompleted } from "react-icons/fa6";
import { Link } from "react-scroll";
import Contact from "./routes/Contact";
import { MdOutlineEmail as Email} from "react-icons/md";



export default function Nav() {
    return(
        <>
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
            <div className="container mx-auto">
                <div className="w-full bg-black/20 h-[60px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50">
                    <Link to="home" activeClass="active" smooth={true} spy={true} offset={-200} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                        <Home />
                    </Link>
                    <Link to="devtools" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                        <Framework />
                    </Link>
                    <Link to="about" activeClass="active" smooth={true} spy={true} offset={-60}  className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                        <AboutMe />            
                    </Link>
                    <Link to="work" activeClass="active" smooth={true} spy={true} offset={-60} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                        <WorkCompleted />    
                    </Link>
                    <Link to="contact" activeClass="active" smooth={true} spy={true} offset={60} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                            <Email />
                    </Link>
                </div>
            </div>
        </nav>
        </>
    )
}