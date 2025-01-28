import React from "react";
import { Passion_One } from "next/font/google";

const passion = Passion_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Hi = () => {
  return (
    <section>
      <h5 className="font-medium">Hi, my name is</h5>
      <h1
        className={`inline-block bg-gradient-to-r from-accent-500 to-accent-200 bg-clip-text text-transparent text-[3.58rem] lg:text-[4.296rem] leading-none ${passion.className} transition-all`}
      >
        <a href="">LONN CALPATURA</a>
      </h1>

      <p className="mt-4 text-color-3">
        An aspiring front-end web developer with experience in AV and an
        interest in all things tech.
      </p>
    </section>
  );
};

export default Hi;
