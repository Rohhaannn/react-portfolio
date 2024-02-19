import React from "react";
import { TypeAnimation } from "react-type-animation";
import mypic from "../../public/mypic.jpg";

const About = () => {
  return (
    <div className="w-screen bg-[#ebeeee]">
      <div className=" text-center md:text-center">
        <h1 className="text-4xl font-bold text-[#001b5e] pt-14"> About Me </h1>

        <div id="about" className="max-w-[1040px] mx-auto flex flex-col md:flex-row items-center p-4 py-16">

          <div className="md:w-1/2 pr-8 mb-2">
            <img className="ml-5 w-59 h-56" src={mypic} alt="Rohan" />
          </div>

          <div className="md:w-1/2 text-center ">
            <h6 className="flex sm:text-3xl text-2xl mb-4 pt-4 font-semibold text-[#001b5e]">
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
                style={{
                  fontSize: "1em",
                  display: "inline-block",
                  paddingLeft: "5px",
                }}
                repeat={Infinity}
              />
            </h6>

            <p className="text-lg text-justify mb-8">
              I am a post-graduate, holding a Masters of Computer Applications
              (MCA) degree from Pune University. I also completed my Bachelor's
              degree in Computer Applications from Shivaji University, Kolhapur.
              With a strong academic foundation and expertise in computer
              science, I am dedicated to leveraging my knowledge to deliver
              exceptional results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
