"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  FiActivity,
  FiArrowDown,
  FiArrowUpRight,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiDownload,
  FiGitBranch,
  FiZap,
} from "react-icons/fi";
import { useRouter } from "next/navigation";

import { fadeIn, slideIn, staggerContainer } from "@/app/lib/animations";
import Image from "next/image";
import Link from "next/link";
import { smoothScrollTo } from "@/app/utils/scroll";

const roles = [
  "GenAI Developer",
  "LLM Engineer",
  "RAG Engineer",
  "Agentic AI Developer",
  "AI Backend Engineer",
];

const technologies = [
  "Python",
  "LLMs",
  "RAG",
  "LangGraph",
  "FastAPI",
  "vLLM",
  "AWS",
  "Azure",
];

const floatingSkills = [
  {
    name: "RAG",
    icon: FiDatabase,
    position:
      "absolute -left-16 top-16 sm:-left-24 sm:top-20",
  },
  {
    name: "LLMs",
    icon: FiCpu,
    position:
      "absolute -right-14 top-32 sm:-right-24 sm:top-36",
  },
  {
    name: "Agents",
    icon: FiGitBranch,
    position:
      "absolute -left-12 bottom-32 sm:-left-20 sm:bottom-36",
  },
  {
    name: "vLLM",
    icon: FiZap,
    position:
      "absolute -right-12 bottom-20 sm:-right-20 sm:bottom-24",
  },
];

