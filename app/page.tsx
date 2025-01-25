"use client";
import React from "react";
import Heading from "@/components/Hero/Heading";
import All from "@/components/All";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main>
      <div className="hidden lg:block fixed w-screen h-screen bg-gradient-to-br from-secondary-700/75 to-primary -z-50"></div>
      <div className="pt-16 lg:pt-0 transition-all">
        <Heading />
        <motion.div
          initial={{ x: -8, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <All />
        </motion.div>
      </div>
    </main>
  );
}
