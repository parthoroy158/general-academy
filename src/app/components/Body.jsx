import React from 'react';

const Body = () => {
    return (
        <div className="max-w-6xl mx-auto px-4">
            <h1 className="mb-5 mt-16 text-3xl text-blue-900 font-bold text-center">
                উদ্দেশ্য স্পষ্ট থাকলে সঠিক প্রস্তুতি আপনাকে কাঙ্ক্ষিত লক্ষ্যে পৌঁছে দিতে পারে
            </h1>
            <p className="mb-5 mt-5 text-center">
                তাই আমাদের প্রতিটি কোর্স, সাপোর্ট সিস্টেম এবং রিসোর্স সাজানো হয়েছে একেবারে শিক্ষার্থীর প্রয়োজন ও বাস্তব পরীক্ষার কাঠামোকে মাথায় রেখে
            </p>

            <div className="flex flex-col md:flex-row gap-10 justify-center items-center mt-20 mb-20">
                <div className="card bg-base-100 w-80 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Card Title
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>
                            A card component has a figure, a body part, and inside body there are title and actions parts
                        </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-80 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Card Title
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>
                            A card component has a figure, a body part, and inside body there are title and actions parts
                        </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Fashion</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Body;