import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';
import HeadHero from '../components/HeadHero';
import img from '../assets/contact-head.jpg';
const Contact = () => {
  return (
    <section className="bg-white">
       <div className="container px-6 py-12 mx-auto">
        <HeadHero img={img} title='Contact us' desc='We’d love to hear from you' subDesc='' />
        <div className="container px-6 py-12 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-6">
            <div className="lg:w-1/2 lg:mx-6">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                Contact us for <br />
                more info
              </h1>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <FaMapMarkerAlt className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" />
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    Springdale Public School, 123 Education Lane <br />
                    Cityville, State, ZIP Code
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <FaPhoneAlt className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" />
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    +1 (123) 456-7890
                  </span>
                </p>

                <div className="flex items-start -mx-2">
                  <AiOutlineMail className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" />
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    info@springdale.edu
                  </span>
                </div>
              </div>

              <div className="mt-6 w-80 md:mt-8">
                <h3 className="text-gray-600 dark:text-gray-300">Follow us</h3>
                <div className="flex mt-4 -mx-1.5">
                  <a
                    className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <RiFacebookFill className="w-8 h-8 fill-current" />
                  </a>
                  <a
                    className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <RiInstagramFill className="w-8 h-8" />
                  </a>
                  <a
                    className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <RiLinkedinFill className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                <h1 className="text-lg font-medium text-gray-700">
                  What do you want to ask
                </h1>

                <form className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600">Full Name</label>
                    <input
                      type="text"
                      placeholder="Name Here"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600">Email address</label>
                    <input
                      type="email"
                      placeholder="username@example.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-600">Message</label>
                    <textarea
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Get in touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact