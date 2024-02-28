import React from "react";
import WorkItem from './WorkItem';

const data = [
  {
    year: "Apr-2023 to June-2023",
    company: "Solar Secure Solutions",
    role: "FullStack Web Developer Intern",
    location: "online",
    duration: "2 Months",
    details:
      "My primary focus lies in developing basic projects using HTML, CSS, JavaScript, JQuery, Vanilla JS, and Bootstrap, integrating various animations to create interactive web pages and applications. Additionally, I have undertaken a significant project centered around the concept of 'Food Ordering,' employing technologies such as Node.js, MySQL, HTML, CSS, and JavaScript to deliver a comprehensive solution.",
  },

  {
    year: "Mar-21 to Feb-22",
    company: "Infosys",
    role: "Technical Process Executive",
    location: "Pune",
    duration: "1 Year",
    details:
      "I'm a skilled healthcare professional with expertise in data management, report generation, and process enhancement, bolstered by my proficiency in SQL. Collaborating effectively with cross-functional teams, I excel in identifying and implementing solutions. Additionally, my hands-on experience in HTML, CSS, and JavaScript, alongside tools like ServiceNow and JIRA, allows me to contribute to user-centric design and experience optimization. Committed to continuous improvement, I actively participate in seminars on Python and React.js.",
  },

  {
    year: "Feb-19 to May-19",
    company: "Web Soft IT Solutoins",
    role: "Java / IOT Internship",
    location: "Pune",
    duration: "1 Year",
    details:
    "Primarily focused on comprehending IoT programs utilizing Raspberry Pi, Arduino, and their interfacing with diverse modules and sensors. I have contributed to the development of projects aimed at assisting handicapped individuals, demonstrating a commitment to leveraging technology for inclusive solutions.",
  },

];



const Work = () => {
  return (
    <div className="w-screen bg-[#ebeeee]">
      <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl mb-10 font-bold text-center text-[#001b5e]"> Work </h1>
        {data.map((item, idx) => (
          <WorkItem
            key={idx}
            year={item.year}
            company={item.company}
            role={item.role}
            location={item.location}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
