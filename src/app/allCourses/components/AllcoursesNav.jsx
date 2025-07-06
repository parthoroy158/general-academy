"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const AllCoursesNav = () => {
    const pathname = usePathname();

    const tabs = [
        { label: 'All Courses', href: '/allCourses' },
        { label: 'বি.জে.এস প্রস্তুতি', href: '/allCourses/bjsCourses' },
        { label: 'এক্সাম ব্যাচ', href: '/allCourses/exam' },
        { label: 'বার কাউন্সিল প্রস্তুতি', href: '/allCourses/bjsCourses' },
    ];



    return (
        <div className="mt-5 text-black px-4">
            <div className="md:flex md:gap-5 justify-center ">

                {
                    tabs.map(item => {
                        const isActive = pathname === item.href;
                        return (
                            <button className={`btn btn-ghost  ${isActive ? "bg-blue-300 border-black" :  "bg-blue-100 text-black border-b-2 border-black px-6" }`}>
                                <Link href={item.href}>

                                    {item.label}

                                </Link>
                            </button>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default AllCoursesNav;