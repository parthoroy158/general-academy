"use client";
import Link from 'next/link';
import React from 'react';

const Page = () => {
    const courses = [
        {
            id: "bjs18-general",
            course_name: "১৮তম বিজেএস জেনারেল কোর্স",
            duration: "১৮তম জুডিশিয়ারি লিখিত পরীক্ষার পর্যন্ত",
            orientation_class: {
                date: "২৬ জুন ২০২৫",
                time: "রাত ৯:৩০",
                image: "https://i.ibb.co/SDRtmMJ7/18.jpg",
            },
            course_structure: {
                subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "জেনারেল নলেজ"],
                modules: ["প্রিলিমিনারি", "লিখিত"],
                class_days: ["রবি", "সোম", "মঙ্গল", "বুধ"],
                class_time: "রাত ৯:৩০",
                focus_areas: ["গণিত", "বিজ্ঞান"],
                weekly_schedule: {
                    classes_per_week: 4,
                    exams_per_week: 2,
                },
                recordings_provided: true,
            },
            fee: {
                regular: 5000,
                discounted: 3000,
                discount_deadline: "২৫ জুন",
                image: "https://i.ibb.co/7hdgKtR/18th-BJS-Website-poster.jpg",
            },
        },
        {
            id: "bjs19-full",
            course_name: "১৯তম বিজেএস পূর্ণাঙ্গ কোর্স",
            duration: "১ বছর",
            start_date: "১ জুলাই ২০২৫",
            class_time: "রাত ৯:৩০",
            modules: ["প্রিলি", "লিখিত", "ভাইভা"],
            fee: {
                regular: 15000,
                discounted: 13000,
                discount_deadline: "৩০ জুন",
                image: "https://i.ibb.co/0RYCmJ7J/19th-BJS-Website-poster.jpg",
                installment_option: {
                    allowed: true,
                    breakdown: [6500, 6500],
                },
            },
        },
    ];

    return (
        <div>
            <div className="flex items-center justify-center mb-8">
                <div className="flex-grow border-t border-blue-300"></div>
                <h1 className="mx-4 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 break-words">
                   বি.জে.এস প্রস্তুতি
                </h1>
                <div className="flex-grow border-t border-blue-300"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
                {courses.map((course) => (
                    <Link href={`/allCourses/${course.id}`} key={course.id}>
                        <div className="card   dark:bg-white dark:text-black h-full bg-base-100 shadow-2xl hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
                            <div className="relative w-full h-48">
                                <img
                                    src={course.fee.image}
                                    alt={course.course_name}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            <div className="card-body  flex flex-col justify-between text-center p-4 space-y-2">
                                <h2 className=" font-bold text-lg">{course.course_name}</h2>
                                {/* <p className="text-sm text-gray-600">{course.duration}</p> */}



                                <div>
                                    <p className="text-sm font-semibold text-success">
                                        ফি: <span className="line-through text-red-500">{course.fee.regular}৳</span>{" "}
                                        {course.fee.discounted}৳
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        ছাড়ের শেষ সময়: {course.fee.discount_deadline}
                                    </p>
                                </div>

                                <div className="pt-4">
                                    <button className="btn btn-md btn-primary w-full">এখন ভর্তি হন</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    );
};

export default Page;
