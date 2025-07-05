"use client";
import Link from 'next/link';
import React from 'react';

const Page = () => {
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
        },
    ];

    return (
        <div className="flex justify-center py-10 px-4">
            {exam.map((item) => (
                <Link href={`/allCourses/exam/${item.course_id}`}>
                    <div
                        key={item.course_id}
                        className="card w-full dark:bg-white text-black max-w-md bg-base-100 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <figure className="px-6 pt-6">
                            <img
                                src="https://i.ibb.co/Ndgcp37d/18th-BJS-Exam-Batch.jpg"
                                alt={item.course_name}
                                className="rounded-xl object-cover h-48 w-full"
                            />
                        </figure>
                        <div className="card-body text-center space-y-3">
                            <h2 className="card-title text-lg font-bold">{item.course_name}</h2>
                            <p className="text-sm text-info">
                                📅 <strong>Exam Starts:</strong> {item.exam_start_date}
                            </p>
                            <p className="text-xs text-gray-500 pt-2">{item.contact_note}</p>

                            <div className="card-actions justify-center mt-4">
                                <button className="btn btn-primary btn-sm">ভর্তি হতে ক্লিক করুন</button>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Page;
