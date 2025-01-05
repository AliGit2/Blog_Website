import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold text-center mb-6">
          About <span className="text-blue-600 dark:text-blue-400">Blog Web Learning</span>
        </h1>
        <p className="text-lg text-center mb-8 leading-7">
          Welcome to Blog Web Learning – a platform dedicated to delivering meaningful and engaging content. 
          From personal growth to industry insights, we strive to connect and inspire readers across all walks of life.
        </p>

        {/* Purpose Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Our Purpose</h2>
          <p className="leading-7">
            At Blog Web Learning, our mission is to ignite curiosity and provide value. 
            Whether you're a tech enthusiast, a fitness junkie, or someone seeking motivation, 
            our curated articles aim to enrich your mind and empower your journey.
          </p>
        </div>

        {/* Meet the Creator Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Meet the Creator</h2>
          <p className="leading-7 mb-4">
            Hello! I’m <span className="font-bold">Syed Ali Raza</span>, the founder of Blog Web Learning. 
            Passionate about sharing ideas and building connections, I created this space to bring 
            thoughtful discussions to the forefront. Alongside a dedicated team of contributors, we’re 
            working to keep Blog Web Learning fresh, insightful, and exciting.
          </p>
          <p className="leading-7">
            Outside of writing, I enjoy exploring creativity through digital design and playing football during weekends. 
            Feel free to connect with me via social links for collaborations or just a friendly chat!
          </p>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Explore Our Categories</h2>
          <p className="leading-7 mb-6">
            Uncover a wide variety of topics tailored to inform and inspire. Here's a glimpse of what you can dive into:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <li>
              <Link
                href="/business"
                className="block bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <strong>Business</strong> - Expert advice and strategies for growth.
              </Link>
            </li>
            <li>
              <Link
                href="/health-and-fitness"
                className="block bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <strong>Health & Fitness</strong> - Your guide to a balanced lifestyle.
              </Link>
            </li>
            <li>
              <Link
                href="/technology-and-innovation"
                className="block bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <strong>Technology</strong> - Insights into cutting-edge innovations.
              </Link>
            </li>
            <li>
              <Link
                href="/food-and-drink"
                className="block bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <strong>Food & Drink</strong> - Explore recipes and culinary journeys.
              </Link>
            </li>
            <li>
              <Link
                href="/news-and-currentaffairs"
                className="block bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <strong>News & Current Affairs</strong> - Stay in the know with the latest updates.
              </Link>
            </li>
            <li>
              <Link
                href="/sports"
                className="block bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <strong>Sports</strong> - Highlights and updates from the sports world.
              </Link>
            </li>
          </ul>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Join the Conversation</h2>
          <p className="leading-7 mb-6">
            Your voice matters to us! Subscribe to our newsletter, leave a comment, or follow us on social media for the latest updates.
          </p>
          <a
            href="/subscribe"
            className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
