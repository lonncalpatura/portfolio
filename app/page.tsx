"use client";
import React from "react";
import Heading from "@/components/Hero/Heading";
import All from "@/components/All";
import { motion } from "motion/react";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main>
      <div className="block fixed w-screen h-screen bg-gradient-to-br from-secondary-600/60 to-primary -z-50"></div>
      <Intro />
      <div className="pt-16 lg:pt-0 text-inter  font-normal transition-all">
        <Heading />
        <motion.div
          initial={{ x: -8, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        >
          <All />
        </motion.div>
      </div>
    </main>
  );
}
