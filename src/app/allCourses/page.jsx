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
    const exam = [
        {
            course_id: "bjs18-preli-exam-batch",
            course_name: "১৮শ বিজেএস প্রিলিমিনারি এক্সাম ব্যাচ",
            course_image: "https://i.ibb.co/Ndgcp37d/18th-BJS-Exam-Batch.jpg",
            exam_details: {
                subjective_exam: 40,
                paper_final: 10,
                full_model_test: 5,
                total_exams: 55,
            },
            free_benefits: [
                "6 Special Classes",
                "Notes on Constitution + CrPC",
            ],
            fee: {
                amount: 500,
                currency: "BDT",
            },
            exam_start_date: "2024-07-04",
            admission_process: [
                "Send 500 BDT via Bkash Send Money to: 01325410258 (Personal).",
                "Share the screenshot or TrxID.",
            ],
            contact_note: "For any queries, feel free to contact us.",
            admission: true,
            active: true,
            duration: "3 months",
            start_date: "2025-07-04",
            course_structure: {
                subjects: ["বাংলা", "ইংরেজি", "সংবিধান"],
                modules: ["Module A", "Module B"],
                class_days: ["Monday", "Wednesday"],
                focus_areas: ["MCQ Practice", "Model Tests"],
                class_time: null,
                weekly_schedule: {
                    classes_per_week: 3,
                    exams_per_week: 1,
                },
                recordings_provided: true,
            },
            mentors: null
        },
    ];
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
            <div>
                <div className="flex items-center justify-center mb-8">
                    <div className="flex-grow border-t border-blue-300"></div>
                    <h1 className="mx-4 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 break-words">
                        ১৮শ বি.জে.এস প্রিলিমিনারি এক্সাম ব্যাচ
                    </h1>
                    <div className="flex-grow border-t border-blue-300"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">

                    {exam.map((course) => (
                        <Link href={`/allCourses/exam/${course.course_id}`} key={course.course_id}>
                            <div className="card dark:bg-white dark:text-black h-full bg-base-100 shadow-2xl hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
                                <div className="relative w-full h-48">
                                    {/* No image provided in data, use optional fallback if desired */}
                                    <img
                                        src={course.course_image}
                                        alt={course.course_name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                <div className="card-body flex flex-col justify-between text-center p-4 space-y-2">
                                    <h2 className="font-bold text-lg">{course.course_name}</h2>

                                    <div>
                                        <p className="text-sm font-semibold text-success">
                                            ফি: {course.fee.amount} {course.fee.currency}
                                        </p>
                                        {/* No discount info in data, comment this out */}
                                        {/* <p className="text-xs text-gray-500">
                                    ছাড়ের শেষ সময়: {course.fee.discount_deadline}
                                </p> */}
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
        </div>

    );
};

export default allCourses;