import React from 'react';
import GoToTop from './GoToTop';

const Layout = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <GoToTop />
    </div>
  );
};

export default Layout;