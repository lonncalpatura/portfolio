import React from "react";

const Hero = () => {
  return (
    <div className="lg:flex lg:flex-col lg:justify-between lg:h-full">
      <div>
        <h6 className="font-medium">Hi, my name is</h6>
        <h2>Lonn Calpatura</h2>
        <p className="mt-4 text-secondary">An aspiring frontend website developer, with experience in AV, and interest in IT.</p>
        <a href="" className="inline-block mt-8 button">View Resume</a>
      </div>

      <ul className="pt-8 flex gap-4">
        <li><a href="https://www.linkedin.com/in/lonncalpatura/" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/lonncalpatura" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://www.instagram.com/onylfansonly/" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </div>
  )
}

export default Hero