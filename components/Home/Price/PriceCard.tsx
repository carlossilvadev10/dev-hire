import React from "react";
import { BiCheck } from "react-icons/bi";

type PriceCardProps = {
    plan: {
        id: number;
        name: string;
        price: string;
        period: string;
        description: string;
        features: string[];
        recommended: boolean;
    }
}

const PriceCard = ({ plan }: PriceCardProps) => {
    return (
        <div className = "bg-gray-100 dark:bg-gray-900 p-10 rounded-lg relative">
            {
                plan.recommended && <div className = "px-6 py-1.5 absolute top-7 right-7 bg-green-800 text-white rounded-full text-xs">
                    Recomendado
                </div>
            }
            <h3 className = "text-3xl font-bold text-blue-900 dark:text-blue-100">
                {plan.name}
            </h3>
            <p className = "mt-2 text-sm text-gray-600 dark:text-gray-400">
                {plan.description}
            </p>
            <div className = "flex items-baseline gap-1 mt-4">
                <span className = "text-4xl font-bold text-blue-950 dark:text-blue-50">
                    S/.{plan.price}
                </span>
                <span className = "text-base text-gray-600 dark:text-gray-400">
                    / {plan.period}
                </span>
            </div>
            <div className = "mt-6 space-y-3">
                {
                    plan.features.map((feature, index) => (
                        <div key={index} className = "flex items-center gap-2">
                            <BiCheck className = "w-6 h-6 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                            <span className = "text-sm text-gray-700 dark:text-gray-300">
                                {feature}
                            </span>
                        </div>
                    ))
                }
            </div>
            <button className = "w-full mt-6 px-6 py-3 rounded-lg font-medium cursor-pointer text-blue-800 hover:text-white dark:text-gray-200 bg-blue-700/10 hover:bg-blue-800 transition-all duration-300">
                Comenzar ahora
            </button>
        </div>
    )
}

export default PriceCard;