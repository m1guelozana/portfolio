"use client"
import React, { useState, useRef } from "react";
import ProjectCard from "./projects-card";
import ProjectTag from "./projects-tag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Day Habits",
    description: "Currently under maintenance. Unavailable to see.",
    image: "/assets/NLW-Setup.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/miguel-ozana/NLW-SETUP-2023",
    previewUrl: "https://sweet-praline-3c77fb.netlify.app"
  },
  {
    id: 2,
    title: "Machine Learning",
    description: "Project about machine learning for university.",
    image: "/assets/MachineLearning.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/miguel-ozana/website-faculdade",
    previewUrl: "https://machinelearning-one.vercel.app/"
  },
  {
    id: 3,
    title: "FlaskAPI CRUD",
    description: "Only Code. No Previews. Access Github",
    image: "/assets/Projects4.jpg",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/miguel-ozana/FlaskAPI---CRUD",
    previewUrl: "https://github.com/miguel-ozana/FlaskAPI---CRUD"
  },
  {
    id: 4,
    title: "Discord Bot",
    description: "Discord Bot. Only available for github preview",
    image: "/assets/Projects3.jpg",
    tag: ["All", "Automations"],
    gitUrl: "https://github.com/miguel-ozana/Discord-Bot",
    previewUrl: "https://github.com/miguel-ozana/Discord-Bot"
  },
  {
    id: 5,
    title: "NFC-e",
    description: "Code only. No previews. Access github.",
    image: "/assets/Projects2.jpg",
    tag: ["All", "Automations"],
    gitUrl: "https://github.com/miguel-ozana/NFC-e",
    previewUrl: "https://github.com/miguel-ozana/NFC-e"
  },
  {
    id: 6,
    title: "Chatbot",
    description: "Under development. No previews. Access github.",
    image: "/assets/Chatbot.png",
    tag: ["All", "Automations"],
    gitUrl: "https://github.com/miguel-ozana/chatbot-miceli-typescript",
    previewUrl: "https://github.com/miguel-ozana/chatbot-miceli-typescript"
  },
  {
    id: 7,
    title: "ContainLar",
    description: "School project about container houses",
    image: "/assets/Containlar.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/miguel-ozana/Containlar",
    previewUrl: "https://containlar.netlify.app/"
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
