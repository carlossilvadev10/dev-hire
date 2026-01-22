"use client";

import React from "react";
import Heading from "@/components/Helper/Heading";
import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "@/constants/constant";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/animations";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    all: {
        breakpoint: { max: 3000, min: 0 },
        items: 1,
        slidesToSlide: 1,
    }
};

const Testimonial = () => {
    return (
        <section className = "py-16">
            <motion.div variants = {fadeIn("up", 0)} initial = "hidden" whileInView = "show" viewport = {{ once: true, margin: "-100px" }}>
                <Heading heading = "Testimonios de nuestra comunidad" subHeading = "Miles de desarrolladores y empresas confían en DevHire para conectar talento con oportunidades." />
            </motion.div>
            <div className = "w-[85%] mx-auto mt-10">
                <Carousel showDots = {false} responsive = {responsive} infinite = {true} autoPlay = {true} autoPlaySpeed = {3000}>
                    {
                        testimonialData.map((testimonial, index) => (
                            <motion.div key = {testimonial.id} variants = {slideIn("right", index * 0.1)} initial = "hidden" whileInView = "show" viewport = {{ once: true }} >
                                <TestimonialCard testimonial = {testimonial} />
                            </motion.div>
                        ))
                    }
                </Carousel>
            </div>
        </section>
    )
}

export default Testimonial;