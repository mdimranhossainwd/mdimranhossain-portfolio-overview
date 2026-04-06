// ─────────────────────────────────────────────
// components/sections/SkillsSection.tsx
// ─────────────────────────────────────────────

"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardMotion = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.08, duration: 0.5 }}
          className="space-y-10"
        >
          <SectionHeader
            badge="Core Skills"
            title="Focused"
            highlight="Expertise"
            subtitle="Clean, modern skill highlights for a professional full-stack developer portfolio."
            center
          />

          <motion.div
            variants={cardMotion}
            // className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <img
              src="https://i.ibb.co.com/21ZJcyZ0/icons.jpg"
              alt="Skills"
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
