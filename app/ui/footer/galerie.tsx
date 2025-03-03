"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "../imageSlider";


export default function Galerie() {

    return (
        <div className="w-full flex justify-center mb-7 bg-white">
            <div className="container">
                <div className="my-6">
                    <p className="text-black text-4xl pt-5 font-semibold text-center mb-2">Galerie</p>
                    <p className="w-full text-gray-500 pb-5 text-lg text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi magnam at, 
                        sapiente minus harum quisquam temporibus soluta odit tempore perferendis perspiciatis 
                        esse voluptatem officia eos consectetur ratione consequuntur distinctio repellendus?
                    </p>
                </div>

                <ImageSlider />
                
            </div>
        </div>
    );
}
