"use client";

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);

    const openNav = () => {
        setShowNav(true);
    }

    const closeNav = () => {
        setShowNav(false);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280 && showNav) { // 1280px es el breakpoint xl de Tailwind
                setShowNav(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [showNav]);

    return (
        <div>
            <Nav openNav = {openNav} />
            <MobileNav showNav = {showNav} closeNav = {closeNav} />
        </div>
    )
}

export default ResponsiveNav;