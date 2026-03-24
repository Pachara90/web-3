"use client"
import { motion } from "framer-motion";

const Contact = () => {
  const CONTACT = {
    address: "181 Ubonratchatani warinchamrab 34190",
    phoneNO: "012-2456789",
    email: "kakashiproject@gmail.com",
  };

  return (
    <>

        <div className="border-stone-900 border-t pb-20">
            <motion.h2 
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: 100}}
            transition={{ duration: 0.5}}
            className="my-10 text-center text-4xl">Get in Touch</motion.h2>

            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{ duration: 0.5}}
            className="flex flex-col tracking-tighter items-center justify-center gap-4">
                <motion.p
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: 100}}
                transition={{ duration: 1}} 
                className="">{CONTACT.address}</motion.p>

                <motion.p 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: -100}}
                transition={{ duration: 1.3}}
                className="">{CONTACT.phoneNO}</motion.p>

                <motion.p 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: 100}}
                transition={{ duration: 1.5}}
                className="hover:underline cursor-pointer">{CONTACT.email}</motion.p>
            </motion.div>
        </div>

    </>
  )
  
};
export default Contact;
