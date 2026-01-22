"use client";

import React from "react";
import Heading from "@/components/Helper/Heading";
import TopCompanyCard from "./TopCompanyCard";
import { companyData } from "@/constants/constant";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLarge: {
        breakpoint: { max: 3000, min: 1400 },
        items: 4,
        slidesToSlide: 1,
    },
    desktop: {
        breakpoint: { max: 1399, min: 1024 },
        items: 3,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1023, min: 464 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 463, min: 0 },
        items: 1,
        slidesToSlide: 1,
    }
};

const TopCompany = () => {
    return (
        <section className = "py-16">
            <motion.div variants = {fadeIn("up", 0)} initial = "hidden" whileInView = "show" viewport = {{ once: true, margin: "-100px" }}>
                <Heading heading = "Empresas que confían en nosotros" subHeading = "Compañías líderes que confían en nuestra plataforma para contratar a los mejores profesionales." />
            </motion.div>
            <motion.div variants = {fadeInUp} initial = "hidden" whileInView = "show" viewport = {{ once: true, margin: "-50px" }} className = "w-[85%] mt-10 mx-auto">
                <Carousel showDots = {false} responsive = {responsive} infinite = {true} autoPlay = {true} autoPlaySpeed = {3000}>
                    {
                        companyData.map((company) => (
                            <TopCompanyCard key = {company.id} company = {company} />
                        ))
                    }
                </Carousel>
            </motion.div>
        </section>
    )
}

export default TopCompany;