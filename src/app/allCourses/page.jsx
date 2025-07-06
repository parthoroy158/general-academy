import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'সকল কোর্স || Sokol Course',
    keywords: ['General Academy', 'GeneralBD', 'BD General Academy', 'all courses'],
    description: 'All courses,Genetal Academy is a premier online coaching center dedicated to empowering aspiring legal professionals with the knowledge and skills they need to excel in competitive examinations. Specializing in law-focused education, Genetal Academy offers expertly designed courses for a wide range of legal exams, with a special emphasis on BJS',
}

const allCourses = () => {

    const courses = [
        {
            id: "bjs18-general",
            course_name: "১৮তম বিজেএস জেনারেল কোর্স",
            duration: "১৮তম জুডিশিয়ারি লিখিত পরীক্ষার পর্যন্ত",
            orientation_class: {
                date: "২৬ জুন ২০২৫",
                time: "রাত ৯:৩০",
                image: "https://i.ibb.co/SDRtmMJ7/18.jpg"
            },
            course_structure: {
                subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "জেনারেল নলেজ"],
                modules: ["প্রিলিমিনারি", "লিখিত"],
                class_days: ["রবি", "সোম", "মঙ্গল", "বুধ"],
                class_time: "রাত ৯:৩০",
                focus_areas: ["গণিত", "বিজ্ঞান"],
                weekly_schedule: {
                    classes_per_week: 4,
                    exams_per_week: 2
                },
                recordings_provided: true
            },
            fee: {
                regular: 5000,
                discounted: 3000,
                discount_deadline: "২৫ জুন",
                image: "https://i.ibb.co/7hdgKtR/18th-BJS-Website-poster.jpg"
            },
            admission_process: {
                instructions: [
                    "01325410258 নম্বরে (Bkash/Nagad) সেন্ড মানি করুন",
                    "ট্রানজেকশন আইডি বা স্ক্রিনশট পাঠান"
                ]
            },
            post_admission: {
                facebook_groups_added: 2
            },
            contact: [
                { name: "Mahmuda Akhi", phone: "01921-251997" },
                { name: "Himel", phone: "01533302578" },
                { platform: "WhatsApp", phone: "01306-274681" },
                { platform: "WhatsApp", phone: "01325410258" }
            ]
        },
        {
            id: "bjs19-full",
            course_name: "১৯তম বিজেএস পূর্ণাঙ্গ কোর্স",
            duration: "১ বছর",
            start_date: "১ জুলাই ২০২৫",
            class_time: "রাত ৯:৩০",
            modules: ["প্রিলি", "লিখিত", "ভাইভা"],
            course_structure: {
                weekly_classes: 5,
                weekly_exams: 2,
                recordings_provided: true
            },
            mentors: [
                {
                    name: "রাগিব মোস্তফা নাঈম",
                    designation: "সহকারী জজ",
                    workplace: "ময়মনসিংহ"
                },
                {
                    name: "আমিনুল ইসলাম খান",
                    designation: "সহকারী জজ",
                    workplace: "শেরপুর",
                    note: "সাবেক আইন কর্মকর্তা, পূবালী ব্যাংক লি."
                },
                {
                    name: "আফরোজী সাচ্চু শাহনেওয়াজ",
                    designation: "সহকারী নিবন্ধক",
                    workplace: "ঢাকা"
                },
                {
                    name: "কাউসার আহমেদ",
                    designation: "সহকারী কমিশনার",
                    workplace: "রংপুর"
                },
                {
                    name: "মাহমুদা আখিঁ",
                    designation: "সহকারী জজ"
                },
                {
                    name: "শান্ত দেব রয় অর্ণ",
                    designation: "সহকারী জজ"
                },
                {
                    name: "তানজিনা এলিন",
                    designation: "সহকারী জজ"
                }
            ],
            special_responsibilities: {
                law_guidance: "আমিনুল ইসলাম খান",
                general_guidance: "রাগিব মোস্তফা নাঈম"
            },
            fee: {
                regular: 15000,
                discounted: 13000,
                discount_deadline: "৩০ জুন",
                image: "https://i.ibb.co/0RYCmJ7J/19th-BJS-Website-poster.jpg",
                installment_option: {
                    allowed: true,
                    breakdown: [6500, 6500]
                }
            },
            admission_process: [
                "01325410258 (Bkash/Nagad) নম্বরে টাকা পাঠিয়ে লাস্ট ডিজিট বা ট্রানজেকশন আইডি জানাতে হবে",
                "কনফার্ম হলে ক্লাস রেকর্ড গ্রুপে যুক্ত করা হবে"
            ]
        }
    ];


    return (
        <div>
            <div className="flex items-center justify-center mb-8">
                <div className="flex-grow border-t border-blue-300"></div>
                <h1 className="mx-4 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 break-words">
                    সকল কোর্স
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

export default allCourses;