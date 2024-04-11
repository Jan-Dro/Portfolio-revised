import React from "react";

export default function Header(){
    return (
        <header className="header">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="title">
                        Jesus <br /> Alejandro
                    </div>

                    <button className="btn btn-sm">Let's chat</button>
                </div>
            </div>
        </header>
    );
}