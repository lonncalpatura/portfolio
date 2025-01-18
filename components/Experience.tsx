import React from "react";

const Experience = () => {
  const experienceData = [
    {
      date: "JANUARY 2012 - PRESENT",
      job: (
        <>
          Head of Department (volunteer)
          <span className="font-normal text-tertiary">Associate Head</span>
          <span className="font-normal text-tertiary">Team Member</span>
        </>
      ),
      organisation: (
        <>
          FICSDA
          <span className="font-normal"> - Media and Communications</span>
        </>
      ),
      organisastionLink: "https://ficsda.org",
      responsibilities: "Led and managed a team of 4-15 volunteers, overseeing AV production and system renovations (£2000-£5000) while collaborating on media initiatives like livestreaming, photography, and videography. Efficiently addressed technical issues during live events, ensuring smooth operations and high-quality worship experiences.",
      skills: [
        "Adobe CC",
        "Microsoft 365",
        "Azure",
        "Renewed Vision",
        "Blackmagic Design",
        "Midas",
        "Sennheiser",
      ],
    },
    {
      date: "MARCH 2024 - DECEMBER 2024",
      job: "Website Developer",
      organisation: "Self-employed Freelance",
      organisationLink: "",
      responsibilities: "Worked with clients to develop their websites, sticking to their requirements, Managed my own time to meet set deadlines",
      skills: [
        "HTML & CSS",
        "JavaScript",
        "React",
        "Gatsby",
        "Next.js",
        "Contentful",
        "TypeScript",
        "Node.js",
      ],
    },
    {
      date: "MAY 2021 - APRIL 2024",
      job: "Food Courier",
      organisation: "Deliveroo, Uber Eats, Just Eat",
      organisationLink: "",
      responsibilities: "Delivered food orders promptly with excellent customer service, earning high customer ratings for reliability and quality, Managed multiple orders in a fast-paced environment, optimizing routes to meet delivery deadlines, Maintained food safety and security during transit, adhering to hygiene standards",
      skills: [
        "Adaptability",
        "Customer Service",
        "Diligence",
        "Punctuality",
        "Reliability",     
      ]
    },
    {
      date: "JULY 2018",
      job: "Graphic Designer (work experience)",
      organisation: "Barnet Hospital",
      organisationLink: "",
      responsibilities: "Designed and printed promotional and informational material advertising the ward and hospital, Managed simultaneous projects, ensuring deadlines and requirements were met",
      skills: [
        "Adobe CC",
        "Microsoft 365",
      ]
    }
  ]

  return (
    <div>
      <h6>EXPERIENCE</h6>

      <div className="flex flex-col gap-16 mt-10">
        {experienceData.map ((experience, index) => (
          <div key={index}>
            <p className="caption mb-4 font-semibold text-tertiary">{experience.date}</p>

            <a href={experience.organisastionLink} target="_blank" rel="noopener noreferrer" className="block mb-2 font-medium">{experience.organisation}</a>

            <h6 className="flex flex-col mb-4">{experience.job}</h6>

            <p className="flex flex-col gap-1 list-disc text-secondary">
              {experience.responsibilities}
            </p>

            <ul className="flex flex-wrap gap-2 mt-5">
              {experience.skills.map((skill, index) => (
                <li key={index} className="caption skill-tag">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience