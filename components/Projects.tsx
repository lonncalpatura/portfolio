import React from "react";
import Image from "next/image";
import ficsdaImage from "../images/ficsda.png"
import lunarImage from "../images/lunar.png";

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
      title: "FICSDA App",
      description: "A mobile app developed as a university project for a church, offering features such as a prayer request feed.",
      link: "",
      image: lunarImage,
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
      <h5>PORTFOLIO</h5>
      
      <div className="flex flex-col gap-16 mt-10">
        {portfolioData.map((project, index) => (
          <div key={index} className="flex flex-col lg:flex-row-reverse gap-4 w-full card">
            <div>
              <h6 className="font-semibold"><a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a></h6>
              <p className="mt-2 text-color-3">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mt-4">
                {project.skills.map((skill, index) => (
                  <li key={index} className="caption skill-tag">{skill}</li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 lg:w-full lg:max-w-40">
              <div className="overflow-hidden rounded-md border-2 border-border">
                <Image
                  alt="Project thumbnail"
                  loading="lazy"
                  src={project.image}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects