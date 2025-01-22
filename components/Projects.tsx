import React from "react";
import Image from "next/image";
import ficsdaImage from "../assets/images/ficsda.png"
import lunarImage from "../assets/images/lunar.png";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const Projects = () => {
  const portfolioData = [
    {
      title: "FICSDA Website",
      description: "Website for the Filipino International Church of Seventh-day Adventists. Includes features such as Planning Center API and Contentful CDN.",
      link: "https://ficsda.org",
      image: ficsdaImage,
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
      ]
    },
    {
      title: "FICSDA Mobile Web App",
      description: "A mobile app developed as a university project for a church, offering features such as a prayer request feed.",
      link: "",
      image: "",
      skills: [
        "React Native",
        "JavaScript",
        "Node.js",
      ]
    },
    {
      title: "Digital Agency Website",
      description: "Non-functional portfolio website for an imaginary design agency called Lunar. This was a project for an advanced website design module in university.",
      link: "https://lonncalpatura.github.io/lunar/",
      image: lunarImage,
      skills: [
        "HTML & CSS",
        "JavaScript",
        "Adobe CC",
      ]
    },
  ]

  return (
    <div>
      <h5>PROJECTS</h5>
      
      <div className="flex flex-col gap-10 mt-10">
        {portfolioData.map((project, index) => (
          <div key={index} className="card">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col lg:flex-row gap-4 w-full">
              <div className="w-1/2 lg:w-full lg:max-w-40">
                <div className="overflow-hidden aspect-video rounded-md border-1 border-primary-200 bg-primary-0">
                  <Image
                    alt="Project thumbnail"
                    loading="lazy"
                    src={project.image}
                  />
                </div>
              </div>
              <div>
                <h6 className={`font-semibold ${project.link && "h6-change"}`}>
                  {project.title}
                  {project.link && (
                    <ArrowUpRightIcon className="icon external-arrow" />
                  )}
                </h6>
                <p className="mt-2 text-color-3">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mt-4">
                  {project.skills.map((skill, index) => (
                    <li key={index} className="caption skill-tag">{skill}</li>
                  ))}
                </ul>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects