import React from "react";

const Projects = () => {
  const portfolioData = [
    {
      title: "FICSDA Website",
      description: "Freelance job.",
      image:"",
      skills: [
        "",
      ]
    },
    {
      title: "FICSDA App",
      description: "A university project.",
      image: "",
      skills: [
        "",
      ]
    },
    {
      title: "Digital Agency Website",
      description: "Another university project.",
      image: "",
      skills: [
        "",
      ]
    },
  ]

  return (
    <div>
      <h6>PORTFOLIO</h6>
      
      {portfolioData.map((project, index) => (
        <div key={index} className="mt-10">
          <a href=""><h6 className="font-semibold">{project.title}</h6></a>
          <p className="mt-2 text-secondary">{project.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Projects