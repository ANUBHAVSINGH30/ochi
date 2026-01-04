import React, { useState, useEffect  } from 'react'

function Eyes() {

    const [rotate, setRotate] = useState(0);
    const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180);

            // Calculate pupil movement (limited range)
            const maxMove = 10; // Maximum pixels the pupil can move
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const moveX = (deltaX / distance) * Math.min(distance / 50, maxMove);
            const moveY = (deltaY / distance) * Math.min(distance / 50, maxMove);
            
            setPupilOffset({ x: moveX, y: moveY });
        })
    })


  return (
    <div className='eye w-full h-screen overflow-hidden'>
        <div className='relative w-full h-full bg-cover bg-center' style={{backgroundImage: "url('/eye.jpg')"}}>
            <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-10 flex'>
                <div className='w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full'>
                    <div style={{transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`}} className='w-3/5 h-3/5 relative bg-zinc-900 rounded-full'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 w-full h-10'>
                             <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
                <div className='w-[15vw] flex justify-center items-center h-[15vw] bg-zinc-100 rounded-full'>
                    <div style={{transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`}} className='w-3/5 relative h-3/5 bg-zinc-900 rounded-full'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line w-full absolute top-1/2 left-1/2 h-10'>
                            <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes
