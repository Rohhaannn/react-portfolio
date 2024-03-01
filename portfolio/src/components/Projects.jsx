import React from 'react'

import ProjectItem from './ProjectItem'

const Projects2 = () => {
  return (
    <div className='w-screen'>
      <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl mb-10 font-bold text-center text-[#001b5e]'> Projects </h1>
          <div className='flex flex-row gap-10'>
            <ProjectItem 
              title="Todo with Context & local" 
              desc="A minimalist Todo list application leveraging React's Context API and local storage for state management, styled elegantly with Tailwind CSS."
              githubLink="https://github.com/Rohhaannn/react-deployed-projects/tree/main/10todoContextLocal"
              liveLink="https://todo-contextlocal.vercel.app/"
            />

            <ProjectItem 
              title="Password Generator" 
              desc="An intuitive password generator React app built with Vite, featuring Tailwind CSS for sleek styling, providing secure and customizable password generation."
              githubLink="https://github.com/Rohhaannn/react-deployed-projects/tree/main/05passwordGenerator"
              liveLink="https://password-generator-azure-xi.vercel.app/"
            />

            <ProjectItem 
              title="Currency Convertor" 
              desc="A dynamic currency converter React application powered by Vite, enhanced with Tailwind CSS for modern styling, facilitating seamless exchange rate conversions." 
              githubLink="https://github.com/Rohhaannn/react-deployed-projects/tree/main/06currencyConvertor"
              liveLink="https://currency-converter-inky-iota.vercel.app/"
            />
          </div>
      </div>
    </div>    
  )
}

export default Projects2
