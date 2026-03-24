"use client";

import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiMongodb, SiMysql, SiNestjs } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {  motion, Variants } from "framer-motion";

const Stack = () => {
  

  type StackIconType = {
    stack: string;
    icon: React.ReactElement<{ className?: string }>;
    className: string;
    variants: Variants;
  };

  const iconVariants = (duration: number): Variants => ({
   initial: { y: -10},
   animate: {
      y: [10,-10],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "reverse" as const,
      }
    }
  })

  const StackIcon: StackIconType[] = [
    {
      stack: "react",
      icon: <FaReact />,
      className: "text-5xl md:text-7xl text-blue-300",
      variants: iconVariants(2),
    },
    {
      stack: "NEXT",
      icon: <SiNextdotjs />,
      className: "text-5xl md:text-7xl text-white",
      variants: iconVariants(2.5),
    },
    {
      stack: "mongoDb",
      icon: <SiMongodb />,
      className: "text-5xl md:text-7xl text-green-600",
      variants: iconVariants(3),
    },
    {
      stack: "tailwind",
      icon: <RiTailwindCssFill />,
      className: "text-5xl md:text-7xl text-sky-600",
      variants: iconVariants(5),
    },
    {
      stack: "nodeJS",
      icon: <FaNodeJs />,
      className: "text-5xl md:text-7xl text-green-600",
      variants: iconVariants(2),
    },
    {
      stack: "nest",
      icon: <SiNestjs />,
      className: "text-5xl md:text-7xl text-red-600",
      variants: iconVariants(3),
    },
    {
      stack: "mySql",
      icon: <SiMysql />,
      className: "text-5xl md:text-8xl text-blue-600",
      variants: iconVariants(5),
    },
  ];

  return (
    <>
      <div className="pb-24">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.2 }}
          className="text-center text-4xl my-16"
        >
          Stack
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {StackIcon.map((item, index) => (
            <motion.div 
            variants={item.variants}
            initial="initial"
            animate="animate"
            className="flex items-center gap-1" key={index}>
              {React.cloneElement(item.icon, { className: item.className })}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Stack;
