"use client"
import React, { useState } from 'react';

// Main App component
export default function IframeVideo() {
    const [isPlaying, setIsPlaying] = useState(false);
    // Example YouTube video ID (Rick Astley - Never Gonna Give You Up)
    const videoId = 's4BibernJxU?si=iR2vL4-kFy3uyNRQ';
    // Placeholder thumbnail image URL (replace with your actual thumbnail)
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    // Function to handle opening the video
    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    // Function to handle closing/hiding the video
    const handleCloseVideo = () => {
        setIsPlaying(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 font-sans text-gray-800">
           

            {/* Conditional rendering based on isPlaying state */}
            {!isPlaying ? (
                // Video Thumbnail Section - visible when video is not playing
                <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer group transform hover:scale-102 transition-all duration-500 ease-in-out border-4 border-blue-200 hover:border-blue-400">
                    <img
                        src={thumbnailUrl}
                        alt="Video Thumbnail - Click to Play"
                        className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                        onClick={handlePlayVideo}
                        // Fallback for image loading errors
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/640x360/e0f2fe/1e3a8a?text=Video+Thumbnail+Not+Available"; }}
                    />
                    {/* Play icon overlay */}
                    <div
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 rounded-2xl"
                        onClick={handlePlayVideo}
                        aria-label="Play video"
                        role="button"
                    >
                        <svg
                            className="w-24 h-24 text-white opacity-90 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110 drop-shadow-lg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            ) : (
                // Video Player Section - visible when video is playing
                <div className="relative w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden p-4 transition-all duration-500 ease-in-out transform scale-100 opacity-100 border-4 border-blue-500">
                    <p className="text-xl font-semibold text-blue-700 mb-4 text-center">Now Playing:</p>
                    {/* Close button for the video player */}
                    <button
                        onClick={handleCloseVideo}
                        className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-4xl font-bold z-10 p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-200 shadow-md hover:shadow-lg"
                        aria-label="Close video player"
                    >
                        &times;
                    </button>

                    {/* Responsive video container */}
                    <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio for YouTube videos */ }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-52 rounded-lg shadow-inner"
                            // Only load the video source when isPlaying is true to trigger autoplay
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                            title="Embedded YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
}
