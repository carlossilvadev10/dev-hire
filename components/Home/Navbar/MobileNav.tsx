import React from "react";
import Link from "next/link";
import { navLinks } from "@/constants/constant";
import { CgClose } from "react-icons/cg";

type MobileNavProps = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: MobileNavProps) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-full";

    return (
        <div className = "">
            {/* overlay */}
            <div className = {`fixed w-full h-screen inset-0 transform transition-all duration-300 right-0 z-20000 bg-black opacity-70 ${navOpen}`} />
            {/* navLinks */}
            <div className = {`flex flex-col justify-center w-[80%] sm:w-[60%] h-full fixed transform text-white transition-all duration-500 delay-300 right-0 bg-cyan-800 space-y-6 z-30000 ${navOpen}`}>
                {
                    navLinks.map((link) => (
                        <Link key = {link.id} href = {link.url} className = "text-white w-fit text-xl ml-10 border-b-[1.5px] border-white pb-1 sm:text-[30px]">
                            {link.label}
                        </Link>
                    ))
                }
                {/* close icon */}
                <CgClose className = "absolute w-8 h-8 sm:w-10 sm:h-10 top-10 right-12 cursor-pointer" onClick = {closeNav} />
            </div>
        </div>
    )
}

export default MobileNav;