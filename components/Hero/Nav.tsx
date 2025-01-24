"use client";
import React from "react";
import { Tab, TabGroup, TabList } from "@headlessui/react";

const Nav = () => {
  const sections = [
    {
      section: "About",
      id: "about",
    },
    {
      section: "Projects",
      id: "projects",
    },
    {
      section: "Experience",
      id: "experience",
    },
    {
      section: "Education",
      id: "education",
    },
  ];

  return (
    <TabGroup>
      <TabList className="hidden lg:block space-y-5 mt-16">
        {sections.map(({ section, id }) => (
          <Tab
            key={id}
            as="a"
            href={`#${id}`}
            className="
            block w-fit focus:outline-none 
            data-[selected]:translate-x-2 data-[selected]:text-accent-200 data-[selected]:font-semibold 
            data-[selected]:before:content-[''] data-[selected]:before:size-1 data-[selected]:before:bg-white
            data-[focus]:outline-white hover:translate-x-1 hover:text-accent-100 transition-all"
          >
            {section}
          </Tab>
        ))}
      </TabList>
    </TabGroup>
  );
};

export default Nav;
