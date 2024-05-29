"use client"
import React, { useState, useRef } from "react";
import ProjectCard from "./projects-card";
import ProjectTag from "./projects-tag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Day Habits",
    description: "Project 1 description",
    image: "/assets/NLW-Setup.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "Machine Learning",
    description: "Project 1 description",
    image: "/assets/MachineLearning.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "FlaskAPI CRUD",
    description: "Project 1 description",
    image: "/assets/Projects4.jpg",
    tag: ["All", "Backend"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 4,
    title: "Discord Bot",
    description: "Project 1 description",
    image: "/assets/Projects3.jpg",
    tag: ["All", "Automations"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 5,
    title: "NFC-e",
    description: "Project 1 description",
    image: "/assets/Projects2.jpg",
    tag: ["All", "Automations"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 6,
    title: "Chatbot",
    description: "Project 1 description",
    image: "/assets/Chatbot.png",
    tag: ["All", "Automations"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 7,
    title: "ContainLar",
    description: "Project 1 description",
    image: "/assets/Containlar.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
];

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag:string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Automations"
          isSelected={tag === "Automations"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
