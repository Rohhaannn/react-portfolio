import React from 'react'
import ProjectItem from './ProjectItem'
import img1 from '../assets/img1.avif'
import img2 from '../assets/img2.avif'
import img3 from '../assets/img3.avif'
import img4 from '../assets/img4.avif'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text=[#001b5e]'> Projects </h1>
      <p className='text-center py-8'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis recusandae explicabo earum molestiae, neque nisi id sapiente dolorem consectetur? Nihil provident voluptatum laboriosam, eligendi facilis exercitationem corporis dolorem! Amet, veniam.
      </p>

      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={img1} title='img1' />
        <ProjectItem img={img2} title='img2' />
        <ProjectItem img={img3} title='img3' />
        <ProjectItem img={img4} title='img4' />
      </div>
    </div>
  )
}

export default Projects
