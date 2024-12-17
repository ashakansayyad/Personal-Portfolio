import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Development Skills</h2>
      </div>

      <div className="flex flex-col gap-6">
        <SkillItem title="HTML" width="99%" />
        <SkillItem title="CSS" width="95%" />
        <SkillItem title="JavaScript" width="85%" />
        <SkillItem title="React.js" width="80%" />
        <SkillItem title="MongoDB" width="70%" />
        <SkillItem title="Express.js" width="75%" />
        <SkillItem title="Node.js" width="60%" />
        <SkillItem title="Git & GitHub" width="90%" />
        <SkillItem title="Postman" width="70%" />
        <SkillItem title="Figma" width="60%" />
      </div>
    </motion.div>
  );
};

const SkillItem = ({ title, width }) => (
  <div className="overflow-x-hidden">
    <p className="text-sm uppercase font-medium">{title}</p>
    <span className="w-full h-2 bg-gray-200 rounded-md inline-flex mt-2">
      <motion.span
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{ width }}
        className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
      >
        <span className="absolute -top-7 right-0">{width}</span>
      </motion.span>
    </span>
  </div>
);

export default Skills;
