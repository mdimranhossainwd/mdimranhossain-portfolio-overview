// ─────────────────────────────────────────────
// components/sections/AboutSection.tsx
// ─────────────────────────────────────────────

"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { personal } from "@/data/portfolio";
import { containerVariants, itemVariants } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionHeader
            badge="About Me"
            title="Who I"
            highlight="Am"
            subtitle=""
            center
          />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-full aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/5">
                <Image
                  src={personal.avatar}
                  alt={personal.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
                {/* Pink overlay gradient bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark-950/90 to-transparent" />
              </div>
              {/* Decorative pink corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#FF2D78]/40 rounded-br-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#FF2D78]/20 rounded-tl-2xl" />
            </motion.div>

            {/* Text side */}
            <div>
              <motion.p
                variants={itemVariants}
                className="text-gray-400 text-[15px] leading-[1.85] mb-8"
              >
                {personal.aboutLong}
              </motion.p>

              {/* Info grid */}
              {/* <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-3 mb-8"
              >
                {highlights.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    className="flex items-start gap-2"
                  >
                    <span className="text-[#FF2D78] mt-1 text-xs">▹</span>
                    <div>
                      <span className="text-gray-500 text-xs uppercase tracking-wide font-mono">
                        {item.label}
                      </span>
                      <div className="text-white text-sm font-medium">
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
