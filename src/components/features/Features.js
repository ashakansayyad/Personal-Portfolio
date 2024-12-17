import React from 'react'
import { AiFillCode } from "react-icons/ai";
import { FaServer, FaMobileAlt } from "react-icons/fa";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Full-Stack Development"
          des="Building responsive and dynamic web applications using MongoDB, Express.js, React.js, and Node.js to deliver a seamless user experience."
          icon={<AiFillCode />}
        />
         <Card
          title="Backend API Development"
          des="Creating RESTful APIs and server-side logic with Node.js and Express, ensuring scalable and efficient backend services for your applications."
          icon={<FaServer />}
        />
         <Card
          title="Responsive Web Design"
          des="Designing user-friendly and mobile-responsive interfaces with React and Tailwind CSS to provide an optimal experience on all devices."
          icon={<FaMobileAlt />}
        />
      
      </div>
    </section>
  );
}

export default Features