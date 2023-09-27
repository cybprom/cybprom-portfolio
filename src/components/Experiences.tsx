"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../../typings";
type Props = {
  experience: Experience[];
};

function Experiences() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="h-screen flex relative flex-col text-left  px-10 mx-auto justify-center"
      >
        <div className="w-full lg:px-10 flex items-center mb-3">
          <h3 className="uppercase text-gray-500 mt-4 font-[900] stroke-text stroke  text-xl lg:text-3xl">
            02.
          </h3>
          <span className="ml-3 text-4xl mt-3 lg:mt-2 font-extrabold capitalize md:text-4xl text-white">
            experience
          </span>
        </div>

        <div className="overflow-hidden max-w-full">
          <div className="w-full flex space-x-2 md:space-x-7 lg:p-10 overflow-x-scroll snap-x snap-mandatory  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7BA0A]/60">
            {/* experience cards */}

            {/* <ExperienceCard /> */}
            <article className="flex relative flex-col rounded-lg items-center space-y-3 w-full flex-shrink-0 md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 lg:opacity-60 lg:hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
              <h3 className=" top-0  left-0 absolute uppercase tracking-[5px]  p-4 text-gray-500 text-xs lg:text-xs ">
                Experience
              </h3>
              <Image
                height={100}
                width={100}
                src="/hngx.jpeg"
                alt="company image"
                className="h-20 w-20 rounded-full xl:w-[100px] xl:h-[100px] objext-cover object-center"
              />

              <div className=" px-0 md:px-10">
                <h4 className="text-2xl font-light capitalize mb-2 font-Montserrat">
                  HNG Internship
                </h4>
                <h4 className="font-bold text-base lg:text-xl mt-1 mb-2">
                  {/* {experience.jobTitle} */}
                  {/* junior frontend engineer */}
                  Intern.
                </h4>
                <div className="flex lg:space-x-3 my-1">
                  <Image
                    className=" h-5 w-5 lg:h-8 lg:w-8 rounded-full"
                    height={100}
                    width={100}
                    src="/nextjsSmall.webp"
                    alt="skill sets"
                  />

                  <Image
                    className=" h-5 w-5 lg:h-8 lg:w-8 rounded-full"
                    height={100}
                    width={100}
                    src="/tailwindSmall.webp"
                    alt="skill sets"
                  />
                </div>
                <p className="uppercase py-5 text-gray-300 text-xs sm:text-sm md:text-xl">
                  WED SEPT 06 2023 - PRESENT
                </p>
                {/* <ul className="list-disc space-y-2 ml-5 text-xs md:text-base font-Montserrat">
                  {experience.points.map((point, i) => (
                    <li key={i}> {point}</li>
                  ))}
                </ul> */}
              </div>
            </article>

            <article className="flex relative flex-col rounded-lg items-center space-y-3 w-full flex-shrink-0 md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 lg:opacity-60 lg:hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
              <h3 className=" top-0  left-0 absolute uppercase tracking-[5px]  p-4 text-gray-500 text-xs lg:text-xs ">
                Experience
              </h3>
              <Image
                height={100}
                width={100}
                src="/hngx.jpeg"
                alt="company image"
                className="h-20 w-20 rounded-full xl:w-[100px] xl:h-[100px] objext-cover object-center"
              />

              <div className=" px-0 md:px-10">
                <h4 className="text-2xl font-light capitalize mb-2 font-Montserrat">
                  RareSkills
                </h4>
                <h4 className="font-bold text-base lg:text-xl mt-1 mb-2">
                  {/* {experience.jobTitle} */}
                  Junior frontend engineer
                </h4>
                <div className="flex lg:space-x-3 my-1">
                  <Image
                    className=" h-5 w-5 lg:h-8 lg:w-8 rounded-full"
                    height={100}
                    width={100}
                    src="/tailwindSmall.webp"
                    alt="skill sets"
                  />

                  <Image
                    className=" h-5 w-5 lg:h-8 lg:w-8 rounded-full"
                    height={100}
                    width={100}
                    src="/JsSmall.webp"
                    alt="skill sets"
                  />

                  <Image
                    className=" h-5 w-5 lg:h-8 lg:w-8 rounded-full"
                    height={100}
                    width={100}
                    src="/nextjsSmall.webp"
                    alt="skill sets"
                  />
                </div>
                <p className="uppercase py-5 text-gray-300 text-xs sm:text-sm md:text-xl">
                  WED MAY 06 2023 - PRESENT
                </p>

                <ul className="list-disc space-y-2 ml-5 text-xs md:text-base font-Montserrat">
                  {/* {experience.points.map((point, i) => (
                  //   <li key={i}> {point}</li>
                  // ))} */}
                  <li>
                    {" "}
                    Implemented the figma designs on different screen sizes
                  </li>
                  <li>
                    Worked in close collaboration with the backend development
                    team to successfully integrate an embedded Integrated
                    Development Environment (IDE) into the webpage.
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Experiences;
