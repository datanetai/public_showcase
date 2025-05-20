import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reset error message
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    console.log('Form submitted:', formData); // Simulate form submission
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    // In a real app, you'd send data to a backend here
  };

  if (isSubmitted) {
    return (
      <div className="bg-light-bg py-12 min-h-screen flex items-center">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white shadow-2xl rounded-xl p-8 md:p-12 max-w-lg mx-auto">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h1 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Thank You!</h1>
            <p className="text-gray-700 text-lg mb-8">
              Your message has been sent successfully. We'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-primary text-light-text font-semibold py-3 px-8 rounded-lg 
                         hover:bg-accent-hover shadow-md hover:shadow-lg 
                         transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light-bg py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-2xl rounded-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-text mb-10 text-center">
            Get In Touch
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Contact Information Section */}
            <div className="md:col-span-5 space-y-6 prose prose-lg max-w-none prose-indigo">
              <h2 className="text-2xl font-bold text-primary !mb-3">Contact Information</h2>
              <p className="!mt-0">
                We're excited to hear from you! Whether you have questions about our innovative AI products, require support, or wish to explore potential collaborations, our team is ready to assist.
              </p>
              <div>
                <h3 className="text-xl font-semibold text-dark-text !mb-1">Our Office</h3>
                <p className="!my-0">123 AI Avenue, Innovation Park, Tech City, TX 75001, USA</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-text !mb-1">Email Us</h3>
                <a href="mailto:info@aishowcase.com" className="text-primary hover:text-accent-hover !my-0">
                  info@aishowcase.com
                </a>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-text !mb-1">Call Us</h3>
                <p className="!my-0">(555) 123-4567 (Mon-Fri, 9am-5pm CT)</p>
              </div>
            </div>

            {/* Contact Form Section */}
            <form onSubmit={handleSubmit} className="md:col-span-7 space-y-6">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Error: </strong>
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-text mb-1">Full Name</label>
                <input
                  type="text" name="name" id="name" value={formData.name} onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm 
                             focus:ring-primary focus:border-primary sm:text-sm transition-shadow duration-150"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-text mb-1">Email Address</label>
                <input
                  type="email" name="email" id="email" value={formData.email} onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm 
                             focus:ring-primary focus:border-primary sm:text-sm transition-shadow duration-150"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-text mb-1">Subject</label>
                <input
                  type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm 
                             focus:ring-primary focus:border-primary sm:text-sm transition-shadow duration-150"
                  placeholder="Inquiry about AI Product X"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-text mb-1">Message</label>
                <textarea
                  name="message" id="message" rows={5} value={formData.message} onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm 
                             focus:ring-primary focus:border-primary sm:text-sm transition-shadow duration-150"
                  placeholder="Your detailed message..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-light-text font-semibold py-3 px-6 rounded-lg 
                             hover:bg-accent-hover shadow-md hover:shadow-lg 
                             transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out 
                             focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
