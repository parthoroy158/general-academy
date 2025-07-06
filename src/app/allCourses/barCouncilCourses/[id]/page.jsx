'use client';

import React from 'react';
import Link from 'next/link';

const page = ({ params }) => {
    const id = params?.id;

    const courses = [
        {
            course_id: "bar-council-full-course",
            course_name: "বার কাউন্সিল ফুল কোর্সঃ প্রিলি -রিটেন- ভাইভা",
            class_system: "অনলাইন (জুম)",
            orientation_class: "২০২৫-০৮-২০",
            class_time: "রাত ৮:০০ - ৯:৩০",
            duration: "লিখিত পরীক্ষা পর্যন্ত",
            start_date: "২০২৫-০৮-২০",
            admission: true,
            active: true,
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
            course_structure: {
                subjects: ["সিভিল", "ক্রিমিনাল", "প্রসিডিওর"],
                modules: ["মডিউল ১", "মডিউল ২"],
                class_days: ["রবি", "মঙ্গল", "বৃহস্পতি", "শুক্র"],
                class_time: "রাত ৮:০০ - ৯:৩০",
                focus_areas: ["লিখিত প্রস্তুতি", "রুটিন ক্লাস", "পরীক্ষা"],
                weekly_schedule: {
                    classes_per_week: 4,
                    exams_per_week: 1
                },
                recordings_provided: true
            },
            admission_process: [
                "01300-678857 এই নম্বরে সেন্ড মানি (বিকাশ/নগদ/রকেট) করে ট্রানজেকশন আইডি এবং স্ক্রিনশট পাঠাবেন।",
                "তারপর আপনাকে দুটো গ্রুপে যুক্ত করা হবে: ক্লাস রেকর্ড গ্রুপ এবং লাইভ ক্লাস লিংক গ্রুপ।",
                "আপনার জন্য নিরন্তর শুভকামনা রইল।"
            ]
        }
    ];

    const data = courses.find(course => course.course_id === id);

    if (!data) {
        return <div className="text-center py-10 text-xl text-red-600">কোর্স খুঁজে পাওয়া যায়নি।</div>;
    }

    return (
        <div className='w-full bg-gray-50'>
            <div className="max-w-7xl mx-auto pt-1 px-4 min-h-screen">
                {/* Course Name */}
                <div className="flex items-center justify-center mb-8">
                    <div className="flex-grow border-t border-blue-300"></div>
                    <h1 className="mx-4 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 break-words">
                        {data.course_name}
                    </h1>
                    <div className="flex-grow border-t border-blue-300"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 bg-gray-50 text-gray-800">
                    {/* Main Content */}
                    <div className="flex-1 w-full">

                        {/* Course Info Stats */}
                        <div className="stats shadow-xl w-full mb-3 flex flex-col md:flex-row gap-4 text-center">
                            <div className="stat flex-1 dark:text-black">
                                <div className="stat-title font-bold text-lg dark:text-black">কোর্স শুরু:</div>
                                <div className="stat-value text-2xl text-primary">{data.start_date}</div>
                            </div>
                            <div className="stat flex-1">
                                <div className="stat-title font-bold text-lg dark:text-black">মেয়াদ:</div>
                                <div className="stat-value text-2xl text-secondary">{data.duration}</div>
                            </div>
                            <div className="stat flex-1">
                                <div className="stat-title font-bold text-lg dark:text-black">ভর্তি:</div>
                                <div className={data.admission ? "text-green-600 text-2xl font-bold" : "text-red-500 text-2xl font-bold"}>
                                    {data.admission ? "Open" : "Close"}
                                </div>
                            </div>
                        </div>

                        {/* Course Structure */}
                        {data.course_structure && (
                            <div className="bg-white rounded-2xl p-6 shadow-xl mt-6 mb-8">
                                <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b pb-2 text-center">
                                    🧩 কোর্স কাঠামো
                                </h2>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <h3 className="font-semibold mb-2 text-blue-600">📚 বিষয়সমূহ</h3>
                                        <ul className="list-disc list-inside text-gray-800 space-y-1">
                                            {data.course_structure.subjects.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <h3 className="font-semibold mb-2 text-blue-600">🗂️ মডিউল</h3>
                                        <ul className="list-disc list-inside text-gray-800 space-y-1">
                                            {data.course_structure.modules.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <h3 className="font-semibold mb-2 text-blue-600">📅 ক্লাসের দিন</h3>
                                        <p>{data.course_structure.class_days.join(', ')}</p>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <h3 className="font-semibold mb-2 text-blue-600">🎯 ফোকাস এরিয়া</h3>
                                        <p>{data.course_structure.focus_areas.join(', ')}</p>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <h3 className="font-semibold mb-2 text-blue-600">⏰ ক্লাস টাইম</h3>
                                        <p>{data.course_structure.class_time}</p>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <h3 className="font-semibold mb-2 text-blue-600">🗓️ সাপ্তাহিক রুটিন</h3>
                                        <ul className="list-disc list-inside text-gray-800 space-y-1">
                                            <li>ক্লাস: {data.course_structure.weekly_schedule.classes_per_week} দিন</li>
                                            <li>পরীক্ষা: {data.course_structure.weekly_schedule.exams_per_week} দিন</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <h3 className="font-semibold mb-2 text-blue-600">🎥 রেকর্ডিং</h3>
                                        <p>{data.course_structure.recordings_provided ? "প্রতিটি ক্লাসের রেকর্ডিং থাকবে" : "রেকর্ডিং প্রদান করা হবে না"}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Mentor Team */}
                        <div className="mt-5 bg-white rounded-xl p-5 mb-6">
                            <h2 className="text-xl font-semibold mb-4 text-blue-700 text-center">মেন্টর টিম</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                                {data.mentors?.map((mentor, i) => (
                                    <div key={i} className="p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                                        <p className="text-lg font-bold text-blue-800">{mentor.name}</p>
                                        <p className="text-gray-700 text-sm">{mentor.designation}</p>
                                        {mentor.workplace && <p className="text-gray-600 text-sm">{mentor.workplace}</p>}
                                        {mentor.note && <p className="text-sm text-gray-500">{mentor.note}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Admission Process Accordion */}
                        <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-xl mb-6 shadow-sm">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-lg font-semibold text-gray-800 peer-checked:text-blue-600">
                                ভর্তি প্রক্রিয়া
                            </div>
                            <div className="collapse-content text-sm text-gray-700 px-4 pb-4 leading-relaxed">
                                <ul className="list-disc pl-5 space-y-2">
                                    {data.admission_process.map((step, index) => (
                                        <li key={index}>{step}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-[400px]">
                        <div className="max-w-sm mx-auto bg-white border border-blue-200 rounded-xl shadow-md p-4 space-y-4">
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    className="rounded-md w-full h-52"
                                    src="https://www.youtube.com/embed/dY2bBBhIEfghvk?si=z1rCtJFEoBlO8Qfw"
                                    title="New Admission Process"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <ul className="space-y-2 text-sm text-gray-800">
                                <li className="font-bold">নিম্নের নিচে বর্ণিত উপায়ে ফি পরিশোধ করুন:</li>
                                <li>📌 বিকাশ: 01325-410258 (Send Money)</li>
                                <li>📌 নগদ: 01325-410258 (Send Money)</li>
                                <li className="italic">পেমেন্ট করে ট্রানজেকশন আইডি সহ ফর্মটি পূরণ করে সাবমিট করুন। ⤵️</li>
                            </ul>

                            {
                                data?.active ? (
                                    <Link href={`/AdmissionForm/${data.course_id}`}>
                                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                                            Enroll Now
                                        </button>
                                    </Link>
                                ) : (
                                    <button
                                        className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                                        disabled
                                    >
                                        Admission Closed
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
