"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants/constant";
import { HiBars3BottomRight } from "react-icons/hi2";
import { LuNetwork } from "react-icons/lu";
import ThemeToggler from "@/components/Helper/ThemeToggler";

type NavProps = {
    openNav: () => void;
}

const Nav = ({ openNav }: NavProps) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setNavBg(window.scrollY >= 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className = {`fixed w-full h-[8vh] xl:h-[12vh] z-10000 transition-all duration-300 ${navBg ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"}`}>
            <div className = "flex items-center justify-between h-full w-[92%] mx-auto">
                <div className = "flex items-center sm:space-x-20">
                    {/* logo */}
                    <div className = "flex items-center space-x-2">
                        <div className = "flex flex-col items-center justify-center w-10 h-10 bg-cyan-800 dark:bg-white rounded-full">
                            <LuNetwork className = "w-5 h-5 text-white dark:text-black" />
                        </div>
                        <p className = "hidden sm:block text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                            DevHire
                        </p>
                    </div>
                    {/* navlinks */}
                    <nav className = "hidden xl:flex items-center space-x-8">
                        {
                            navLinks.map((link) => (
                                <Link key = {link.id} href = {link.url} className = "text-base hover:text-cyan-800 dark:hover:text-cyan-200 font-medium transition-all duration-300">
                                    {link.label}
                                </Link>
                            ))
                        }
                    </nav>
                </div>
                {/* buttons */}
                <div className = "flex items-center space-x-4">
                    <button className = "px-8 py-2.5 text-xs sm:text-sm rounded-lg cursor-pointer bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 transition-all duration-300">
                        Iniciar sesión
                    </button>
                    <button className = "hidden sm:block px-8 py-2.5 text-sm rounded-lg cursor-pointer text-white bg-cyan-700 hover:bg-cyan-900 transition-all duration-300">
                        Publicar empleo
                    </button>
                    {/* theme toggler */}
                    <ThemeToggler />
                    {/* burguer menu */}
                    <HiBars3BottomRight className = "xl:hidden w-8 h-8 text-black dark:text-white cursor-pointer" onClick = {openNav} />
                </div>
            </div>
        </header>
    )
}

export default Nav;