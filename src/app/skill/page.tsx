import React from 'react';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

function Skill() {
  return (
    <div className="bg-gray-950 py-12">
      <div className="text-white body-font">
        <h1 className="text-center text-4xl mb-10">My Skills</h1>
        <div className="container px-5 py-8 mx-auto space-y-12">

          {/* HTML Skill */}
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-white sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 text-7xl inline-flex items-center justify-center rounded-full bg-rose-100 text-purple-900 flex-shrink-0">
              <FaHtml5 />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-purple-600 text-3xl font-medium mb-2">HTML</h2>
              <div className="relative h-1 w-full bg-gray-600 rounded-xl">
                <div className="absolute bg-purple-600 h-1 rounded-xl w-full"></div>
              </div>
              <p className="font-bold text-purple-500 text-right">100%</p>
            </div>
          </div>

          {/* CSS Skill */}
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-white sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-purple-600 text-3xl font-medium mb-2">CSS</h2>
              <div className="relative h-1 w-full bg-gray-600 rounded-xl">
                <div className="absolute bg-purple-600 h-1 rounded-xl w-[95%]"></div>
              </div>
              <p className="font-bold text-purple-500 text-left">95%</p>
            </div>
            <div className="sm:w-32 sm:order-none order-first text-7xl sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-rose-100 text-blue-500 flex-shrink-0">
              <FaCss3Alt />
            </div>
          </div>

          {/* TypeScript Skill */}
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-white sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 text-7xl inline-flex items-center justify-center rounded-full bg-rose-100 text-blue-500 flex-shrink-0">
              <SiTypescript />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-purple-600 text-3xl font-medium mb-2">TypeScript</h2>
              <div className="relative h-1 w-full bg-gray-600 rounded-xl">
                <div className="absolute bg-purple-600 h-1 rounded-xl w-[90%]"></div> {/* Adjusted to 90% */}
              </div>
              <p className="font-bold text-purple-500 text-right">90%</p>
            </div>
          </div>

          {/* Next.js Skill */}
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-white sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 text-7xl inline-flex items-center justify-center rounded-full bg-rose-100 text-blue-500 flex-shrink-0">
              {/* Placeholder for Next.js */}
              <span className="text-7xl">⚛️</span> {/* You can use a relevant emoji or icon */}
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-purple-600 text-3xl font-medium mb-2">Next.js</h2>
              <div className="relative h-1 w-full bg-gray-600 rounded-xl">
                <div className="absolute bg-purple-600 h-1 rounded-xl w-[60%]"></div>
              </div>
              <p className="font-bold text-purple-500 text-right">60%</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skill;
