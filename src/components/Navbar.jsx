import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isOpen,setIsOpen]=useState
  return (
    <div>
      <div>
        <a className='text-white' href="#Home">Home</a>
      </div>
      <div>
        <a className='text-white' href="#About">About</a>
      </div>
      <div>
        <a className='text-white' href="#Skills">Skills</a>
      </div>
      <div>
        <a className='text-white' href="#Projects">Projects</a>
      </div>
      <div>
        <a className='text-white' href="#Contact">Contact Me</a>
      </div>
    </div>
  )
}

export default Navbar
