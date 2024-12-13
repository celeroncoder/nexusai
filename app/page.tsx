"use client";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.main
      className="min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="-z-10 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <GradientBackground />
      <Navbar />
      <Hero />
    </motion.main>
  );
}
