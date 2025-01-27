import React from "react";
import { Modak, Passion_One, Titan_One } from "next/font/google"; // Import Modak here for specific use

const modak = Modak({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const passionOne = Passion_One({
  weight: "900", // You can adjust the weight if needed
  subsets: ["latin"],
  display: "swap",
});

const titanOne = Titan_One({
  weight: "400", // You can adjust the weight if needed
  subsets: ["latin"],
  display: "swap",
});

const Intro = () => {
  return (
    <section className="h-screen w-screen bg-secondary-500 p-[5%] hidden">
      <h5
        className="font-medium"
        style={{
          fontSize: "clamp(1.44rem, 25vh, 4rem)",
        }}
      >
        Hi, my name is
      </h5>
      <h1
        className={`inline-block bg-gradient-to-l from-accent-200 to-accent-500 text-transparent bg-clip-text ${modak.className}`}
        style={{
          fontSize: "clamp(2.986rem, 25vh, 15rem)",
        }}
      >
        <a href="">LONN CALPATURA</a>
      </h1>
    </section>
  );
};

export default Intro;
