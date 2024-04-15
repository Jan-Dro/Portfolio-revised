import React, { useState, useEffect } from 'react';
import javascript from '../assets/js.png';
import python from '../assets/Python_logo_01.svg.png';
import react from '../assets/React-icon.svg.png';
import docker from '../assets/docker.png';
import git from '../assets/git.webp';
import html from '../assets/html.png';
import next from '../assets/nextjs.webp';
import css from '../assets/css1.webp';
import django from '../assets/django.png';
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import typescript from '../assets/typescript.png'
import tailwind from '../assets/tailwind.png'
import postgres from '../assets/postgresql.png'
import "swiper/css";

const languageImages = [
    { name: 'JavaScript', src: javascript },
    { name: 'Python', src: python },
    { name: 'React', src: react },
    { name: 'Django', src: django },
    { name: 'Html', src: html },
    { name: 'Next', src: next },
    { name: 'Docker', src: docker },
    { name: 'Git', src: git },
    { name: 'Css', src: css },
    { name: 'Typescript', src: typescript },
    { name: 'Tailwind CSS', src: tailwind },
    { name: 'Postgresql', src: postgres },
];

export default function Devtools() {
    return (
        <section className='section' id='devtools'>
            <div className='container mx-auto'>
                        <div
                            className="h-screen flex items-center justify-center "
                            >
                            <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
                                <div className="flex flex-col items-center gap-4">
                                <h1 className="font-semibold text-white text-[50px]">
                                    Skills{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                                    {" "}
                                    &{" "}
                                    </span>
                                    Technologies
                                </h1>
                                <p className="text-gray-400 text-[20px]">
                                    Using the latest tech this world has to offer
                                </p>
                                </div>
                                <Swiper
                                    slidesPerView={5} 
                                    spaceBetween={30} 
                                    loop={true}
                                    autoplay={{
                                        delay: 0,
                                        disableOnInteraction: false,
                                    }}
                                    speed={5000}
                                    modules={[Autoplay]}
                                    className='max-w-[80%]'
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 3, 
                                            spaceBetween: 20, 
                                        },
                                        768: {
                                            slidesPerView: 5,
                                            spaceBetween: 40,
                                        },
                                    }}
                                >
                                {languageImages.map((image, index) => (
                                <SwiperSlide key={index} className="flex flex-col items-center">
                                    <img
                                        src={image.src}
                                        alt={image.name}
                                        width={80}
                                        height={80}
                                    />
                                    <span className="mt-2 text-center">{image.name}</span>
                                </SwiperSlide>
                                ))}
                                </Swiper>
                                <Swiper
                                    slidesPerView={5} 
                                    spaceBetween={30} 
                                    loop={true}
                                    autoplay={{
                                        delay: 0,
                                        disableOnInteraction: false,
                                        reverseDirection: true
                                    }}
                                    speed={5000}
                                    modules={[Autoplay]}
                                    className='max-w-[80%]'
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 3, 
                                            spaceBetween: 20, 
                                        },
                                        768: {
                                            slidesPerView: 5,
                                            spaceBetween: 40,
                                        },
                                    }}
                                >
                                {languageImages.map((image, index) => (
                                <SwiperSlide key={index} className="flex flex-col items-center">
                                    <img
                                        src={image.src}
                                        alt={image.name}
                                        width={80}
                                        height={80}
                                    />
                                    <span className="mt-2 text-center">{image.name}</span>
                                </SwiperSlide>
                                ))}
                                </Swiper>                            
                            </div>
                    </div>
                </div>
        </section>
    );
}
