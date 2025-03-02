import NavBar from "./navigation/nav-bar";
import Image from "next/image";

export default function Header() {
    return (
       <>
            <div className="flex justify-center pb-5 bg-[#2a6235]">
                <div className="container">
                    <NavBar />

                    <div className="w-full grid grid-cols-2 gap-2 mt-5">
                        <div className="p-4">
                            <p className="text-white font-semibold text-xxl">
                                <span className="block">Choisissez</span>
                                <span className="block">un projet qui</span>
                                <span className="block">vous parle.</span>
                            </p>

                            <p className="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex fuga animi eius, magnam sint cupiditate</p>

                            <button className="text-orange-500 text-3xl font-semibold rounded-full mt-5 px-5 py-3 bg-white hover:text-white hover:bg-[#f05c2c] hover:cursor-pointer">
                                En savoir plus sur l'incubateur
                            </button>
                        </div>

                        <div className="w-full relative">
                            <Image 
                                src="/image1.webp"
                                alt="image d'illustration"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div> 
            </div>
       </>
    )
}