"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectTag from "@/components/ProjectTag";

const projectsData = [
   {
      id: 1,
      title: "React Portfolio Website",
      description: "Project 1 description",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      githubUrl: "/",
      previewUrl: "/",
   },
   {
      id: 2,
      title: "Potography Portfolio Website",
      description: "Project 2 description",
      image: "/images/projects/2.png",
      tag: ["All", "Web"],
      githubUrl: "/",
      previewUrl: "/",
   },
   {
      id: 3,
      title: "E-commerce Application",
      description: "Project 3 description",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      githubUrl: "/",
      previewUrl: "/",
   },
   {
      id: 4,
      title: "Food Ordering Application",
      description: "Project 4 description",
      image: "/images/projects/4.png",
      tag: ["All", "Mobile"],
      githubUrl: "/",
      previewUrl: "/",
   },
   {
      id: 5,
      title: "React Firebase Template",
      description: "Authentication and CRUD operations",
      image: "/images/projects/5.png",
      tag: ["All", "Web"],
      githubUrl: "/",
      previewUrl: "/",
   },
];
const ProjectsSection = () => {
   const [tag, setTag] = useState("All");

   const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
   );

   const handleTagChange = (newTag) => {
      setTag(newTag);
   };

   return (
      <>
         <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
         </h2>
         <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
            <ProjectTag
               name="All"
               onClick={handleTagChange}
               isSelected={tag === "All"}
            />
            <ProjectTag
               name="Web"
               onClick={handleTagChange}
               isSelected={tag === "Web"}
            />
            <ProjectTag
               name="Mobile"
               onClick={handleTagChange}
               isSelected={tag == "Mobile"}
            />
         </div>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12 ">
            {filteredProjects.map((project, index) => (
               <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  githubUrl={project.githubUrl}
                  previewUrl={project.previewUrl}
               />
            ))}
         </div>
      </>
   );
};

export default ProjectsSection;
