import React from 'react';
import { FaFilePdf } from 'react-icons/fa'; 

const ViewResumeBtn = () => {
  const openResume = () => {

    const resumeLink = 'https://drive.google.com/file/d/1hDbFhPpCFMLuNXzLYxjoIcbcwZ5wta2z/view?usp=sharing';

    // Open the resume link in a new tab/window
    window.open(resumeLink, '_blank');
  };

  return (
    <button
      className="fixed bottom-4 left-4 bg-blue-800 text-white px-4 py-4 rounded-full shadow-md flex items-center space-x-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={openResume}
    >
      <FaFilePdf className="w-6 h-6 mr-1" /> {/* PDF icon */}
      View Resume
    </button>
  );
};

export default ViewResumeBtn;