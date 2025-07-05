import Link from 'next/link';
import React from 'react';

const Body = () => {
    return (
        <div className="w-full bg-gray-100 dark:bg-gray-100 text-black dark:text-black">
            <div className="max-w-7xl mx-auto px-4 pt-1 pb-5">
                <h1 className="mb-5 mt-16 text-3xl font-bold text-center text-blue-900 dark:text-blue-300">
                    উদ্দেশ্য স্পষ্ট থাকলে সঠিক প্রস্তুতি আপনাকে কাঙ্ক্ষিত লক্ষ্যে পৌঁছে দিতে পারে
                </h1>
                <p className="mb-5 mt-5 text-center">
                    তাই আমাদের প্রতিটি কোর্স, সাপোর্ট সিস্টেম এবং রিসোর্স সাজানো হয়েছে একেবারে শিক্ষার্থীর প্রয়োজন ও বাস্তব পরীক্ষার কাঠামোকে মাথায় রেখে
                </p>

                <div className="flex flex-col md:flex-row gap-10 justify-center items-center mt-20 mb-20">
                    <Link href="/allCourses/bjs18-general">
                        <div className="w-80 bg-white dark:bg-gray-100 rounded shadow-sm hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out hover:ring-1 hover:ring-pink-500">
                            <figure className="p-5">
                                <img
                                    src="/course-banner.jpeg"
                                    alt="BJS Course"
                                    className="w-full h-50 object-cover rounded"
                                />
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title font-semibold text-lg">BJS Examination Course</h2>
                                <p className="text-sm mt-2">
                                    A card component has a figure, a body part, and inside body there are title and actions parts.
                                </p>
                            </div>
                        </div>
                    </Link>

                    <div className="w-80 bg-white dark:bg-gray-100 rounded shadow-sm hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out hover:ring-1 hover:ring-pink-500">
                        <figure className="p-5">
                            <img
                                src="advo.jpeg"
                                alt="Advocateship Course"
                                className="w-full h-50 object-cover rounded"
                            />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title font-semibold text-lg">Advocateship Course</h2>
                            <p className="text-sm mt-2">
                                A card component has a figure, a body part, and inside body there are title and actions parts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Body;