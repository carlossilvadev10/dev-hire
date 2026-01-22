"use client";

import React from "react";
import Heading from "@/components/Helper/Heading";
import { categoryData } from "@/constants/constant";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleIn } from "@/lib/animations";

const Category = () => {
    return (
        <section className = "py-16">
            <motion.div variants = {fadeIn("up", 0)} initial = "hidden" whileInView = "show" viewport = {{ once: true, margin: "-100px" }}>
                <Heading heading = "Explora por categoría" subHeading = "16 780 ofertas activas - 300 publicadas hoy."  />
            </motion.div>
            <motion.div variants = {staggerContainer(0.1, 0.2)} initial = "hidden" whileInView = "show" viewport = {{ once: true, margin: "-50px" }} className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[85%] mx-auto mt-10">
                {
                    categoryData.map((category) => (
                        <motion.div key = {category.id} variants = {scaleIn(0)} className = "">
                            <CategoryCard category = {category} />
                        </motion.div>
                    ))
                }
            </motion.div>
        </section>
    )
}

export default Category