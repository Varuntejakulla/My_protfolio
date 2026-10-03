"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/app/lib/animations";
import { skills } from "@/app/lib/constants";

export default function About() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="relative overflow-hidden pb-24 pt-10"
      id="about"
    >
      {/* ===================================================== */}
      {/* BACKGROUND AI EFFECT */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -30, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 40, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-[-10%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]"
        />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10">

        {/* =================================================== */}
        {/* SECTION TITLE */}
        {/* =================================================== */}

        <motion.div variants={textVariant()} className="mb-12">
          <div className="flex items-center gap-4">
            <motion.h2
              animate={{
                letterSpacing: ["-0.02em", "0em", "-0.02em"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-3xl font-bold text-white md:text-4xl"
            >
              About Me
            </motion.h2>

            <motion.div
              animate={{
                width: [50, 80, 50],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-3 text-sm text-gray-600"
          >
            Building intelligent systems with Generative AI
          </motion.p>
        </motion.div>

        {/* =================================================== */}
        {/* MAIN CONTENT */}
        {/* =================================================== */}

        <div className="grid gap-14 lg:grid-cols-2">

          {/* ================================================= */}
          {/* LEFT - ABOUT */}
          {/* ================================================= */}

          <motion.div
            variants={fadeIn("right", "spring", 0.1, 1)}
            className="relative"
          >
            {/* vertical AI line */}
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-purple-500/60 via-blue-500/40 to-transparent"
            />

            <div className="pl-6">

              {/* Paragraph 1 */}
              <motion.div
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="group mb-6"
              >
                <p className="text-justify leading-8 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  I'm a{" "}
                  <span className="font-medium text-gray-200">
                    GenAI Developer
                  </span>{" "}
                  focused on building intelligent, production-ready AI
                  applications. I specialize in{" "}
                  <span className="text-blue-400">
                    Large Language Models
                  </span>
                  , RAG pipelines, Agentic AI, FastAPI, and scalable AI
                  backend systems.
                </p>
              </motion.div>

              {/* Paragraph 2 */}
              <motion.div
                animate={{
                  y: [0, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="group mb-6"
              >
                <p className="text-justify leading-8 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  My work involves designing AI-powered applications,
                  multi-agent systems, LLM inference services, and
                  retrieval-augmented generation pipelines. I enjoy turning
                  complex AI concepts into{" "}
                  <span className="text-purple-400">
                    practical, reliable, and scalable solutions.
                  </span>
                </p>
              </motion.div>

              {/* Paragraph 3 */}
              <motion.div
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="group"
              >
                <p className="text-justify leading-8 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  I'm continuously exploring{" "}
                  <span className="text-cyan-400">
                    Generative AI, Agentic AI, LLM optimization,
                  </span>{" "}
                  AI infrastructure, and modern cloud technologies to build
                  smarter and more efficient AI systems.
                </p>
              </motion.div>

              {/* AI flow indicators */}
              <div className="mt-10 flex items-center gap-3 text-xs text-gray-600">
                {["LLMs", "RAG", "Agents", "Inference"].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      animate={{
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="flex items-center gap-3"
                    >
                      <span>{item}</span>

                      {index !== 3 && (
                        <motion.span
                          animate={{
                            x: [0, 4, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                          className="text-blue-500"
                        >
                          →
                        </motion.span>
                      )}
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* RIGHT - SKILLS */}
          {/* ================================================= */}

          <motion.div
            variants={fadeIn("left", "spring", 0.2, 1)}
          >
            {/* Skills title */}
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">
                My Skills
              </h3>

              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="flex items-center gap-2 text-xs text-gray-600"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                AI Stack
              </motion.span>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
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
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    animate={{
                      y: [0, -2, 0],
                    }}
                    whileHover={{
                      y: -7,
                      scale: 1.03,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/70 px-4 py-4 backdrop-blur transition-colors duration-300 hover:border-blue-500/40 hover:bg-gray-900"
                  >
                    {/* animated background */}
                    <motion.div
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "linear",
                        delay: index * 0.2,
                      }}
                      className="absolute left-0 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
                    />

                    {/* Icon */}
                    <motion.div
                      animate={{
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.1,
                      }}
                      className="relative z-10 mb-3"
                    >
                      <Icon className="h-5 w-5 text-blue-400 transition-colors duration-300 group-hover:text-cyan-400" />
                    </motion.div>

                    {/* Skill name */}
                    <span className="relative z-10 text-sm text-gray-300 transition-colors duration-300 group-hover:text-white">
                      {skill.name}
                    </span>

                    {/* Active indicator */}
                    <motion.span
                      animate={{
                        opacity: [0.2, 0.8, 0.2],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.15,
                      }}
                      className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-blue-500"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* ================================================= */}
            {/* SKILL FLOW */}
            {/* ================================================= */}

            <div className="mt-8 overflow-hidden rounded-xl border border-gray-800 bg-gray-950/60 px-4 py-4">
              <div className="mb-3 flex items-center gap-2">
                <motion.span
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="h-2 w-2 rounded-full bg-green-500"
                />

                <span className="text-xs text-gray-500">
                  AI capability flow
                </span>
              </div>

              <div className="relative overflow-hidden">
                <motion.div
                  animate={{
                    x: ["0%", "-50%"],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex w-max items-center gap-4 whitespace-nowrap text-xs"
                >
                  <span className="text-purple-400">
                    Generative AI
                  </span>

                  <span className="text-gray-700">→</span>

                  <span className="text-blue-400">
                    LLM Engineering
                  </span>

                  <span className="text-gray-700">→</span>

                  <span className="text-cyan-400">
                    RAG
                  </span>

                  <span className="text-gray-700">→</span>

                  <span className="text-purple-400">
                    Agentic AI
                  </span>

                  <span className="text-gray-700">→</span>

                  <span className="text-blue-400">
                    Inference
                  </span>

                  <span className="text-gray-700">→</span>

                  <span className="text-cyan-400">
                    AI Infrastructure
                  </span>

                  <span className="text-gray-700">→</span>

                  {/* duplicate for continuous flow */}
                  <span className="text-purple-400">
                    Generative AI
                  </span>

                  <span className="text-gray-700">→</span>

                  <span className="text-blue-400">
                    LLM Engineering
                  </span>

                  <span className="text-gray-700">→</span>

                  <span className="text-cyan-400">
                    RAG
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===================================================== */}
        {/* BOTTOM AI SYSTEM LINE */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-800 to-gray-800" />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="h-1.5 w-1.5 rounded-full bg-blue-500"
          />

          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-800 to-gray-800" />
        </motion.div>
      </div>
    </motion.section>
  );
}