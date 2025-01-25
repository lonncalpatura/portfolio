import React from "react";
import { motion } from "motion/react";
import Hi from "./Hi";
import Nav from "./Nav";
import SocialMedia from "./SocialMedia";

const Heading = () => {
  return (
    <div className="lg:fixed right-0 lg:mr-[50%] lg:pl-max-x-space">
      <header className="pl-5 md:pl-10 lg:pr-20 lg:flex lg:flex-col lg:justify-between lg:py-20 lg:h-screen">
        <div>
          <Hi />
          <Nav />
        </div>
        <motion.div
          initial={{ x: -8, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <SocialMedia />
        </motion.div>
      </header>
    </div>
  );
};

export default Heading;
