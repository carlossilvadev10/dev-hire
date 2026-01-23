import React from "react";

type HeadingProps = {
    heading: string;
    subHeading: string;
}

const Heading = ({ heading, subHeading }: HeadingProps) => {
    return (
        <div className = "text-center w-[85%] mx-auto">
            <h2 className = "font-headingtext-gray-800 dark:text-gray-200 text-center text-2xl sm:text-3xl font-bold font-heading">
                {heading}
            </h2>
            <p className = "mt-3 text-center text-gray-500 dark:text-gray-400">
                {subHeading}
            </p>
        </div>
    )
}

export default Heading;