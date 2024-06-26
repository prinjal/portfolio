import React from "react";
import image from "../../public/images/profile.png";
import resume from "../../public/resume.pdf";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-10">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-heroGradientStart via-heroGradientVia to-heroGradientEnd">
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
            With 4+ years of experience in both software and data engineering, I
            have contributed to significant projects in various capacities. My
            work spans from enhancing data ingestion and automation at Addgene,
            reducing CI/CD pipeline failures at KPMG, to deploying AI models at
            Flip Robo Technologies with high accuracy. Notably, at Evolutionary
            Systems, I took the lead in implementing a scalable HRMS solution on
            OCI’s Kubernetes Engine and developed EvoGlide—a tool that
            revolutionized the data migration process. I am committed to merging
            disciplined software development with advanced data engineering
            practices to drive progress and innovation.
          </p>
          <div>
            <button className="px-8 py-3 rounded-full w-full h-full sm:w-fit sm:h-fit mr-10 bg-white hover:bg-slate-200 text-black">
              Hire Me
            </button>
            <button className="px-8 py-3 rounded-full w-full h-full sm:w-fit sm:h-fit bg-transperent hover:bg-slate-800 text-white border border-white mt-3">
              <a href={resume}>Download Resume</a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full lg:h-[35vh] lg:w-[35vw] h-[25vh] w-[25vh] relative">
            <img
              src={image}
              alt="profile image"
              className="lg:h-[35vh] lg:w-[30vw] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
