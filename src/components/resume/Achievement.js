import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Finalist National Innovation Challenge"
            subTitle="Organized By Techradiance at IIT Bombay"
            result="Certified"
            des="Developed a Face Recognition App designed for employee management and student attendance systems. The app validates user identity by matching facial data and grants permissions accordingly. Successfully presented the working model with real-time face detection capabilities."
        />
          <ResumeCard
            title="Finalist Python Django Bootcamp"
            subTitle="Organized By Department of Computer Science, AISC"
            result="Certified"
            des="Gained hands-on experience in building web applications using the Django framework. Learned about MVC architecture, ORM, and REST API integration. Developed multiple web projects, including a basic CRUD-based task manager application."
          />
          <ResumeCard
            title="Online Web Development Certification"
            subTitle="Organized By Scaler"
            result="Certified"
            des="Completed a comprehensive web development course covering HTML, CSS, JavaScript, and React.js. Learned to create responsive, user-friendly interfaces and gained practical skills in building modern web applications."
          />
        </div>
      </div>
    
    </motion.div>
  );
};

export default Achievement;
