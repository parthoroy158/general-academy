"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const AllCoursesNav = () => {
    const pathname = usePathname();

    const tabs = [
        { label: 'সকল কোর্স', href: '/allCourses' },
        { label: 'বি.জে.এস প্রস্তুতি', href: '/allCourses/bjsCourses' },
        { label: 'এক্সাম ব্যাচ', href: '/allCourses/exam' },
        { label: 'বার কাউন্সিল প্রস্তুতি', href: '/allCourses/bjsCourses' },
    ];



    return (
        <div className="mt-5 text-black px-4">
            <div className="flex flex-col w-full md:flex-row gap-3 text-center md:gap-5 justify-center">

                {
                    tabs.map(item => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                href={item.href}
                                className={`inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300 ease-in-out shadow-md md:shadow-lg border border-transparent ${isActive
                                        ? "bg-blue-300 text-black hover:bg-blue-400 hover:shadow-xl"
                                        : "bg-blue-100 text-black border-black hover:bg-blue-200 hover:text-blue-900 hover:shadow-xl"}`}
                            >
                                {item.label}
                            </Link>


                        )
                    })
                }

            </div>
        </div >
    );
};

export default AllCoursesNav;