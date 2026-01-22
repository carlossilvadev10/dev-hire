import React from "react";
import Image from "next/image";

type TestimonialCardProps = {
    testimonial: {
        id: number;
        image: string;
        name: string;
        profession: string;
        title: string;
        description: string;
    }
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
    return (
        <div className = "w-full lg:w-[65%] mx-auto">
            <Image src = {testimonial.image} alt = {testimonial.name} width = {80} height = {80} className = "object-cover mx-auto" />
            <h4 className = "mt-4 text-lg font-bold text-blue-600 dark:text-blue-400 text-center uppercase">
                {testimonial.title}
            </h4>
            <p className = "mt-2 text-center text-gray-600 dark:text-gray-400">
                {testimonial.description}
            </p>
            <div className = "mt-8 text-center">
                <h3 className = "text-xl font-semibold text-gray-700 dark:text-gray-300">
                    {testimonial.name}
                </h3>
                <p className = "mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.profession}
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard;