"use client";
import Link from 'next/link';
import React from 'react';

const Page = () => {
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

    return (
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
