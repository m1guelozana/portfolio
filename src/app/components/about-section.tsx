"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./tab-button";
import { title } from "process";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>TypeScript & JavaScript</li>
        <li>Node.Js</li>
        <li>Express</li>
        <li>Nodemon</li>
        <li>wweb.js</li>
        <li>React</li>
        <li>TailwindCss</li>
        <li>Python</li>
        <li>Pandas</li>
        <li>Selenium</li>
        <li>Rejex</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>IBMR BARRA, Rio de Janeiro</li>
        <li>FIRJAN SESI SENAI</li>
        <li>Cultura Inglesa, Rio de Janeiro</li>
        <li>Hashtag treinamentos</li>
        <li>DIO</li>
        <li>Rocketseat</li>
        <li>Udemy</li>
        <li>DevClub</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript impressionador</li>
        <li>Python impressionador</li>
        <li>NLW Ignite</li>
        <li>Node.Js from zero to pro</li>
        <li>DevWeek</li>
        <li>Do 0 ao primeiro emprego - DevClub</li>
        <li>Conclusão de Curso de Línguas Estrangeiras: Inglês </li>
      </ul>
    )
  }
]

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="object-cover w-full h-full"
          src="/assets/About-me.jpg"
          width={500}
          height={500}
          alt="About me"
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a Full stack developer with a passion for creating interactive
            and responsive web applications. I have experience with JavaScript,
            TypeScript, React, Node.Js, Express, Python, Django, Flask,
            Selenium, Pandas, PostgreSQL, HTML, CSS, Git, Github, and NoSQL
            Databases. I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
