

import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { personal } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${personal.name} — Full Stack Developer`,
  description: personal.bio,
  keywords: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "TypeScript",
    "MongoDB",
    "Dhaka Bangladesh",
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    title: `${personal.name} — Full Stack Developer`,
    description: personal.bio,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — Full Stack Developer`,
    description: personal.bio,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
   
      <body className="bg-dark-950 text-gray-100 font-sans antialiased overflow-x-hidden">
        {children}
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              background: "#111118",
              border: "1px solid rgba(255,45,120,0.2)",
              color: "#e2e2e8",
            },
          }}
        />
      </body>
    </html>
  );
}
