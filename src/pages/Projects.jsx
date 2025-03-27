import React from 'react'
import Squares from '../components/Squares'

const Projects = () => {
  return (
    <div className='relative bg-black min-h-screen w-full overflow-hidden flex flex-col'>
        <div className='w-full h-screen'>
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#ffff"
          hoverFillColor="#222"
        />
        </div>
      
    </div>
  )
}

export default Projects
