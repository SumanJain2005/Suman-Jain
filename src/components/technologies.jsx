import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";    
import { SiTailwindcss } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
const iconVariants = (duration) =>({
    initial:{ y:-10},
    animate:{ y:[10, -10],transition:{repeat:Infinity,duration:duration,ease:"linear",repeatType:"reverse"}}
})
const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2 
        whileInView={{opacity:1, y:0}} 
        initial={{opacity:0, y: -100}} 
        transition={{duration:1.5}} 
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1, x:0}} 
        initial={{opacity:0, x: -100}} 
        transition={{duration:1.5}} 
        className='flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16'>
            <motion.div  variants={iconVariants(2.5)} initial="initial" animate="animate">
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div  variants={iconVariants(3)} initial="initial" animate="animate">
                <TbBrandNextjs className='text-7xl' />
            </motion.div>
            <motion.div  variants={iconVariants(5)} initial="initial" animate="animate">
                <FaNodeJs className='text-7xl text-green-500' />
            </motion.div>
            <motion.div  variants={iconVariants(6)} initial="initial" animate="animate">
                <SiMongodb className='text-7xl text-cyan-500' />
            </motion.div>
            <motion.div  variants={iconVariants(4)} initial="initial" animate="animate">
                <SiTailwindcss className='text-7xl text-cyan-500' />
            </motion.div>
            <motion.div  variants={iconVariants(3)} initial="initial" animate="animate">
                <SiPython className='text-7xl text-blue-500' />
            </motion.div>
            <motion.div  variants={iconVariants(2)} initial="initial" animate="animate">
                <SiMysql className='text-7xl text-blue-500' />
            </motion.div>
        </motion.div>
    </div>
  );
};

export default Technologies;
