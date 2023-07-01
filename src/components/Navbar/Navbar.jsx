import React from 'react';

const Navbar = () => {
    return (
        <div data-aos="zoom-out-down">
        <div className="navbar bg-base-100 fixed shadow-md">
        <div className="navbar-start px-7">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a className='font-semibold'> Home </a></li>
              <li><a className='font-semibold'> About </a></li>
              <li><a className='font-semibold'> Skill </a></li>
              <li><a className='font-semibold'> Services </a></li>
              <li><a className='font-semibold'> Portfolio </a></li>
              <li><a className='font-semibold'> Contact </a></li>
            </ul>
          </div>
          <a className=" font-bold  font-serif normal-case text-xl">NIfahad</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              <li><a className='font-semibold'> Home </a></li>
              <li><a className='font-semibold'> About </a></li>
              <li><a className='font-semibold'> Skill </a></li>
              <li><a className='font-semibold'> Services </a></li>
              <li><a className='font-semibold'> Portfolio </a></li>
              <li><a className='font-semibold'> Contact </a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
    );
};

export default Navbar;