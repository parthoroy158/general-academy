import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const navOptions = (
        <nav className="w-full">
            <ul className="flex flex-col md:flex-row md:gap-1 font-medium text-gray-800">
                <li>
                    <Link
                        href="/"
                        className="block px-4 py-2 rounded-md hover:bg-blue-200 transition"
                    >
                        হোম
                    </Link>
                </li>
                <li>
                    <Link
                        href="/sakalCourse"
                        className="block px-4 py-2 rounded-md hover:bg-blue-200 transition"
                    >
                        সকল কোর্স
                    </Link>
                </li>
                <li>
                    <Link
                        href="/aboutUs"
                        className="block px-4 py-2 rounded-md hover:bg-blue-200 transition"
                    >
                        আমাদের সম্পর্কে
                    </Link>
                </li>
                <li>
                    <Link
                        href="/demo"
                        className="block px-4 py-2 rounded-md hover:bg-blue-2000 transition"
                    >
                        ডেমো ক্লাস
                    </Link>
                </li>
                <li>
                    <Link
                        href="/contact"
                        className="block px-4 py-2 rounded-md hover:bg-blue-200 transition"
                    >
                        যোগাযোগ
                    </Link>
                </li>
            </ul>
        </nav>
    );

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
                <Link href='/'>
                    <p className='text-xl'> জেনারেল একাডেমি</p>
                </Link>
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