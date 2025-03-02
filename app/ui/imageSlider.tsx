import { motion } from "framer-motion";
import Slider from "react-slick";
import Image from "next/image";
import clsx from "clsx";

export default function ImageSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "50px",
    };

    return (
        <>
            <Slider {...settings} className="flex mt-6">
                {[
                    { src: "/image1.webp", alt: "image1", color: "#f05c2c", rounded: "rounded-3xl" },
                    { src: "/galerie3.jpg", alt: "image2", color: "#001d6c", rounded: "rounded-full" },
                    { src: "/galerie1.jpg", alt: "image3", color: "#2a6235", rounded: "rounded-full" },
                    { src: "/galerie3.jpg", alt: "image4", color: "#808080", rounded: "rounded-3xl" },
                ].map((image, index) => (
                    <div key={index} className="px-2 my-5 relative group perspective">
                        <motion.div
                            className="relative w-full"
                            whileHover={{ rotateY: 180 }}
                            transition={{ duration: 0.5 }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Image + Overlay ensemble pour que le flip fonctionne */}
                            <div className={clsx("relative w-full", image.rounded)} style={{ transformStyle: "preserve-3d" }}>
                                {/* Image */}
                                <Image 
                                    src={image.src}
                                    alt={image.alt}
                                    width={500}
                                    height={400}
                                    className={clsx("w-full border-[15px] hover:cursor-pointer", image.rounded)}
                                    style={{ borderColor: image.color }}
                                />

                                <motion.div
                                    className={clsx(
                                        "absolute inset-0 opacity-0 group-hover:opacity-80 cursor-pointer transition-opacity duration-300 flex items-center justify-center",
                                        image.rounded
                                    )}
                                    style={{ backgroundColor: image.color }}
                                >
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </Slider>
        </>
    )
}