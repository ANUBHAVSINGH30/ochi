import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl text-black'>
      <h1 className="font-['Neue Montreal'] text-[3.7vw] leading-[4.5vw] tracking-tight">
        We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.
      </h1>
      <div className='we-full flex gap-5 border-t border-[#a1b562] mt-20 pt-20'>
        <div className='w-2/5'>
            <h1 className='text-6xl'>Our approach:</h1>
            <button className="group mt-10 uppercase px-8 py-4 bg-zinc-900 font-thin rounded-full flex justify-center items-center gap-7 text-white">Read More
                <div className='w-2 h-2 bg-white rounded-full transition-transform duration-300 group-hover:scale-[3]'></div>
            </button>
        </div>
        <div className='w-3/5 h-[70vh] rounded-3xl bg-cover bg-center' style={{backgroundImage: "url('/about.jpg')"}}></div>
      </div>
    </div>
  )
}

export default About;
