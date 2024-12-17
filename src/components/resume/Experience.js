import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            Mar 2024 - Dec 2024
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Working Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[350px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MERN Stack Developer Intern"
            subTitle="Cuvette Tech - (Mar 2024 - Dec 2024)"
            result="Remote"
            des="As a MERN Stack Developer Intern, I developed and optimized full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Collaborated with cross-functional teams to design responsive user interfaces, implement RESTful APIs, and ensure seamless integration between the frontend and backend. Enhanced application performance, resolved bugs, and gained hands-on experience with version control (Git) and deployment processes. Focused on delivering scalable, user-friendly solutions while adhering to industry best practices and agile development methodologies."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
