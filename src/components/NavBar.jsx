import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaHamburger, FaHeadset, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdMenuOpen } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { FaPhoneAlt } from 'react-icons/fa';
import logo from '../assets/school-logo.png'
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admission', path: '/admission' },
  { name: 'Students', path: '/students' },
  { name: 'Faculty', path: '/faculty' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact' },
];

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
  return (
    <div className='border-b-[1px] border-slate-300 sticky top-0 z-10'>
      <header className='bg-[#161827] text-white lg:flex justify-between px-5 py-2 items-center md:hidden sm:hidden hidden'>
        <div>
          <div className='mx-4 inline-block'>
            <FaHeadset className='text-xl text-white inline-block' />
            <span className='text-white px-2'>info@springdale.edu</span>
          </div>
          <div className="mx-4 inline-block">
            <FaPhoneAlt className='text-white inline-block' />
            <span className='text-white px-2'>+1 (123) 456-7890</span>
          </div>
        </div>
        <div>
          <FaInstagram className='text-white text-lg inline-block mx-3' />
          <FaFacebook className='text-white text-lg inline-block mx-3' />
          <FaLinkedin className='text-white text-lg inline-block mx-3' />
        </div>
      </header>
      <nav className='p-4 shadow-lg flex bg-white justify-between items-center'>
        <div>
          <img src={logo} className="w-12 rounded-full" alt="Logo" />
        </div>
        <div>
          <ul className='lg:flex md:hidden sm:hidden hidden gap-x-9'>
            {navItems.map((item) => (
              <li key={item.path} className=''>
                <Link
                  to={item.path}
                  className='text-lg hover:font-medium transition-all duration-100 text-black hover:text-gray-700'
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='lg:hidden md:block sm:block block'>
            {
                showMenu ? <MdMenuOpen onClick={toggleMenu} className='text-3xl' /> : <MdMenu onClick={toggleMenu} className='text-3xl' />
            }
        </div>
      </nav>
      {
            showMenu && (
                <div className='lg:hidden md:block sm:block block'>
                    <ul className='flex flex-col justify-center gap-y-4 bg-white py-4 shadow-lg items-center'>
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                to={item.path}
                                className='hover:font-medium duration-200 text-lg text-black hover:text-gray-700'
                                >
                                {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )
      }
    </div>
  );
};

export default NavBar;