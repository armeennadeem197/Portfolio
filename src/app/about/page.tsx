import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <div className='bg-gray-950'>
        <section className="text-black-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="profile pic"
      src="/images 111.jpg"
      height={700}
      width={400}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-900">
       About Me
      </h1>
      <p className="mb-8 leading-relaxed text-white font-bold">
        Hi i am Armeen Nadeem , and I am a web developer. 
        I specialize in creating responsive and interactive websites using technologies like HTML, CSS, JavaScript, and TypeScript
        . I am passionate about coding and enjoy building user-friendly web applications.
      </p>
      <div className="flex justify-center">
        <a href="https://drive.google.com/file/d/1ScDpHJC0bKhINCb5Vsq6J-4ZXC0u0MMZ/view?usp=drive_link">
        <button className="inline-flex text-white bg-purple-900 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-lg">
          Download CV
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About