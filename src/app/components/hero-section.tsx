"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#dd3e54] to-[#6be585]">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                
                "Miguel",
                1000,
                "Web developer",
                1000,
                "Full-stack developer",
                1000,
                "Automation developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base smtext-lg mb-6 lg:text-xl mb">
          Programming is the art of telling another human being what one wants the computer to do. ― Donald Ervin Knuth
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#dd3e54] to-[#6be585] hover:bg-[#cc0000] text-white">
              Hire me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent text-white hover:bg-[#6be585] hover:text-black border border-white hover:border-black mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative overflow-hidden">
            <Image
              className="object-cover w-ful h-full"
              src="/assets/me.png"
              alt="Profile Picture"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
