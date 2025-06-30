import Link from 'next/link';
import React from 'react';

const Body = () => {
    return (
        <div className="px-4 bg-base-300 pt-1 pb-5">
            <h1 className="mb-5 mt-16 text-3xl text-blue-900 font-bold text-center">
                উদ্দেশ্য স্পষ্ট থাকলে সঠিক প্রস্তুতি আপনাকে কাঙ্ক্ষিত লক্ষ্যে পৌঁছে দিতে পারে
            </h1>
            <p className="mb-5 mt-5 text-center">
                তাই আমাদের প্রতিটি কোর্স, সাপোর্ট সিস্টেম এবং রিসোর্স সাজানো হয়েছে একেবারে শিক্ষার্থীর প্রয়োজন ও বাস্তব পরীক্ষার কাঠামোকে মাথায় রেখে
            </p>

            <div className="flex flex-col md:flex-row gap-10 justify-center items-center mt-20  mb-20 ">
                <Link href='/sakalCourse/bjs18-general'>
                    <div className="bg-transparent card w-80 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out transform hover:ring-1 hover:ring-pink-500">
                        <figure className='p-5'>
                            <img
                                className='w-full h-50 object-cover rounded'
                                src='/course-banner.jpeg'
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                BJS Examination Course

                            </h2>
                            <p>
                                A card component has a figure, a body part, and inside body there are title and actions parts
                            </p>

                        </div>
                    </div>
                </Link>

                <div className="card bg-transparent w-80 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out transform hover:ring-1 hover:ring-pink-500 ">
                    <figure className='p-5'>
                        <img
                            className='w-full h-50 object-cover rounded'
                            src='advo.jpeg'
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Advocateship Course
                        </h2>
                        <p>
                            A card component has a figure, a body part, and inside body there are title and actions parts
                        </p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Body;