"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>National University</li>
        <li>Bachelor of Honours Degree, Department of Philosophy</li>
        <li>Ananda Mohon University and College, Mymensingh, Bangladesh</li>
        <li>(From 2021 to Running)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Complete Web Development Course With Jhankar Mahbub</li>
        <li>Programming Hero</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-6 xl:gap-16 sm:py-16 xl:px-24 bg-slate-900/50 ">
       <div className="bg-slate-800/50 rounded-full mx-auto p-4 lg:p-6 border-2 flex items-center justify-center w-[240px] h-[295px] lg:w-[400px] lg:h-[490px]">
       <Image 
       className="rounded-full" 
       src="/images/about.png" 
       width={370} 
       height={370} 
       alt="About pic" />
       </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center lg:text-left mt-4">About Me</h2>
          <p className="text-base lg:text-lg text-center lg:text-left">
          Hi, I&apos;m a Junior Web Developer skilled in JavaScript, React, Node.js, Express, MongoDB, HTML, CSS, and Tailwind CSS and other tools. I have completed several full-stack projects, showcasing my ability to develop both front-end and back-end solutions. I am passionate about coding and eager to join a collaborative team where I can contribute to innovative web applications and continue to grow my skills. My goal is to create user-friendly and efficient web experiences. In my free time, I enjoy exploring new technologies and contributing to open-source projects.
          </p>
          <div className="flex flex-row justify-start mt-8 flex-wrap">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;