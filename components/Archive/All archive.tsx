import React from "react";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const sections = [
  { title: "ABOUT", component: <About /> },
  { title: "PROJECTS", component: <Projects /> },
  { title: "EXPERIENCE", component: <Experience /> },
  { title: "EDUCATION", component: <Education /> },
  { title: "", component: <Footer /> },
];

const All = () => {
  return (
    <>
      {sections.map((section, index) => (
        <div key={index}>
          <div className="sticky lg:relative top-0 px-4 sm:px-8 md:px-16 lg:px-0 bg-primary/75 lg:bg-transparent backdrop-blur-sm py-5 z-20">
            <h6 className="text-color-2">{section.title}</h6>
          </div>
          <div className="mt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-0">
            {section.component}
          </div>
        </div>
      ))}
    </>
  );
};

export default All;
