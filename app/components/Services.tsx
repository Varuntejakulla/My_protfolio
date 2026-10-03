"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/app/lib/animations";
import { services } from "@/app/lib/constants";

export default function Services() {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="relative overflow-hidden py-24"
            id="services"
        >
            {/* ================= AI BACKGROUND ================= */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

                {/* Purple ambient glow */}
                <motion.div
                    animate={{
                        x: [0, 80, -40, 0],
                        y: [0, -50, 40, 0],
                        scale: [1, 1.15, 0.95, 1],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[5%] top-[15%] h-72 w-72 rounded-full bg-purple-600/10 blur-3xl"
                />

                {/* Blue ambient glow */}
                <motion.div
                    animate={{
                        x: [0, -70, 50, 0],
                        y: [0, 50, -30, 0],
                        scale: [1, 0.9, 1.2, 1],
                    }}
                    transition={{
                        duration: 17,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-[5%] top-[30%] h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"
                />

                {/* AI grid */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                        backgroundSize: "45px 45px",
                    }}
                />

                {/* Moving scan line */}
                <motion.div
                    animate={{
                        y: ["-10%", "110%"],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
                />
            </div>

            {/* ================= HEADER ================= */}
            <motion.div
                variants={textVariant()}
                className="mb-14"
            >
                {/* Section indicator */}
                <div className="mb-4 flex items-center gap-3">

                    <motion.span
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                        className="h-2 w-2 rounded-full bg-purple-400"
                    />

                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-purple-400">
                        AI Engineering Services
                    </span>
                </div>

                <h2 className="text-3xl font-bold md:text-4xl">
                    My Services
                </h2>

                {/* Animated underline */}
                <div className="relative mt-4 h-1 w-24 overflow-hidden rounded-full bg-gray-800">
                    <motion.div
                        animate={{
                            x: ["-100%", "250%"],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400"
                    />
                </div>

                <p className="mt-8 max-w-3xl text-gray-400">
                    I build intelligent, scalable, and production-ready
                    solutions across Generative AI, Agentic AI, RAG,
                    LLM engineering, backend systems, and AI infrastructure.
                </p>
            </motion.div>

            {/* ================= SERVICES ================= */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                {services.map((service, index) => {
                    const Icon = service.icon;

                    return (
                        <motion.div
                            key={service.title}
                            variants={fadeIn(
                                "up",
                                "spring",
                                index * 0.15,
                                0.75
                            )}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                            }}
                            animate={{
                                y: [0, -3, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 4 + index * 0.4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                                default: {
                                    duration: 0.3,
                                },
                            }}
                            className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/80 p-8 backdrop-blur-sm"
                        >
                            {/* ================= ANIMATED BORDER ================= */}
                            <motion.div
                                animate={{
                                    opacity: [0.15, 0.45, 0.15],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: index * 0.4,
                                }}
                                className="pointer-events-none absolute inset-0 rounded-2xl border border-purple-500/20"
                            />

                            {/* ================= SCAN LINE ================= */}
                            <motion.div
                                animate={{
                                    y: ["-150%", "500%"],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: index * 0.5,
                                }}
                                className="pointer-events-none absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
                            />

                            {/* ================= TOP INFO ================= */}
                            <div className="mb-7 flex items-center justify-between">

                                {/* Service number */}
                                <div className="rounded-lg border border-gray-800 bg-gray-900/80 px-3 py-1.5">
                                    <span className="font-mono text-[10px] tracking-wider text-gray-500">
                                        SERVICE_
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                {/* Active indicator */}
                                <div className="flex items-center gap-2">

                                    <motion.span
                                        animate={{
                                            opacity: [0.3, 1, 0.3],
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 1.8,
                                            repeat: Infinity,
                                        }}
                                        className="h-1.5 w-1.5 rounded-full bg-green-400"
                                    />

                                    <span className="text-[10px] uppercase tracking-wider text-gray-600">
                                        Available
                                    </span>

                                </div>
                            </div>

                            {/* ================= ICON ================= */}
                            <motion.div
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                }}
                                animate={{
                                    boxShadow: [
                                        "0 0 0px rgba(139,92,246,0)",
                                        "0 0 25px rgba(139,92,246,0.15)",
                                        "0 0 0px rgba(139,92,246,0)",
                                    ],
                                }}
                                transition={{
                                    boxShadow: {
                                        duration: 3,
                                        repeat: Infinity,
                                    },
                                }}
                                className="relative mb-7 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-transparent"
                            >
                                {/* Icon glow */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.2, 0.5, 0.2],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                    }}
                                    className="absolute inset-0 rounded-xl bg-purple-500/10 blur-md"
                                />

                                <Icon className="relative z-10 h-6 w-6 text-purple-400" />
                            </motion.div>

                            {/* ================= TITLE ================= */}
                            <motion.h3
                                whileHover={{
                                    x: 4,
                                }}
                                className="mb-4 text-xl font-semibold text-white"
                            >
                                {service.title}
                            </motion.h3>

                            {/* ================= DESCRIPTION ================= */}
                            <p className="relative z-10 min-h-[100px] text-sm leading-7 text-gray-400">
                                {service.description}
                            </p>

                            {/* ================= BOTTOM LINE ================= */}
                            <div className="mt-7 h-px overflow-hidden bg-gray-800">
                                <motion.div
                                    animate={{
                                        x: ["-100%", "100%"],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: index * 0.3,
                                    }}
                                    className="h-full w-1/3 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                                />
                            </div>

                            {/* ================= FOOTER ================= */}
                            <div className="mt-4 flex items-center justify-between">

                                <span className="text-[10px] uppercase tracking-wider text-gray-600">
                                    Production Ready
                                </span>

                                <motion.span
                                    animate={{
                                        opacity: [0.4, 1, 0.4],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                    className="text-[10px] uppercase tracking-wider text-purple-400"
                                >
                                    ● ACTIVE
                                </motion.span>

                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* ================= AI CAPABILITY FLOW ================= */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    delay: 0.5,
                }}
                className="mt-16 overflow-hidden rounded-xl border border-gray-800 bg-gray-950/60 py-4"
            >
                <motion.div
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex w-max items-center gap-8 whitespace-nowrap"
                >
                    {[
                        "Generative AI",
                        "LLM Engineering",
                        "RAG Systems",
                        "Agentic AI",
                        "AI Backend",
                        "LLM Inference",
                        "Cloud AI",
                        "AI Infrastructure",

                        "Generative AI",
                        "LLM Engineering",
                        "RAG Systems",
                        "Agentic AI",
                        "AI Backend",
                        "LLM Inference",
                        "Cloud AI",
                        "AI Infrastructure",
                    ].map((item, index) => (
                        <div
                            key={`${item}-${index}`}
                            className="flex items-center gap-8"
                        >
                            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                                {item}
                            </span>

                            <motion.span
                                animate={{
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 1.8,
                                    repeat: Infinity,
                                    delay: index * 0.15,
                                }}
                                className="text-purple-500"
                            >
                                →
                            </motion.span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
}