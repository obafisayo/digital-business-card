// Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold text-sky-500 transition duration-300 hover:scale-105">BizIn</h1>
          <p className="text-gray-600 text-center mt-2">Stay updated with our latest news</p>
        </div>
        
        <div className="flex flex-col md:flex-row md:justify-center mb-6">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full md:w-60 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-sky-300 transition duration-150 ease-in-out"
          />
          <button
            className="bg-sky-500 text-white py-3 px-6 rounded-r-md hover:bg-sky-600 transition duration-150 ease-in-out"
          >
            Subscribe
          </button>
        </div>

        <div className="flex space-x-4 mb-6">
          <a href="https://www.instagram.com/shirtless_coder/" className="text-gray-600 hover:text-sky-500 transition duration-150 ease-in-out">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/shirtless_coder/" className="text-gray-600 hover:text-sky-500 transition duration-150 ease-in-out">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/shirtless_coder/" className="text-gray-600 hover:text-sky-500 transition duration-150 ease-in-out">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/shirtless_coder/" className="text-gray-600 hover:text-sky-500 transition duration-150 ease-in-out">
            <FaInstagram size={24} />
          </a>
        </div>

        <div className="text-center text-gray-500">
          <p>© {new Date().getFullYear()} BizIn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
