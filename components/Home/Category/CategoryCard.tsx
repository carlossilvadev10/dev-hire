"use client";

import React, { JSX } from "react";
import Tilt from "react-parallax-tilt";

type CategoryCardProps = {
    category: {
        id: number;
        name: string;
        openPositions: number;
        icon: JSX.Element;
    }
}

const CategoryCard = ({ category }: CategoryCardProps) => {
    return (
        <Tilt scale = {1.1} transitionSpeed = {500}>
            <div className = "p-6 bg-gray-50 dark:bg-gray-900 shadow-md">
                <div className = "flex flex-col items-center justify-center w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto">
                    {category.icon}
                </div>
                <h3 className = "mt-3 font-medium text-center text-gray-800 dark:text-gray-200">
                    {category.name}
                </h3>
                <p className = "mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
                    ({category.openPositions} ofertas activas)
                </p>
            </div>
        </Tilt>
    )
}

export default CategoryCard;