"use client";
import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "https://i.ibb.co/H4kJGqk/project-1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Potography Portfolio Website",
        description: "Project 2 description",
        image: "https://i.ibb.co/k2jdmrT/Project-2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "E-commerce Application",
        description: "Project 3 description",
        image: "https://i.ibb.co/F6CwTR3/Project-3.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);

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
                        name="Mobile"
                        isSelected={tag === "Mobile"}
                    />
                </div>
                <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ProjectsSection;