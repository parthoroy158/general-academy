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
    <nav className="w-full lg:w-full md:min-h-screen bg-gray-100 rounded shadow-sm dark:bg-gray-100 border-b lg:border-b-0 lg:border-r border-white dark:border-white px-6 py-6">
      <h2 className="text-sm font-bold text-gray-900 dark:text-black mb-5 uppercase bg-blue-100 rounded p-3">Demo Classes Topic</h2>
      <ul className="space-y-4 text-black">
        {
          YouTubeVideo.map(item => {
            // Determine if the current link is active based on the prop
            const isActive = item.id === activeVideoId;

            return (
              <li key={item.id} className='active'>
                <Link
                  href={`/demoClass/dashboardNav/${item.id}`}
                  className={`block px-4 rounded-lg text-lg transition-all duration-200 border-dotted ease-in-out${isActive
                    ? 'text-blue-600 dark:text-black font-extrabold bg-blue-100 border-l-4 border-blue-600'
                    : 'text-gray-700 dark:text-black hover:text-blue-600 border-dotted hover:bg-blue-50 hover:pl-5 font-medium'
                    }`}
                  aria-current={isActive ? 'page' : undefined}
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