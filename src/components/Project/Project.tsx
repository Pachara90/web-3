"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Project = () => {

    const mongodb = "/assets/mongodb.svg"
    const angular = "/assets/angular.svg"
    const svelte = "/assets/svelte.svg"
    const nest = "/assets/nestjs.svg"

    const PROJECTS = [
        {
          title: "E-Commerce Website",
          image: mongodb,
          des: "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
          tech: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
        },
        {
          title: "Task Management App",
          image: angular,
          des: "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
          tech: ["HTML", "CSS", "Angular", "Firebase"],
        },
        {
          title: "Portfolio Website",
          image: svelte,
          des: "A personal portfolio website showcasing projects, skills, and contact information.",
          tech: ["HTML", "CSS", "Svelte", "Tailwind"],
        },
        {
          title: "Blogging Platform",
          image: nest,
          des: "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
          tech: ["HTML", "CSS", "Nest.js", "Express", "mySQL"],
        },
      ];

  return (
    <div className="pb-12">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 1}}
        className="my-16 text-center text-4xl font-bold tracking-tight">Project</motion.h2>

        <div className="flex flex-col gap-12 p-0 lg:p-20">
            {PROJECTS.map((item, index) => (
                <div
                className="flex flex-col gap-8 lg:flex-row items-center lg:items-center lg:gap-12" 
                key={index}>

                    {/* img section */}
                    <motion.div 
                     whileInView={{ opacity: 1, x: 0}}
                     initial={{ opacity: 0, x: -100}}
                     transition={{ duration: 1}}
                    className="lg:w-1/5 w-full flex justify-center  lg:justify-start">
                        <Image
                        className="shadow-lg object-contain"
                        src={item.image} 
                        alt="img"
                        width={190}
                        height={190}
                        />
                    </motion.div>

                    {/* text section */}
                    <motion.div 
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: 100}}
                    transition={{ duration: 1}}
                    className="lg:w-4/5 w-full">
                        <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-stone-400 mb-4 leading-relaxed">{item.des}</p>

                        {/* Tect Stack */}
                        <div className="flex flex-wrap gap-2">
                            {item.tech.map((tech, techIndex) => (
                                <span 
                                className="inline-block bg-stone-900 text-stone-300 text-sm py-1 px-3 rounded"
                                key={techIndex}>{tech}</span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            ))}
        </div>

    </div>
  )
}
export default Project