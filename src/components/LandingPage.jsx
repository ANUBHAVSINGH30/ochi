import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

export default function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-100 text-zinc-900 pt-1'>
      <div className='textstructure mt-40 px-20'>
        {["We Create","Eye-Opening","Presentations"].map((item,index)=>{
            return <div className='masker'>
                        <div className='w-fit flex items-end overflow-hidden'>
                            {index === 1 && (
                                <div className='mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-red-600'></div>
                            )}
                            <h1 className="pt-[2vw] -mb-[1vw] uppercase flex text-[9vw] leading-[.75] font-['Founders_Grotesk_X-Condensed'] font-semibold">
                                {item}</h1>
                        </div>
                   </div>
        })}
      </div>
        <div className="border-t mt-27 border-zinc-300 flex justify-between items-center py-6 px-20 uppercase text-sm">
            {["Presentation and storytelling agency","For innovation teams and global brands"].map((item,index)=>(<p
                className="text-md font-light tracking-light leading-none">
                {item}
            </p>
            ))}
            <div className='start flex items-center gap-2'>
                <div className='px-4 py-1.5 border border-zinc-700 uppercase font-light text-sm rounded-full'>Start the Project</div>
                <div className='w-9 h-9 flex items-center justify-center border border-zinc-700 rounded-full'>
                    <span className='rotate-45'>
                        <FaArrowUpLong />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
