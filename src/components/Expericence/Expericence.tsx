"use client"
import { motion } from "framer-motion";
const Expericence = () => {

    const EXPERIENCES = [
        {
          year: "2023 - Present",
          role: "Senior Full Stack Developer",
          company: "Google Inc.",
          description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
          tech: ["Javascript", "React.js", "Next.js", "mongoDB"],
        },
        {
          year: "2022 - 2023",
          role: "Frontend Developer",
          company: "Adobe",
          description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
          tech: ["HTML", "CSS", "Vue.js", "mySQL"],
        },
        {
          year: "2021 - 2022",
          role: "Full Stack Developer",
          company: "Facebook",
          description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
          tech: ["Python", "Svelte", "Three.js", "Postgres"],
        },
        {
          year: "2020 - 2021",
          role: "Software Engineer",
          company: "Paypal",
          description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
          tech: ["Ruby", "Rails", "PHP", "Sqlite"],
        },
      ];

  return (
    <>

        <div className="pb-4  ">
            <motion.h2 
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100}}
            transition={{ duration: 0.5}}
            className="text-center text-4xl my-20">Experience</motion.h2>

            <div>
                {EXPERIENCES.map((item,index) => (
                    <div 
                    className="mb-8 flex flex-wrap lg:justify-center"
                    key={index}>

                     {/* section year */}
                        <motion.div 
                        whileInView={{ opacity: 1, x: 0}}
                        initial={{ opacity: 0, x: -100}}
                        transition={{ duration: 1}}
                        className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-stone-400">
                                {item.year}
                            </p>      
                        </motion.div>

                    {/* section roles */}
                        <motion.div 
                        whileInView={{ opacity: 1, x: 0}}
                        initial={{ opacity: 0, x: 100}}
                        transition={{ duration: 1}}
                        className="w-full lg:w-3/4 max-w-xl">
                            <h3 className="mb-2 font-semibold">
                                {item.role} - {" "}
                                <span className="text-sm text-stone-500">
                                    {item.company}
                                </span>
                            </h3>
                            <p className="mb-4 text-stone-400">{item.description}</p>
                            {item.tech.map((tech, index) => (
                                <span 
                                className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm text-stone-400 font-medium"
                                key={index}>
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                        
                    </div>
                ))}
            </div>

        </div>
    </>
  )
}
export default Expericence