'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function Page({ params }) {
    const { id } = params;
    console.log("This is the params id:", id)

    const exam = [
        {
            course_id: "bjs18-preli-exam-batch",
            course_name: "১৮শ বিজেএস প্রিলিমিনারি এক্সাম ব্যাচ",
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
        {
            course_id: "bjs18-preli-written-batch",
            course_name: "১৮শ বিজেএস লিখিত এক্সাম ব্যাচ",
            course_image: "https://i.ibb.co/Ndgcp37d/18th-BJS-Exam-Batch.jpg",
            exam_details: {
                subjective_exam: 0,
                paper_final: 0,
                full_model_test: 0,
                total_exams: 35,
            },
            free_benefits: [
                "রিটেন নোট মেকিং গাইড",
                "রাগিব ভাইয়ের সংবিধান ও CrPC পূর্ণাঙ্গ নোট"
            ],
            fee: {
                amount: 3000,
                currency: "BDT",
            },
            exam_start_date: "2025-05-04",
            admission_process: [
                "নিম্নের নম্বরে 013254-10258 (বিকাশ/নগদ) ভর্তি ফি সেন্ড স্ক্রিনশট/ট্রানজেকশন আইডি পাঠাতে হবে।",
                "২৫ এপ্রিল রিটেন প্রস্তুতি, নোট মেকিং ও বুক লিস্ট সংক্রান্ত ওরিয়েন্টেশন সেশন অনুষ্ঠিত হবে।"
            ],
            contact_note: "For any queries, feel free to contact us.",
            admission: true,
            active: true,
            duration: "2 months",
            start_date: "2025-04-25",
            course_structure: {
                subjects: [],
                modules: [],
                class_days: [],
                focus_areas: ["Note Making", "Written Practice"],
                class_time: null,
                weekly_schedule: {
                    classes_per_week: 2,
                    exams_per_week: 2,
                },
                recordings_provided: false
            },
            mentors: null
        }
    ];

    const data = exam.find(item => item.course_id === id);

    if (!data) return notFound();

    return (
        <div className='w-full bg-gray-50'>
            <div className="max-w-7xl mx-auto pt-0 px-4 min-h-screen">
                {/* Header */}
                <div className="flex items-center justify-center mb-8">
                    <div className="flex-grow border-t border-blue-300"></div>
                    <h1 className="mx-4 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 break-words">
                        {data.course_name}
                    </h1>
                    <div className="flex-grow border-t border-blue-300"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 text-gray-800">
                    {/* Left Column */}
                    <div className="flex-1">
                        {/* Stats */}
                        <div className="stats shadow-xl w-full mb-6 flex flex-col md:flex-row gap-4 text-center">
                            <div className="stat flex-1">
                                <div className="stat-title font-bold text-lg text-black">কোর্স শুরু:</div>
                                <div className="stat-value text-primary text-2xl">{data.start_date}</div>
                            </div>
                            <div className="stat flex-1">
                                <div className="stat-title font-bold text-lg text-black">মেয়াদ:</div>
                                <div className="stat-value text-secondary text-2xl">{data.duration}</div>
                            </div>
                            <div className="stat flex-1">
                                <div className="stat-title font-bold text-lg text-black">ভর্তি:</div>
                                <div className={data.admission ? "text-green-600 text-2xl font-bold" : "text-red-500 text-2xl font-bold"}>
                                    {data.admission ? "Open" : "Closed"}
                                </div>
                            </div>
                        </div>

                        {/* Exam Details */}
                        {data.exam_details && (
                            <div className="bg-white p-6 rounded-2xl shadow-xl mb-8">
                                <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b pb-2 text-center">📝 পরীক্ষার বিবরণ</h2>
                                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                    <li>Subjective Exams: {data.exam_details.subjective_exam}</li>
                                    <li>Paper Final Exams: {data.exam_details.paper_final}</li>
                                    <li>Full Model Tests: {data.exam_details.full_model_test}</li>
                                    <li>Total Exams: {data.exam_details.total_exams}</li>
                                    <li>Exam Start Date: {data.exam_start_date}</li>
                                </ul>
                            </div>
                        )}

                        {/* Free Benefits */}
                        {data.free_benefits?.length > 0 && (
                            <div className="bg-white p-6 rounded-2xl shadow-xl mb-8">
                                <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b pb-2 text-center">🎁 ফ্রি বেনিফিট</h2>
                                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                    {data.free_benefits.map((benefit, i) => (
                                        <li key={i}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Course Structure */}
                        {data.course_structure && (
                            <div className="bg-white p-6 rounded-2xl shadow-xl mb-8">
                                <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b pb-2 text-center">🧩 কোর্স কাঠামো</h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div><h3 className="font-semibold text-blue-600">📚 বিষয়সমূহ</h3><ul className="list-disc pl-5">{data.course_structure.subjects.map((s, i) => <li key={i}>{s}</li>)}</ul></div>
                                    <div><h3 className="font-semibold text-blue-600">🗂️ মডিউল</h3><ul className="list-disc pl-5">{data.course_structure.modules.map((m, i) => <li key={i}>{m}</li>)}</ul></div>
                                    <div><h3 className="font-semibold text-blue-600">📅 ক্লাসের দিন</h3><p>{data.course_structure.class_days.join(', ')}</p></div>
                                    <div><h3 className="font-semibold text-blue-600">🎯 ফোকাস এরিয়া</h3><p>{data.course_structure.focus_areas.join(', ')}</p></div>
                                    {data.course_structure.class_time && (
                                        <div><h3 className="font-semibold text-blue-600">⏰ ক্লাস টাইম</h3><p>{data.course_structure.class_time}</p></div>
                                    )}
                                    <div><h3 className="font-semibold text-blue-600">🗓️ সাপ্তাহিক রুটিন</h3>
                                        <ul className="list-disc pl-5">
                                            <li>ক্লাস: {data.course_structure.weekly_schedule.classes_per_week} দিন</li>
                                            <li>পরীক্ষা: {data.course_structure.weekly_schedule.exams_per_week} দিন</li>
                                        </ul>
                                    </div>
                                    <div><h3 className="font-semibold text-blue-600">🎥 রেকর্ডিং</h3>
                                        <p>{data.course_structure.recordings_provided ? "প্রতিটি ক্লাসের রেকর্ডিং থাকবে" : "রেকর্ডিং প্রদান করা হবে না"}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Admission Process */}
                        <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-xl shadow mb-6">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-lg font-semibold">ভর্তি প্রক্রিয়া</div>
                            <div className="collapse-content px-4 pb-4">
                                <ul className="list-disc pl-5 space-y-1">
                                    {data.admission_process.map((step, i) => <li key={i}>{step}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-full lg:w-[400px]">
                        <div className="bg-white border border-blue-200 rounded-xl shadow-md p-4 space-y-4">
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    className="w-full h-52 rounded-md"
                                    src="https://www.youtube.com/embed/dY2bBBhIEfghvk?si=z1rCtJFEoBlO8Qfw"
                                    title="New Admission Process"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div>
                                <p className="font-bold text-blue-800">ফি:</p>
                                <p className="text-gray-700 text-lg">{data.fee.amount} {data.fee.currency}</p>
                            </div>

                            <ul className="space-y-2 text-sm">
                                <li><strong>ফি পরিশোধ পদ্ধতি:</strong></li>
                                <li>📌 Bkash: Send Money → 01325-410258</li>
                                <li>📌 Nagad: Send Money → 01325-410258</li>
                                <li><em>পেমেন্ট করে TrxID সহ ফর্ম ফিলাপ করুন। ⤵️</em></li>
                            </ul>

                            {data.active ? (
                                <Link href={`/AdmissionForm/${data.course_id}`}>
                                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                        Enroll Now
                                    </button>
                                </Link>
                            ) : (
                                <button
                                    className="w-full bg-red-600 text-white py-2 rounded-lg"
                                    disabled
                                >
                                    Admission Closed
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
