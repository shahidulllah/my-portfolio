"use client";
import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "MediCare+",
        description: "Medicare is a web application designed to provide users with convenient access to healthcare services. It offers features such as appointment booking, medical history tracking, and healthcare provider information.",
        image: "https://i.ibb.co/H4kJGqk/project-1.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/shahidulllah/medicare-client",
        previewUrl: "https://ass12-medicare.web.app",
    },
    {
        id: 2,
        title: "Study Room",
        description: "Study Room is a web application designed to provide users with a platform to manage their study schedules, join study groups, and track their progress. The application aims to enhance the learning experience by offering features that support collaborative and individual study needs.",
        image: "https://i.ibb.co/k2jdmrT/Project-2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/shahidulllah/study-room-client",
        previewUrl: " https://ass11-study-room.web.app",
    },
    {
        id: 3,
        title: "Crafting Decor Art",
        description: "Crafting Decor Art is a web application designed to provide users with a platform to explore, create, and share decorative art and craft projects. The application aims to inspire creativity and offer a community for craft enthusiasts.",
        image: "https://i.ibb.co/F6CwTR3/Project-3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/shahidulllah/crafting-decor-art-client",
        previewUrl: "https://crafting-decor-art.web.app",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
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
            <div className="px-6 lg:mx-24 mt-16">
                <h2 className="text-center text-3xl lg:text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
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
                        name="Mobile"
                        isSelected={tag === "Mobile"}
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
            </div>
        </section>
    );
};

export default ProjectsSection;