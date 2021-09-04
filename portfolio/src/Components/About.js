import React from "react";
import profile from '../img/profile.jpg'

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-1 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-white">
            Hi, I'm Khushi Purwar.
            <br className="hidden lg:inline-block " />I am a Web Developer and ML enthusiast.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a 3r year student pursuing Computer Scinece from Amity University, Madhya Pradesh. I have  
            a keen interest in Web Development and Data Science.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
        </div>
        <div className="h-72 w-72">
          <img
            className="object-cover object-center rounded"
            alt="profile"
            src={profile}
          />
        </div>
      </div>
    </section>
  );
}