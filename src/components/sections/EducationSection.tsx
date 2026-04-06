"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";

const educationDetails = [
  { label: "Qualification", value: "Higher Secondary Certificate (HSC)" },
  { label: "Completion", value: "2025" },
  { label: "Group", value: "Arts (Humanities)" },
];

export default function EducationSection() {
  return (
    <section id="education" className="section-padding relative z-10">
      <SectionHeader
        badge="Education"
        title="Academic"
        highlight="Background"
        subtitle="A concise summary of my recent formal education and academic foundation."
        center
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
        //   ref={ref}
        //   variants={containerVariants}
        //   initial="hidden"
        //   animate={inView ? "visible" : "hidden"}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text side */}
            <div>
              <motion.p
                // variants={itemVariants}
                className="text-gray-400 text-[15px] leading-[1.85] mb-8"
              >
                I have completed my Higher Secondary Certificate (HSC) in 2025
                under the Humanities group with a GPA of 4.00 Prior to that, I
                passed my Secondary School Certificate (SSC) in 2023 under the
                Science group with a GPA of 4.75. My academic journey has
                equipped me with a strong foundation in both the arts and
                sciences, fostering a well-rounded perspective and a commitment
                to excellence in my studies.
              </motion.p>
            </div>
            <motion.div className="relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px]  overflow-hidden]">
                <Image
                  src="https://i.ibb.co.com/QjczW4vb/145855843-8e8d722b-6a0a-4da0-9ca2-3aba986f49e9-removebg-preview.png"
                  alt="Education Image"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 360px"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
