import React from 'react';

const Banner = () => {
    return (
        <section className="relative bg-gradient-to-r from-[#e6f0fb] to-[#f5f5ff] overflow-hidden md:mt-10 rounded ">
            {/* Hero Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-16 lg:pt-16 lg:pb-10 flex flex-col-reverse md:flex-row items-center justify-between">
                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e2a5c] leading-tight">
                        ক্লাসরুম থেকে কোর্টরুম
                    </h1>
                    <p className="mt-4 text-xl text-[#e6007e] font-semibold " >
                        সফল বিচারক ও আইনজীবী হওয়ার পথে আপনার প্রথম ধাপ
                    </p>

                    {/* Buttons */}
                    {/* <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="px-6 py-3 bg-[#e6007e] text-white rounded-lg font-semibold">
                            একাডেমিক প্রোগ্রাম দেখো
                        </button>
                        <button className="px-6 py-3 border border-[#e6007e] text-[#e6007e] rounded-lg font-semibold flex items-center gap-2">
                            ▶ শিখতে শুরু করো
                        </button>
                    </div> */}
                </div>

                {/* Image */}
                <div className="md:w-1/2 mb-10 md:mb-0  md:absolute md:right-1">
                    <img
                        src={'/threeeS.png'}
                        alt="Students using devices"
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </div>

            {/* Stats Section */}
            <div className="w-full bg-white shadow-2xl rounded-2xl px-6 py-4 pl-5 pr-5 max-w-6xl mx-auto mt-10 mb-10  z-10 relative flex flex-wrap justify-between gap-6">
                <div className="text-center pl-5">
                    <h2 className="text-[#e6007e] text-2xl font-bold ">২ হাজার+</h2>
                    <p className="text-gray-600 mt-1">শিক্ষার্থী</p>
                </div>
                <div className="text-center">
                    <h2 className="text-[#0f8b8d] text-2xl font-bold">৭ জন+</h2>
                    <p className="text-gray-600 mt-1">অভিজ্ঞ মেন্টর</p>
                </div>
                <div className="text-center pr-5">
                    <h2 className="text-[#007f5f] text-2xl font-bold">৩০টি+</h2>
                    <p className="text-gray-600 mt-1">বিষয়ভিত্তিক ক্লাস</p>
                </div>
                {/* <div className="text-center pr-5">
                    <h2 className="text-[#f4a261] text-2xl font-bold">১.৮ লক্ষ+</h2>
                    <p className="text-gray-600 mt-1">লার্নিং ম্যাটেরিয়াল</p>
                </div> */}
            </div>
        </section>

    );
};

export default Banner;