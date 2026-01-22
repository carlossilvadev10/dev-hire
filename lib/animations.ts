import { Variants } from "framer-motion";

// Fade in desde direcciones
export const fadeIn = (
    direction: "up" | "down" | "left" | "right",
    delay: number = 0
): Variants => ({
    hidden: {
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        opacity: 0,
    },
    show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 0.8,
            delay,
            ease: [0.25, 0.6, 0.3, 0.8],
        },
    },
});

// Scale in
export const scaleIn = (delay: number = 0): Variants => ({
    hidden: {
        scale: 0.8,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 0.6,
            delay,
            ease: "easeOut",
        },
    },
});

// Stagger container
export const staggerContainer = (
    staggerChildren: number = 0.1,
    delayChildren: number = 0
): Variants => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren,
            delayChildren,
        },
    },
});

// Fade in simple
export const fadeInUp: Variants = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

// Slide in from side
export const slideIn = (
    direction: "left" | "right",
    delay: number = 0
): Variants => ({
    hidden: {
        x: direction === "left" ? -100 : 100,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay,
        },
    },
});