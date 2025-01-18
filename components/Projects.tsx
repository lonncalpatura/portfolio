import React from "react";

const Projects = () => {
  const portfolioData = [
    {
      title: "FICSDA Website",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus similique, placeat officia quia facere iure accusantium nemo ad necessitatibus sint voluptatum enim assumenda quae eveniet repellendus vero, neque consectetur quis.",
      image:"",
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, explicabo maiores corrupti pariatur culpa molestias recusandae quibusdam, debitis repellat perspiciatis aspernatur assumenda magnam totam eaque! Doloremque explicabo atque tempora porro.",
      image: "",
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