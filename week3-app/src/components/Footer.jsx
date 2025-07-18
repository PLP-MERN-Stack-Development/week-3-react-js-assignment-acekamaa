import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-10 text-sm text-gray-500">
      © {new Date().getFullYear()} Your Name. All rights reserved.
    </footer>
  );
};

export default Footer;
