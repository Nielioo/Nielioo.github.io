"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectTag from "@/app/components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
   {
      id: 1,
      title: "Arcane Scroll",
      description: "Description of the project",
      image: "/images/projects/dummy.png",
      tag: ["All", "Other"],
      previewUrl: "/",
      githubUrl: "/",
      youtubeUrl: "/",
   },
   {
      id: 2,
      title: "FigTure",
      description: "Description of the project",
      image: "/images/projects/dummy.png",
      tag: ["All", "Web"],
      previewUrl: "/",
      githubUrl: "/",
      youtubeUrl: "/",
   },
   {
      id: 3,
      title: "Eon Memory",
      description: "Description of the project",
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile"],
      previewUrl: "/",
      githubUrl: "/",
      youtubeUrl: "/",
   },
   {
      id: 4,
      title: "DokterKit",
      description: "Description of the project",
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile"],
      previewUrl: "/",
      githubUrl: "/",
      youtubeUrl: "/",
   },
   {
      id: 5,
      title: "DaMovie",
      description: "Description of the project",
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile"],
      previewUrl: "/",
      githubUrl: "/",
      youtubeUrl: "/",
   },
   {
      id: 6,
      title: "DaFranchise",
      description: "Description of the project",
      image: "/images/projects/dummy.png",
      tag: ["All", "Web"],
      previewUrl: "/",
      githubUrl: "/",
      youtubeUrl: "/",
   },
   {
      id: 7,
      title: "Radiance",
      description: "Description of the project",
      image: "/images/projects/dummy.png",
      tag: ["All", "Web", "Mobile"],
      previewUrl: "/",
      githubUrl: "/",
      youtubeUrl: "/",
   },
   {
      id: 8,
      title: "Nightscape",
      description: "Description of the project",
      image: "/images/projects/dummy.png",
      tag: ["All", "Other"],
      previewUrl: "/",
      githubUrl: "/",
      youtubeUrl: "/",
   },
   {
      id: 9,
      title: "Windrise",
      description: "Description of the project",
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile"],
      previewUrl: "/",
      githubUrl: "/",
      youtubeUrl: "/",
   },
   {
      id: 10,
      title: "Rate Ruler",
      description: "Description of the project",
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile"],
      previewUrl: "/",
      githubUrl: "/",
      youtubeUrl: "/",
   },
   {
      id: 11,
      title: "Katakan",
      description: "Description of the project",
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile"],
      previewUrl: "/",
      githubUrl: "/",
      youtubeUrl: "/",
   },
   {
      id: 12,
      title: "Dialoque",
      description: "Description of the project",
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile", "Other"],
      previewUrl: "/",
      githubUrl: "/",
      youtubeUrl: "/",
   },
   {
      id: 13,
      title: "Moco",
      description: "Description of the project",
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile"],
      previewUrl: "/",
      githubUrl: "/",
      youtubeUrl: "/",
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
            <ProjectTag
               onClick={handleTagChange}
               name="Other"
               isSelected={tag === "Other"}
            />
         </div>
         <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.slice().reverse().map((project, index) => (
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
                     previewUrl={project.previewUrl}
                     youtubeUrl={project.youtubeUrl}
                     githubUrl={project.githubUrl}
                  />
               </motion.li>
            ))}
         </ul>
      </section>
   );
};

export default ProjectsSection;
