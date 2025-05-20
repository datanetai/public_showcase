import React from 'react';
import Navbar from '../navigation/Navbar';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-light-text shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold hover:text-gray-200 transition-colors">
          AI Showcase
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
