import React from 'react';

const Page = () => {
    const mentors = [
        { name: "রাগিব মোস্তফা নাঈম", designation: "Ordinator", foundation: 'General Academy', phone: "+8801325-410258" },
        { name: "মাহমুদা আখিঁ", designation: "Co-ordinator", foundation: '19th BJS Long Course',phone: '+8801521-584032' },
        { name: "শান্ত দেব রায় অর্ণ", designation: "Co-ordinator", foundation: '18th BJS Written Batch',phone: '+8801518-972493' },
        { name: "হিমেল চন্দ্র রায়", designation: "Co-ordinator", foundation: 'General Academy', phone: '+88015333-02578' },
    ];

    return (
        <div className="bg-gray-100 min-h-screen py-10 mt-17">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header Info */}
                <div className="text-center mb-12">
                    <h2 className="text-xl font-bold text-blue-800 leading-relaxed">
                        যেকোনো প্রশ্ন, পরামর্শ বা সহায়তার জন্য আমাদের সাথে সরাসরি যোগাযোগ করুন

                    </h2>
                    <p className="text-gray-700 mt-4">
                        Address: Dhaka, Bangladesh <br />
                        Email: <a href="mailto:support@p2a.academy" className="text-blue-600">generalacademybd@gmail.com</a><br />
                        Helpline: <a href="tel:01329672052" className="text-blue-600">01329672052</a>
                    </p>
                </div>

                {/* Mentor Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {mentors.map((mentor, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md border border-blue-100 p-6 transition-transform hover:scale-105 duration-300 text-center"
                        >
                            <p className="text-xl font-bold text-blue-900 mb-1">{mentor?.name}</p>
                            <p className="text-gray-500">{mentor?.designation}</p>
                            <p className="text-gray-500">{mentor?.foundation}</p>
                            <p className="text-gray-500">{mentor?.phone}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
