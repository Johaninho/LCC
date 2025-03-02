import Link from "next/link";
import LCCLogo from "./logo";
import NavLinks from "./nav-link";

export default function NavBar () {
    return (
        
        <div className="w-full navbar sticky top-0 flex inline-flex items-center justify-between px-5 bg-white rounded-b-2xl z-50">
            <div className="flex inline-flex items-center gap-5">
                < LCCLogo />
                < NavLinks />
            </div>

            <Link
                href= "/Contact"
                className="py-2 px-7 bg-black text-xl text-white rounded-full hover:bg-[#f05c2c]"
            >
                <p className="text-xl"> Contact </p>
            </Link>
        </div>
    )
}