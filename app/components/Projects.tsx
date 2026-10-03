"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/app/lib/animations";
import { projects } from "@/app/lib/constants";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

export default function Projects() {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="relative overflow-hidden py-24"
            id="projects"
        >
            {/* ================= AI BACKGROUND ================= */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

                {/* Ambient glow 1 */}
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
                    className="absolute left-[5%] top-[10%] h-72 w-72 rounded-full bg-purple-600/10 blur-3xl"
                />

                {/* Ambient glow 2 */}
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
                    className="absolute right-[5%] top-[35%] h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"
                />

                {/* Grid */}
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
                    animate={{ y: ["-10%", "110%"] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                />
            </div>

            {/* ================= SECTION HEADER ================= */}
            <motion.div variants={textVariant()} className="mb-14">

                <div className="mb-4 flex items-center gap-3">
                    <motion.span
                        animate={{
                            opacity: [0.4, 1, 0.4],
                            scale: [1, 1.15, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                        className="h-2 w-2 rounded-full bg-blue-400"
                    />

                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">
                        AI Engineering Portfolio
                    </span>
                </div>

                <h2 className="text-3xl font-bold md:text-4xl">
                    My Projects
                </h2>

                <div className="relative mt-4 h-1 w-24 overflow-hidden rounded-full bg-gray-800">
                    <motion.div
                        animate={{ x: ["-100%", "250%"] }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400"
                    />
                </div>

                <p className="mt-8 max-w-3xl text-gray-400">
                    A collection of AI-powered systems, Generative AI
                    applications, RAG pipelines, Agentic AI workflows, and
                    scalable backend solutions built with production-focused
                    technologies.
                </p>
            </motion.div>

            {/* ================= PROJECT GRID ================= */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        variants={fadeIn(
                            "up",
                            "spring",
                            index * 0.15,
                            0.75
                        )}
                        whileHover={{
                            y: -10,
                            scale: 1.015,
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
                        className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/80 backdrop-blur-sm"
                    >

                        {/* Animated border glow */}
                        <motion.div
                            animate={{
                                opacity: [0.15, 0.4, 0.15],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: index * 0.4,
                            }}
                            className="pointer-events-none absolute inset-0 rounded-2xl border border-blue-500/20"
                        />

                        {/* ================= PROJECT IMAGE ================= */}
                        <div className="relative h-52 overflow-hidden bg-gray-900">

                            <Image
                                src={project.image}
                                alt={project.name}
                                width={800}
                                height={500}
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />

                            {/* AI scan line */}
                            <motion.div
                                animate={{
                                    y: ["-100%", "500%"],
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: index * 0.4,
                                }}
                                className="absolute left-0 right-0 h-12 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"
                            />

                            {/* Project number */}
                            <div className="absolute left-4 top-4">
                                <div className="rounded-lg border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-mono text-gray-300 backdrop-blur-md">
                                    PROJECT_{String(index + 1).padStart(2, "0")}
                                </div>
                            </div>

                            {/* AI status */}
                            <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-green-500/20 bg-black/50 px-3 py-1.5 backdrop-blur-md">
                                <motion.span
                                    animate={{
                                        opacity: [0.3, 1, 0.3],
                                        scale: [1, 1.25, 1],
                                    }}
                                    transition={{
                                        duration: 1.8,
                                        repeat: Infinity,
                                    }}
                                    className="h-1.5 w-1.5 rounded-full bg-green-400"
                                />

                                <span className="text-[10px] uppercase tracking-wider text-gray-300">
                                    AI System
                                </span>
                            </div>

                            {/* Hover arrow */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7 }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md"
                            >
                                <FiArrowUpRight className="h-5 w-5" />
                            </motion.div>
                        </div>

                        {/* ================= PROJECT CONTENT ================= */}
                        <div className="relative p-6">

                            {/* Project title + links */}
                            <div className="mb-4 flex items-start justify-between gap-4">

                                <motion.h3
                                    whileHover={{ x: 3 }}
                                    className="text-xl font-semibold text-white"
                                >
                                    {project.name}
                                </motion.h3>

                                <div className="flex shrink-0 gap-2">

                                    <motion.a
                                        whileHover={{
                                            scale: 1.15,
                                            rotate: -5,
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 text-gray-400 transition-colors hover:border-gray-600 hover:text-white"
                                        aria-label="GitHub"
                                    >
                                        <FiGithub className="h-4 w-4" />
                                    </motion.a>

                                    <motion.a
                                        whileHover={{
                                            scale: 1.15,
                                            rotate: 5,
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 text-gray-400 transition-colors hover:border-blue-500/40 hover:text-blue-400"
                                        aria-label="Live Demo"
                                    >
                                        <FiExternalLink className="h-4 w-4" />
                                    </motion.a>

                                </div>
                            </div>

                            {/* Description */}
                            <p className="mb-5 text-sm leading-7 text-gray-400">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay:
                                                index * 0.1 +
                                                techIndex * 0.05,
                                        }}
                                        whileHover={{
                                            y: -3,
                                            scale: 1.05,
                                        }}
                                        className="cursor-default rounded-full border border-gray-800 bg-gray-900/80 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:border-blue-500/30 hover:text-blue-300"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Bottom animated line */}
                            <div className="mt-6 h-px overflow-hidden bg-gray-800">
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
                                    className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                                />
                            </div>

                            {/* System footer */}
                            <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-wider text-gray-600">
                                <span>Production Ready</span>

                                <motion.span
                                    animate={{
                                        opacity: [0.4, 1, 0.4],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                    className="text-blue-500"
                                >
                                    ● ONLINE
                                </motion.span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ================= AI FLOW ================= */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-16 overflow-hidden rounded-xl border border-gray-800 bg-gray-950/60 py-4"
            >
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
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
                        "RAG",
                        "Agentic AI",
                        "AI Backend",
                        "Inference",
                        "Cloud AI",
                        "AI Infrastructure",

                        "Generative AI",
                        "LLM Engineering",
                        "RAG",
                        "Agentic AI",
                        "AI Backend",
                        "Inference",
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
                                className="text-blue-500"
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