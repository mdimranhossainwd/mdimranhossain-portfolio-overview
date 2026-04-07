"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { contactInfo } from "@/data/portfolio";
import { containerVariants, itemVariants } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { toast } from "sonner";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={16} />,
  linkedin: <Linkedin size={16} />,
  facebook: <Facebook size={16} />,
};

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSending(true);

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      formData.append("access_key", "db74eb4b-5980-4227-955b-5b81a7a627dd");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Message sent! I'll get back to you soon.");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        throw new Error(res.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionHeader
            badge="Contact"
            title="Get In"
            highlight="Touch"
            subtitle=""
            center
          />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — contact info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <p className="text-gray-400 text-[15px] leading-relaxed"></p>

              {/* Info items */}
              <div className="space-y-5">
                <ContactItem
                  icon={<Phone size={16} />}
                  label="Phone"
                  value={contactInfo.phone}
                  href={`tel:${contactInfo.phone}`}
                />
                <ContactItem
                  icon={<Mail size={16} />}
                  label="Email"
                  value={contactInfo.email}
                  href={`mailto:${contactInfo.email}`}
                />
                <ContactItem
                  icon={<MapPin size={16} />}
                  label="Location"
                  value={contactInfo.location}
                />
              </div>

              {/* Social */}
              <div>
                <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-3">
                  Social
                </p>
                <div className="flex gap-3">
                  {contactInfo.socials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.platform}
                      className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-gray-400 hover:text-[#FF2D78] hover:border-[#FF2D78]/30 hover:bg-[#FF2D78]/5 transition-all"
                    >
                      {iconMap[social.icon]}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-4"
              noValidate
            >
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  label="Name *"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
                <FormField
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                />
              </div>

              <FormField
                label="Email *"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Type your mail address here..."
              />

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-gray-500 uppercase tracking-wide mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message..."
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-800/60 border border-white/8 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF2D78]/40 focus:bg-dark-800 transition-all resize-none"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FF2D78] hover:bg-[#FF2D78]/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-xl text-sm active:scale-[0.98] transition-all"
              >
                {sending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Sub-components ────────────────────────────

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#FF2D78]/10 text-[#FF2D78] shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-600 font-mono uppercase tracking-wide mb-0.5">
          {label}
        </div>
        <div className="text-white text-sm font-medium">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block hover:opacity-80 transition-opacity"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }
  return <div>{inner}</div>;
}

function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-mono text-gray-500 uppercase tracking-wide mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-dark-800/60 border rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF2D78]/40 focus:bg-dark-800 transition-all"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      />
    </div>
  );
}
