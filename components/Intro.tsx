"use client";
import React, { useEffect } from "react";
import { Passion_One } from "next/font/google";
import { useAnimate, easeOut } from "motion/react";

const passion = Passion_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Intro = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const handleAnimation = async () => {
      await animate(
        "#hi",
        { opacity: 1 },
        { delay: 0.3, duration: 0.7, ease: easeOut }
      );

      await Promise.all([
        animate(
          "#my-name",
          { opacity: 1 },
          { delay: 0.25, duration: 0.5, ease: easeOut }
        ),
        animate(
          "#is",
          { opacity: 1 },
          { delay: 0.6, duration: 0.5, ease: easeOut }
        ),
      ]);

      await animate("#lonn", { x: -16 }, { duration: 0 });
      await animate(
        "#lonn",
        { opacity: 1, x: 0 },
        { delay: 0.4, duration: 0.5, ease: easeOut }
      );

      await Promise.all([
        animate(scope.current, { opacity: 0 }, { duration: 1 }),
        animate(scope.current, { display: "none" }, { delay: 1.5 }),
      ]);
    };
    handleAnimation();
  }, [animate, scope]);

  return (
    <div
      ref={scope}
      className="absolute inset-0 h-screen w-screen bg-primary z-50 opacity-100 hidden"
    >
      <div className="px-max-x-space h-full w-full bg-gradient-to-br from-secondary-600/60 to-primary place-content-center">
        <h5
          className="font-medium [&>*]:opacity-0"
          style={{
            fontSize: "clamp(1.44rem, 20vw, 4rem)",
          }}
        >
          <span id="hi">Hello!</span> <span id="my-name">My name</span>{" "}
          <span id="is">is</span>
        </h5>
        <div id="lonn-container" className="[&>*]:opacity-0">
          <h1
            id="lonn"
            className={`inline-block bg-gradient-to-l from-accent-200 to-accent-500 text-transparent leading-[0.75] bg-clip-text  ${passion.className}`}
            style={{
              fontSize: "clamp(2.986rem, 20vw, 15rem)",
            }}
          >
            LONN CALPATURA
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
