"use client";
import React, { useState, useEffect } from "react";
import { Tab, TabGroup, TabList } from "@headlessui/react";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { section: "About", id: "about" },
    { section: "Projects", id: "projects" },
    { section: "Experience", id: "experience" },
    { section: "Education", id: "education" },
  ];

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

  return (
    <TabGroup>
      <TabList className="hidden lg:block space-y-5 mt-16">
        {sections.map(({ section, id }) => (
          <Tab
            key={id}
            as="a"
            href={`#${id}`}
            className={`block w-fit transition-all ${
              activeSection === id
                ? "translate-x-2 text-accent-300 font-semibold"
                : "hover:translate-x-1 hover:text-accent-200"
            }`}
          >
            <span
              className={`h-0.5 w-6 bg-accent-200 transition-all ${
                activeSection === id ? "opacity-100" : "opacity-0"
              }`}
            ></span>
            {section}
          </Tab>
        ))}
      </TabList>
    </TabGroup>
  );
};

export default Nav;
