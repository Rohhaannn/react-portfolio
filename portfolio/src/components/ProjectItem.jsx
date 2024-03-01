import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const ProjectItem2 = ({title, desc, githubLink, liveLink}) => {
  return (
    <div >
      <div >
        
        <div className="w-[300px] rounded-md border">
        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Laptop"
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {title} &nbsp; <ArrowUpRight className="h-4 w-4" />
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            {desc}
          </p>

          <div className='flex gap-3 rounded-lg'>
            <a
              href={githubLink}
              target="_blank"
              type="button"
              className="mt-4 w-full text-center rounded-lg bg-black px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Github
            </a>

            <a
              href={liveLink}
              target="_blank"
              type="button"
              className="mt-4 w-full text-center rounded-lg bg-black px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Live
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>  

  )
}

export default ProjectItem2
