import React from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Hero() {
  return (
    <div className="bg-gray-950">
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black-900">
              Hello, I am Armeen Nadeem
              <br />
              <span className="text-purple-800 font-bold font-serif">
                FULL STACK <br />DEVELOPER <br />& UI/UX DESIGNER
              </span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Explore my web development journey, featuring projects, skills,
             <br/>  and a functional contact form that delivers direct email responses. 
               <br/> Showcasing my passion for creating interactive and user-friendly websites!
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/armeennadeem197"
                className="text-white bg-purple-900 border-0 py-2 px-6 focus:outline-none hover:bg-purple-400 rounded text-lg font-bold"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/armeen-nadeem-4400702b7"
                className="text-white bg-purple-900 border-0 py-2 px-6 focus:outline-none hover:bg-purple-400 rounded text-lg font-bold"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded-full"
              alt="hero"
              src="/images 111.jpg"
              height={700}
              width={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
