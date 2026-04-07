"use client";

import { personal } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  // Build typewriter sequence from roles array
  const typeSequence = personal.roles.flatMap((role) => [role, 2000]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center mt-10 pt-20 pb-16 overflow-hidden"
    >
      {/* Pink spotlight behind hero image */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 70% 50%, rgba(255,45,120,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Left — Text content */}
          <div>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#FF2D78]/20 bg-[#FF2D78]/5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2D78] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF2D78]" />
              </span>
              <span className="font-mono text-xs text-[#FF2D78] tracking-wide">
                Available for opportunities
              </span>
            </motion.div>

            {/* Hello label */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-mono text-sm text-gray-500 uppercase tracking-widest mb-3"
            >
              HELLO
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-4"
            >
              I&apos;m {personal.name}
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl md:text-2xl font-semibold text-[#FF2D78] mb-5 h-8"
            >
              <TypeAnimation
                sequence={typeSequence as (string | number)[]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-gray-400 text-base leading-relaxed max-w-md mb-8"
            >
              {personal.bio}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 px-6 py-3 bg-[#FF2D78] hover:bg-[#FF2D78]/90 text-white font-medium rounded-lg text-sm active:scale-95 transition-all"
              >
                Download Resume
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Right — Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Outer ring */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full animate-[ping_3s_ease-in-out_infinite] opacity-10"
                style={{ background: "rgba(255,45,120,0.4)" }}
              />
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden border-2 border-[#FF2D78]/30 glow-pink">
                <Image
                  src={personal.avatar}
                  alt={personal.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 360px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
