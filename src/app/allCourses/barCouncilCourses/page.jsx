'use client';
import React from 'react';
import Link from 'next/link';

const Page = () => {
    const coursesBarCouncil = [
        {
            course_id: "bar-council-full-course",
            course_name: "বার কাউন্সিল ফুল কোর্সঃ প্রিলি -রিটেন- ভাইভা",
            class_system: "অনলাইন (জুম)",
            orientation_class: "২০২৫-০৮-২০",
            class_time: "রাত ৮:০০ - ৯:৩০",
            duration: "লিখিত পরীক্ষা পর্যন্ত",
            weekly_schedule: {
                class_days: 4,
                exam_days: 1
            },
            features: [
                "রুটিন ওয়াইস নিয়মিত ক্লাস হবে।",
                "সকল ক্লাসের রেকর্ড থাকবে। যতবার ইচ্ছে দেখতে ও শুনতে পারবেন।",
                "মানসম্মত প্রশ্নে প্রতি সপ্তাহে নিয়মিত পরীক্ষা নেয়া হবে। পরীক্ষার প্রশ্নপত্র সলভ করে দেয়া হবে পরবর্তী ক্লাসে।",
                "এই কোর্সেই জুডিসিয়ারির লিখিত পরীক্ষার ২০০ নম্বর কাভার করা হবে (দেওয়ানী + ফৌজদারি সংক্রান্ত আইন)।"
            ],
            fee: {
                full_fee: 7000,
                discounted_fee: 6000,
                installment_plan: {
                    installments: 2,
                    amounts: [3000, 3000]
                },
                currency: "BDT"
            },
            instructor: null,
            admission_process: [
                "01300-678857 এই নম্বরে সেন্ড মানি (বিকাশ/নগদ/রকেট) করে ট্রানজেকশন আইডি এবং স্ক্রিনশট পাঠাবেন।",
                "তারপর আপনাকে দুটো গ্রুপে যুক্ত করা হবে: ক্লাস রেকর্ড গ্রুপ এবং লাইভ ক্লাস লিংক গ্রুপ।",
                "আপনার জন্য নিরন্তর শুভকামনা রইল।"
            ]
        }
    ];

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-center mb-8">
                <div className="flex-grow border-t border-blue-300"></div>
                <h1 className="mx-4 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 break-words text-center">
                    বার কাউন্সিল ফুল কোর্সঃ প্রিলি -রিটেন- ভাইভা
                </h1>
                <div className="flex-grow border-t border-blue-300"></div>
            </div>

            {/* Grid of Courses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
                {coursesBarCouncil.map((course) => (
                    <Link href={`/allCourses/barCouncilCourses/${course.course_id}`} key={course.course_id}>
                        <div className="card dark:bg-white dark:text-black h-full bg-base-100 shadow-2xl hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
                            <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                                {/* Optional Image */}
                                <span className="text-sm">কোনো ছবি নেই</span>
                            </div>

                            <div className="card-body flex flex-col justify-between text-center p-4 space-y-2">
                                <h2 className="font-bold text-lg">{course.course_name}</h2>

                                <div>
                                    <p className="text-sm font-semibold text-success">
                                        ফি: {course.fee.discounted_fee} {course.fee.currency}
                                    </p>
                                    <p className="text-xs text-gray-500 line-through">
                                        রেগুলার ফি: {course.fee.full_fee} {course.fee.currency}
                                    </p>
                                </div>

                                <div className="pt-4">
                                    <button className="btn btn-md btn-primary w-full">ভর্তি হন</button>
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
