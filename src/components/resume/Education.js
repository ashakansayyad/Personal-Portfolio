import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Savitribai Phule University, Pune (2021 - 2024)"
            result="8.7/10"
            des="Focused on core subjects like Data Structures, Algorithms, Database Management, and Software Development. Completed projects on web development, machine learning, and cloud computing, enhancing my technical and problem-solving skills."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Maharaja Jivajirao Shinde Mahavidyalaya, Shrigonda (2019 - 2021)"
            result="83.67%"
            des="Focused on Mathematics and Science, developing strong analytical and logical reasoning skills. This foundation helped me transition effectively into computer science studies at the undergraduate level."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Mahadaji Shinde Vidyalaya, Shrigonda (2018 - 2019)"
            result="77.00%"
            des="Built a solid academic foundation with an emphasis on Science and Mathematics. Participated in extracurricular activities, fostering teamwork, discipline, and a curiosity for learning new concepts."
          />
        </div>
      </div>
     
    </motion.div>
  );
};

export default Education;
