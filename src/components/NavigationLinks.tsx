"use client";
import React from "react";
import { motion } from "framer-motion";

export default function NavigationLinks() {
  const tableRowVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const cadCss =
    "overflow-hidden py-4 text-center rounded-lg w-full group transition-colors duration-400 ease-in-out shadow-md max-h-[50px]";

  const arrLinks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/javier-espindola/",
      className: "bg-neutral-600 hover:bg-sky-600 " + cadCss,
      icon: "/symbol/sprite.svg#linkedin",
    },
    {
        name: "Portfolio",
        link: "https://espindola-javier.vercel.app/",
        className: "bg-neutral-600 hover:bg-black " + cadCss,
        icon: "/symbol/sprite.svg#portfolio",
    },
    {
      name: "GitHub",
      link: "https://github.com/Micolash89",
      className: "bg-neutral-600 hover:bg-slate-700 " + cadCss,
      icon: "/symbol/sprite.svg#github",
    },
  ];

  return (
    <nav className="flex flex-col gap-4 w-full">
      {arrLinks.map((link, index) => (
        <motion.a
          key={`link-${link.name}-${index}`}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className={link.className}
          variants={tableRowVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={index}
        >
          <span className="group-hover:text-white group-hover:-translate-y-8 transition-all duration-300 ease-in-out capitalize font-bold text-white block">
            {link.name}
          <svg width={"45"} height={"45"} className=" translate-y-8 group-hover:-translate-y-0 w-full flex justify-center  transition-all duration-300 ease-in-out" >
            <use href={link.icon} />
          </svg>
          </span>
        </motion.a>
      ))}
    </nav>
  );
}
