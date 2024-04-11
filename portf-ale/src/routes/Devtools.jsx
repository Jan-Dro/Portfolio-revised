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
    const itemsPerView = 3; // Number of items you want to show at a time
    const scrollInterval = 3000; // 3000ms or 3 seconds for each image change

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % languageImages.length);
        }, scrollInterval);

        // Clear interval on component unmount
        return () => clearInterval(timer);
    }, []);

    // Slice out the images to be visible based on the currentIndex
    const visibleImages = languageImages.slice(currentIndex, currentIndex + itemsPerView);

    // If at the end of the array, add the beginning images to the array
    while (visibleImages.length < itemsPerView) {
        visibleImages.push(...languageImages.slice(0, itemsPerView - visibleImages.length));
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold mb-8" id="devtools">Devtools</h2>
            <div className="grid grid-flow-col auto-cols-max gap-4">
                {visibleImages.map((image, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={image.src} alt={image.name} className="w-24 h-24 object-contain" />
                        <span className="mt-2 text-sm font-medium">{image.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}