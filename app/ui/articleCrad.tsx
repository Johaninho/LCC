import { IoArrowForwardOutline, IoPeopleOutline } from "react-icons/io5";
import { MdMemory } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ title, body }: { title: string; body: string }) {
    return (
        <div className="w-sm p-5 rounded-3xl hover:shadow-2xl hover:cursor-pointer bg-white overflow-hidden shadow-lg flex flex-col">
            <Link href="#"></Link>
            {/* images */}
            <div className="relative">
                <Image
                    className="w-full rounded-xl"
                    width={200}
                    height={150}
                    src="/image1.webp"
                    alt="some random pictures" 
                />
                <div
                    className="hover:bg-transparent rounded-xl transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
                
                <div
                    className="text-sm flex inline-flex items-center gap-2 font-bold border border-white absolute rounded-full top-0 left-5 bg-[#2a6235] px-4 py-2 mt-3 mr-3"
                >
                    <MdMemory size={20} className="text-white" />
                    <p className="text-white">Low Tech</p>
                </div>
            </div>

            {/* title and description */}
            <div className="py-4 mb-auto">
                <Link href="#"
                    className="font-bold text-xl text-[#f05c2c] inline-block inline-block mb-2"
                >
                    {title}
                </Link>

                <p className="text-gray-500"> {body}</p>
            </div>

            {/* tag list */}
            <div className="flex inline-flex items-center gap-2 mt-2">
                < IoPeopleOutline className="text-2xl"/>
                <p className="text-black text-lg font-semibold">200 fermiers bénéficiaires</p>
            </div>
            <div className="py-2 mb-auto flex inline-flex justify-between">
                <button
                    className={`flex items-center rounded-full border px-4 py-1 text-sm font-medium transition-all border-[#2a6235] text-[#2a6235] hover:bg-[#2a6235] hover:text-white hover:border-white`}
                >
                    <p className="md:block">Cameroun</p>
                </button>

                <button
                    className={`flex items-center rounded-full border px-4 py-1 text-sm font-medium transition-all border-[#2a6235] text-[#2a6235] hover:bg-[#2a6235] hover:text-white hover:border-white`}
                >
                    <p className="md:block">Forêt et biodiversité</p>
                </button>

                <button
                    className={`flex items-center rounded-full border px-4 py-1 text-sm font-medium transition-all border-[#2a6235] text-[#2a6235] hover:bg-[#2a6235] hover:text-white hover:border-white`}
                >
                    <p className="md:block">Réalisé</p>
                </button>
            </div>

            {/* card footer*/}
            <button className="text-left text-[#f05c2c] font-bold flex inline-flex items-center gap-3">
                <p className="text-xl">En savoir plus</p>
                <IoArrowForwardOutline className="text-xl"/>
            </button>
        </div>
    )
}