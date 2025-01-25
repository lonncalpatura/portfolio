import React from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div className="lg:pl-4">
      <div className="space-y-4 text-color-3 about">
        <p>
          Hi! I&#39;m <span>Lonn Doneill Calpatura</span>, but you can call me{" "}
          <span>Onyl</span>. I&#39;m an aspiring web developer with a passion
          for meticulously crafting websites that help organisations grow.
          Though new to the industry, I&#39;m confident in my skills and quick
          to adapt, always eager to learn and improve. I enjoy finding the
          perfect balance between structure and spontaneity—because, hey,
          life&#39;s more fun that way!
        </p>
        <p>
          I also have experience in the <span>Audio & Visual (AV)</span>{" "}
          industry, having volunteered at my church for 12 years. Moving from
          team member to head of department, I&#39;ve gained valuable skills in{" "}
          <span>AV</span> and <span>workforce systems</span>,{" "}
          <span>teamwork</span>, and <span>leadership</span>.
        </p>
        <p>
          Outisde of coding and AV projects, I love staying active by playing{" "}
          <span>volleyball</span> and <span>badminton</span>. And of course,
          being in the tech world, I have a big love for{" "}
          <span>all things tech</span> and <span>gaming</span>!
        </p>
      </div>
      <Link
        href="/CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-10 transition-all text-color hover:text-accent-300 group/cv"
      >
        <h6 className="font-medium">
          View Full CV
          <ArrowUpRightIcon className="group-hover/cv:translate-x-0.5 group-hover/cv:-translate-y-0.5 group-hover/cv:stroke-accent-300 icon external-arrow" />
        </h6>
      </Link>
    </div>
  );
};

export default About;
