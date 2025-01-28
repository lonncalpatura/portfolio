import React from "react";
import Image from "next/image";
import ficsdaWebsiteImage from "../assets/images/ficsda website.png";
import ficsdaAppImage from "../assets/images/ficsda app.jpg";
import lunarImage from "../assets/images/lunar.png";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const Projects = () => {
  const portfolioData = [
    {
      title: "FICSDA Website",
      description:
        "Website for the Filipino International Church of Seventh-day Adventists. Includes features such as Planning Center API and Contentful CDN.",
      link: "https://ficsda.org",
      image: ficsdaWebsiteImage,
      skills: [
        "React",
        "JavaScript",
        "Gatsby",
        "Styled Components",
        "Framer Motion",
        "Node.js",
        "Contentful",
        "Azure",
        "Vercel",
      ],
    },
    {
      title: "FICSDA Mobile Web App",
      description:
        "A mobile web app developed as a university project for a church.",
      link: "https://github.com/lonncalpatura/ficsda-app",
      image: ficsdaAppImage,
      skills: ["React Native", "JavaScript", "Expo"],
    },
    {
      title: "Digital Agency Website",
      description:
        "Non-functional portfolio website for an imaginary design agency called Lunar. This was a project for an advanced website design module in university.",
      link: "https://lonncalpatura.github.io/lunar/",
      image: lunarImage,
      skills: ["HTML & CSS", "JavaScript", "Adobe CC"],
    },
  ];

  return (
    <div className="flex flex-col gap-16 lg:gap-10">
      {portfolioData.map((project, index) => (
        <div
          key={index}
          className="lg:p-4 lg:hover:bg-secondary-300/15 lg:hover:shadow-inner lg:hover:shadow-secondary-200/15 lg:rounded-lg transition-all card group/card"
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col lg:flex-row gap-4 w-full"
          >
            <div className="w-1/2 lg:w-full lg:max-w-40">
              <div className="overflow-hidden aspect-video rounded-md border-2 border-primary-300 lg:group-hover/card:border-primary-400 bg-primary-0">
                <Image
                  alt="Project thumbnail"
                  loading="lazy"
                  src={project.image}
                />
              </div>
            </div>
            <div>
              <h6 className="font-semibold lg:group-hover/card:text-accent-300">
                {project.title}
                {project.link && (
                  <ArrowUpRightIcon className="ml-2 transition-all icon external-arrow" />
                )}
              </h6>
              <p className="mt-2 text-color-3">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mt-4">
                {project.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="px-2 py-1 bg-gradient-to-br from-accent-300/15 lg:from-accent-200/10 to-accent-300/10 lg:to-accent-200/5 text-accent-300 lg:text-accent-200/80 text-caption rounded-full skill-tag"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
