import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-light-bg py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-2xl rounded-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-text mb-10 text-center">
            About AI Showcase Inc.
          </h1>

          <section className="mb-12 prose prose-lg max-w-none prose-indigo">
            <h2 className="text-3xl font-bold text-primary border-b-2 border-primary pb-2 mb-6">Our Story</h2>
            <p>
              Founded in 2020 (Example Year), AI Showcase Inc. embarked on a mission to demystify artificial intelligence and make its transformative power accessible to businesses of all scales. We recognized the immense potential of AI to revolutionize industries, and this insight fueled our drive to craft innovative solutions that address tangible, real-world challenges and deliver substantial impact.
            </p>
            <p>
              From our modest beginnings as a dedicated collective of AI enthusiasts, developers, and researchers, we have evolved into a trusted provider of sophisticated AI-driven tools and platforms. Our journey has been characterized by continuous learning, agile adaptation to the ever-changing tech landscape, and an unwavering commitment to excellence. The strong partnerships we've cultivated and the success stories we've co-authored with our clients stand as testaments to our dedication.
            </p>
          </section>

          <section className="mb-12 prose prose-lg max-w-none prose-indigo">
            <h2 className="text-3xl font-bold text-primary border-b-2 border-primary pb-2 mb-6">Our Mission & Vision</h2>
            <p>
              <strong>Mission:</strong> To empower organizations worldwide with cutting-edge, ethical, and user-centric AI technologies. We aim to enhance productivity, spark innovation, and unlock novel avenues for growth by delivering solutions that are not only powerful and effective but also intuitive, seamlessly integrable, and responsibly designed.
            </p>
            <p>
              <strong>Vision:</strong> To be at the forefront of AI innovation globally, shaping a future where intelligent technology augments human capabilities to foster a smarter, more efficient, sustainable, and equitable world. We see AI as a pivotal catalyst for positive transformation across every sector of society and industry.
            </p>
          </section>

          <section className="prose prose-lg max-w-none prose-indigo">
            <h2 className="text-3xl font-bold text-primary border-b-2 border-primary pb-2 mb-6">Our Values</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Innovation:</strong> Continuously exploring new frontiers in AI to deliver groundbreaking solutions.</li>
                <li><strong>Integrity:</strong> Upholding the highest ethical standards in our technology and business practices.</li>
                <li><strong>Customer Centricity:</strong> Placing our clients' needs and success at the heart of everything we do.</li>
                <li><strong>Collaboration:</strong> Fostering a culture of teamwork and open communication, both internally and with our partners.</li>
                <li><strong>Excellence:</strong> Striving for the utmost quality and performance in our products and services.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
