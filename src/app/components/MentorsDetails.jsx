'use client';

import React from 'react';
import Carousal from './Carousal';

const MentorsDetails = () => {
    return (
        <div className='bg-blue-100 w-full'>

            <section className="bg-blue-100 px-6 py-14 rounded-b-3xl max-w-7xl mx-auto relative overflow-hidden text-black">



                <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

                    <div className="w-full lg:w-1/2">
                        <p className='text-center text-3xl font-bold'>মেন্টরদের পরিচিতি</p>
                        <Carousal />
                    </div>
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-5 leading-snug">
                            কেন <span className='text-red-800'>জেনারেল একাডেমিতে </span>আস্থা রাখবেন?
                        </h2>
                        <p className="text-base lg:text-lg leading-relaxed  text-justify">
                            সেরা কন্টেন্ট ও সর্বাধুনিক প্রযুক্তির সাথে সারাদেশের ২ হাজার+ শিক্ষার্থীর
                            ঘনিষ্ঠতায় পড়ালেখা ও পরীক্ষা প্রস্তুতির নির্ভরযোগ্য প্রতিষ্ঠান <strong>General Academy</strong>!
                        </p>

                        <ul className="mt-6 space-y-3 text-sm lg:text-base text-left lg:ml-6 list-disc list-inside ">
                            <li>এক্সপার্ট মেন্টরের দিকনির্দেশনা</li>
                            <li>বাস্তবভিত্তিক প্রস্তুতি প্ল্যান</li>
                            <li>ইন্টারঅ্যাকটিভ ও প্র্যাক্টিকাল কনটেন্ট</li>
                            <li>স্মার্ট অ্যাসেসমেন্ট ও ফিডব্যাক</li>
                        </ul>
                    </div>

                    {/* Right Carousel */}

                </div>
            </section>
        </div>
    );
};

export default MentorsDetails;
