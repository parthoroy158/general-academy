import Link from 'next/link';
import React from 'react';

// Accept `activeVideoId` as a prop from the parent component
const DashBoardNav = ({ activeVideoId }) => {

  const YouTubeVideo = [
    {
      "id": 1,
      "language": "Bangla",
      "title": "Bangla Introduction Video",
      "embed": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/xQXBswf0OsA?si=zVqqdqM4WNKjkYm1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
    },
    {
      "id": 2,
      "language": "English (Literature)",
      "title": "English Literature Introduction Video",
      "embed": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/ruxeYkaKCKw?si=O6I-3AuIqevc2di1&start=27' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
    },
    {
      "id": 3,
      "language": "Math",
      "title": "Math Introduction Video",
      "embed": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/CalMt-ueEnE?si=kmc5FLhbzCkXZ6p8' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
    },
    {
      "id": 4,
      "language": "Daily Science",
      "title": "Daily Science Introduction Video",
      "embed": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/ZgqKpBXfJBU?si=lt0cAfOqvWlm6q1A' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
    },
    {
      "id": 5,
      "language": "General Knowledge",
      "title": "General Knowledge Introduction Video",
      "embed": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/EgyiWIv6NJk?si=tCD3pA1axLBO40yr&start=205' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
    },
    {
      "id": 6,
      "language": "Law",
      "title": "Penal Code Introduction Video",
      "embed": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/KqJxlhRBmxQ?si=DT6jh9RxEeWLrpkg&start=112' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
    }
  ];

  return (
    <nav className="w-full sticky top-0 md:min-h-screen bg-white dark:bg-gray-100 border-b md:border-r border-gray-200 px-6 py-6 rounded shadow-md">
      <h2 className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-4 bg-blue-300 p-2 rounded-md">
        Demo Class Topics
      </h2>

      <ul className="space-y-2 text-base text-gray-800">
        {YouTubeVideo.map((item) => {
          const isActive = item.id === activeVideoId;

          return (
            <li key={item.id}>
              <Link
                href={`/demoClass/dashboardNav/${item.id}`}
                className={`block px-4 py-2 rounded-lg transition-all duration-200 ease-in-out bg-blue-100 p-2 
            ${isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-md border-l-4 border-blue-800 pl-5'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                  }
            hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.language}
              </Link>
            </li>
          );
        })}
      </ul>

    </nav>

  );
};

export default DashBoardNav;