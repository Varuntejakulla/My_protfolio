"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
    FiArrowRight,
    FiMail,
    FiPhone,
    FiLinkedin,
    FiGithub,
    FiExternalLink,
    FiCpu,
    FiGlobe,
} from "react-icons/fi";
import { smoothScrollTo } from "@/app/utils/scroll";

export default function CTA() {
    const shouldReduceMotion = useReducedMotion();

    const [activeAction, setActiveAction] = useState<string | null>(null);

    /*
    ============================================================
    CONTACT DETAILS
    Replace the placeholder values with your real details.
    ============================================================
    */

    const contactLinks = [
        {
            id: "email",
            label: "Email",
            value: "varuneeeaims@gmail.com",
            href: "mailto:varuneeeaims@gmail.com",
            icon: FiMail,
            color: "text-purple-400",
            border: "hover:border-purple-500/40",
        },
        {
            id: "phone",
            label: "Phone",
            value: "+91 6305720656",
            href: "tel:+916305720656",
            icon: FiPhone,
            color: "text-green-400",
            border: "hover:border-green-500/40",
        },
        {
            id: "linkedin",
            label: "LinkedIn",
            value: "LinkedIn",
            href: "https://www.linkedin.com/in/varun-kulla-22549022a/",
            icon: FiLinkedin,
            color: "text-blue-400",
            border: "hover:border-blue-500/40",
        },
        {
            id: "github",
            label: "GitHub",
            value: "GitHub",
            href: "https://github.com/Varuntejakulla",
            icon: FiGithub,
            color: "text-gray-300",
            border: "hover:border-gray-500/50",
        },
    ];

    const handleScroll = (id: string) => {
        smoothScrollTo(id);
    };

    const triggerAction = (action: string) => {
        setActiveAction(action);

        setTimeout(() => {
            setActiveAction(null);
        }, 700);
    };

    /* =========================================================
       SECTION ANIMATION
    ========================================================= */

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 25,
        },

        show: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: shouldReduceMotion ? 0 : 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 15,
        },

        show: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.section
            id="contact"
            initial="hidden"
            whileInView="show"
            viewport={{
                once: false,
                amount: 0.2,
            }}
            variants={containerVariants}
            className="relative scroll-mt-24 py-16 md:py-20"
        >
            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* Purple glow */}
                <motion.div
                    animate={
                        shouldReduceMotion
                            ? undefined
                            : {
                                  x: [-20, 20, -20],
                                  y: [-10, 15, -10],
                                  opacity: [0.08, 0.16, 0.08],
                              }
                    }
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]"
                />

                {/* Blue glow */}
                <motion.div
                    animate={
                        shouldReduceMotion
                            ? undefined
                            : {
                                  x: [20, -20, 20],
                                  y: [10, -15, 10],
                                  opacity: [0.06, 0.14, 0.06],
                              }
                    }
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-600/20 blur-[100px]"
                />

                {/* Cyan glow */}
                <motion.div
                    animate={
                        shouldReduceMotion
                            ? undefined
                            : {
                                  scale: [1, 1.2, 1],
                                  opacity: [0.03, 0.08, 0.03],
                              }
                    }
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]"
                />
            </div>

            {/* =====================================================
                MAIN CARD
            ====================================================== */}

            <motion.div
                variants={itemVariants}
                className="group relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/80 shadow-xl backdrop-blur-xl"
            >
                {/* Animated top border */}
                <motion.div
                    animate={
                        shouldReduceMotion
                            ? undefined
                            : {
                                  backgroundPosition: [
                                      "0% 50%",
                                      "200% 50%",
                                  ],
                              }
                    }
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute left-0 right-0 top-0 h-px bg-[length:200%_100%] bg-gradient-to-r from-transparent via-purple-500 to-cyan-400"
                />

                <div className="relative px-6 py-8 md:px-10 md:py-10">

                    {/* =================================================
                        STATUS
                    ================================================== */}

                    <motion.div
                        variants={itemVariants}
                        className="text-center"
                    >
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-3 py-1.5 text-xs text-green-400">
                            <motion.span
                                animate={
                                    shouldReduceMotion
                                        ? undefined
                                        : {
                                              opacity: [0.4, 1, 0.4],
                                              scale: [1, 1.3, 1],
                                          }
                                }
                                transition={{
                                    duration: 1.8,
                                    repeat: Infinity,
                                }}
                                className="h-1.5 w-1.5 rounded-full bg-green-400"
                            />

                            Available for opportunities
                        </div>

                        {/* =================================================
                            TITLE
                        ================================================== */}

                        <h2 className="text-2xl font-bold tracking-tight text-white md:text-4xl">
                            Let&apos;s Build Something{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Intelligent.
                            </span>
                        </h2>

                        {/* Animated line */}
                        <div className="mx-auto mt-4 flex items-center justify-center gap-2">

                            <motion.span
                                animate={
                                    shouldReduceMotion
                                        ? undefined
                                        : {
                                              width: [25, 55, 25],
                                          }
                                }
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="h-px bg-gradient-to-r from-transparent via-purple-500 to-blue-500"
                            />

                            <motion.span
                                animate={
                                    shouldReduceMotion
                                        ? undefined
                                        : {
                                              scale: [1, 1.5, 1],
                                              opacity: [0.5, 1, 0.5],
                                          }
                                }
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                            />

                            <motion.span
                                animate={
                                    shouldReduceMotion
                                        ? undefined
                                        : {
                                              width: [25, 55, 25],
                                          }
                                }
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="h-px bg-gradient-to-r from-blue-500 via-purple-500 to-transparent"
                            />

                        </div>

                        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 md:text-base">
                            Have a GenAI project, RAG system, Agentic AI idea,
                            or engineering opportunity? Let&apos;s build it
                            together.
                        </p>
                    </motion.div>

                    {/* =================================================
                        CONTACT INFORMATION
                    ================================================== */}

                    <motion.div
                        variants={itemVariants}
                        className="mx-auto mt-7 max-w-2xl"
                    >
                        <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50">

                            {/* Terminal Header */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">

                                <div className="flex items-center gap-2">

                                    <div className="flex gap-1.5">
                                        <span className="h-2 w-2 rounded-full bg-red-500/50" />
                                        <span className="h-2 w-2 rounded-full bg-yellow-500/50" />
                                        <span className="h-2 w-2 rounded-full bg-green-500/50" />
                                    </div>

                                    <span className="font-mono text-[10px] text-gray-600">
                                        contact_system
                                    </span>

                                </div>

                                <div className="flex items-center gap-1.5">

                                    <motion.div
                                        animate={
                                            shouldReduceMotion
                                                ? undefined
                                                : {
                                                      rotate: 360,
                                                  }
                                        }
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    >
                                        <FiCpu className="h-3 w-3 text-blue-400" />
                                    </motion.div>

                                    <span className="font-mono text-[9px] text-gray-600">
                                        ONLINE
                                    </span>

                                </div>
                            </div>

                            {/* Contact rows */}
                            <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-2">

                                {contactLinks.map((contact) => {
                                    const Icon = contact.icon;

                                    return (
                                        <motion.a
                                            key={contact.id}
                                            href={contact.href}
                                            target={
                                                contact.id === "email" ||
                                                contact.id === "phone"
                                                    ? undefined
                                                    : "_blank"
                                            }
                                            rel={
                                                contact.id === "email" ||
                                                contact.id === "phone"
                                                    ? undefined
                                                    : "noopener noreferrer"
                                            }
                                            onClick={() =>
                                                triggerAction(contact.id)
                                            }
                                            whileHover={
                                                shouldReduceMotion
                                                    ? undefined
                                                    : {
                                                          y: -3,
                                                          scale: 1.02,
                                                      }
                                            }
                                            whileTap={
                                                shouldReduceMotion
                                                    ? undefined
                                                    : {
                                                          scale: 0.96,
                                                      }
                                            }
                                            className={`group/contact relative overflow-hidden rounded-lg border border-gray-800 bg-gray-950 px-4 py-3 transition-all duration-300 ${contact.border}`}
                                        >

                                            {/* Hover glow */}
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                }}
                                                whileHover={{
                                                    opacity: 1,
                                                }}
                                                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5"
                                            />

                                            <div className="relative flex items-center gap-3">

                                                {/* Icon */}
                                                <motion.div
                                                    whileHover={
                                                        shouldReduceMotion
                                                            ? undefined
                                                            : {
                                                                  rotate: 10,
                                                                  scale: 1.15,
                                                              }
                                                    }
                                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 ${contact.color}`}
                                                >
                                                    <Icon className="h-4 w-4" />
                                                </motion.div>

                                                {/* Text */}
                                                <div className="min-w-0 flex-1">

                                                    <div className="text-[9px] uppercase tracking-wider text-gray-600">
                                                        {contact.label}
                                                    </div>

                                                    <div className="truncate text-xs text-gray-300">
                                                        {contact.value}
                                                    </div>

                                                </div>

                                                {/* Arrow */}
                                                <motion.div
                                                    animate={
                                                        shouldReduceMotion
                                                            ? undefined
                                                            : {
                                                                  x: [0, 2, 0],
                                                              }
                                                    }
                                                    transition={{
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                    }}
                                                >
                                                    <FiArrowRight
                                                        className={`h-3.5 w-3.5 ${contact.color}`}
                                                    />
                                                </motion.div>

                                            </div>

                                            {/* Click pulse */}
                                            {activeAction === contact.id && (
                                                <motion.span
                                                    initial={{
                                                        scale: 0,
                                                        opacity: 0.8,
                                                    }}
                                                    animate={{
                                                        scale: 5,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.6,
                                                    }}
                                                    className={`absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border ${contact.color.replace(
                                                        "text-",
                                                        "border-"
                                                    )}`}
                                                />
                                            )}

                                        </motion.a>
                                    );
                                })}

                            </div>

                            {/* =================================================
                                MESSAGE / PROJECT BUTTONS
                            ================================================== */}

                            <div className="flex flex-col gap-2 border-t border-gray-800 p-3 sm:flex-row">

                                {/* Send Message */}
                                <Link
                                    href="mailto:varuneeeaims@gmail.com"
                                    onClick={() =>
                                        triggerAction("mail")
                                    }
                                    className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                                >
                                    {activeAction === "mail" && (
                                        <>
                                            {/* Expanding ring */}
                                            <motion.span
                                                initial={{
                                                    scale: 0,
                                                    opacity: 0.9,
                                                }}
                                                animate={{
                                                    scale: 5,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                }}
                                                className="absolute h-8 w-8 rounded-full border border-cyan-300"
                                            />

                                            {/* Glow */}
                                            <motion.span
                                                initial={{
                                                    scale: 0,
                                                    opacity: 0.8,
                                                }}
                                                animate={{
                                                    scale: 3,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                }}
                                                className="absolute h-6 w-6 rounded-full bg-cyan-400/40 blur-sm"
                                            />

                                            {/* AI core */}
                                            <motion.span
                                                initial={{
                                                    scale: 0,
                                                    rotate: -180,
                                                }}
                                                animate={{
                                                    scale: 1,
                                                    rotate: 0,
                                                }}
                                                className="absolute z-20 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/60 bg-gray-950 shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                                            >
                                                <FiCpu className="h-4 w-4 text-cyan-300" />
                                            </motion.span>

                                            {/* Particles */}
                                            <motion.span
                                                initial={{
                                                    x: 0,
                                                    y: 0,
                                                    opacity: 1,
                                                }}
                                                animate={{
                                                    x: -30,
                                                    y: -20,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                }}
                                                className="absolute h-1 w-1 rounded-full bg-cyan-300"
                                            />

                                            <motion.span
                                                initial={{
                                                    x: 0,
                                                    y: 0,
                                                    opacity: 1,
                                                }}
                                                animate={{
                                                    x: 30,
                                                    y: -15,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                }}
                                                className="absolute h-1 w-1 rounded-full bg-purple-300"
                                            />

                                            <motion.span
                                                initial={{
                                                    x: 0,
                                                    y: 0,
                                                    opacity: 1,
                                                }}
                                                animate={{
                                                    x: 0,
                                                    y: 30,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                }}
                                                className="absolute h-1 w-1 rounded-full bg-blue-300"
                                            />
                                        </>
                                    )}

                                    <motion.span
                                        animate={
                                            activeAction === "mail"
                                                ? {
                                                      scale: 0,
                                                      opacity: 0,
                                                  }
                                                : {
                                                      scale: 1,
                                                      opacity: 1,
                                                  }
                                        }
                                        className="flex items-center gap-2"
                                    >
                                        <FiMail className="h-4 w-4" />

                                        Send Message

                                        <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                    </motion.span>
                                </Link>

                                {/* Explore */}
                                <button
                                    onClick={() => {
                                        triggerAction("projects");

                                        setTimeout(() => {
                                            handleScroll("projects");
                                        }, 450);
                                    }}
                                    className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-lg border border-gray-800 bg-gray-950 px-4 py-2.5 text-sm text-gray-400 transition-all duration-300 hover:border-blue-500/40 hover:bg-gray-900 hover:text-white"
                                >
                                    {activeAction === "projects" && (
                                        <motion.span
                                            initial={{
                                                scale: 0,
                                                opacity: 0.8,
                                            }}
                                            animate={{
                                                scale: 5,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.6,
                                            }}
                                            className="absolute h-8 w-8 rounded-full border border-cyan-400"
                                        />
                                    )}

                                    <span className="relative flex items-center gap-2">
                                        Explore My Work

                                        <FiExternalLink className="h-3.5 w-3.5 text-blue-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </span>
                                </button>

                            </div>
                        </div>
                    </motion.div>

                    {/* =================================================
                        SOCIAL / WEB CONTACT
                    ================================================== */}

                    <motion.div
                        variants={itemVariants}
                        className="mt-7 flex flex-col items-center"
                    >
                        <div className="mb-3 flex items-center gap-3">
                            <span className="h-px w-8 bg-gray-800" />

                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
                                Connect
                            </span>

                            <span className="h-px w-8 bg-gray-800" />
                        </div>

                        <div className="flex items-center gap-2">

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/varun-kulla-22549022a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 bg-gray-950 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin className="h-4 w-4 transition-transform group-hover:scale-110" />
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/Varuntejakulla"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 bg-gray-950 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-gray-500/50 hover:bg-gray-800 hover:text-white"
                                aria-label="GitHub"
                            >
                                <FiGithub className="h-4 w-4 transition-transform group-hover:scale-110" />
                            </a>

                            {/* Website */}
                            <a
                                href="/"
                                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 bg-gray-950 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400"
                                aria-label="Website"
                            >
                                <FiGlobe className="h-4 w-4 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:varuneeeaims@gmail.com"
                                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 bg-gray-950 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-400"
                                aria-label="Email"
                            >
                                <FiMail className="h-4 w-4 transition-transform group-hover:scale-110" />
                            </a>

                            {/* Phone */}
                            <a
                                href="tel:+916305720656"
                                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 bg-gray-950 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:bg-green-500/10 hover:text-green-400"
                                aria-label="Phone"
                            >
                                <FiPhone className="h-4 w-4 transition-transform group-hover:scale-110" />
                            </a>

                        </div>
                    </motion.div>

                    {/* =================================================
                        TECHNOLOGY FOOTER
                    ================================================== */}

                    <motion.div
                        variants={itemVariants}
                        className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[10px] uppercase tracking-wider text-gray-600"
                    >
                        <span>GenAI</span>

                        <span className="text-gray-800">•</span>

                        <span>RAG</span>

                        <span className="text-gray-800">•</span>

                        <span>Agentic AI</span>

                        <span className="text-gray-800">•</span>

                        <span>LLM Engineering</span>

                        <span className="text-gray-800">•</span>

                        <span>AI Infrastructure</span>
                    </motion.div>

                </div>
            </motion.div>
        </motion.section>
    );
}