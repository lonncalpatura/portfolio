import React from "react";

const Education = () => {
  const educationData = [
    {
      year: "2020 - 2023",
      institution: "University of Roehampton London",
      certificate: [
        "Bachelor of Arts in Digital Media (First Class Honours)"
      ],
      description: [
        "Developed a fully responsive website for my final year project using HTML, CSS, & JS",
        "Built a Mobile app using React Native",
        "Produced a short film, editing with the Adobe Suite",
        "Collected and analysed various datasets with Excel",
      ],
    },
    {
      year: "2017 - 2019",
      institution: "Nobel School",
      certificate: [
        "Cambridge Technical: Information Technology (Distinction)",
        "A Level: Art Graphics (A)"
      ],
      description: [],
    },
  ];

  return (
    <div>
      <h6>EDUCATION</h6>

      <div className="flex flex-col gap-10 mt-10">
        {educationData.map((education, index) => (
          <div key={index} className="">
            <p className="caption mb-4 font-semibold text-color-4">{education.year}</p>
            
            <h6>{education.institution}</h6>

            <div className="mt-1 mb-2 text-color-2">
              <ul className="flex flex-col gap-1">
                {education.certificate.map((certificate, index) => (
                  <li key={index}><h6 className="font-normal">{certificate}</h6></li>
                ))}
              </ul>
            </div>

            <ul className="pl-5 text-color-3 list-disc">
              {education.description.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;