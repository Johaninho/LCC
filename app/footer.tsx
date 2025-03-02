import LCCHighlight from "./Glassmorphism";
import { IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";
import LCCLogo from "./ui/navigation/logo";
import NewsLetter from "./newletter";

export default function Footer() {

    return (
        <section className="w-full flex justify-center pb-5 bg-[#1074cc] relative">
            <div className="container">
                {/* Newsletter Section */}
                <NewsLetter />
            </div>

            {/* Footer chevauchant */}
            <footer className="absolute z-50 left-1/2 -translate-x-1/2 -bottom-25 bg-[#F5F5E9] p-8 rounded-2xl shadow-lg container">
                <div className="flex justify-between items-center mb-10">
                    <LCCLogo />
                    <div className="flex gap-4 text-4xl">
                        {[IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin].map((Icon, idx) => (
                            <Icon key={idx} className="hover:cursor-pointer hover:text-[#1074cc] transition-colors duration-300" />
                        ))}
                    </div>
                </div>

                <hr className="border-2 border-gray-500" />

                <div className="flex justify-between text-gray-700 text-sm mt-4">
                    <p className="text-xl font-bold">CompanyName © 202X. Tous droits réservés.</p>
                    <p>Rhoncus morbi et augue nec, in id ullamcorper at sit.</p>
                </div>
            </footer>

            {/* Effet de lumière arrière-plan */}
            <div className="absolute bottom-[-600] left-0 w-full z-0">
                <LCCHighlight />
            </div>
        </section>
    );
}