import React, { useState, useEffect } from 'react';
import javascript from '../assets/JavaScript-Emblem.png';
import python from '../assets/Python_logo_01.svg.png';
import react from '../assets/React-icon.svg.png';
import docker from '../assets/Docker-Logo.png';
import git from '../assets/git.webp';
import html from '../assets/html.png';
import next from '../assets/nextjs.webp';
import css from '../assets/css1.webp';
import django from '../assets/django.png';
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'

const languageImages = [
    { name: 'JavaScript', src: javascript },
    { name: 'Python', src: python },
    { name: 'React', src: react },
    {name: 'Django', src: django},
    {name: 'Html', src: html},
    {name: 'Next', src: next},
    {name: 'Docker', src: docker},
    {name: 'Git', src: git},
    {name: 'Css', src: css}
];

export default function Devtools() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 3; 
    const scrollInterval = 3000; 

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % languageImages.length);
        }, scrollInterval);

        return () => clearInterval(timer);
    }, []);

    const visibleImages = languageImages.slice(currentIndex, currentIndex + itemsPerView);

    while (visibleImages.length < itemsPerView) {
        visibleImages.push(...languageImages.slice(0, itemsPerView - visibleImages.length));
    }

    return (
        // WORKS
        // <section className='section' id="devtools">
        //     <div className='container mx-auto'>
        //         <div className="flex flex-col items-center justify-center">
        //             <h2 className="text-2xl font-bold mb-8" id="devtools">Devtools</h2>
        //             <div className="grid grid-flow-col auto-cols-max gap-4">
        //              {visibleImages.map((image, index) => (
        //                     <div key={index} className="flex flex-col items-center">
        //                         <img src={image.src} alt={image.name} className="w-24 h-24 object-contain" />
        //                         <span className="mt-2 text-sm font-medium">{image.name}</span>
        //                      </div>
        //                     ))} 
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section className='section' id='devtools'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-20 max-w-[80%] text-center items-center'>
                    <div className='flex flex-col items-center gap-4'>
                        <h1 className='font-semibold text-white text-[50px]'>Skills{" "} 
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                            {" "}
                            &{" "}
                            </span>
                            Technologies
                            </h1>
                            <p className="text-gray-400 text-[20px]">
                                using the latest tech this world has to offer
                            </p>
                                <Swiper
                                    slidesPerView={3}
                                    loop={true}
                                    autoplay={{
                                        delay: 0,
                                        disableOnInteraction: false
                                }}
                                speed={5000}
                                modules={[Autoplay]}
                            className='max-w-[80%]'
                                >
                                {visibleImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={image.src}
                                        alt={image.name}
                                    width={80}
                                        height={80}
                                    />
                                </SwiperSlide>
                                ))}
                                </Swiper>
                                <Swiper
                                    slidesPerView={3}
                                    loop={true}
                                    autoplay={{
                                        delay: 0,
                                        disableOnInteraction: false,
                                        reverseDirection: true
                                }}
                                speed={5000}
                                modules={[Autoplay]}
                            className='max-w-[80%]'
                                >
                                {visibleImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={image.src}
                                        alt={image.name}
                                    width={80}
                                        height={80}
                                    />
                                </SwiperSlide>
                                ))}
                                </Swiper>
                            </div>
                    </div>
                </div>
        </section>
    );
}
