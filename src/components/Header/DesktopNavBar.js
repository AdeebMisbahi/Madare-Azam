import React from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from './menuItems';

const DesktopNavBar = () => {
  return (
    <>
      <ul className="lg:flex hidden uppercase items-center gap-5 font-[Poppins]">
        {LINKS.map((link, index) => (
            <div>
          <li className='group' key={index}>
              <Link to="/" className='px-3 py-7 text-white'>
                {link.name}
              </Link>
              {link.subMenu && (
                <div className='absolute top-20 hidden group-hover:block hover:block'>
                  <div className='py-3'>
                    <div className='w-4 h-4 absolute mt-1 left-4 rotate-45 bg-white'> 
                    </div>
                  </div>
                  <ul className="list-none text-start p-3.5 bg-white">
                    {link.sub_LINKS.map((sLink, sIndex) => (
                      <li className='my-2.5' key={sIndex}>
                        <Link className='text-gray-800'>{sLink.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </li>
            </div>
        ))}
        <li>
          <button className='bg-white rounded-full px-3 py-2 mr-5'>Get Started</button>
        </li>
      </ul>
    </>
  );
};

export default DesktopNavBar;
