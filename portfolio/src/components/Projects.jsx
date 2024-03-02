import React from 'react'
import ProjectItem from './ProjectItem'
import portfolio from '../../public/projectImages/portfolio.png'
import allposts from '../../public/projectImages/allposts.png'
import Todo from '../../public/projectImages/Todo.png'
import pswrdGen from '../../public/projectImages/pswrdGen.png'
import currency from '../../public/projectImages/currency.png'

const Projects2 = () => {
  return (
    <div className='w-screen'>
      <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>

        <h1 className='text-4xl mb-10 font-bold text-center text-[#001b5e]'> Projects </h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-center items-center'>

            <ProjectItem 
              img={portfolio}
              title="Portfolio in React" 
              desc="A polished React portfolio showcasing my skills and projects, crafted with Vite for optimal performance and styled elegantly with Tailwind CSS."
              githubLink="https://github.com/Rohhaannn/react-portfolio/tree/main/portfolioc"
              liveLink="https://react-portfolio-black-chi.vercel.app/"
            />

            <ProjectItem 
              img={allposts}
              title="Blog App"
              desc="A dynamic React app powered by Vite and Tailwind CSS, integrated with Appwrite backend, enabling users to seamlessly sign up, sign in, and post content."
              githubLink="https://github.com/Rohhaannn/React-Blog-App/tree/main/12MegaBlog"
              liveLink="https://react-blog-app-iota.vercel.app/"
            />

            <ProjectItem 
              img={Todo}
              title="Todo with Context & local" 
              desc="A minimalist Todo list application leveraging React's Context API and local storage for state management, styled elegantly with Tailwind CSS."
              githubLink="https://github.com/Rohhaannn/react-deployed-projects/tree/main/10todoContextLocal"
              liveLink="https://todo-contextlocal.vercel.app/"
            />

            <ProjectItem
              img={pswrdGen}
              title="Password Generator" 
              desc="An intuitive password generator React app built with Vite, featuring Tailwind CSS for sleek styling, providing secure and customizable password generation."
              githubLink="https://github.com/Rohhaannn/react-deployed-projects/tree/main/05passwordGenerator"
              liveLink="https://password-generator-azure-xi.vercel.app/"
            />

            <ProjectItem
              img={currency}
              title="Currency Convertor" 
              desc="A currency converter React app powered by Vite, styled with Tailwind CSS for modern design, facilitating seamless exchange rate conversions." 
              githubLink="https://github.com/Rohhaannn/react-deployed-projects/tree/main/06currencyConvertor"
              liveLink="https://currency-converter-inky-iota.vercel.app/"
            />
          </div>
      </div>
    </div>    
  )
}

export default Projects2
