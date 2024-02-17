import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="https://www.codingdojo.com/blog/wp-content/uploads/javascript-1.jpg"
      />

      <div className="w-full h-screen absolute top-0 left-0 bg-white/20">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-200"> I'm Rohan Shingade</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-200 font-semibold">
            {" "}
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "MERN Stack Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000, 
                "Front-End Developer",
                1000,                
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          
          <div className="flex justify-between pt-6 max-w-[200px] w-full text-gray-200 size-20 ">
            <FaTwitter className="cursor-pointer hover:scale-110" size={30}/>
            <FaLinkedinIn className="cursor-pointer hover:scale-110" size={30}/>
            <FaGithub className="cursor-pointer hover:scale-110" size={30}/>            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;
