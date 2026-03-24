"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const profile = "/assets/hacker.jpg";

  const MotionImage = motion(Image);
  const MotionLink = motion(Link);

  const CONTENT =
    "I am Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perspiciatis iusto laborum autem molestias tempora error. Omnis laudantium cumque reiciendis amet. Quibusdam perspiciatis dolore harum quod mollitia, cumque nisi reprehenderit.";

    const containerVariants = {
      hidden: { opacity: 0, x:-100},
      visible: {
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.5,
          staggerChildren: 0.5
        } }
    };

    const childVariants ={ 
      hidden: { opacity: 0, x: -100},
      visible: { opacity: 1, x: 0},
      transition: { duration: 0.5}
    }



  return (
    <>
      <div className="pb-4 py-6 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">

         {/* img section */}
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:p-8 relative w-full md:w-[400px] md:mx-auto lg:w-[450px] aspect-square">
                <MotionImage
                initial={{ opacity: 0, x: 100}}
                animate={{ opacity: 1, x: 0}}
                transition={{ duration: 0.5 , delay: 0.6}}
                className="border border-stone-900 rounded-lg object-cover"
                src={profile}
                alt="pf"
                fill
                />
            </div>
        </div>

         {/* text section */}
        <div className="w-full lg:w-1/2 ">
            <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10">
                <motion.h2 
                variants={childVariants}
                className="pb-2 text-4xl tracking-tighter lg:text-8xl bg-gradient-to-r from-stone-300 to-stone-600  bg-clip-text text-transparent">Motion framer</motion.h2>
                <motion.span 
                variants={childVariants}
                className="text-xl ">With NEXT.JS</motion.span>
                <motion.p 
                variants={childVariants}
                className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">{CONTENT}</motion.p>
                <MotionLink
                variants={childVariants}
                className="bg-white rounded-full p-4 text-stone-800 mb-10"
                href={""}
                >
                    Download Resume
                </MotionLink>
            </motion.div>
        </div>

        </div>
      </div>
    </>
  );
};
export default Hero;
