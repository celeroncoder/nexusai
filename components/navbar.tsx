"use client";
import Link from "next/link";
import { AnimationDefinition, motion } from "motion/react";
import Image from "next/image";
import { useAnimation } from "motion/react";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#integrations", label: "Integrations" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#docs", label: "Docs" },
  { href: "/#changelog", label: "Changelog" },
];

export function Navbar() {
  return (
    <motion.nav
      className="sticky top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex h-16 items-center justify-between px-16">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo_white.svg"
              width={24}
              height={24}
              alt="Nexus AI"
            />
            <span className="font-bold text-white">Nexus AI</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {links.map(({ href, label }) => (
              <a
                key={href}
                className="relative text-sm font-medium text-white hover:text-white/80 h-16 flex items-center justify-center"
                href={href}
              >
                {typeof window !== 'undefined' &&
                  `/${window.location.href.split("/").pop()}`.includes(href) && (
                    <div className="absolute inset-x-0 h-px w-3/4 mx-auto -bottom-px shadow-2xl bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                  )}
                <span className="relative z-20">{label}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4 text-white">
          <button className="text-sm hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full">
            Sign in
          </button>

          <AnimatedButton />
        </div>
      </div>
    </motion.nav>
  );
}

function AnimatedButton() {
  const controls = useAnimation();

  const animationDef: AnimationDefinition = {
    background: [
      "conic-gradient(from 90deg at 50% 50%, #F5F5F5 0%, #000000 50%, #E3E3E3 100%)",
      "conic-gradient(from 450deg at 50% 50%, #F5F5F5 0%, #000000 50%, #E3E3E3 100%)",
    ],
    transition: { duration: 2, repeat: Infinity, ease: "linear" },
  };

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start(animationDef);
  };

  return (
    <motion.button
      className="relative inline-flex overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.span
        className="absolute inset-0"
        animate={controls}
        whileInView={animationDef}
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #F5F5F5 0%, #000000 50%, #E3E3E3 100%)",
        }}
        transition={{ duration: 2, ease: "linear", repeat: Infinity }}
      />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Remix Template
      </span>
    </motion.button>
  );
}
