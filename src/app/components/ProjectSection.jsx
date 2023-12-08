"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectTag from "@/app/components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
   {
      id: 1,
      title: "Arcane Scroll • Major Programmer and UI/UX Designer",
      description: "2020 - Arcane Scroll is an enchanting educational app designed for high school students. It's not just about learning, it's about enhancing logic and math skills in a fun and engaging way. The app boasts a user-friendly UI/UX, soothing music, and an intriguing storyline. To keep things exciting, a game timer is included to challenge users and prevent cheating. Despite being developed during a pandemic with Java Swing, a new technology for the team, Arcane Scroll has received high praise and perfect scores at an IT bazaar.",
      technologies: ['Java', 'Java Swing'],
      image: "/images/projects/dummy.png",
      tag: ["All", "Other"],
      githubUrl: "https://github.com/Nielioo/ArcaneScroll",
      youtubeUrl: "https://youtu.be/dMeKD42NWCI",
   },
   {
      id: 2,
      title: "FigTure • Fullstack Web Developer",
      description: "2021 - FigTure is a dynamic website designed for showcasing and selling high-quality images. Developed as a second semester final project, it utilizes HTML, CSS, PHP, JavaScript, and a local XAMPP database, with Visual Studio Code as the code editor. This was the team's first foray into PHP and database management, resulting in a flawless website that exceeded expectations. FigTure stands out with unique features like infinite scroll image and profile picture customization, which were self-taught additions beyond the basic CRUD operations in PHP. The result? Another perfect score from the lecturers.",
      technologies: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
      image: "/images/projects/dummy.png",
      tag: ["All", "Web"],
      githubUrl: "https://github.com/Nielioo/FigTure",
      youtubeUrl: "https://youtu.be/a7VyEwDFIYA",
   },
   {
      id: 3,
      title: "Eon Memory • Mobile Developer",
      description: "2021 - Eon Memory is a mobile app designed to help users manage their tasks with note-taking, reminders, and calendar events. Developed using Android Studio as a second semester final project, it offers a user-friendly and fully customizable interface. What sets Eon Memory apart is its use of Firebase Firestore for virtual database management, allowing users to sync their accounts across multiple devices without fear of data loss. This innovative approach, which went beyond the curriculum, left the lecturers pleasantly surprised and earned the team a perfect score.",
      technologies: ['Java', 'XML', 'Firebase'],
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile"],
      githubUrl: "https://github.com/Nielioo/EonMemory",
      youtubeUrl: "https://youtu.be/LR7VTplsJRc",
   },
   {
      id: 4,
      title: "DokterKit • Mobile Developer",
      description: "2021 - DokterKit is a comprehensive health emergency app designed to provide immediate assistance to individuals in need. It features a range of functionalities including an ambulance call service with integrated maps, a chat feature for clear communication, and a barcode scanner for quick data access. This project utilizes Firebase as its database. Additional features include health infographics, a memo feature for note-taking post-reading, and a search function for further information.",
      technologies: ['Java', 'XML', 'Firebase', 'Google Maps API'],
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile"],
      previewUrl: "https://play.google.com/store/apps/details?id=com.dokterkit.lifeco",
      githubUrl: "https://github.com/Nielioo/DokterKit",
      youtubeUrl: "https://youtu.be/vSPWSZVC5u0",
   },
   {
      id: 5,
      title: "DaMovie",
      description: "Description of the project",
      technologies: [''],
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
      technologies: [''],
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
      technologies: [''],
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
      technologies: [''],
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
      technologies: [''],
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
      technologies: [''],
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
      technologies: [''],
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
      technologies: [''],
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
      technologies: [''],
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
                     technologies={project.technologies}
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
