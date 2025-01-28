import React from "react";
import { easeOut, motion } from "motion/react";

const socialMediaData = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lonncalpatura/",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="size-6 lg:size-6 fill-secondary-100/30 hover:fill-accent-300 transition-all"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M88.8889 100H11.1111C4.97461 100 0 95.0254 0 88.8889V11.1111C0 4.97461 4.97461 0 11.1111 0H88.8889C95.0254 0 100 4.97461 100 11.1111V88.8889C100 95.0254 95.0254 100 88.8889 100ZM71.2717 86.1111H86.1111V55.6266C86.1111 42.7284 78.7995 36.4919 68.5868 36.4919C58.3695 36.4919 54.0695 44.4485 54.0695 44.4485V37.9629H39.7685V86.1111H54.0695V60.8362C54.0695 54.064 57.1869 50.034 63.1537 50.034C68.6386 50.034 71.2717 53.9066 71.2717 60.8362V86.1111ZM13.8889 22.7736C13.8889 27.68 17.8362 31.6583 22.7074 31.6583C27.5786 31.6583 31.5236 27.68 31.5236 22.7736C31.5236 17.8671 27.5786 13.8889 22.7074 13.8889C17.8362 13.8889 13.8889 17.8671 13.8889 22.7736ZM30.2352 86.1111H15.323V37.9629H30.2352V86.1111Z"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/lonncalpatura",
    icon: (
      <svg
        viewBox="0 0 103 100"
        className="size-6 lg:size-6 fill-secondary-100/30 hover:fill-accent-300 transition-all"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51.0837 0C22.8357 0 0 22.9166 0 51.2675C0 73.9299 14.6316 93.1132 34.9296 99.9027C37.4674 100.413 38.3969 98.7996 38.3969 97.4423C38.3969 96.2538 38.3133 92.1798 38.3133 87.9351C24.103 90.9913 21.1439 81.8236 21.1439 81.8236C18.8602 75.882 15.4765 74.3549 15.4765 74.3549C10.8255 71.2143 15.8153 71.2143 15.8153 71.2143C20.9745 71.5539 23.6817 76.4768 23.6817 76.4768C28.248 84.2851 35.6061 82.0788 38.5663 80.7205C38.9888 77.4101 40.3429 75.1184 41.7806 73.8455C30.4469 72.657 18.5225 68.2435 18.5225 48.5508C18.5225 42.9488 20.551 38.3655 23.7653 34.8009C23.2582 33.528 21.4816 28.2645 24.2735 21.2197C24.2735 21.2197 28.5867 19.8614 38.3122 26.4822C42.4761 25.36 46.7702 24.7891 51.0837 24.7843C55.397 24.7843 59.7939 25.3791 63.8541 26.4822C73.5806 19.8614 77.8939 21.2197 77.8939 21.2197C80.6858 28.2645 78.9082 33.528 78.401 34.8009C81.7 38.3655 83.6449 42.9488 83.6449 48.5508C83.6449 68.2435 71.7204 72.5716 60.302 73.8455C62.1633 75.458 63.7694 78.5132 63.7694 83.3517C63.7694 90.2267 63.6857 95.7444 63.6857 97.4413C63.6857 98.7996 64.6164 100.413 67.1531 99.9037C87.451 93.1121 102.083 73.9299 102.083 51.2675C102.166 22.9166 79.247 0 51.0837 0Z"
        />
      </svg>
    ),
  },
  /*   {
    name: "Instagram",
    url: "https://www.instagram.com/onylfansonly/",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="size-6 lg:size-6 fill-secondary-100/30 hover:fill-accent-300 transition-all"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.2924 0.349689C23.9723 0.60069 20.3393 1.44969 17.1633 2.6977C13.8762 3.9787 11.0902 5.69771 8.31817 8.47972C5.54614 11.2617 3.83912 14.0497 2.56711 17.3417C1.33609 20.5248 0.502086 24.1608 0.267084 29.4838C0.0320814 34.8068 -0.0199191 36.5178 0.00608114 50.0959C0.0320814 63.6739 0.092082 65.3759 0.350085 70.7099C0.604087 76.0289 1.4501 79.661 2.69811 82.838C3.98112 86.125 5.69814 88.91 8.48117 91.683C11.2642 94.456 14.0502 96.159 17.3503 97.433C20.5303 98.662 24.1673 99.5 29.4894 99.733C34.8114 99.966 36.5245 100.02 50.0986 99.994C63.6727 99.968 65.3817 99.908 70.7148 99.655C76.0479 99.402 79.6609 98.55 82.8389 97.308C86.126 96.022 88.913 94.308 91.684 91.524C94.455 88.74 96.1611 85.95 97.4321 82.656C98.6641 79.476 99.5011 75.839 99.7321 70.5209C99.9651 65.1839 100.02 63.4799 99.9941 49.9039C99.9681 36.3278 99.9071 34.6258 99.6541 29.2938C99.4011 23.9618 98.5541 20.3408 97.3071 17.1617C96.0221 13.8747 94.307 11.0917 91.525 8.31672C88.743 5.54171 85.951 3.8367 82.6579 2.5687C79.4759 1.33769 75.8408 0.49869 70.5188 0.268689C65.1967 0.0386882 63.4837 -0.020312 49.9046 0.00568808C36.3255 0.0316882 34.6254 0.0896884 29.2924 0.349689ZM29.8764 90.738C25.0013 90.526 22.3543 89.716 20.5903 89.038C18.2543 88.138 16.5902 87.05 14.8322 85.309C13.0742 83.568 11.9942 81.898 11.0822 79.567C10.3972 77.803 9.57218 75.159 9.34418 70.2839C9.09617 65.0149 9.04417 63.4329 9.01517 50.0839C8.98617 36.7348 9.03717 35.1548 9.26817 29.8838C9.47618 25.0128 10.2912 22.3628 10.9682 20.5998C11.8682 18.2608 12.9522 16.5997 14.6972 14.8427C16.4422 13.0857 18.1073 12.0037 20.4403 11.0917C22.2023 10.4037 24.8463 9.58572 29.7194 9.35372C34.9924 9.10372 36.5725 9.05372 49.9196 9.02472C63.2667 8.99572 64.8507 9.04572 70.1258 9.27772C74.9968 9.48972 77.6479 10.2967 79.4089 10.9777C81.7459 11.8777 83.4089 12.9587 85.1659 14.7067C86.923 16.4547 88.006 18.1138 88.918 20.4518C89.607 22.2088 90.425 24.8518 90.655 29.7278C90.906 35.0008 90.963 36.5818 90.987 49.9279C91.011 63.2739 90.964 64.8589 90.733 70.1279C90.52 75.0029 89.712 77.651 89.033 79.417C88.133 81.752 87.048 83.417 85.3019 85.173C83.5559 86.929 81.8929 88.011 79.5589 88.923C77.7989 89.61 75.1518 90.43 70.2828 90.662C65.0097 90.91 63.4297 90.962 50.0776 90.991C36.7255 91.02 35.1504 90.966 29.8774 90.738M70.6378 23.2768C70.6398 24.4635 70.9937 25.6231 71.6547 26.6087C72.3157 27.5944 73.2542 28.3618 74.3514 28.8141C75.4487 29.2663 76.6554 29.383 77.8189 29.1494C78.9825 28.9158 80.0507 28.3423 80.8883 27.5016C81.7259 26.6609 82.2955 25.5907 82.5248 24.4263C82.7542 23.2619 82.633 22.0556 82.1768 20.96C81.7205 19.8645 80.9496 18.9288 79.9615 18.2714C78.9735 17.614 77.8126 17.2644 76.6259 17.2667C75.0349 17.2699 73.5103 17.9048 72.3874 19.0319C71.2645 20.1589 70.6351 21.6858 70.6378 23.2768ZM24.3273 50.0499C24.3553 64.2299 35.8714 75.6989 50.0486 75.6719C64.2257 75.6449 75.7028 64.1299 75.6758 49.9499C75.6488 35.7698 64.1297 24.2978 49.9506 24.3258C35.7714 24.3538 24.3003 35.8718 24.3273 50.0499ZM33.3334 50.0319C33.3269 46.7354 34.298 43.5111 36.124 40.7666C37.95 38.0221 40.5488 35.8807 43.5918 34.6132C46.6349 33.3457 49.9854 33.009 53.2198 33.6457C56.4542 34.2824 59.4271 35.8639 61.7627 38.1902C64.0982 40.5165 65.6915 43.4831 66.341 46.7149C66.9905 49.9468 66.6671 53.2986 65.4116 56.3466C64.1562 59.3946 62.025 62.0018 59.2878 63.8387C56.5505 65.6755 53.33 66.6594 50.0336 66.6659C47.8448 66.6705 45.6764 66.2439 43.6525 65.4104C41.6286 64.5769 39.7887 63.3529 38.2379 61.8082C36.6871 60.2635 35.4557 58.4285 34.6142 56.4079C33.7727 54.3873 33.3375 52.2207 33.3334 50.0319Z"
        />
      </svg>
    ),
  }, */
];

const listVariant = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.65, staggerChildren: 0.15 },
  },
};

const childrenVariant = {
  hidden: { x: -8, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3, easeOut } },
};

const SocialMedia = () => {
  return (
    <motion.ul
      className="flex gap-6 pt-12 w-fit"
      variants={listVariant}
      initial="hidden"
      animate="visible"
    >
      {socialMediaData.map((social, index) => (
        <motion.li key={index} variants={childrenVariant}>
          <a href={social.url} rel="noopener noreferrer" target="_blank">
            {social.icon}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SocialMedia;
