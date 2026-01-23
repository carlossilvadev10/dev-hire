"use client";

import React from "react";
import { LuNetwork } from "react-icons/lu";
import { footerLinks } from "@/constants/constant";
import FooterColumn from "./FooterColumn";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const Footer = () => {
    return (
        <footer className = "py-16 bg-gray-200 dark:bg-gray-800">
            <motion.div variants = {staggerContainer(0.1)} initial = "hidden" whileInView = "show" viewport = {{ once: true }} className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 items-start w-[85%] mx-auto">
                <motion.div variants = {fadeInUp} className = "xl:col-span-2">
                    <div className = "flex items-center justify-center sm:justify-start space-x-2">
                        <div className = "flex flex-col items-center justify-center w-10 h-10 bg-cyan-800 dark:bg-white rounded-full">
                            <LuNetwork className = "w-5 h-5 text-white dark:text-black" />
                        </div>
                        <p className = "block text-xl md:text-2xl font-bold font-logo text-gray-800 dark:text-white">
                            DevHire
                        </p>
                    </div>
                    <p className = "mt-4 text-sm text-gray-600 dark:text-gray-400 text-center sm:text-start">
                        La plataforma líder en Latinoamérica para conectar talento tech con las mejores oportunidades laborales, ya sea que busques tu próximo desafío o quieras construir el equipo que tu empresa necesita.
                    </p>
                    <div className = "mt-4">
                        <h3 className = "text-base lg:text-xl text-gray-700 dark:text-gray-300 font-medium text-center sm:text-start">
                            Contáctanos
                        </h3>
                        <p className = "mt-1 text-gray-600 dark:text-gray-400 text-base lg:text-lg font-bold text-center sm:text-start">
                            +51 987 654 321
                        </p>
                    </div>
                    <p className = "text-sm text-gray-600 dark:text-gray-400 mt-2 text-center sm:text-start">
                        Lima, Perú
                    </p>
                    <p className = "text-sm text-gray-600 dark:text-gray-400 mt-2 text-center sm:text-start">
                        correo@gmail.com
                    </p>
                </motion.div>
                {
                    footerLinks.map((section) => (
                        <motion.div key = {section.id} variants = {fadeInUp} className = "">
                            <FooterColumn section = {section} />
                        </motion.div>
                    ))
                }
            </motion.div>
            <motion.div variants = {fadeInUp} initial = "hidden" whileInView = "show" viewport = {{ once: true, margin: "-50px" }} className = "pt-6 mt-10 border-t border-gray-300 dark:border-gray-700 w-[90%] mx-auto">
                <p className = "text-gray-500 text-center">
                    © {new Date().getFullYear()} DevHire. Todos los derechos reservados. Desarrollado por {" "}
                    <a href = "https://github.com/carlossilvadev10" target = "_blank" rel = "noopener noreferrer" className = "font-semibold hover:underline">
                        carlossilvadev10
                    </a>
                </p>
            </motion.div>
        </footer>
    )
}

export default Footer;