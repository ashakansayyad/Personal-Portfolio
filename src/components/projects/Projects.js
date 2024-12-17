import React from "react";
import Title from "../layouts/Title";
import {
  proManage,
  foodDelivery,
  jobFinder,
  pocketNotes,
  shopeerEcommers,
  superApp,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Pro Manage App"
          des="A task management application to organize, create, and update tasks seamlessly. Built with React, Node.js, and MongoDB for efficient project tracking."
          src={proManage}
          github="https://github.com/ashakansayyad/Pro_Manager_App"
          live="https://pro-manger-app-frontend.vercel.app/login"
        />
        <ProjectsCard
          title="Food Delivery App"
          des="An interactive app for ordering food online with real-time tracking. Developed using React, Express.js, and MongoDB for seamless food ordering and delivery."
          src={foodDelivery}
          github="https://github.com/ashakansayyad/Food-Delivery-App"
          live="https://pro-manger-app-frontend.vercel.app/login"
        />
        <ProjectsCard
          title="Job Finder App"
          des="A platform to search, apply, and manage job opportunities. Features include user authentication and dynamic job listings powered by the MERN stack."
          src={jobFinder}
          github="https://github.com/ashakansayyad/Job_Finder_MERN_App_Frontend"
          live="https://job-finder-mern-app-frontend.vercel.app/login"
        />
        <ProjectsCard
          title="React Pocket Notes"
          des="A note-taking app to create, update, and delete notes. Features include real-time updates and local storage support using React and state management."
          src={pocketNotes}
          github="https://github.com/ashakansayyad/react-pocket-notes-app"
          live="https://ashakansayyad.github.io/react-pocket-notes-app/"
        />
        <ProjectsCard
          title="Shopeer E-commerce"
          des="An e-commerce platform for buying and selling products with secure checkout and a user-friendly interface. Built using React."
          src={shopeerEcommers}
          github="https://github.com/ashakansayyad/React-Shopper-App"
          live="https://react-shopper-app-rho.vercel.app/"
        />
        <ProjectsCard
          title="React Super App"
          des="A multi-feature application with functionalities like User authentication ,Movies By Genre, note-taking, and reminders. Designed using React and optimized for performance."
          src={superApp}
          github="https://github.com/ashakansayyad/Super_App"
          live="https://super-app-sigma-eight.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
