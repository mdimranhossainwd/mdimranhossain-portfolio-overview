"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "../ui/SectionHeader";

const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
];

export default function SkillsSection() {
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    iconRefs.current.forEach((el, i) => {
      if (el) {
        el.style.animationDelay = `${i * 0.08}s`;
      }
    });
  }, []);

  return (
    <section id="skills" className="section-padding relative z-10">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .skill-icon {
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0;
        }
        .skill-icon:hover .icon-wrapper {
          border-color: #e8336d;
          box-shadow: 0 0 18px rgba(232, 51, 109, 0.4);
          transform: translateY(-4px) scale(1.08);
        }
        .skill-icon:hover .tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0px);
        }
      `}</style>

      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader
          badge="Core Skills"
          title=" Focused"
          highlight="Expertise"
          subtitle=""
          center
        />

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => {
                iconRefs.current[index] = el;
              }}
              className="skill-icon relative group cursor-pointer"
            >
              <div
                className="icon-wrapper w-[60px] h-[60px] md:w-[68px] md:h-[68px] flex items-center justify-center rounded-xl border border-[#2a2a2a] bg-[#111111] transition-all duration-300"
                style={{
                  transition:
                    "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 md:w-9 md:h-9 object-contain"
                  style={
                    skill.name === "GitHub" ||
                    skill.name === "Express" ||
                    skill.name === "Next.js" ||
                    skill.name === "Prisma"
                      ? { filter: "invert(1)" }
                      : {}
                  }
                />
              </div>
              {/* Tooltip */}
              <span className="tooltip absolute -bottom-8 left-1/2 -translate-x-1/2 translate-y-1 opacity-0 text-[10px] text-white bg-[#e8336d] px-2 py-0.5 rounded whitespace-nowrap transition-all duration-200 pointer-events-none z-10">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
