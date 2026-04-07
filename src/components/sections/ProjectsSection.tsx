"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/portfolio";
import { containerVariants, itemVariants } from "@/lib/utils";
import type { Project } from "@/types";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionHeader
            badge="Portfolio"
            title="My Work"
            highlight="Projects"
            subtitle=""
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      variants={itemVariants}
      className="group relative glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-[#FF2D78]/25 transition-all duration-300"
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      {/* Project image */}
      <div className="relative h-48 overflow-hidden bg-dark-700">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#FF2D78] text-white text-[10px] font-mono font-medium rounded-full">
            Featured
          </div>
        )}

        {/* Hover action buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#FF2D78] text-white text-xs font-medium rounded-lg hover:bg-[#FF2D78]/90 transition-colors"
            >
              <ExternalLink size={12} />
              Live
            </a>
          )}
          {project.clientCode && (
            <a
              href={project.clientCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-dark-800/90 border border-white/10 text-white text-xs font-medium rounded-lg hover:border-[#FF2D78]/30 transition-colors"
            >
              <Code2 size={12} />
              Client
            </a>
          )}
          {project.serverCode && (
            <a
              href={project.serverCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-dark-800/90 border border-white/10 text-white text-xs font-medium rounded-lg hover:border-[#FF2D78]/30 transition-colors"
            >
              <Github size={12} />
              Server
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-white font-semibold text-base">
            {project.title}
          </h3>
          <span className="font-mono text-[10px] text-gray-600 shrink-0 mt-0.5">
            {project.year}
          </span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-mono rounded border border-[#FF2D78]/20 text-[#FF6BA0] bg-[#FF2D78]/5"
            >
              #{tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="px-2 py-0.5 text-[10px] font-mono text-gray-600">
              +{project.tags.length - 5}
            </span>
          )}
        </div>

        {/* Bottom links */}
        <div className="flex items-center gap-4 pt-3 border-t border-white/5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-[#FF2D78] transition-colors flex items-center gap-1"
            >
              <ExternalLink size={11} />
              Live Link
            </a>
          )}
          {project.clientCode && (
            <a
              href={project.clientCode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-[#FF2D78] transition-colors flex items-center gap-1"
            >
              <Code2 size={11} />
              Client Code
            </a>
          )}
          {project.serverCode && (
            <a
              href={project.serverCode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-[#FF2D78] transition-colors flex items-center gap-1"
            >
              <Github size={11} />
              Server Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
