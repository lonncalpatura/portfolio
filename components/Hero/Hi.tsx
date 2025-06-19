"use client";
import React, { useEffect } from "react";
import { Passion_One } from "next/font/google";
import { useAnimate, easeOut } from "motion/react";

const passion = Passion_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const hiText = "Hi!";
const mynameisText = "My name is";
/* const nameText = "LONN CALPATURA"; */
const descriptionText =
  "An aspiring front-end web developer, IT engineer, and AV technician with a passion for all things tech - known for being adept, adaptable, and eager to learn.";

const typeDelay = 0.015;
const typeDuration = 0.025;

const Hi = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const handleAnimation = async () => {
      await animate(scope.current, { scale: 2, x: "50%", y: "50%" }, {});

      // Stagger letters in "Hi!"
      await Promise.all(
        hiText.split("").map((_, index) =>
          animate(
            `#hi-${index}`,
            { y: 0, opacity: 1 },
            {
              delay: index * typeDelay + 0.5,
              duration: typeDuration,
            }
          )
        )
      );

      // Animate the "my name is" text
      await Promise.all(
        mynameisText.split("").map((_, index) =>
          animate(
            `#mynameis-${index}`,
            { y: 0, opacity: 1 },
            {
              delay: index * typeDelay + 0.7,
              duration: typeDuration,
            }
          )
        )
      );

      // Animate the name
      await animate(
        "#name",
        { y: 0, opacity: 1 },
        { delay: 0.1, duration: 0.5, ease: easeOut }
      );

      // Animate the description
      await Promise.all(
        descriptionText.split("").map((_, index) =>
          animate(
            `#description-${index}`,
            { y: 0, opacity: 1 },
            {
              delay: index * 0.03 + 0.5,
              duration: typeDuration,
              ease: easeOut,
            }
          )
        )
      );

      await animate(
        scope.current,
        { scale: 1, x: 0, y: 0 },
        { duration: 0.6, ease: easeOut }
      );
    };

    handleAnimation();
  }, [animate, scope]);

  return (
    <section ref={scope} className="max-w-full overflow-hidden">
      <h5 className="font-medium">
        {hiText.split("").map((letter, index) => (
          <span
            key={index}
            id={`hi-${index}`}
            className="translate-y-2 opacity-0"
          >
            {letter}
          </span>
        ))}{" "}
        {mynameisText.split("").map((letter, index) => (
          <span
            key={index}
            id={`mynameis-${index}`}
            className="translate-y-2 opacity-0"
          >
            {letter}
          </span>
        ))}
      </h5>
      <a href="">
        <h1
          id="name"
          className={`inline-block bg-gradient-to-r from-accent-500 to-accent-200 bg-clip-text text-transparent text-[3.58rem] lg:text-[4.296rem] leading-none ${passion.className} opacity-0 transition-all`}
        >
          LONN CALPATURA
        </h1>
      </a>

      <p id="desc" className="mt-2 text-color-3">
        {descriptionText.split("").map((letter, index) => (
          <span key={index} id={`description-${index}`} className=" opacity-0">
            {letter}
          </span>
        ))}
      </p>
    </section>
  );
};

export default Hi;
