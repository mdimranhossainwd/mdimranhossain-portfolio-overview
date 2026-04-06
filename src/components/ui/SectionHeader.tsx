// ─────────────────────────────────────────────
// components/ui/SectionHeader.tsx
// ─────────────────────────────────────────────

"use client";

import { itemVariants } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  center = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      <motion.div variants={itemVariants} className="mb-4">
        <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-[#FF2D78] uppercase">
          <span className="w-6 h-px bg-[#FF2D78]" />
          {badge}
          <span className="w-6 h-px bg-[#FF2D78]" />
        </span>
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
      >
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="text-muted-light text-base leading-relaxed max-w-xl"
          style={{
            marginLeft: center ? "auto" : undefined,
            marginRight: center ? "auto" : undefined,
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
