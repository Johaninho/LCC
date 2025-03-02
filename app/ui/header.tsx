"use client";

import { useState, useEffect, useCallback } from "react";
import NavBar from "./navigation/nav-bar";
import { motion } from "framer-motion";
import Image from "next/image";

const words = [
    { text: "vous parle.", color: "#ccc3f4" },
    { text: "vous inspire.", color: "#f05c2c" },
    { text: "vous passionne.", color: "white" },
];

export default function Header() {
    const [index, setIndex] = useState(0);

    const updateIndex = useCallback(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(updateIndex, 3000);
        return () => clearInterval(interval);
    }, [updateIndex]);

    return (
        <div className="flex justify-center pb-5 bg-[#2a6235]">
            <div className="container">
                <NavBar />

                <div className="w-full grid grid-cols-2 gap-2 mt-5">
                    {/* Texte animé */}
                    <div className="p-4">
                        <div className="text-white font-semibold text-xxl">
                            <span className="block">Choisissez</span>
                            <span className="block">un projet qui</span>
                            <motion.div
                                key={words[index].text}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="text-xxl font-bold"
                                style={{ color: words[index].color }}
                            >
                                {words[index].text}
                            </motion.div>
                        </div>

                        <p className="text-white mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex fuga animi eius, magnam sint cupiditate.
                        </p>

                        <button className="text-orange-500 text-3xl font-semibold rounded-full mt-5 px-5 py-3 bg-white hover:text-white hover:bg-[#f05c2c] hover:cursor-pointer">
                            En savoir plus sur l'incubateur
                        </button>
                    </div>

                    {/* Image */}
                    <div className="w-full relative">
                        <Image 
                            src="/image1.webp"
                            alt="image d'illustration"
                            width={500}      
                            height={300}  
                            className="rounded-xl shadow-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
