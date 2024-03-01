import React,{ useState } from 'react'
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject, AiOutlineCode } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'

const Sidenav = () => {

  const [nav, setNav] = useState(false)
  const handleNav =() => {
    setNav(!nav);
    // console.log('state chnaged')
  }

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>

            {/* Home */}
            <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20} />
              <span className='pl-4'> Home </span>
            </a>

             {/* About */}
            <a onClick={handleNav} href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <BsPerson size={20} />
              <span className='pl-4'> About </span>
            </a>

            {/* Skills */}
            <a onClick={handleNav} href="#skills" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineCode size={20} />
              <span className='pl-4'> Skills </span>
            </a>

            {/* Work */}
            <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <GrProjects size={20} />
              <span className='pl-4'> Work </span>
            </a>

            
            {/* Projects */}
            <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineProject size={20} />
              <span className='pl-4'> Projects </span>
            </a>

            {/* Contact */}
            <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail size={20} />
              <span className='pl-4'> Contact </span>
            </a>

          </div>
        )
        : (
          " "
        )
      }

      {/* icons for full screen */}
      <div className='md:block hidden fixed top-[19%] z-10'>
        <div className='flex flex-col'>
          {/* home */}
          <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
            <AiOutlineHome size={20}/>
          </a>

          {/* About */}
          <a href="#about" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
            <BsPerson size={20}/>
          </a>

          {/* skills */}
          <a href="#skills" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
            <AiOutlineCode size={20}/>
          </a>

          {/* work */}
          <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
            <GrProjects size={20}/>
          </a>

          {/* Projects */}
          <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
            <AiOutlineProject size={20}/>
          </a>

          

          {/* Contact */}
          <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
            <AiOutlineMail size={20}/>
          </a>
        </div>

      </div>


    </div>
  )
}

export default Sidenav

