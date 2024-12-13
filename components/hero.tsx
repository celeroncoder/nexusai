"use client";
import { MagicWand, Play, PlayCircle } from "@phosphor-icons/react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="px-4 md:px-6 flex flex-col items-center text-center space-y-8 pt-24 pb-20">
        <motion.div
          className="inline-flex items-center rounded-full bg-white/10 border-t border-white/25 px-4 py-1 text-sm backdrop-blur-md"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <MagicWand className="h-5 w-5 text-white" />
          <span className="ml-2 text-white">
            Our AI generates support at all times.
          </span>
          <div className="-z-20 bg-[conic-gradient(from_90deg_at_50%_50%,#ef4444_5%,#b91c1c_2%,#7f1d1d_0%)] blur-[8rem]  absolute h-96 w-96 -top-40"></div>
        </motion.div>
        <motion.div
          className="space-y-4 max-w-screen-md z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h1 className="text-3xl font-medium tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
            Support AI source code
            <br /> ability to{" "}
            <span className=" bg-[#f23f5d] bg-clip-text text-transparent">
              Think Fast
            </span>
          </h1>
          <p className="mx-auto max-w-screen-sm text-white/60 line-clamp-3">
            Through our advanced AI technology, we empower developers with the
            <br />
            ability to think fast, produce more efficient code, and deliver
            <br />
            amazing solutions in less time.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 z-10 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <button className="h-11 px-6 font-semibold border border-white/50 bg-gradient-to-bl from-stone-950 to-stone-900 rounded-full">
            Get Started
          </button>
          <button className="h-11 px-6 flex gap-4 items-center font-semibold hover:bg-white/10 hover:backdrop-blur-lg py-2 rounded-full">
            <Play className="h-5 w-5" />
            How it works
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
