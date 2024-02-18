import React from 'react'
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-screen bg-[#222]">
      <div id="footer" className="w-screen max-w-[1040px] text-center m-auto md:pl-20 p-4 py-16">
        
        {/* <h1 className='text-4xl mb-10 font-bold text-center text-[#80efca]'> Footer </h1> */}

          <div className='flex text-center justify-center mb-6 gap-8 text-white '>
            <a href="https://twitter.com" target="_blank"  className='hover:text-[#80efca]'>
              <FaTwitter className="cursor-pointer hover:scale-110"  size={30}/>
            </a>
            <a href="https://github.com" target="_blank" className='hover:text-[#80efca]'>
              <FaGithub className="cursor-pointer hover:scale-110" size={30}/>
            </a>
            <a href="https://www.linkedin.com" target="_blank" className='hover:text-[#80efca]'>
              <FaLinkedinIn className="cursor-pointer hover:scale-110" size={30}/>
            </a>

          </div>

        <h5 className=' text-lg text-center text-white'> Created by <span className='font-bold text-[#80efca]'>Rohan</span> | &copy; 2024 All rights reserved </h5>
      </div>
    </div>
  )
}

export default Footer
