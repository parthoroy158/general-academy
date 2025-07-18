"use client"

import Link from 'next/link';
import React from 'react';
import { GrNext, GrPrevious } from "react-icons/gr";



const page = () => {
  const id = 1

  const YouTubeVideo = [
    {
      "id": 1,
      "language": "Bangla",
      "title": "Bangla Introduction Video",
      "embed": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/xQXBswf0OsA?si=zVqqdqM4WNKjkYm1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
    },
  ]
  const video = YouTubeVideo.find(item => item.id === id);
  if (!video) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] md:min-h-screen px-4 text-center">
        Video not found.
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto px-6 py-12 bg-blue-100 rounded-2xl shadow-xl place-content-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center place-content-center">
          {video.title}
        </h1>

        <div className="relative rounded-xl shadow-2xl overflow-hidden  transition-transform transform hover:scale-[1.01]">
          <div
            className="aspect-w-16 aspect-h-10 "
            dangerouslySetInnerHTML={{ __html: video.embed }}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-200 rounded-2xl mt-6 p-4 bg-white shadow-sm">

          {/* Previous Button */}
          <Link href={`/demoClass/dashboardNav/${video.id - 1}`} passHref>
            <button
              className="btn btn-secondary bg-blue-100 flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-black font-semibold transition-all duration-200 ease-in-out hover:scale-[1.03] disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={video.id <= 1}
            >
              <GrPrevious className="text-lg" />
              Previous
            </button>
          </Link>

          {/* Next Button */}
          <Link href={`/demoClass/dashboardNav/${video.id + 1}`} passHref>
            <button
              className="btn btn-secondary bg-blue-100 flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-black font-semibold transition-all duration-200 ease-in-out hover:scale-[1.03]"
            >
              Next
              <GrNext className="text-lg" />
            </button>
          </Link>

        </div>



        <p className="mt-6 text-center text-sm text-gray-500">
          @Powered by General Academy – Your gateway to mastering law.
        </p>
      </div>

    </div>
  );
};

export default page;