import React from "react";
import Link from "next/link";

type FooterColumnProps = {
    section: {
        id: number;
        title: string;
        links: {
            label: string;
        }[];
    };
};

const FooterColumn = ({ section }: FooterColumnProps) => {
    return (
        <div className = "space-y-6 text-center sm:text-start">
            <h3 className = "text-lg font-bold text-gray-800 dark:text-gray-200">
                {section.title}
            </h3>
            <div className = "flex flex-col items-center sm:items-start space-y-3">
                {
                    section.links.map((link, i) => (
                        <Link key = {i} href = "/" className = "text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-300 w-fit cursor-pointer" >
                            {link.label}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default FooterColumn;