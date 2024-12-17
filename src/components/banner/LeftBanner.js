import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {SiMongodb,SiExpress} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "MERN Stack Developer.",
      "Passionate Learner.",
      "Aspiring Full Stack Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Sayyad Ashakan</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a passionate Full Stack Developer with expertise in React,
          Node.js, and modern web technologies. I love building intuitive and
          responsive applications to provide seamless user experiences.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/ashakansayyad" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
           
            <a href="https://x.com/i/flow/login?lang=en" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/ashakan-sayyad-219742245/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <SiMongodb/>
            </span>
            <span className="bannerIcon">
              <SiExpress/>
            </span>
            <span className="bannerIcon">
            <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
