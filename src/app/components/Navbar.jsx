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

                {/* Navbar Start (Mobile & Logo) */}
                <div className="navbar-start">

                    {/* Mobile Menu Button */}
                    <div className="dropdown text-black">
                        <label tabIndex={0} className="lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6   dark:text-black"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>

                        {/* Mobile Dropdown Menu */}
                        <ul
                            tabIndex={0}
                            className="menu scrollbar-hide  menu-sm dropdown-content mt-3 z-30 p-2  shadow-lg bg-white dark:bg-white rounded-box w-max"
                        >
                            {navOptions}
                        </ul>
                    </div>

                    {/* Logo and Brand Name */}
                    <Link href="/" className="flex items-center gap-2 ml-2">
                        <img src="/logo.png" width={40} height={40} alt="Logo" className="rounded" />
                        <span className="text-lg sm:text-xl font-bold text-black dark:text-black">জেনারেল একাডেমি</span>
                    </Link>
                </div>

                {/* Navbar End (Desktop Navigation) */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;