import React from 'react';
import Carousal from './Carousal';


const MentorsDetails = () => {
    return (
        <section className="bg-[#233489] text-white px-6 py-12 rounded-3xl max-w-7xl mx-auto mt-10  overflow-hidden relative">
            {/* Top Content */}
            <div className="flex flex-col md:flex-row justify-center items-start gap-10">
                {/* Left Text */}
                <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        কেন Shikho-তে আস্থা রাখবে?
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed text-center">
                        সেরা কন্টেন্ট ও সর্বাধুনিক প্রযুক্তির সাথে সারাদেশের ১০ লক্ষ+ শিক্ষার্থীর
                        ঘনিষ্ঠতায় পড়ালেখা ও পরীক্ষা প্রস্তুতির নির্ভরযোগ্য প্রতিষ্ঠান Shikho!
                    </p>

                    {/* Benefits Grid */}

                </div>

                {/* Right Slider */}

            </div>
            <div className="md:w-1/2 w-full content-center place-content-center mt-10 ">
                <Carousal></Carousal>
            </div>
        </section>
    );
};

export default MentorsDetails;
