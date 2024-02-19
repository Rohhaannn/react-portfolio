import React from 'react';
import GoToTopBtn from './GoToTopBtn';
import ViewResumeBtn from './ViewResumeBtn';

const Layout = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <GoToTopBtn/>
      <ViewResumeBtn/>
    </div>
  );
};

export default Layout;