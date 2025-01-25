import React from "react";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const All = () => {
  const sections = [
    { title: "ABOUT", id: "about", component: <About /> },
    { title: "PROJECTS", id: "projects", component: <Projects /> },
    { title: "EXPERIENCE", id: "experience", component: <Experience /> },
    { title: "EDUCATION", id: "education", component: <Education /> },
    { title: "", id: "footer", component: <Footer /> },
  ];

  return (
    <div className="lg:pl-[var(--all-pl)] lg:pr-max-x-space">
      <div className="lg:pr-10">
        {sections.map((section, index) => (
          <section key={index} id={section.id} className="pt-20">
            <h6 className="sticky lg:relative top-0 px-4 sm:px-8 md:px-10 lg:pl-4 lg:pr-0 text-color-2 bg-primary/75 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none py-5 lg:py-0">
              {section.title}
            </h6>
            <div className="mt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-0">
              {section.component}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default All;
