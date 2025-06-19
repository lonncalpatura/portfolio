"use client";
import React, { useState, useEffect } from "react";
import { easeOut, motion } from "motion/react";

const sections = [
  { section: "About", id: "about" },
  { section: "Projects", id: "projects" },
  { section: "Experience", id: "experience" },
  { section: "Education", id: "education" },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => observer.disconnect();
  }, []);

  const listVariant = {
    hidden: {},
    visible: {
      transition: { delayChildren: 7.5, staggerChildren: 0.15 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -8 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 }, easeOut },
  };

  return (
    <motion.ul
      className="hidden lg:block space-y-5 mt-16"
      variants={listVariant}
      initial="hidden"
      animate="visible"
    >
      {sections.map(({ section, id }) => (
        <motion.li key={id} className="text-color-3" variants={itemVariant}>
          <a
            href={`#${id}`}
            className={`block w-fit transition-all ${
              activeSection === id
                ? "translate-x-2 text-accent-300 font-semibold"
                : "hover:translate-x-1 hover:text-color"
            }`}
          >
            <span
              className={`h-0.5 w-6 bg-accent-200 transition-all ${
                activeSection === id ? "opacity-100" : "opacity-0"
              }`}
            ></span>
            {section}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Nav;
