import React from "react";
import WorkItem from './WorkItem';

const data = [
  {
    year: 2020,
    role: "Software Engineer",
    duration: "1 Year",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolores quia. Doloribus harum architecto natus commodi alias fugit, optio voluptates molestiae ratione voluptas sit aut rerum ipsa enim error. Dolore?",
  },
  {
    year: 2017,
    role: "Software Engineer",
    duration: "1 Year",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolores quia. Doloribus harum architecto natus commodi alias fugit, optio voluptates molestiae ratione voluptas sit aut rerum ipsa enim error. Dolore?",
  },
  {
    year: 2015,
    role: "Software Engineer",
    duration: "1 Year",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolores quia. Doloribus harum architecto natus commodi alias fugit, optio voluptates molestiae ratione voluptas sit aut rerum ipsa enim error. Dolore?",
  },
  {
    year: 2022,
    role: "Software Engineer",
    duration: "1 Year",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolores quia. Doloribus harum architecto natus commodi alias fugit, optio voluptates molestiae ratione voluptas sit aut rerum ipsa enim error. Dolore?",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl mb-10 font-bold text-center text-[#001b5e]"> Work </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          role={item.role}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
