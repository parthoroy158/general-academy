import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export const metadata = {
    title: 'আমাদের সম্পর্কে || Sokol Course',
}

const page = () => {
    return (
        <div className="bg-blue-50 w-full min-h-screen">
            <div className=" min-h-screen max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <h2 className="text-center text-4xl font-semibold text-black mb-8">আমাদের সম্পর্কে</h2>

                {/* About Paragraph */}
                <div className="bg-blue-50 rounded-lg p-6 md:p-10 text-black">
                    <p className="text-xl text-justify mb-4">
                        <span className="font-semibold">জেনারেল একাডেমি</span> হলো একটি নির্ভরযোগ্য অনলাইন প্ল্যাটফর্ম, যা মূলত বাংলাদেশ জুডিশিয়াল সার্ভিস (BJS) এবং বাংলাদেশ বার কাউন্সিল পরীক্ষার প্রস্তুতির জন্য গঠিত।
                        আমাদের লক্ষ্য হলো আইন শিক্ষার্থীদের সর্বোচ্চ মানসম্পন্ন দিকনির্দেশনা ও প্রস্তুতি সুবিধা প্রদান করা, যেন তারা প্রতিযোগিতামূলক এই পরীক্ষাগুলোতে সফলতা অর্জন করতে পারে।
                    </p>
                    <ul className="list-disc list-inside text-xl space-y-2">
                        <li>অভিজ্ঞ ও দেশসেরা মেন্টরদের সরাসরি দিকনির্দেশনা</li>
                        <li>কারিকুলামভিত্তিক পূর্ণাঙ্গ অনলাইন কোর্স</li>
                        <li>নিয়মিত লাইভ ক্লাস, মডেল টেস্ট ও প্রশ্নোত্তর সেশন</li>
                        <li>রেকর্ডেড ক্লাসের সুবিধা</li>
                    </ul>
                    <p className="text-xl text-justify mt-6">
                        আমরা বিশ্বাস করি, সঠিক পরিকল্পনা ও কাঠামোবদ্ধ প্রস্তুতির মাধ্যমে যে কেউ বিচারক বা আইনজীবী হওয়ার স্বপ্ন বাস্তবায়ন করতে পারে।
                        <span className="font-semibold"> জেনারেল একাডেমি</span> সেই স্বপ্ন বাস্তবায়নের নিরলস চেষ্টা চালিয়ে যাচ্ছে।
                    </p>
                </div>

                {/* Founder Section */}
                <div className="flex items-center justify-center bg-blue-50 px-4 mt-16 shadow-sm pb-5 rounded">
                    <div className="py-12 px-4 md:px-16 flex flex-col md:flex-row items-center gap-8">
                        {/* Image with Background */}
                        <div className="relative">
                            <div className="absolute top-4 left-4 w-full h-full bg-cyan-300 rounded-lg rotate-6 -z-10" />
                            <img
                                src="/ragib-baya.jpeg"
                                alt="Founder"
                                className="w-72 h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Founder Info */}
                        <div className="max-w-xl text-center md:text-left">
                            <p className="text-gray-700 leading-relaxed text-lg mb-4 text-justify">
                                ১৬তম বিজেএস পরীক্ষায় মেধাক্রমে ২য় স্থান অর্জনকারী। শুরু থেকেই পড়াশোনায় মনোযোগী ও গবেষণামূলক মানসিকতার অধিকারী হওয়ায় তিনি পরীক্ষার্থীদের চাহিদা ও প্রয়োজনীয়তা সহজেই অনুধাবন করতে সক্ষম।
                            </p>
                            <h3 className="text-blue-500 text-2xl font-semibold mb-1">রাগীব মোস্তাফা নাঈম</h3>
                            <p className="text-gray-800 font-medium mb-3">ফাউন্ডার এবং সিইও, জেনারেল একাডেমি</p>

                            <ul className="text-gray-600 list-disc ml-5 space-y-1 mb-4 text-left">
                                <li>এলএল.বি, এলএল.এম</li>
                                <li>ইস্টার্ন ইউনিভার্সিটি, ঢাকা</li>
                            </ul>

                            {/* Social Icons */}
                            <div className="flex justify-center md:justify-start items-center space-x-4 text-2xl">
                                <a href="#" className="hover:text-blue-600"><BsFacebook /></a>
                                <a href="#" className="hover:text-sky-500"><FaTwitter /></a>
                                <a href="#" className="hover:text-blue-800"><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default page;