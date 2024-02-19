import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa'; 


const GoToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 bg-blue-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={scrollToTop}
        >
          <FaAngleUp size={20} className="w-8 h-8" /> {/* ArrowUp icon */}
        </button>
      )}
    </>
  )
}

export default GoToTopBtn
