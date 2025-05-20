import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Placeholder product data - in a real app, this would come from an API or store
const productDetails: { 
  [key: string]: { 
    name: string; 
    tagline: string;
    description: string; 
    features: string[]; 
    specs: string[]; 
    demoUrl?: string;
    iconLetter: string;
  } 
} = {
  'product-1': {
    name: 'AI Product 1: The Innovator',
    tagline: 'Solving Tomorrow\'s Problems, Today.',
    description: 'This is an extended description of AI Product 1, detailing its capabilities in leveraging advanced machine learning to solve complex problems across various industries. It is designed for scalability, ease of integration, and robust performance, making it a go-to solution for businesses looking to innovate.',
    features: ['Advanced ML Algorithms', 'Scalable Cloud Architecture', 'Seamless API Integration', 'Real-time Data Processing & Analytics', 'User-Friendly Interface'],
    specs: ['Version: 2.1', 'Compatibility: Cloud, On-Premise, Hybrid', 'RAM: 32GB recommended', 'Storage: 2TB NVMe SSD', 'Processor: 16-core AI Optimized CPU'],
    demoUrl: '#', // Placeholder for a demo link or embedded content
    iconLetter: 'P1',
  },
  'product-2': {
    name: 'AI Product 2: Data Visualizer',
    tagline: 'Insights at the Speed of Thought.',
    description: 'AI Product 2 offers innovative solutions for data analysis and visualization. It empowers businesses to make informed decisions by transforming raw data into actionable insights with its intuitive interface, powerful backend processing, and stunning visual outputs.',
    features: ['Interactive Dashboards', 'Predictive Analytics Engine', 'Customizable Reporting Tools', 'Big Data & IoT Support', 'Collaborative Workspace'],
    specs: ['Version: 1.8', 'Compatibility: Web, Mobile (iOS & Android)', 'RAM: 16GB recommended', 'Storage: 1TB SSD', 'GPU: Recommended for advanced visualizations'],
    iconLetter: 'D2',
  },
  'product-3': {
    name: 'AI Product 3: Language Master',
    tagline: 'Understanding Language, Connecting Worlds.',
    description: 'The third AI product focuses on natural language processing and understanding. It enables new ways of human-computer interaction, from sophisticated chatbots and virtual assistants to automated content generation, summarization, and sentiment analysis.',
    features: ['State-of-the-art NLU/NLP', 'Multilingual Sentiment Analysis', 'Intelligent Chatbot Framework', 'Automated Content Generation & Summarization', 'Voice Recognition & Synthesis'],
    specs: ['Version: 3.2', 'Compatibility: API, SDKs (Python, Node.js, Java)', 'RAM: 24GB recommended', 'Storage: 1.5TB SSD', 'Dedicated NLP Accelerator Support'],
    iconLetter: 'N3',
  },
};

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productDetails[productId] : null;

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center bg-light-bg">
        <h1 className="text-4xl font-bold text-secondary mb-6">Product Not Found!</h1>
        <p className="text-dark-text mb-8">We couldn't find the product you were looking for.</p>
        <Link 
          to="/" 
          className="inline-block bg-primary text-light-text font-semibold py-3 px-8 rounded-lg 
                     hover:bg-accent-hover shadow-md hover:shadow-lg transition-all duration-300"
        >
          &larr; Back to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-light-bg py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-2xl rounded-xl p-6 md:p-10">
          
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="w-24 h-24 bg-primary text-light-text rounded-full 
                            flex items-center justify-center text-4xl font-bold mr-0 md:mr-8 mb-4 md:mb-0 flex-shrink-0">
              {product.iconLetter}
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-dark-text mb-2">{product.name}</h1>
              <p className="text-xl text-secondary font-semibold">{product.tagline}</p>
            </div>
          </div>

          <p className="text-gray-700 mb-10 text-lg leading-relaxed selection:bg-secondary selection:text-white">
            {product.description}
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div className="bg-indigo-50 p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">Key Features</h2>
              <ul className="list-none space-y-3 text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-secondary mb-4 border-b-2 border-secondary pb-2">Technical Specifications</h2>
              <ul className="list-none space-y-3 text-gray-700">
                {product.specs.map((spec, index) => (
                  <li key={index} className="flex items-center">
                     <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9 4.804A7.968 7.968 0 001 11c0 1.993.74 3.821 1.971 5.242L2.993 17.2A1 1 0 004 18h12a1 1 0 00.993-.8l.022-.024A7.968 7.968 0 0019 11c0-1.993-.74-3.821-1.971-5.242L17.007 4.8A1 1 0 0016 4H4a1 1 0 00-.993.804zM9 13a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z"/>
                    </svg>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-dark-text mb-6 text-center">Demo / Visuals</h2>
            <div className="bg-gray-200 p-8 rounded-lg text-center aspect-video flex items-center justify-center">
              {product.demoUrl && product.demoUrl !== '#' ? (
                <a 
                  href={product.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-secondary text-light-text font-semibold py-3 px-8 rounded-lg 
                             hover:bg-secondary-hover shadow-md hover:shadow-lg transition-all duration-300"
                >
                  View Interactive Demo
                </a>
              ) : (
                <p className="text-gray-500 text-xl">Demo or screenshots will be available soon.</p>
              )}
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/" 
              className="inline-block bg-primary text-light-text font-semibold py-3 px-8 rounded-lg 
                         hover:bg-accent-hover shadow-md hover:shadow-lg transition-all duration-300"
            >
              &larr; Back to All Products
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
