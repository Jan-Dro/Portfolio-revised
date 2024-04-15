import React from "react";
import { Link } from "react-scroll";

export default function Header(){
    return (
        <header className="header">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="title">
                        Jesus <br /> Alejandro
                    </div>
                    <Link to="contact">
                        <button className="btn btn-sm">Let's chat</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}