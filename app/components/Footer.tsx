
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { socialLinks } from "@/app/lib/constants";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-black/20">
            {/* Ambient background glow */}
            <motion.div
                className="pointer-events-none absolute left-1/2 top-0 h-32 w-96 -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Animated top border */}
            <motion.div
                className="absolute left-1/2 top-0 h-[1px] w-64 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                animate={{
                    opacity: [0.2, 1, 0.2],
                    width: ["12rem", "20rem", "12rem"],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative mx-auto max-w-7xl px-5 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
                >
                    {/* ───────── Brand ───────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/" className="group inline-flex items-center gap-3">
                            {/* VK Logo */}
                            <motion.div
                                whileHover={{
                                    rotate: [0, -8, 8, 0],
                                    scale: 1.08,
                                }}
                                transition={{ duration: 0.5 }}
                                className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-600/20 to-blue-600/20"
                            >
                                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-sm font-bold text-transparent">
                                    VK
                                </span>

                                {/* Logo glow */}
                                <motion.div
                                    className="absolute inset-0 -z-10 rounded-xl bg-purple-500/20 blur-lg"
                                    animate={{
                                        opacity: [0.2, 0.6, 0.2],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                />
                            </motion.div>

                            <div>
                                <motion.h3
                                    className="text-base font-bold tracking-tight text-white"
                                    whileHover={{ x: 2 }}
                                >
                                    Varun Kulla
                                </motion.h3>

                                <p className="mt-0.5 text-xs text-gray-500">
                                    AI Engineer • Python Developer
                                </p>
                            </div>
                        </Link>
                    </motion.div>

                    {/* ───────── Social Links ───────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.15,
                        }}
                        className="flex items-center gap-2"
                    >
                        {socialLinks.map((link, index) => {
                            const Icon = link.icon;

                            return (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.7,
                                        y: 10,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                        y: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.2 + index * 0.08,
                                        duration: 0.4,
                                        type: "spring",
                                        stiffness: 250,
                                        damping: 15,
                                    }}
                                    whileHover={{
                                        y: -5,
                                        scale: 1.08,
                                    }}
                                    whileTap={{
                                        scale: 0.92,
                                    }}
                                    className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] text-gray-500 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
                                >
                                    {/* Hover glow */}
                                    <motion.span
                                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-cyan-500/20 opacity-0 blur-md"
                                        whileHover={{
                                            opacity: 1,
                                            scale: 1.2,
                                        }}
                                    />

                                    {/* Moving shine */}
                                    <motion.span
                                        className="absolute -left-10 top-0 h-full w-6 rotate-12 bg-white/10 blur-sm"
                                        whileHover={{
                                            x: 70,
                                            transition: {
                                                duration: 0.5,
                                            },
                                        }}
                                    />

                                    <Icon className="relative z-10 h-[17px] w-[17px]" />
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* ───────── Bottom Section ───────── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-7 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-5 sm:flex-row"
                >
                    {/* Availability */}
                    <div className="flex items-center gap-2">
                        <motion.span
                            className="relative flex h-2 w-2"
                        >
                            <motion.span
                                className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
                                animate={{
                                    scale: [1, 1.8, 1],
                                    opacity: [0.8, 0, 0.8],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            />

                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </motion.span>

                        <span className="text-[11px] text-gray-500">
                            Open to opportunities
                        </span>
                    </div>

                    {/* Copyright */}
                    <motion.p
                        whileHover={{ color: "#9ca3af" }}
                        className="text-[11px] text-gray-600 transition-colors"
                    >
                        © {new Date().getFullYear()} Varun Kulla
                        <span className="mx-2 text-gray-800">•</span>
                        Built with Next.js & Framer Motion
                    </motion.p>
                </motion.div>
            </div>
        </footer>
    );
}

