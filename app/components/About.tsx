import React from "react";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="p-20 text-center alata-regular whitespace-nowrap lg:text-8xl sm:text-6xl text-4xl font-extrabold text-transparent bg-coming bg-clip-text uppercase">
        About Us
      </h1>
      <div className="w-[70vw] text-base sm:text-2xl  lg:text-3xl text-white">
        <span className="text-transparent bg-coming bg-clip-text">
          HackClub-VITC
        </span>{" "}
        is a dynamic community of student innovators, coders, and creators at
        VIT Chennai. The club fosters an environment where young tech
        enthusiasts can collaborate, build projects, and gain hands-on
        experience. Through workshops, hackathons, and partnerships with leading
        organizations, HackClub-VITC equips members with skills in AIML, Web,
        AppDev, and more, nurturing creativity and technical growth in an
        inclusive and supportive space.
      </div>
    </div>
  );
}
