"use client";
import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import All from "../All";
import About from "../About";
import Projects from "../Projects";
import Experience from "../Experience";
import Education from "../Education";

const Nav = () => {
  const pages = [
    {
      section: "All",
      id: "all",
      component: <All />,
    },
    {
      section: "About",
      id: "about",
      component: <About />,
    },
    {
      section: "Projects",
      id: "projects",
      component: <Projects />,
    },
    {
      section: "Experience",
      id: "experience",
      component: <Experience />,
    },
    {
      section: "Education",
      id: "education",
      component: <Education />,
    },
  ];

  return (
    <TabGroup className="lg:overflow-y-scroll lg:pr-max-x-space scroll-smooth">
      <TabList className="hidden lg:absolute lg:inline-flex gap-2 mt-20 p-1.5 bg-primary-300/25 backdrop-blur rounded-full shadow-inner shadow-primary-200/50 z-50">
        {pages.map(({ section, id }) => (
          <Tab
            key={id}
            as="a"
            href={`#${id}`}
            className="rounded-full py-1 px-3 font-semibold hover:bg-primary-300/50 data-[selected]:bg-primary-400/75 data-[selected]:text-accent-300 data-[selected]:hover:bg-primary-300/50 focus:outline-none transition-colors"
          >
            {section}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {pages.map(({ component, id }) => (
          <TabPanel key={id}>
            <div
              id={id}
              className="flex flex-col gap-20 max-h-full lg:overflow-y-scroll lg:no-scrollbar pt-20 lg:pt-40"
            >
              {component}
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Nav;
