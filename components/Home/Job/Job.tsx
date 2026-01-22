"use client";

import React from "react";
import Heading from "@/components/Helper/Heading";
import JobCard from "./JobCard";
import { jobs } from "@/constants/constant";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, fadeIn } from "@/lib/animations";

const Job = () => {
    return (
        <section className = "py-16">
            <motion.div variants = {fadeIn("up", 0)} initial = "hidden" whileInView = "show" viewport = {{ once: true, margin: "-100px" }}>
                <Heading heading = "Empleos destacados" subHeading = "Descubre oportunidades que se ajustan a tu perfil." />
            </motion.div>
            <motion.div variants = {staggerContainer(0.1)} initial = "hidden" whileInView = "show" viewport = {{ once: true }} className = "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 items-center w-[85%] mt-10 mx-auto">
                {
                    jobs.map((job) => (
                        <motion.div key = {job.id} variants = {fadeInUp}>
                            <JobCard job = {job} />
                        </motion.div>
                    ))
                }
            </motion.div>
            <motion.div variants = {fadeInUp} initial = "hidden" whileInView = "show" viewport = {{ once: true, margin: "-50px" }} className = "mt-10 text-center">
                <button className = "px-10 py-4 bg-blue-700 hover:bg-blue-800 transition-all duration-300 text-white cursor-pointer rounded-lg">
                    Ver todos los empleos
                </button>
            </motion.div>
        </section>
    )
}

export default Job;