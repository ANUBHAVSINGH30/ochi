import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-screen bg-zinc-100 text-white'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
    </div>
  )
}

export default App