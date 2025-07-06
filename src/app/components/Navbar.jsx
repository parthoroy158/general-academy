"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname()

    const navItems = [
        { href: '/', label: 'হোম' },
        { href: '/allCourses', label: 'সকল কোর্স' },
        { href: '/aboutUs', label: 'আমাদের সম্পর্কে' },
        { href: '/demoClass', label: 'ডেমো ক্লাস' },
        { href: '/contactUs', label: 'যোগাযোগ', isButton: true },
    ]


    const navOptions = (
        <nav className="w-full">
            <ul className="flex flex-col md:flex-row md:gap-2 font-medium text-black dark:text-black">
                {navItems.map(({ href, label, isButton }) => {
                    const isActive = pathname === href

                    return (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`block px-4 py-2 rounded-md transition ${isActive
                                    ? 'bg-blue-400 text-white font-semibold'
                                    : 'hover:bg-blue-200'
                                    }`}
                            >
                                {isButton ? <button>{label}</button> : label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );


    return (
        <div className="w-full fixed top-0 z-20 bg-gradient-to-r from-[#e6f0fb] to-[#f5f5ff] dark:bg-white shadow-sm">
            <div className="navbar max-w-7xl mx-auto px-4 text-black dark:text-white">

                {/* Navbar Start */}
                <div className="navbar-start">

                    {/* Mobile Menu Button */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>

                        {/* Mobile Dropdown Menu */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[99] p-2 bg-white dark:bg-white shadow-md rounded-box w-60 max-h-80 overflow-y-auto"
                            style={{
                                scrollbarWidth: 'none',     // Firefox
                                msOverflowStyle: 'none',    // IE 10+
                            }}
                        >
                            <style jsx>{`ul::-webkit-scrollbar {display: none;}`}</style>
                            {navOptions}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 ml-2">
                        <img src="/logo.png" width={40} height={40} alt="Logo" className="rounded" />
                        <span className="text-xl sm:text-lg md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 drop-shadow-sm">
                            জেনারেল একাডেমি
                        </span>

                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navOptions}</ul>
                </div>
            </div>
        </div>



    );
};

export default Navbar;