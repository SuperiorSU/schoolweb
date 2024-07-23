import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/school-logo.png'
// Define the route object
const routes = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admission', path: '/admission' },
  { name: 'Students', path: '/students' },
  { name: 'Faculty', path: '/faculty' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact' },
];

const Footer = () => {
  return (
    <footer className="py-6 px-3">
      <div className="w-full p-4 py-8 rounded-lg bg-[#161827]">
        <div className="md:flex md:justify-around">
          <div className="mb-6 md:mb-0 px-5">
            <img src={logo} alt="logo" className="w-24" />
            <p className="lg:w-96 md:w-60 w-full mt-3 text-gray-500 md:relative md:top-10 text-sm font-light">
              Springdale Public School is dedicated to providing a comprehensive education in a supportive and nurturing environment, preparing students for success in their future endeavors.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Services
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {routes.map(route => (
                  <li key={route.path} className="mb-4">
                    <Link to={route.path} className="hover:underline">{route.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.linkedin.com/" className="hover:underline">LinkedIn</a>
                </li>
                <li className="mb-4">
                  <a href="https://www.facebook.com/" className="hover:underline">Facebook</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="hover:underline">Instagram</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-around">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 <Link to="#" className="hover:underline">Springdale Public School™</Link>. All
            Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com" className="text-gray-500 hover:text-gray-200">
              <FaFacebook className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">Facebook page</span>
            </a>

            <a href="https://www.linkedin.com/" className="text-gray-500 hover:text-gray-200 ms-5">
              <FaLinkedin className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">LinkedIn page</span>
            </a>
            
            <a href="https://www.instagram.com/" className="text-gray-500 hover:text-gray-200 ms-5">
              <FaInstagram className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
