"use client";

import React from "react";
import Heading from "@/components/Helper/Heading";
import PriceCard from "./PriceCard";
import { plans } from "@/constants/constant";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, fadeInUp } from "@/lib/animations";

const Price = () => {
    return (
        <section className = "py-16">
            <motion.div variants = {fadeIn("up", 0)} initial = "hidden" whileInView = "show" viewport = {{ once: true, margin: "-100px" }}>
                <Heading heading = "Elige tu plan ideal" subHeading = "Desde startups hasta empresas consolidadas, tenemos el plan que se ajusta a tus necesidades." />
            </motion.div>
            <motion.div variants = {staggerContainer(0.2)} initial = "hidden" whileInView = "show" viewport = {{ once: true }} className = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-[85%] items-start mx-auto mt-10">
                {
                    plans.map((plan) => (
                        <motion.div key = {plan.id} variants = {fadeInUp} className = "">
                            <PriceCard plan = {plan} />
                        </motion.div>
                    ))
                }
            </motion.div>
        </section>
    )
}

export default Price;