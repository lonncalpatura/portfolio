import React from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div className="lg:pl-4">
      <div className="space-y-4 text-color-3 about">
        <p>
          Hi! I&#39;m <span className="text-color">Lonn Doneill Calpatura</span>
          , but you can call me{" "}
          <span className="relative inline-block text-color hover:text-accent-300 cursor-pointer group/onylipa">
            <span className="block transition-opacity duration-200 group-hover/onylipa:opacity-0 ">
              Onyl
            </span>
            <span className="absolute top-0 left-0 w-full opacity-0 transition-opacity duration-200 group-hover/onylipa:opacity-100">
              ɒnˈɪl
            </span>
          </span>
          . I&#39;m passionate about tech and love projects that make a
          difference whether it&#39;s <span className="text-color">AV</span>,{" "}
          <span className="text-color">websites</span>, or{" "}
          <span className="text-color">IT systems</span>. I enjoy solving
          problems, collaborating with others, and finding the perfect balance
          between structure and spontaneity—because, hey, life&#39;s more fun
          that way!
        </p>
        <p>
          Over the years, I&#39;ve gained hands-on experience through
          volunteering and freelance work, growing from a team member into
          leadership roles. These experiences have taught me the value of{" "}
          <span className="text-color">adaptabiility</span>,{" "}
          <span className="text-color">collaboration</span>, and{" "}
          <span className="text-color">curiosity</span>.
        </p>
        <p>
          When I&#39;m not deep in a project, you&#39;ll find me staying active
          by playing <span className="text-color">volleyball</span> and{" "}
          <span className="text-color">badminton</span>. And of course, being in
          the tech world, I have a big love for{" "}
          <span className="text-color">all things tech</span> and{" "}
          <span className="text-color">gaming</span>!
        </p>
      </div>
      {/* <Link
        href="/CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-10 transition-all text-color hover:text-accent-300 group/cv"
      >
        <h6 className="font-medium">
          View Full CV
          <ArrowUpRightIcon className="group-hover/cv:translate-x-0.5 group-hover/cv:-translate-y-0.5 ml-2 group-hover/cv:stroke-accent-300 transition-all icon external-arrow" />
        </h6>
      </Link> */}
    </div>
  );
};

export default About;
