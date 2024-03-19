import React from 'react'

const Skills = () => {
  return (
    <div className="w-screen bg-[#d3d3d3]">
      <div id='skills' className="w-screen max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl mb-10 font-bold text-center text-[#001b5e]"> Skills </h1>
        
        <div>

          <div className='flex flex-wrap gap-4 mb-2'>
            <h3 className='font-bold'>Programming Languages : </h3>
            <p>C, Core Java, Python, HTML, CSS, JavaScript</p>
          </div>

          <div className='flex flex-wrap gap-4 mb-2'>
            <h3 className='font-bold'>Frameworks/Libraries : </h3>
            <p>React.js, Redux, Redux-Toolkit, Node.js, Express.js, Bootstrap, Tailwind-CSS</p>
          </div>

          <div className='flex flex-wrap gap-4 mb-2'>
            <h3 className='font-bold'>Databases : </h3>
            <p>MySQL, MongoDB</p>
          </div>

          <div className='flex flex-wrap gap-4 mb-2'>
            <h3 className='font-bold'>Tools : </h3>
            <p>Git, GithHub, Postman, VS Code</p>
          </div>

          <div className='flex flex-wrap gap-4 mb-2'>
            <h3 className='font-bold'>Deployment Platforms : </h3>
            <p>Vercel, Netlify</p>
          </div>
          
        </div> 

      </div>
    </div>
  )
}

export default Skills
