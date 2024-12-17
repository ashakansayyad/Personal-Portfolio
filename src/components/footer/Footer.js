import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-10 border-t border-gray-800">
      {/* Top Section: Logo and Social Links */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <img className="w-20 rounded-full" src={logo} alt="logo" />
          <h2 className="text-2xl font-semibold text-white">Sayyad Ashakan</h2>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/ashakansayyad" target="_blank" rel="noopener noreferrer">
            <span className="text-2xl text-gray-400 hover:text-white transition-all">
              <FaGithub />
            </span>
          </a>
          <a href="https://x.com/i/flow/login?lang=en" target="_blank" rel="noopener noreferrer">
            <span className="text-2xl text-gray-400 hover:text-white transition-all">
              <FaTwitter />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/ashakan-sayyad-219742245/" target="_blank" rel="noopener noreferrer">
            <span className="text-2xl text-gray-400 hover:text-white transition-all">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="mt-8 flex justify-center">
        <ul className="flex flex-wrap justify-center gap-6 text-gray-400">
          <li>
            <a href="#about" className="hover:text-white transition-all">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition-all">
              Projects
            </a>
          </li>
          <li>
            <a href="#resume" className="hover:text-white transition-all">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition-all">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
