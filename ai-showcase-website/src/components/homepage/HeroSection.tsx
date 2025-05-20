import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for the CTA

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-light-text py-24 px-4 sm:py-32">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Revolutionizing Industries with AI
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-indigo-100 mb-10 max-w-3xl mx-auto">
          Discover cutting-edge AI solutions designed to transform your business, enhance efficiency, and drive innovation forward.
        </p>
        <Link
          to="/#products" // Link to the products section on the homepage
          className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-lg text-lg
                     hover:bg-light-bg hover:text-accent-hover shadow-lg hover:shadow-xl 
                     transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
        >
          Explore Our Solutions
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
