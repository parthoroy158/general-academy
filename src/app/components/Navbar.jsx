import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const navOptions = <>
        <Link href='/'>
            <li><a>হোম</a></li>
        </Link>
        <Link href='/'>
            <li><a>সকল কোর্স</a></li>
        </Link>
        <Link href='/'>
            <li><a>আমাদের সম্পর্কে</a></li>
        </Link>
        <Link href='/'>
            <li><a>ডেমো ক্লাস</a></li>
        </Link>
        <Link href='/'>
            <li><a>যোগাযোগ</a></li>
        </Link>

    </>

    return (
        <div className="navbar bg-blue-100 shadow-sm max-w-7xl mx-auto fixed z-1 opacity-75 text-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <img src='/logo.png' width={50} height={50} className='rounded' alt="" />
                <a className="btn btn-ghost text-xl">জেনারেল একাডেমি</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
           
        </div>
    );
};

export default Navbar;