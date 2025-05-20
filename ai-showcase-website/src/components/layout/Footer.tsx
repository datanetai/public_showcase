import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg text-light-text py-8 px-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">&copy; {new Date().getFullYear()} AI Showcase Inc. All rights reserved.</p>
        <p className="text-xs mt-2">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
        {/* Add social media links or other footer content here later if needed */}
      </div>
    </footer>
  );
};

export default Footer;