const capabilityCards = [
  {
    title: "GenAI",
    description: "Generative AI Applications",
    icon: FiCpu,
  },
  {
    title: "RAG",
    description: "Retrieval Systems",
    icon: FiDatabase,
  },
  {
    title: "Agents",
    description: "Agentic AI Systems",
    icon: FiGitBranch,
  },
  {
    title: "AI Infra",
    description: "Deployment & Inference",
    icon: FiCloud,
  },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [resumeHover, setResumeHover] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  const handleScroll = (id: string) => {
    smoothScrollTo(id);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((previous) => (previous + 1) % roles.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  const floatingAnimation = shouldReduceMotion
    ? {}
    : {
        y: [0, -10, 0],
        x: [0, 4, 0],
      };

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="show"
      variants={staggerContainer()}
      className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden py-16 md:py-24"
    >
      {/* =========================================================
          BACKGROUND AI SYSTEM
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Purple AI glow */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 40, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.1, 1],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[5%] h-[450px] w-[450px] rounded-full bg-purple-600/[0.08] blur-[130px]"
        />

        {/* Blue AI glow */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -40, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.15, 1],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[0%] right-[-10%] h-[450px] w-[450px] rounded-full bg-blue-600/[0.08] blur-[130px]"
        />

        {/* Cyan glow */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.25, 1],
                  opacity: [0.04, 0.1, 0.04],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[40%] top-[25%] h-[350px] w-[350px] rounded-full bg-cyan-500/[0.06] blur-[120px]"
        />

        {/* AI grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Horizontal scanning line */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: ["0vh", "100vh"],
                }
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
        />

        {/* Secondary scanning line */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: ["100vh", "0vh"],
                }
          }
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
        />

        {/* Floating particles */}
        {[...Array(24)].map((_, index) => (
          <motion.span
            key={index}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -25, 0],
                    x: [0, index % 2 === 0 ? 8 : -8, 0],
                    opacity: [0.1, 0.7, 0.1],
                    scale: [0.8, 1.3, 0.8],
                  }
            }
            transition={{
              duration: 3 + (index % 4),
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-cyan-400/40"
            style={{
              left: `${(index * 17) % 100}%`,
              top: `${(index * 23) % 100}%`,
            }}
          />
        ))}

        {/* Vertical data streams */}
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={`stream-${index}`}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0, 0.4, 0],
                    height: ["20px", "100px", "20px"],
                  }
            }
            transition={{
              duration: 3 + index * 0.4,
              repeat: Infinity,
              delay: index * 0.6,
              ease: "easeInOut",
            }}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/40 to-transparent"
            style={{
              left: `${10 + index * 11}%`,
              top: `${10 + (index % 3) * 25}%`,
            }}
          />
        ))}
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
<div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] xl:gap-16">
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}
          <motion.div
            variants={slideIn("left", "tween", 0.15, 1)}
            className="max-w-3xl"
          >
            {/* Availability */}
            <motion.div
              variants={fadeIn("up", "tween", 0.1, 1)}
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(34,211,238,0.4)",
              }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/60 px-4 py-2 backdrop-blur"
            >
              <span className="relative flex h-2.5 w-2.5">
                <motion.span
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: [1, 1.8, 1],
                          opacity: [0.8, 0, 0.8],
                        }
                  }
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 rounded-full bg-green-400"
                />

                <span className="relative h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>

              <span className="text-sm text-gray-300">
                Available for AI / GenAI opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
              <p className="mb-3 text-lg font-medium text-gray-400">
                Hi, I&apos;m
              </p>

              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Varun{" "}
                <motion.span
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          backgroundPosition: [
                            "0% 50%",
                            "100% 50%",
                            "0% 50%",
                          ],
                        }
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-[length:200%_200%] bg-clip-text text-transparent"
                >
                  Kulla
                </motion.span>
              </h1>

              {/* Role */}
              <div className="mt-5 flex min-h-[42px] items-center gap-3">
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          width: [30, 55, 30],
                        }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-px bg-gradient-to-r from-purple-500 to-cyan-500"
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={roles[roleIndex]}
                    initial={{
                      opacity: 0,
                      y: 12,
                      filter: "blur(4px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -12,
                      filter: "blur(4px)",
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="flex items-center gap-2 text-xl font-medium text-gray-300 sm:text-2xl"
                  >
                    <FiCpu className="text-cyan-400" />
                    {roles[roleIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
            >
              I build production-ready AI applications using{" "}
              <span className="text-gray-200">LLMs</span>,{" "}
              <span className="text-gray-200">RAG</span>,{" "}
              <span className="text-gray-200">Agentic AI</span>, and{" "}
              <span className="text-gray-200">
                scalable backend systems
              </span>
              . My focus is turning AI concepts into reliable,
              practical, and scalable software.
            </motion.p>

            {/* ===================================================
                TECHNOLOGY PILLS
            ==================================================== */}
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="mt-8 flex flex-wrap gap-2"
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  onMouseEnter={() => setActiveTech(tech)}
                  onMouseLeave={() => setActiveTech(null)}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: [0, -3, 0],
                        }
                  }
                  transition={{
                    duration: 2.5 + index * 0.15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.07,
                  }}
                  className={`relative overflow-hidden rounded-md border px-3 py-1.5 text-sm transition-all ${
                    activeTech === tech
                      ? "border-cyan-400/60 bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.12)]"
                      : "border-gray-800 bg-gray-900/70 text-gray-400 hover:border-gray-600 hover:text-gray-200"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <motion.span
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              opacity: [0.4, 1, 0.4],
                            }
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.15,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                    />

                    {tech}
                  </span>

                  {activeTech === tech && (
                    <motion.span
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 0.7,
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    />
                  )}
                </motion.span>
              ))}
            </motion.div>

            {/* ===================================================
                ACTION BUTTONS
            ==================================================== */}
            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1)}
              className="mt-9 flex flex-wrap gap-4"
            >
              {/* View Work */}
              <a href="#projects">
                <motion.div
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow:
                      "0 15px 40px rgba(100,100,255,0.22)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="group flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-gray-950 transition hover:bg-gray-200"
                >
                  <span>View My Work</span>

                  <motion.span
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            x: [0, 5, 0],
                          }
                    }
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <FiArrowUpRight />
                  </motion.span>
                </motion.div>
              </a>

              {/* =================================================
                  DOWNLOAD RESUME
              ================================================== */}
              <a
                href="/varun_Resume__for__GEN_AI.pdf"
                download
                onMouseEnter={() => setResumeHover(true)}
                onMouseLeave={() => setResumeHover(false)}
                className="group"
              >
                <motion.div
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow:
                      "0 15px 40px rgba(34,211,238,0.18)",
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="relative flex items-center gap-2 overflow-hidden rounded-lg border border-blue-500/40 bg-blue-500/10 px-6 py-3 font-medium text-blue-300 backdrop-blur transition-all hover:border-cyan-400/70 hover:bg-blue-500/20 hover:text-cyan-300"
                >
                  {/* Moving shimmer */}
                  <motion.span
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            x: ["-150%", "150%"],
                          }
                    }
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-y-0 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                  />

                  {/* Download icon */}
                  <motion.span
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: [0, 3, 0],
                          }
                    }
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 text-lg"
                  >
                    <FiDownload />
                  </motion.span>

                  <span className="relative z-10">
                    Download Resume
                  </span>

                  {/* Tiny pulse */}
                  {resumeHover && (
                    <motion.span
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1.8,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                      }}
                      className="absolute left-5 h-5 w-5 rounded-full border border-cyan-400/50"
                    />
                  )}
                </motion.div>
              </a>

              {/* Contact */}
              <a href="#contact">
                <motion.div
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    borderColor:
                      "rgba(156,163,175,0.8)",
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="rounded-lg border border-gray-700 bg-gray-900/50 px-6 py-3 font-medium text-gray-200 transition hover:bg-gray-900"
                >
                  Let&apos;s Connect
                </motion.div>
              </a>
            </motion.div>

            {/* Small status line */}
            <motion.div
              variants={fadeIn("up", "tween", 0.6, 1)}
              className="mt-6 flex items-center gap-3 text-xs text-gray-600"
            >
              <motion.span
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-cyan-400"
              />

              <span>
                AI systems • RAG • Agents • LLM inference
              </span>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT SIDE - AI PROFILE SYSTEM
          ====================================================== */}
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* =================================================
                  ORBIT RING 1
              ================================================== */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-none absolute -inset-10 rounded-full border border-dashed border-purple-500/20"
              />

              {/* Orbit ring 2 */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        rotate: -360,
                      }
                }
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-none absolute -inset-16 rounded-full border border-dashed border-cyan-500/10"
              />

              {/* Orbit node */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-none absolute -inset-10"
              >
                <div className="absolute left-1/2 top-0 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
              </motion.div>

              {/* Floating skills */}
              {floatingSkills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    animate={floatingAnimation}
                    transition={{
                      duration: 3.5 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4,
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -6,
                    }}
                    className={`${skill.position} z-30 hidden rounded-xl border border-gray-800 bg-gray-950/90 px-4 py-2 text-sm text-gray-300 shadow-xl backdrop-blur sm:block`}
                  >
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={
                          shouldReduceMotion
                            ? {}
                            : {
                                rotate: [0, 360],
                              }
                        }
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="text-cyan-400"
                      >
                        <Icon />
                      </motion.span>

                      {skill.name}
                    </span>

                    {/* Badge pulse */}
                    <motion.span
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              opacity: [0.2, 0.8, 0.2],
                            }
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-cyan-400"
                    />
                  </motion.div>
                );
              })}

              {/* =================================================
                  PROFILE CARD
              ================================================== */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="relative w-[290px] sm:w-[350px]"
              >
                {/* Animated border */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          opacity: [0.25, 0.7, 0.25],
                        }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
                />

                {/* Outer glow */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          opacity: [0.2, 0.5, 0.2],
                          scale: [1, 1.04, 1],
                        }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-500/20 blur-3xl"
                />

                {/* Card */}
                <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-950/95 p-3 shadow-2xl">

                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-gray-800 px-3 py-3">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />

                      <motion.span
                        animate={
                          shouldReduceMotion
                            ? {}
                            : {
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.2, 1],
                              }
                        }
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="h-2.5 w-2.5 rounded-full bg-green-500"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <FiActivity className="text-cyan-400" />

                      <span className="font-mono text-xs text-gray-600">
                        ai_engineer.py
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      IMAGE AREA
                  ================================================== */}
                  <div className="group relative mt-3 aspect-square overflow-hidden rounded-2xl bg-gray-900">

                    <Image
                      src="/varun_profile.png"
                      alt="Varun kulla - GenAI Developer"
                      fill
                      priority
                      sizes="(max-width: 640px) 290px, 350px"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/10" />

                    {/* Scan line */}
                    <motion.div
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              top: ["0%", "100%", "0%"],
                            }
                      }
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                    />

                    {/* Secondary scan line */}
                    <motion.div
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              top: ["100%", "0%", "100%"],
                            }
                      }
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
                    />

                    {/* HUD corners */}
                    <div className="absolute left-3 top-3 h-5 w-5 border-l border-t border-cyan-400/50" />
                    <div className="absolute right-3 top-3 h-5 w-5 border-r border-t border-cyan-400/50" />
                    <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-cyan-400/50" />
                    <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-cyan-400/50" />

                    {/* AI target */}
                    <motion.div
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              opacity: [0.25, 0.8, 0.25],
                              scale: [0.95, 1.05, 0.95],
                            }
                      }
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-black/20 backdrop-blur"
                    >
                      <FiCpu className="text-cyan-400" />
                    </motion.div>

                    {/* Status */}
                    <motion.div
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              y: [0, -3, 0],
                            }
                      }
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-950/85 px-3 py-2 backdrop-blur"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inset-0 animate-ping rounded-full bg-green-400" />
                        <span className="relative h-2 w-2 rounded-full bg-green-500" />
                      </span>

                      <span className="text-xs text-gray-300">
                        Building AI systems
                      </span>
                    </motion.div>
                  </div>

                  {/* =================================================
                      CARD CONTENT
                  ================================================== */}
                  <div className="px-3 pb-2 pt-5">
                    <div className="min-h-[58px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={roles[roleIndex]}
                          initial={{
                            opacity: 0,
                            y: 10,
                            filter: "blur(5px)",
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                          }}
                          exit={{
                            opacity: 0,
                            y: -10,
                            filter: "blur(5px)",
                          }}
                          transition={{
                            duration: 0.45,
                          }}
                        >
                          <h3 className="text-lg font-semibold text-white">
                            {roles[roleIndex]}
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Building intelligent and production-ready
                            AI systems
                          </p>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Tech marquee */}
                    <div className="mt-4 overflow-hidden border-t border-gray-800 pt-4">
                      <motion.div
                        animate={
                          shouldReduceMotion
                            ? {}
                            : {
                                x: ["0%", "-20%"],
                              }
                        }
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="flex w-max gap-3 whitespace-nowrap text-xs text-gray-600"
                      >
                        <span>Python</span>
                        <span>•</span>
                        <span>LLMs</span>
                        <span>•</span>
                        <span>RAG</span>
                        <span>•</span>
                        <span>Agents</span>
                        <span>•</span>
                        <span>FastAPI</span>
                        <span>•</span>
                        <span>vLLM</span>
                        <span>•</span>
                        <span>Cloud</span>
                        <span>•</span>
                        <span>Python</span>
                        <span>•</span>
                        <span>LLMs</span>
                        <span>•</span>
                        <span>RAG</span>
                        <span>•</span>
                        <span>Agents</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            CAPABILITY CARDS
        ========================================================== */}
        <motion.div
          variants={fadeIn("up", "tween", 0.7, 1)}
          className="mt-20 border-t border-gray-900 pt-8"
        >
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {capabilityCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -7,
                    scale: 1.02,
                  }}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          opacity: [0.75, 1, 0.75],
                        }
                  }
                  transition={{
                    duration: 3 + index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="group relative overflow-hidden rounded-xl border border-transparent p-3 transition hover:border-gray-800 hover:bg-gray-900/30"
                >
                  {/* Animated top scan */}
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            x: ["-100%", "100%"],
                          }
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.4,
                      ease: "linear",
                    }}
                    className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                  />

                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{
                        rotate: 15,
                        scale: 1.1,
                      }}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 text-cyan-400"
                    >
                      <Icon />
                    </motion.div>

                    <div>
                      <p className="text-xl font-semibold text-white transition group-hover:text-cyan-400">
                        {item.title}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom AI indicator */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  opacity: [0.3, 0.8, 0.3],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="mt-8 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gray-700"
        >
          <FiCode />
          <span>AI Engineering System Online</span>
          <FiActivity />
        </motion.div>
      </div>
    </motion.section>
  );
}