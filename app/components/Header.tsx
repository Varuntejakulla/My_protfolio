"use client";

import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/app/lib/constants";
import { fadeIn } from "@/app/lib/animations";
import { useState } from "react";
import {
    FiMenu,
    FiX,
    FiArrowUpRight,
    FiCpu,
    FiZap,
} from "react-icons/fi";
import { smoothScrollTo } from "@/app/utils/scroll";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (id: string) => {
        smoothScrollTo(id);
        setIsOpen(false);
    };

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={fadeIn as any}
            className="sticky top-0 z-50"
        >
            {/* =====================================================
                GLOBAL HEADER BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* Moving purple glow */}
                <motion.div
                    animate={{
                        x: ["-20%", "120%", "-20%"],
                        opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -top-20 h-40 w-1/3 rounded-full bg-purple-600/20 blur-3xl"
                />

                {/* Moving blue glow */}
                <motion.div
                    animate={{
                        x: ["120%", "-20%", "120%"],
                        opacity: [0.1, 0.25, 0.1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -top-10 right-0 h-32 w-1/3 rounded-full bg-blue-500/20 blur-3xl"
                />

                {/* Scan line */}
                <motion.div
                    animate={{
                        x: ["-100%", "200%"],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
                />

                {/* Bottom scan */}
                <motion.div
                    animate={{
                        x: ["200%", "-100%"],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute bottom-0 h-px w-1/4 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
                />
            </div>

            {/* =====================================================
                NAVBAR
            ====================================================== */}

            <nav className="relative border-b border-gray-800/70 bg-gray-950/80 backdrop-blur-2xl">

                {/* Animated top border */}
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 50%", "200% 50%"],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute left-0 right-0 top-0 h-px bg-[length:200%_100%] bg-gradient-to-r from-transparent via-purple-500 via-blue-500 to-transparent"
                />

                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

                    {/* =================================================
                        LOGO + ORBITAL SYSTEM
                    ================================================== */}

                    <motion.button
                        onClick={() => smoothScrollTo("home")}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.94 }}
                        className="relative flex items-center gap-3"
                    >
                        {/* Orbital system */}
                        <div className="relative flex h-10 w-10 items-center justify-center">

                            {/* Outer rotating ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-0 rounded-full border border-purple-500/30"
                            >
                                <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                            </motion.div>

                            {/* Reverse rotating ring */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-1 rounded-full border border-blue-500/40 border-dashed"
                            >
                                <span className="absolute -right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan-400" />
                            </motion.div>

                            {/* Inner pulse */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="absolute h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 blur-md"
                            />

                            {/* Core */}
                            <motion.div
                                animate={{
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-gray-950"
                            >
                                <FiCpu className="h-3.5 w-3.5 text-blue-400" />
                            </motion.div>

                            {/* Orbit particle */}
                            <motion.span
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-0"
                            >
                                <span className="absolute right-0 top-1/2 h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                            </motion.span>
                        </div>

                        {/* Logo */}
                        <div className="flex items-center">
                            <motion.span
                                animate={{
                                    backgroundPosition: [
                                        "0% 50%",
                                        "200% 50%",
                                    ],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="bg-[length:200%_100%] bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent"
                            >
                                varun
                            </motion.span>

                            {/* Blinking cursor */}
                            <motion.span
                                animate={{
                                    opacity: [1, 0, 1],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                }}
                                className="ml-1 h-5 w-px bg-cyan-400"
                            />
                        </div>
                    </motion.button>

                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================== */}

                    <ul className="hidden items-center gap-7 md:flex">

                        {navLinks.map((link, index) => (
                            <li key={link.name}>
                                <motion.button
                                    onClick={() =>
                                        handleNavClick(link.href)
                                    }
                                    whileHover={{
                                        y: -3,
                                        scale: 1.05,
                                    }}
                                    whileTap={{
                                        scale: 0.9,
                                    }}
                                    className="group relative px-2 py-3 text-sm text-gray-400 transition-colors hover:text-white"
                                >
                                    {/* Orbit dot */}
                                    <motion.span
                                        initial={{
                                            scale: 0,
                                            opacity: 0,
                                        }}
                                        whileHover={{
                                            scale: 1,
                                            opacity: 1,
                                        }}
                                        className="absolute -left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                                    />

                                    {link.name}

                                    {/* Underline */}
                                    <motion.span
                                        initial={{
                                            scaleX: 0,
                                        }}
                                        whileHover={{
                                            scaleX: 1,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
                                    />

                                    {/* Glow */}
                                    <motion.span
                                        initial={{
                                            opacity: 0,
                                            scale: 0.5,
                                        }}
                                        whileHover={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        className="absolute -bottom-1 left-1/2 h-3 w-10 -translate-x-1/2 rounded-full bg-blue-500/20 blur-md"
                                    />

                                    {/* Small rotating corner */}
                                    <motion.span
                                        initial={{
                                            rotate: 0,
                                            opacity: 0,
                                        }}
                                        whileHover={{
                                            rotate: 180,
                                            opacity: 1,
                                        }}
                                        className="absolute -right-1 top-1 h-1.5 w-1.5 border-r border-t border-cyan-400"
                                    />
                                </motion.button>
                            </li>
                        ))}

                    </ul>

                    {/* =================================================
                        RIGHT SIDE
                    ================================================== */}

                    <div className="flex items-center gap-3">

                        {/* AI status */}
                        <div className="hidden items-center gap-2 lg:flex">

                            <div className="relative flex h-3 w-3 items-center justify-center">

                                <motion.span
                                    animate={{
                                        scale: [1, 2.2, 1],
                                        opacity: [0.8, 0, 0.8],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                    className="absolute h-2 w-2 rounded-full bg-green-400"
                                />

                                <span className="relative h-1.5 w-1.5 rounded-full bg-green-400" />

                            </div>

                            <motion.span
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="text-[9px] uppercase tracking-[0.2em] text-gray-500"
                            >
                                AI Online
                            </motion.span>
                        </div>

                        {/* =================================================
                            HIRE ME
                        ================================================== */}

                        <motion.button
                            onClick={() => smoothScrollTo("contact")}
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.94,
                            }}
                            className="group relative hidden overflow-hidden rounded-full sm:flex"
                        >
                            {/* Rotating border */}
                            <motion.span
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute -inset-10 bg-conic-gradient from-purple-500 via-blue-500 via-cyan-400 to-purple-500 opacity-70"
                            />

                            {/* Inner */}
                            <span className="relative m-[1px] flex items-center gap-2 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white">

                                <motion.span
                                    animate={{
                                        rotate: [0, 20, -20, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                >
                                    <FiZap className="h-4 w-4 text-yellow-400" />
                                </motion.span>

                                Hire Me

                                <motion.span
                                    animate={{
                                        x: [0, 4, 0],
                                    }}
                                    transition={{
                                        duration: 1.4,
                                        repeat: Infinity,
                                    }}
                                >
                                    <FiArrowUpRight className="h-4 w-4 text-blue-400" />
                                </motion.span>

                            </span>
                        </motion.button>

                        {/* =================================================
                            MOBILE MENU BUTTON
                        ================================================== */}

                        <motion.button
                            whileTap={{
                                scale: 0.85,
                                rotate: 10,
                            }}
                            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 bg-gray-900/80 text-gray-300 md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={isOpen}
                        >
                            {/* Rotating border */}
                            <motion.span
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-0 rounded-lg border border-purple-500/20"
                            />

                            <AnimatePresence mode="wait">

                                {isOpen ? (
                                    <motion.span
                                        key="close"
                                        initial={{
                                            rotate: -180,
                                            scale: 0,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            rotate: 0,
                                            scale: 1,
                                            opacity: 1,
                                        }}
                                        exit={{
                                            rotate: 180,
                                            scale: 0,
                                            opacity: 0,
                                        }}
                                    >
                                        <FiX size={21} />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="menu"
                                        initial={{
                                            rotate: 180,
                                            scale: 0,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            rotate: 0,
                                            scale: 1,
                                            opacity: 1,
                                        }}
                                        exit={{
                                            rotate: -180,
                                            scale: 0,
                                            opacity: 0,
                                        }}
                                    >
                                        <FiMenu size={21} />
                                    </motion.span>
                                )}

                            </AnimatePresence>
                        </motion.button>

                    </div>
                </div>

                {/* =====================================================
                    MOBILE MENU
                ====================================================== */}

                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                }}
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 top-[73px] -z-10 bg-black/60 backdrop-blur-sm md:hidden"
                            />

                            {/* Menu */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: -40,
                                    scale: 0.98,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -40,
                                    scale: 0.98,
                                }}
                                transition={{
                                    type: "spring",
                                    damping: 24,
                                    stiffness: 250,
                                }}
                                className="absolute left-0 right-0 top-full border-b border-gray-800 bg-gray-950/95 shadow-2xl backdrop-blur-2xl md:hidden"
                            >

                                {/* Scanning line */}
                                <motion.div
                                    animate={{
                                        x: ["-100%", "200%"],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="absolute left-0 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                                />

                                <div className="p-6">

                                    {/* AI status card */}
                                    <motion.div
                                        animate={{
                                            borderColor: [
                                                "rgba(55,65,81,0.5)",
                                                "rgba(96,165,250,0.3)",
                                                "rgba(55,65,81,0.5)",
                                            ],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                        }}
                                        className="mb-5 flex items-center justify-between rounded-xl border bg-gray-900/50 px-4 py-3"
                                    >
                                        <div className="flex items-center gap-3">

                                            <motion.div
                                                animate={{
                                                    rotate: 360,
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                }}
                                                className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-500/30"
                                            >
                                                <FiCpu className="h-3.5 w-3.5 text-blue-400" />
                                            </motion.div>

                                            <div>
                                                <p className="text-xs text-gray-300">
                                                    GenAI Developer
                                                </p>
                                                <p className="text-[9px] uppercase tracking-wider text-gray-600">
                                                    System Online
                                                </p>
                                            </div>

                                        </div>

                                        <motion.span
                                            animate={{
                                                opacity: [0.3, 1, 0.3],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                            }}
                                            className="text-green-400"
                                        >
                                            ●
                                        </motion.span>
                                    </motion.div>

                                    {/* Links */}
                                    <ul className="flex flex-col">

                                        {navLinks.map((link, index) => (
                                            <motion.li
                                                key={link.name}
                                                initial={{
                                                    opacity: 0,
                                                    x: -30,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay: index * 0.07,
                                                }}
                                            >
                                                <motion.button
                                                    whileHover={{
                                                        x: 8,
                                                    }}
                                                    whileTap={{
                                                        scale: 0.97,
                                                    }}
                                                    onClick={() =>
                                                        handleNavClick(
                                                            link.href
                                                        )
                                                    }
                                                    className="group flex w-full items-center justify-between border-b border-gray-800/60 py-4 text-left text-gray-300"
                                                >
                                                    <div className="flex items-center gap-3">

                                                        <motion.span
                                                            whileHover={{
                                                                rotate: 180,
                                                            }}
                                                            className="h-1.5 w-1.5 rounded-full bg-blue-500"
                                                        />

                                                        {link.name}

                                                    </div>

                                                    <FiArrowUpRight className="h-4 w-4 text-gray-600 transition-colors group-hover:text-cyan-400" />

                                                </motion.button>
                                            </motion.li>
                                        ))}

                                    </ul>

                                    {/* Mobile CTA */}
                                    <motion.button
                                        whileHover={{
                                            scale: 1.02,
                                        }}
                                        whileTap={{
                                            scale: 0.96,
                                        }}
                                        onClick={() =>
                                            handleNavClick("contact")
                                        }
                                        className="relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-3 font-medium text-white"
                                    >
                                        <motion.span
                                            animate={{
                                                x: ["-100%", "200%"],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                            className="absolute h-full w-1/3 bg-white/20 blur-md"
                                        />

                                        <span className="relative flex items-center gap-2">
                                            Start a Conversation
                                            <FiArrowUpRight />
                                        </span>
                                    </motion.button>

                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}