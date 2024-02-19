import React from 'react';
import mypic from '../../public/mypic.jpg';

const About = () => {
  return (
    <div className="w-screen bg-[#ebeeee]">

      <div id="about" className="max-w-[1040px] mx-auto flex flex-col md:flex-row items-center p-4 py-16">
        
        <div className="md:w-1/2 pr-8">
          <img
            className="w-58 h-56"
            src={mypic}
            alt="Rohan"
          />
        </div>

        <div className="md:w-1/2 text-center mt-6 md:text-left"> 

          <h1 className="text-4xl mb-4 font-bold text-[#001b5e]"> About Me</h1>
          
            <p className="text-lg text-justify mb-8">
              I am a post-graduate, holding a Masters of Computer Applications (MCA) degree from Pune University. I also completed my Bachelor's degree in Computer Applications from Shivaji University, Kolhapur. With a strong academic foundation and expertise in computer science, I am dedicated to leveraging my knowledge to deliver exceptional results.
            </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
