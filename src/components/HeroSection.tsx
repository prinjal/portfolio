import React from "react";
import image from "/images/profile.png";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-10">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-heroGradientStart via-heroGradientVia to-heroGradientEnd animate-pulse">
              Hello, I'm
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Prinjal",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Software Engineer",
                1000,
                "Data Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              // style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            laborum assumenda suscipit necessitatibus, doloribus libero debitis
            rerum perferendis voluptatum at?
          </p>
          <div>
            <button className="px-8 py-3 rounded-full w-full h-full sm:w-fit sm:h-fit mr-10 bg-white hover:bg-slate-200 text-black">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full w-full h-full sm:w-fit sm:h-fit bg-transperent hover:bg-slate-800 text-white border border-white mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full h-[35vh] w-[35vw] relative">
            <img
              src={image}
              alt="profile image"
              className="h-[35vh] w-[30vw] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
