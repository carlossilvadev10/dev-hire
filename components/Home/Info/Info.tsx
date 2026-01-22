"use client";

import React from "react";
import Image from "next/image";
import { BiCheck } from "react-icons/bi";
import { features } from "@/constants/constant";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const Info = () => {
    return (
        <section className = "py-16">
            <div className = "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-[85%] mx-auto">
                <motion.div variants = {fadeIn("right", 0)} initial = "hidden" whileInView = "show" className = "">
                    <Image src = "/images/a.png" alt = "img-info" width = {1000} height = {1000} />
                </motion.div>
                <motion.div variants = {fadeIn("left", 0.2)} initial = "hidden" whileInView = "show" className = "">
                    <h2 className = "text-3xl md:text-4xl lg:text-5xl font-bold leading-8 lg:leading-16">
                        Conecta con desarrolladores de talento excepcional
                    </h2>
                    <p className = "mt-4 text-gray-700 dark:text-gray-300">
                        Accede a una red global de profesionales tech verificados. Encuentra desde juniors prometedores hasta seniors experimentados listos para impulsar tus proyectos.
                    </p>
                    <div className = "mt-6">
                        {
                            features.map((feature, i) => (
                                <div key = {i} className = "flex items-center space-x-2 mb-4">
                                    <BiCheck className = "w-7 h-7 text-pink-600 shrink-0" />
                                    <span className = "text-gray-700 dark:text-gray-300 font-medium">
                                        {feature}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                    <div className = "mt-6">
                        <button className = "px-10 py-4 bg-blue-700 hover:bg-blue-800 transition-all duration-300 rounded-lg text-white text-center cursor-pointer">
                            Publicar una oferta
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Info;