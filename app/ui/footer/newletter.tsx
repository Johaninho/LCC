'use client'

import { useState } from "react";

export default function NewsLetter() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email inscrit :", email);
        setEmail(""); 
    };

    return (
        <div className="w-full h-[250px] mt-24 flex justify-between">
            <div className="flex flex-col">
                <h2 className="text-3xl text-white font-semibold">La Newsletter</h2>
                <p className="text-md text-white">Recevez les dernières actualités directement par email.</p>
            </div>

            <form className="flex gap-4" onSubmit={handleSubmit}>
                <input 
                    className="h-[50px] w-[370px] bg-white rounded-md px-5 text-gray-500 outline-none"
                    type="email"
                    name="newsletter"
                    id="newsletter"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button 
                    type="submit" 
                    className="py-2 h-[50px] px-7 bg-black text-xl text-white rounded-full hover:bg-[#f05c2c] transition-all"
                >
                    Envoyer
                </button>
            </form>
        </div>
    )
}