"use client";

import React from "react";
import JobSearchBar from "./JobSearchBar";
import { popularSearches } from "@/constants/constant";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const Hero = () => {
    return (
        <section className = "flex flex-col justify-center w-full h-screen relative pt-8">
            <div className = "grid grid-cols-1 xl:grid-cols-2 gap-10 w-[90%] md:w-[85%] mx-auto items-center">
                {/* text content */}
                <motion.div variants = {fadeIn("right", 0)} initial = "hidden" animate = "show" className = "text-center xl:text-start">
                    <h1 className = "text-3xl sm:text-6xl font-bold font-heading">
                        Conecta con empresas que buscan tu stack
                    </h1>
                    <p className = "mt-4 text-sm sm:text-lg font-medium">
                        Descubre oportunidades tech que se ajustan a tu experiencia y tecnologías.
                    </p>
                    <JobSearchBar />
                    <div className = "mt-6">
                        <p className = "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Búsquedas populares:
                        </p>
                        <div className = "flex flex-wrap justify-center xl:justify-start gap-2">
                            {
                                popularSearches.map((search, i) => (
                                    <span key = {i} className = "px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-cyan-100 dark:hover:bg-cyan-900 cursor-pointer transition-all duration-300">
                                        {search}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                </motion.div>
                {/* image content */}
                <motion.div variants = {fadeIn("left", 0.2)} initial = "hidden" animate = "show" className = "hidden xl:block mx-auto">
                    <Image src = "/images/hero.png" alt = "hero-img" width = {900} height = {900} />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero;