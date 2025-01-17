import React from "react";

const Education = () => {
  const educationData = [
    {
      year: "2020 - 2023",
      institution: "University of Roehampton London",
      certificate: [
        "Bachelor of Arts in Digital Media (First Class Honours)"
      ],
      description: (
        <ul className="pl-5 text-secondary list-disc">
          <li>
            Developed a fully responsive website for my final year project using <span className="text-primary">HTML, CSS, & JS</span>.
          </li>
          <li>
            Built a Mobile app using <span className="text-primary">React Native</span>.
          </li>
          <li>
            Produced a short film, editing with the <span className="text-primary">Adobe Suite</span>.
          </li>
          <li>
            Collected and analysed various datasets with <span className="text-primary">Excel</span>. 
          </li>
        </ul>
      ),
    },
    {
      year: "2017 - 2019",
      institution: "Nobel School",
      certificate: [
        "Cambridge Technical: Information Technology (Distinction)",
        "A Level: Art Graphics (A)"
      ],
      description: "",
    },
  ];

  return (
    <div>
      <h6>EDUCATION</h6>
      <div className="flex flex-col gap-10 mt-10">
        {educationData.map((education, index) => (
          <div key={index}>
            <p className="mb-2 font-semibold text-tertiary">{education.year}</p>
            <h6>{education.institution}</h6>

            <div className="mt-1 mb-2 text-tertiary">
              <ul className="flex flex-col gap-1">
                {education.certificate.map((certificate, index) => (
                  <li key={index}>{certificate}</li>
                ))}
              </ul>
            </div>

            <>{education.description}</>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;