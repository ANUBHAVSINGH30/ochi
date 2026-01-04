import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-17 pt-8 border-b border-zinc-700 pb-15'>
            <h1 className='text-6xl font-["Neue_Montreal"] text-zinc-900'>Featured projects</h1>
        </div>
        <div className='cards w-full flex gap-7 pt-20 pl-10 pr-10'>
                <div className='flex flex-col w-1/2'>
                    <div className='flex items-center'>
                        <div className='w-[1vh] h-[1vh] rounded-full bg-zinc-900'></div>
                        <p className='text-zinc-900 ml-2'>SALIENCE LAB</p>
                    </div>
                    <div className='card w-full h-[70vh] mt-5 rounded-3xl transition-transform duration-500 hover:scale-95 overflow-hidden'>
                        <div className='w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110' style={{backgroundImage: "url('/Salience_Website_cover-1326x1101.png')"}}></div>
                    </div>
                    <div className='w-full mt-5 flex gap-5'>
                        <span className='badge border-[1.5px] text-sm font-light border-zinc-900 rounded-3xl py-1 px-3'>BRAND IDENTITY</span>
                        <span className='badge border-[1.5px] text-sm font-light border-zinc-900 rounded-3xl py-1 px-4'>PITCH DECK</span>
                    </div>
                </div>
               <div className='flex flex-col w-1/2'>
                    <div className='flex items-center'>
                        <div className='w-[1vh] h-[1vh] rounded-full bg-zinc-900'></div>
                        <p className='text-zinc-900 ml-2 uppercase'>Medallia Experience</p>
                    </div>
                    <div className='card w-full h-[70vh] mt-5 rounded-3xl transition-transform duration-500 hover:scale-95 overflow-hidden'>
                        <div className='w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110' style={{backgroundImage: "url('/Med_Website_0.png')"}}></div>
                    </div>
                    <div className='w-full mt-5 flex gap-5'>
                        <span className='badge border-[1.5px] text-sm font-light border-zinc-900 rounded-3xl py-1 px-3'>CONFERENCE</span>
                        <span className='badge border-[1.5px] text-sm font-light border-zinc-900 rounded-3xl py-1 px-4'>EXECUTIVE KEYNOTE</span>
                    </div>
                </div>
            </div>
        <div className='cards w-full flex gap-7 pt-10 pl-10 pr-10'>
                <div className='flex flex-col w-1/2'>
                    <div className='flex items-center'>
                        <div className='w-[1vh] h-[1vh] rounded-full bg-zinc-900'></div>
                        <p className='text-zinc-900 ml-2 uppercase'>Cardboard Spaceship</p>
                    </div>
                    <div className='card w-full h-[70vh] mt-5 rounded-3xl transition-transform duration-500 hover:scale-95 overflow-hidden'>
                        <div className='w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110' style={{backgroundImage: "url('/Fyde_Front-1-1326x1101.png')"}}></div>
                    </div>
                    <div className='w-full mt-5 flex gap-5'>
                        <span className='badge border-[1.5px] text-sm font-light border-zinc-900 rounded-3xl py-1 px-3'>DESIGN</span>
                        <span className='badge border-[1.5px] text-sm font-light border-zinc-900 rounded-3xl py-1 px-4'>WEB DEV</span>
                    </div>
                </div>
               <div className='flex flex-col w-1/2'>
                    <div className='flex items-center'>
                        <div className='w-[1vh] h-[1vh] rounded-full bg-zinc-900'></div>
                        <p className='text-zinc-900 ml-2 uppercase'>Premium Blend</p>
                    </div>
                    <div className='card w-full h-[70vh] mt-5 rounded-3xl transition-transform duration-500 hover:scale-95 overflow-hidden'>
                        <div className='w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110' style={{backgroundImage: "url('/Frame-3898-1-1326x1101.jpg')"}}></div>
                    </div>
                    <div className='w-full mt-5 flex gap-5'>
                        <span className='badge border-[1.5px] text-sm font-light border-zinc-900 rounded-3xl py-1 px-3'>UI/UX</span>
                        <span className='badge border-[1.5px] text-sm font-light border-zinc-900 rounded-3xl py-1 px-4'>BRANDING</span>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
            <button className="group mt-10 uppercase px-8 py-4 bg-zinc-900 font-thin rounded-full flex justify-center items-center gap-7 text-white">VIEW ALL CASE STUDIES
                <div className='w-2 h-2 bg-white rounded-full transition-transform duration-300 group-hover:scale-[3]'></div>
            </button>
        </div>
    </div>
  )
}

export default Featured
