import React from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Foodtuck Restaurant ",
    description: "Foodtuck Restaurant is a vibrant dining experience offering a variety of delicious and fresh meals served in a casual, food truck-inspired atmosphere. 🍔🌮",
    image: "/pic 6.png",
    link: "https://hackaton-nine-alpha.vercel.app/",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description: "E-Commerce is a comprehensive online shopping platform offering a wide range of products with a user-friendly interface, secure transactions, and fast delivery services. 🛒💻",
    image: "/pic 5.png",
    link: "https://e-commerce-omega-tan.vercel.app/",
  },
  {
    id: 3,
    title: "dynamic-blog",
    description: "Dynamic Blog is a modern and interactive blogging platform with dynamic content, user authentication, and a seamless reading experience. 📝🚀",
    image: "/pic 4.png",
    link: "https://dynamic-blog-zeta.vercel.app/",
  },
  {
    id: 4,
    title: "Lama Makeup Product Website",
    description: "Lama Makeup Product is a beauty brand offering high-quality, trendy makeup products designed for all skin types, ensuring a flawless and radiant look. 💄✨",
    image: "/pic 3.png",
    link: "https://lama-makeup-product.vercel.app/",
  },
  {
    id: 5,
    title: "Data Quest",
    description: "Data Quest is a solution-oriented digital agency specializing in innovative strategies,data-driven insights, and cutting-edge technology to help businesses grow. 🚀",
    image: "/pic 2.png",
    link: "https://data-quests-css.vercel.app/",
  },
  {
    id: 6,
    title: "Bloom & Blossom",
    description: "Bloom & Blossom is a modern flower website offering elegant floral arrangements with a seamless shopping experience. 🌸",
    image: "/pic 1.png",
    link: "https://flower-bouquet.vercel.app/",
  },
];

const Project = () => {
  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          My Projects
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-500 transition-all duration-300 ease-in-out"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
