"use client";

import { contactInfo, navItems, personal } from "@/data/portfolio";
import { scrollToSection } from "@/lib/utils";
import { Facebook, Github, Linkedin } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={15} />,
  linkedin: <Linkedin size={15} />,
  facebook: <Facebook size={15} />,
};

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-dark-900/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="font-mono text-sm font-medium text-white mb-3">
              <span className="text-[#FF2D78]">&lt;</span>
              {personal.shortName}
              <span className="text-[#FF2D78]"> /&gt;</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Full Stack Developer focused on building clean, scalable web
              applications with modern technologies.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-sm text-gray-500 hover:text-[#FF2D78] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-4">
              Connect
            </p>
            <div className="space-y-2 mb-4">
              <p className="text-sm text-gray-500">{contactInfo.email}</p>
              <p className="text-sm text-gray-500">{contactInfo.phone}</p>
              <p className="text-sm text-gray-500">{contactInfo.location}</p>
            </div>
            <div className="flex gap-2">
              {contactInfo.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/8 text-gray-500 hover:text-[#FF2D78] hover:border-[#FF2D78]/20 transition-all"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} All rights reserved by{" "}
            <span className="text-gray-400">{personal.name}</span>
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1.5">
            Built with using Next.js, TypeScript & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
