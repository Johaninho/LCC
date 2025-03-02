"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LCCHighlight() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        setPosition({
          x: e.clientX - left - width / 2,
          y: e.clientY - top - height / 2,
        });
    };

    return (
        <div className="relative w-full min-h-screen bg-black flex flex-col items-center justify-end">
            {/* Background avec effet lumineux */}
            <div 
                onMouseMove={handleMouseMove}
                className="absolute inset-0 w-full h-full overflow-hidden"
            >
                <motion.div
                    className="absolute w-full h-full bg-gradient-to-r from-blue-500 to-red-500 blur-[200px] opacity-50"
                    animate={{ x: position.x, y: position.y }}
                    transition={{ ease: "linear", duration: 0.1 }}
                />
            </div>

            {/* Section verte en bas */}
            <div className="relative container h-[300px] bg-[#2a6235] rounded-t-3xl flex items-center justify-center shadow-lg">
                <p className="text-[7rem]  font-bold text-white mix-blend-difference">
                    LCC
                </p>
            </div>
        </div>
    );
}
