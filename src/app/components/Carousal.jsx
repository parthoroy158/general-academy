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
            image: '/Aminul-bhai.jpeg'
        },
        {
            name: "আফরোজী সাচ্চু শাহনেওয়াজ",
            title: "সহকারী নিবন্ধক, ঢাকা",
            image: '/ragibBhai.png'
        },
        {
            name: "কাউসার আহমেদ",
            title: "সহকারী কমিশনার, রংপুর",
            image: '/public/Kawser-bhaiya.jpeg'
        },
        {
            name: "মাহমুদা আখিঁ",
            title: "সহকারী জজ",
            image: '/Akhi-Apu.jpeg'
        },
        {
            name: "শান্ত দেব রয় অর্ণ",
            title: "সহকারী জজ",
            image: '/Arno-dada.jpeg'
        },
        {
            name: "তানজিনা এলিন",
            title: "সহকারী জজ",
            image: '/Elin-apu.jpeg'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        autoplaySpeed: 3000,
        autoplay: true,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
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
        <div className="max-w-7xl mx-auto px-4 py-14 text-center contain-center place-content-center ">
            <Slider {...settings}>
                {mentors.map((item, index) => (
                    <div key={index} className="px-3 ">
                        <div className=" rounded-2xl shadow-lg hover:shadow-xl transition duration-300 h-80 ease-in-out bg-blue-100 ">
                            <div className="flex justify-center pt-6">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="rounded-full w-32 h-32 object-cover ring-2 ring-[#e6007e]"
                                />
                            </div>
                            <div className="text-center px-6 py-4">
                                <h3 className="text-lg font-semibold text-[#e6007e]">{item.name}</h3>
                                <p className="text-gray-700 text-sm mt-1">{item.title}</p>
                                {item.extra && (
                                    <p className="text-gray-500 text-xs mt-1">{item.extra}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousal;
