import React from 'react'
import { FaGithub, FaArrowRight } from 'react-icons/fa'

const ProjectItem = ({img, title}) => {
  return (
    <div className='relative flex item-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] translate-x-[-50%] translate-y-[-70%]'>
        <h3 className='text-xl font-bold text-white tracking-wider text-center '>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>React Js</p>
        {/* <div className='flex justify-center gap-3'>
          <FaGithub size={50} className='text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'/> 
          <FaArrowRight size={50} className='text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'/>
        </div> */}
        <div className='flex justify-center gap-3 text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>
          <span>Source</span>
        </div>
        <div className='flex justify-center gap-3 text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>
          <span>Live</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
