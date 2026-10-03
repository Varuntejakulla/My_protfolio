"use client";

import { motion } from "framer-motion";

import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Testimonials from "@/app/components/Testimonials";
import Services from "@/app/components/Services";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";

const sectionVariants = {
    hidden: {
        opacity: 0,
        y: 80,
        scale: 0.98,
        filter: "blur(8px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-gray-950 text-white">

            {/* =====================================================
                GLOBAL AI BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

                {/* Purple ambient light */}
                <motion.div
                    animate={{
                        x: ["-20%", "20%", "-20%"],
                        y: ["-10%", "20%", "-10%"],
                        opacity: [0.12, 0.22, 0.12],
                    }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[140px]"
                />

                {/* Blue ambient light */}
                <motion.div
                    animate={{
                        x: ["20%", "-20%", "20%"],
                        y: ["20%", "-10%", "20%"],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-0 top-[20%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]"
                />

                {/* Cyan ambient light */}
                <motion.div
                    animate={{
                        y: ["10%", "-20%", "10%"],
                        opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]"
                />

                {/* AI grid */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Vertical center glow */}
                <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
            </div>

            {/* =====================================================
                HEADER
            ====================================================== */}

            <Header />

            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}

            <div className="relative w-full px-4 sm:px-6 lg:px-8">

                {/* =================================================
                    HERO
                ================================================== */}

                <motion.section
                    id="home"
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="relative scroll-mt-24"
                >
                    <Hero />
                </motion.section>

                {/* =================================================
                    ABOUT
                ================================================== */}

                <motion.section
                    id="about"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: false,
                        amount: 0.15,
                    }}
                    variants={sectionVariants}
                    className="relative scroll-mt-24"
                >
                    <About />
                </motion.section>

                {/* =================================================
                    PROJECTS
                ================================================== */}

                <motion.section
                    id="projects"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: false,
                        amount: 0.15,
                    }}
                    variants={sectionVariants}
                    className="relative scroll-mt-24"
                >
                    <Projects />
                </motion.section>

                {/* =================================================
                    TESTIMONIALS
                ================================================== */}

                {/* <motion.section
                    id="testimonials"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: false,
                        amount: 0.15,
                    }}
                    variants={sectionVariants}
                    className="relative scroll-mt-24"
                >
                    <Testimonials />
                </motion.section> */}

                {/* =================================================
                    SERVICES
                ================================================== */}

                <motion.section
                    id="services"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: false,
                        amount: 0.15,
                    }}
                    variants={sectionVariants}
                    className="relative scroll-mt-24"
                >
                    <Services />
                </motion.section>

                {/* =================================================
                    CTA
                ================================================== */}

                <motion.section
                    id="contact"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: false,
                        amount: 0.15,
                    }}
                    variants={sectionVariants}
                    className="relative scroll-mt-24"
                >
                    <CTA />
                </motion.section>

                {/* =================================================
                    FOOTER
                ================================================== */}

                <motion.footer
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: false,
                        amount: 0.1,
                    }}
                    variants={sectionVariants}
                    className="relative"
                >
                    <Footer />
                </motion.footer>

            </div>
        </main>
    );
}