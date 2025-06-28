'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousal = () => {
    const mentors = [
        {
            name: "রাগিব মোস্তফা নাঈম",
            title: "সহকারী জজ, ময়মনসিংহ",
            image: '/ragibBhai.png'
        },
        {
            name: "আমিনুল ইসলাম খান",
            title: "সহকারী জজ, শেরপুর",
            extra: "সাবেক আইন কর্মকর্তা, পূবালী ব্যাংক লিমিটেড",
            image: '/ragibBhai.png'
        },
        {
            name: "আফরোজী সাচ্চু শাহনেওয়াজ",
            title: "সহকারী নিবন্ধক, ঢাকা",
            image: '/ragibBhai.png'
        },
        {
            name: "কাউসার আহমেদ",
            title: "সহকারী কমিশনার, রংপুর",
            image: '/ragibBhai.png'
        },
        {
            name: "মাহমুদা আখিঁ",
            title: "সহকারী জজ",
            image: '/ragibBhai.png'
        },
        {
            name: "শান্ত দেব রয় অর্ণ",
            title: "সহকারী জজ",
            image: '/ragibBhai.png'
        },
        {
            name: "তানজিনা এলিন",
            title: "সহকারী জজ",
            image: '/ragibBhai.png'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <Slider {...settings}>
                {mentors.map((item, index) => (
                    <div key={index} className="px-2">
                        <div className="card bg-white w-full h-70 shadow-md rounded-xl text-black overflow-hidden">
                            <figure className="p-4">
                                <img src={item.image} alt={item.name} className="rounded-xl h-48 object-cover w-48" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-[#e6007e]">{item.name}</h2>
                                <p>{item.title}</p>
                                {item.extra && <p className="text-sm text-gray-500">{item.extra}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousal;
