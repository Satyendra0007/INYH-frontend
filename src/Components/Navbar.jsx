import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <header className='flex justify-around px-4 py-5'>
      <div className="logo flex items-center gap-x-10 ">
        <div className="logo font-bold text-2xl cursor-pointer ">INYH</div>
        <div className="nav">
          <ul className='flex gap-6 font-semibold '>
            <li className='cursor-pointer'>Beauty</li>
            <li className='cursor-pointer'>Homes</li>
            <li className='cursor-pointer'>Native</li>
          </ul>
        </div>
      </div>
      <div className="search flex gap-4 ">
        <div className="left relative ">
          <input className='w-64 h-11 border border-gray-300 rounded-md p-3 cursor-pointer ' type="text" placeholder=' ,' />
          <span className='icon absolute top-2.5 left-4 z-50 flex items-center gap-2 text-gray-600 cur '>
            <CiLocationOn className='text-black' />
            <p>Connaught Place</p>
          </span>
        </div>
        <div className="right relative">
          <input className='w-64 h-11 border border-gray-300 rounded-md p-3  cursor-pointer' type="text" placeholder='' />
          <span className='icon absolute top-2.5 left-4 z-50 flex items-center gap-2 text-gray-600 '>
            <CiSearch className='text-black'  />
            <p>Search for ....</p>
          </span>
        </div>
      </div>
      <div className="icons flex items-center gap-6 text-2xl">
        <div className="cart cursor-pointer"><CiShoppingCart /></div>
        <div className="info cursor-pointer"><RiAccountCircleLine /></div>
      </div>
    </header>
  )
}
