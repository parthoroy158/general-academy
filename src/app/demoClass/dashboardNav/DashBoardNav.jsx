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
    <nav className="w-full lg:w-full md:min-h-screen bg-white dark:bg-gray-800 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700 px-6 py-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">Video Categories</h2>
      <ul className="space-y-4">
        {
          YouTubeVideo.map(item => {
            // Determine if the current link is active based on the prop
            const isActive = item.id === activeVideoId;

            return (
              <li key={item.id}>
                <Link
                  href={`/demoClass/dashboardNav/${item.id}`}
                  className={`block text-lg transition-colors duration-200 ease-in-out ${isActive
                      ? 'text-blue-600 dark:text-blue-400 font-extrabold border-l-4 border-blue-600 pl-3 -ml-3'
                      : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium'
                    }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.language}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
};

export default DashBoardNav;