import React from "react";
import WorkItem from './WorkItem';

const data = [
  {
    year: 'Nov-2023 to Feb-2024 ',
    role: "MERN Developer Intern",
    duration: "3 Months",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolores quia. Doloribus harum architecto natus commodi alias fugit, optio voluptates molestiae ratione voluptas sit aut rerum ipsa enim error. Dolore?",
  },
  {
    year: "April-2023 to June-2023",
    role: "FullStack Web Developer Intern",
    duration: "2 Months",
    details:
      "Mainly focused on basic projects using HTML-CSS, JavaScript, JQuery, Vanilla js & Bootstrap and different animations to develop interactive web pages & web applications.Built a major project on the basis of 'Food Ordering' concept using Node.js, MySQL, HTML-CSS, JavaScript."
  },
  {
    year: 'March-2021 to Feb-2022',
    role: "Technical Process Executive",
    duration: "1 Year",
    details:
      `
      • Accomplished healthcare professional skilled in data management, report generation, and technical process enhancement.
      • Hands on Experience on Service Now tool, JIRA tool.
      • Proficient in SQL, adept at formulating complex queries for data extraction and analysis.
      • Experienced in collaborating with cross-functional teams to identify process gaps and implement effective solutions.
      • Expertise in HTML and CSS, contributing to user-centric design and experience optimization.
      • Actively engaged in further learning, including seminars on Python and React Js showcasing commitment to continuous improvement.
    
      `
  },
  {
    year: 'Feb-2019 to May-2019',
    role: "Java / IOT Intern",
    duration: "3 Months",
    details:
      `
      Mainly focused on Understanding IOT programs of Raspberry PI, Arduino and their connections with various modules & sensors and developed a project for handicapped persons.

      Finger Controlled Wheel-Chair using Arduino & Flex sensor:

      In order to use or operate this wheelchair user to wear a hand gloves on which flex sensors was attached, as person wearing those gloves bending his finger a signal gets sent to relay motors through Arduino board and wheels used to spin accordingly. An Obstacle sensor also were attached to wheel chair along with power source to charge batteries connected to this mechanism. This project was built to help handicapped persons to move their wheel chair with finger movement without any help of others.
      `
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
