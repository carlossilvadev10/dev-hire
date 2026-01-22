import React from "react";
import Image from "next/image";
import { GrLocation } from "react-icons/gr";

type TopCompanyProps = {
    company: {
        id: number;
        img: string;
        name: string;
        location: string;
        position: string;
    }
}

const TopCompanyCard = ({ company }: TopCompanyProps) => {
    return (
        <div className = "bg-gray-100 dark:bg-gray-900 rounded-lg p-6 m-3">
            <Image src = {company.img} alt = {company.name} width = {80} height = {80} className = "object-cover mx-auto" />
            <h3 className = "text-lg font-medium mt-4 text-center text-gray-800 dark:text-gray-200">
                {company.name}
            </h3>
            <div className = "flex items-center justify-center space-x-1 text-center text-sm text-gray-500 mt-2">
                <GrLocation className = "w-4 h-4" />
                <p>{company.location}</p>
            </div>
            <div className = "px-10 py-3 cursor-pointer rounded-lg mt-4 text-sm text-center text-blue-800 hover:text-white dark:text-gray-200 bg-blue-700/10 hover:bg-blue-800 transition-all duration-300">
                {company.position} ofertas activas
            </div>
        </div>
    )
}

export default TopCompanyCard;