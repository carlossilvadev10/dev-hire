import React from "react";
import { MdSearch } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi2";

const JobSearchBar = () => {
    return (
        <div className = "w-full max-w-4xl mx-auto mt-6">
            <div className = "flex flex-col md:flex-row bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
                <div className = "flex items-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 px-4 py-3 sm:py-6 w-full md:w-1/2">
                    <HiBriefcase className = "text-gray-500 text-xl mr-2" />
                    <input type = "text" placeholder = "Puesto o empresa" className = "w-full outline-none" />
                </div>
                <div className = "flex items-center border-b md:border-b-0 border-gray-200 dark:border-gray-700 px-4 py-3 sm:py-6 w-full md:w-1/2">
                    <FaMap className = "text-gray-500 text-xl mr-2" />
                    <input type = "text" placeholder = "Ciudad o código postal" className = "w-full outline-none" />
                </div>
                <button className = "flex items-center justify-center gap-2 text-white px-8 py-3 sm:py-6 text-sm md:text-base w-full md:w-auto bg-blue-700 hover:bg-blue-800 transition-all duration-300 min-w-35 whitespace-nowrap cursor-pointer">
                    <MdSearch className = "text-xl" />
                    Buscar
                </button>
            </div>
        </div>
    )
}

export default JobSearchBar;