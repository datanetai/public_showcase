import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'product-1',
    name: 'AI Product 1',
    description: 'Leverages advanced machine learning to solve complex problems across various industries.',
    iconLetter: 'P1', // Placeholder for a more sophisticated icon or image
  },
  {
    id: 'product-2',
    name: 'AI Product 2',
    description: 'Offers innovative solutions for data analysis and visualization, empowering informed decisions.',
    iconLetter: 'D2',
  },
  {
    id: 'product-3',
    name: 'AI Product 3',
    description: 'Focuses on natural language processing, enabling new ways of human-computer interaction.',
    iconLetter: 'N3',
  },
];

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="py-20 px-4 bg-light-bg">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-dark-text">
          Our Innovative AI Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl 
                         transform hover:-translate-y-1 transition-all duration-300 ease-in-out 
                         flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-primary text-light-text rounded-full mx-auto mb-6 
                              flex items-center justify-center text-3xl font-semibold
                              group-hover:bg-accent-hover transition-colors duration-300">
                {product.iconLetter}
              </div>
              <h3 className="text-2xl font-semibold text-dark-text mb-3 group-hover:text-primary transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                {product.description}
              </p>
              <span className="inline-block text-primary font-semibold group-hover:text-accent-hover transition-colors duration-300">
                Learn More &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
