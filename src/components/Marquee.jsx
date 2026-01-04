import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {
  return (
    <div className='w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
      <div className="text border-t-2 border-b-2 border-zinc-300 overflow-hidden whitespace-nowrap flex gap-10 items-center">
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[25vw] leading-none font-["Founders_Grotesk_X-Condensed"] pt-10 -mb-[7vw] uppercase font-semibold'>We are Ochi</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}}  className='text-[25vw] leading-none font-["Founders_Grotesk_X-Condensed"]  uppercase pt-10 -mb-[7vw] font-semibold'>We are Ochi</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}}  className='text-[25vw] leading-none font-["Founders_Grotesk_X-Condensed"]  uppercase pt-10 -mb-[7vw] font-semibold'>We are Ochi</motion.h1>  
      </div>
    </div>
  )
}

export default Marquee
