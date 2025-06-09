import React from "react";
import userData from "@constants/data";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{" "}
                <span className="text-red-500">Shubh Patni</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-4 font-light">
                {userData.about.title}
              </p>
            </div>

            {/* About Description */}
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                I just graduated from <span className="font-semibold text-gray-900 dark:text-white">Northeastern University</span> in Honors Computer Science and Economics.
              </p>
              <p>
                I'm co-founder of one of the biggest NFT collections and a trading platform as a pseudo-anon, and founder of{" "}
                <a 
                  href="https://www.resme.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-600 font-semibold underline decoration-red-500/30 hover:decoration-red-500"
                >
                  ResMe
                </a>.
              </p>
              <p>
                I was <span className="font-semibold">5x top writer on Medium</span>, have won <span className="font-semibold">5 web3 hackathons</span> and my blogs/products have touched hundreds of thousands of users
              </p>
            </div>
          </div>
            
          {/* Image Section */}
          <div className="hidden lg:block order-1 lg:order-2">
            <div className="relative max-w-md mx-auto">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-1 shadow-2xl">
                <img 
                  src={userData.avatarUrl} 
                  alt="Shubh Patni" 
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
