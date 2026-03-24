"use client"
import { IoLogoLinkedin } from "react-icons/io"
import { FaGithub, FaInstagram, FaFacebookSquare } from "react-icons/fa"
import Link from "next/link"
import { motion } from "framer-motion"

const Navbar = () => {

        const socialLinks = [
            {
                platform : "Linkedin",
                icon: <IoLogoLinkedin />,
            },
            {
                platform : "Github",
                icon: <FaGithub />,
            },
            {
                platform : "Instargram",
                icon: <FaInstagram />,
            },
            {
                platform : "FB",
                icon: <FaFacebookSquare />,
            },
        ]

  return (
    <>
        <motion.nav
        initial={{ opacity: 0, y: -100}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 1.8 ,delay: 1.5}}
         className="flex items-center justify-between py-6">
            <div>
                <h3 className="uppercase">cracker portfolio</h3>
            </div>

            {/* loop icon */}
            <div className="flex items-center justify-center gap-4 text-2xl ">
                {socialLinks.map((item,index) => (
                    <Link 
                    href={""}
                    key={index}>
                        {item.icon}
                    </Link>
                ))}
            </div>
            
        </motion.nav>
    </>
  )
}
export default Navbar