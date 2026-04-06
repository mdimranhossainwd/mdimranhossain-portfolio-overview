// ─────────────────────────────────────────────
// data/portfolio.ts — Single source of truth
// Edit this file to update all portfolio content
// ─────────────────────────────────────────────

import type { ContactInfo, NavItem, PersonalInfo, Project } from "@/types";

export const personal: PersonalInfo = {
  name: "Md Imran Hossain",
  shortName: "Md. Imran",
  roles: ["Front-end Developer", "Full Stack Developer", "Web Developer"],
  bio: "Dedicated web developer specializing in backend technologies. Passionate MERN stack developer skilled in MongoDB, Express, React, and Node.js. Focused on building scalable web apps with clean, reusable code.",
  aboutLong:
    "I am Md. Imran Hossain, a dedicated and enthusiastic Full Stack Developer with over a year of hands-on experience in modern web development. I continuously strive to improve my skills by learning and adopting the latest technologies and industry best practices. I specialize in building user-friendly, responsive, and high-quality web applications, with strong expertise in converting PSD and Figma designs into pixel-perfect, production-ready interfaces. On the frontend, I am proficient in JavaScript (ES6), TypeScript, React.js, Redux, and RTK Query. I focus on writing clean, maintainable code and creating smooth user experiences. On the backend, I work confidently with Node.js and Express.js, and I have solid experience in database management using MongoDB (Mongoose), PostgreSQL, and MySQL. I am also familiar with modern ORM tools like Prisma, which helps me build scalable and efficient backend systems. I have a strong understanding of REST API design and implementation, and I always aim to follow clean architecture, modular coding structure, and industry standards. I am comfortable working under pressure and meeting deadlines, and I am highly motivated to continuously grow as a developer by exploring new tools, technologies, and best practices in full stack development.",
  avatar:
    "https://i.ibb.co.com/N63VVzM8/Gemini-Generated-Image-korbnxkorbnxkorb-removebg-preview.png",
  resumeUrl:
    "https://mdimranhossains-wd-portfolios.vercel.app/assets/Md_Imran_Hossain_mern_resume.pdf",
  yearsExp: 1,
  projectsDone: 12,
  clients: 8,
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: "skillbridge",
    title: "Skillbridge",
    description:
      "A full-featured e-commerce platform like Daraz and Shopify with user authentication, cart management, and payment integration.",
    image: "https://i.ibb.co.com/Zpx6Bz0D/Screenshot-2026-04-07-015856.png",
    tags: [
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Tailwind",
      "RadixUI",
    ],
    liveUrl: "https://be-a-next-js-pro-assignment.vercel.app/",
    clientCode:
      "https://github.com/mdimranhossainwd/be-a-next.js-pro-assignment",
    serverCode:
      "https://github.com/mdimranhossainwd/be-a-prisma-pro-assignment",
    year: "2026",
  },
  {
    id: "eco-spark",
    title: "EcoSpark",
    description:
      "EcoSpark Hub is a full-stack online community portal where members can share, discover, and vote on sustainability-driven ideas from reducing plastic waste to launching local solar projects. Built with modern web technologies to deliver a clean, responsive, and engaging user experience.",
    image: "https://i.ibb.co.com/V0nVs6Yn/Screenshot-2026-04-07-015924.png",
    tags: [
      "Full Stack",
      "Next.js",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Tanstack Query",
      "Stripe",
      "Better Auth",
    ],
    liveUrl: "https://be-a-industry-standard-fusionist-fr.vercel.app/",
    clientCode:
      "https://github.com/mdimranhossainwd/be-a-industry-standard-fusionist-frontend-assignment",
    serverCode:
      "https://github.com/mdimranhossainwd/be-a-industry-standard-fusionist-backend-assignment",
    year: "2026",
  },
  {
    id: "skyline",
    title: "Skyline",
    description:
      "A real estate listing platform where hosts/agents can showcase properties, manage bookings, and track revenue",
    image: "https://i.ibb.co.com/fYSp4GPH/Skyline-Home-banner.jpg",
    tags: ["MERN", "React", "MongoDB", "Tailwind", "Express", "Daisy UI"],
    liveUrl: "https://devspotlight.vercel.app",
    clientCode: "https://github.com/mdimranhossain/devspotlight-client",
    serverCode: "https://github.com/mdimranhossain/devspotlight-server",
    year: "2026",
  },
];

export const contactInfo: ContactInfo = {
  phone: "+8801774646996",
  email: "mdimranhossain7498@gmail.com",
  location: "Tangail, Bangladesh",
  socials: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/mdimranhossainwd",
      icon: "linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/mdimranhossainwd",
      icon: "github",
    },
    {
      platform: "Facebook",
      url: "https://facebook.com/mdimranhossain1018",
      icon: "facebook",
    },
  ],
};
