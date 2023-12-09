"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectTag from "@/app/components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
   {
      id: 1,
      title: "Arcane Scroll • Major Programmer and UI/UX Designer",
      description:
         "2020 - Arcane Scroll is an enchanting educational app designed for high school students. It's not just about learning, it's about enhancing logic and math skills in a fun and engaging way. The app boasts a user-friendly UI/UX, soothing music, and an intriguing storyline. To keep things exciting, a game timer is included to challenge users and prevent cheating. Despite being developed during a pandemic with Java Swing, a new technology for the team, Arcane Scroll has received high praise and perfect scores at an IT bazaar.",
      technologies: ["Java", "Java Swing"],
      image: "/images/projects/dummy.png",
      tag: ["All", "Other"],
      githubUrl: "https://github.com/Nielioo/ArcaneScroll",
      youtubeUrl: "https://youtu.be/dMeKD42NWCI",
   },
   {
      id: 2,
      title: "FigTure • Fullstack Web Developer",
      description:
         "2021 - FigTure is a dynamic website designed for showcasing and selling high-quality images. Developed as a second semester final project, it utilizes HTML, CSS, PHP, JavaScript, and a local XAMPP database, with Visual Studio Code as the code editor. This was the team's first foray into PHP and database management, resulting in a flawless website that exceeded expectations. FigTure stands out with unique features like infinite scroll image and profile picture customization, which were self-taught additions beyond the basic CRUD operations in PHP. The result? Another perfect score from the lecturers.",
      technologies: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
      image: "/images/projects/dummy.png",
      tag: ["All", "Web"],
      githubUrl: "https://github.com/Nielioo/FigTure",
      youtubeUrl: "https://youtu.be/a7VyEwDFIYA",
   },
   {
      id: 3,
      title: "Eon Memory • Mobile Developer",
      description:
         "2021 - Eon Memory is a mobile app designed to help users manage their tasks with note-taking, reminders, and calendar events. Developed using Android Studio as a second semester final project, it offers a user-friendly and fully customizable interface. What sets Eon Memory apart is its use of Firebase Firestore for virtual database management, allowing users to sync their accounts across multiple devices without fear of data loss. This innovative approach, which went beyond the curriculum, left the lecturers pleasantly surprised and earned the team a perfect score.",
      technologies: ["Java", "XML", "Firebase"],
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile"],
      githubUrl: "https://github.com/Nielioo/EonMemory",
      youtubeUrl: "https://youtu.be/LR7VTplsJRc",
   },
   {
      id: 4,
      title: "DokterKit • Mobile Developer",
      description:
         "2021 - DokterKit is a comprehensive health emergency app designed to provide immediate assistance to individuals in need. It features a range of functionalities including an ambulance call service with integrated maps, a chat feature for clear communication, and a barcode scanner for quick data access. This project utilizes Firebase as its database. Additional features include health infographics, a memo feature for note-taking post-reading, and a search function for further information.",
      technologies: ["Java", "XML", "Firebase", "Google Maps API"],
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile"],
      previewUrl:
         "https://play.google.com/store/apps/details?id=com.dokterkit.lifeco",
      githubUrl: "https://github.com/Nielioo/DokterKit",
      youtubeUrl: "https://youtu.be/vSPWSZVC5u0",
   },
   {
      id: 5,
      title: "DaMovie • Mobile Developer",
      description:
         "2021 - DaMovie is a mobile app that provides a comprehensive list of movie information, leveraging an API from TheMovieDB to ensure its content is always up-to-date. Developed using Android Studio, this project marked a significant milestone as it was the first time an API with extensive data was used, simplifying the project by providing all necessary data. This experience also provided an opportunity to learn how to implement an API in Android Studio using Retrofit. DaMovie, therefore, stands as a testament to continuous learning and innovation in app development.",
      technologies: ["Kotlin", "XML", "Retrofit", "TheMovieDB API"],
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile"],
      githubUrl: "https://github.com/Nielioo/DaMovie",
      youtubeUrl: "https://youtu.be/vdgdANgn6T0",
   },
   {
      id: 6,
      title: "DaFranchise • Fullstack Web Developer",
      description:
         "2021 - DaFranchise is a website that serves as a library for franchises, providing detailed information about various franchises and their branches. Built using the Laravel framework, this project was a joy to work on due to Laravel's provision of templates for creating databases, controllers, auth, views, and more. This project was a significant learning experience, particularly in terms of developing clean code structures and understanding database relations. The emphasis on clean code and good database relations was to enhance readability for users, admins, and programmers alike.",
      technologies: ["PHP", "Laravel", "Javascript", "MySQL", "Bootstrap"],
      image: "/images/projects/dummy.png",
      tag: ["All", "Web"],
      githubUrl: "https://github.com/Nielioo/DaFranchise",
   },
   {
      id: 7,
      title: "Radiance • Fullstack Web Developer and Mobile Developer",
      description:
         "2022 - Radiance is a project for senior high school students, especially those in the 11th grade. It's a multi-platform application that can be accessed via a website and mobile apps, providing flexibility and convenience. The project faced the challenge of needing a shared database between the website and mobile apps, which was successfully addressed by creating an API. The website was developed using the Laravel Framework, while the mobile application was built with Android Studio using Java Programming Language. A local database via XAMPP (MySQL) was utilized, demonstrating the project's technical complexity and the team's problem-solving skills.",
      technologies: ["PHP", "Laravel", "Bootstrap", "Java", "XML", "MySQL"],
      image: "/images/projects/dummy.png",
      tag: ["All", "Web", "Mobile"],
      githubUrl: "https://github.com/Nielioo/Radiance",
      youtubeUrl: "https://youtu.be/EVo28qJuON4",
   },
   {
      id: 8,
      title: "Nightscape • Game Developer and UI/UX Designer",
      description:
         "2022 - Nightscape is a captivating monster shooter game developed using Unity and coded in C#. The objective of the game is straightforward - survive as many waves as possible. With each wave, players have the opportunity to purchase new guns to strengthen their character, while the monsters also increase in strength. Despite the challenges of creating game assets, the project was a rewarding experience, resulting in a game that not only piqued the interest of the lecturer but also earned full marks.",
      technologies: ["Unity", "C#", "Sprite", "Adobe Photoshop"],
      image: "/images/projects/dummy.png",
      tag: ["All", "Other"],
      previewUrl:
         "https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/Nielioo/Nightscape/tree/master/Nightscape%20Download%20(exe)/Nightscape%20App%20Version%201",
      githubUrl: "https://github.com/Nielioo/Nightscape",
   },
   {
      id: 9,
      title: "Windrise • iOS Developer",
      description:
         "2022 - Windrise is an iOS app that serves as a Genshin Impact Database. Developed using SwiftUI and integrated with the Genshin Impact API, Windrise was coded with Xcode and provides detailed information on all Genshin's characters, weapons, and artifacts. This project, made possible through the loan of a MacBook from Universitas Ciputra for a semester, was a significant milestone as it marked the first experience with SwiftUI. The successful completion of this cool project has fueled the hope of being accepted into the Apple Developer Academy for further learning and exploration in iOS application development.",
      technologies: [
         "Swift",
         "SwiftUI",
         "Genshin Impact API",
         "Xcode",
         "WebKit",
      ],
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile"],
      githubUrl:
         "https://github.com/Nielioo/Windrise-Genshin-Impact-Dictionary",
      youtubeUrl: "https://youtu.be/PMWbaPjJsy8",
   },
   {
      id: 10,
      title: "Rate Ruler • iOS Developer",
      description:
         "2023 - Rate Ruler is a currency converter app developed for iOS. It was built using Swift and SwiftUI with Xcode, and integrates Alomofire for the Currency API to provide real-time currency conversion rates. The app has been successfully uploaded to the App Store via App Store Connect, making it readily accessible for users worldwide. Rate Ruler stands as a testament to the power of modern programming tools in creating practical and user-friendly applications.",
      technologies: [
         "Swift",
         "SwiftUI",
         "Xcode",
         "Currency API",
         "Alamofire",
         "App Store Connect",
      ],
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile"],
      previewUrl: "https://apps.apple.com/id/app/rate-ruler/id6449024582",
      githubUrl: "https://github.com/Nielioo/RateRuler",
   },
   {
      id: 11,
      title: "Katakan • iOS Developer and UI/UX Designer",
      description:
         "2023 - Katakan is an iOS app designed to assist children with speech delay in communicating more clearly. Developed using SwiftUI with XCode, it incorporates CoreData and SpeechRecognizer to provide an interactive user experience. The app's assets were created with Adobe Illustrator, while the application UI was designed using Figma. Katakan stands as a testament to the power of technology in facilitating learning and development, making it a valuable tool for children facing communication challenges.",
      technologies: [
         "Swift",
         "SwiftUI",
         "CoreData",
         "Speech Recognition API",
         "Xcode",
         "Adobe Illustrator",
         "Figma",
      ],
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile"],
      githubUrl: "https://github.com/Nielioo/Katakan",
   },
   {
      id: 12,
      title: "Dialoque • iOS Developer",
      description:
         "2023 - Dialoque is a multi-platform app designed to help children learn English vocabulary. Available on iOS, iPadOS, and watchOS, it uses a range of technologies including SwiftUI, CoreData, CloudKit, Combine, SwiftSpeech, Game Center, Core Haptics, and WidgetKit. The app was successfully uploaded to the App Store via App Store Connect. Dialoque stands as a testament to the power of technology in facilitating learning and development, making it a valuable tool for children learning English.",
      technologies: [
         "Swift",
         "SwiftUI",
         "CoreData",
         "CloudKit",
         "Combine",
         "SwiftSpeech",
         "Game Center",
         "Core Haptics",
         "WidgetKit",
         "App Store Connect",
      ],
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile", "Other"],
      previewUrl: "https://apps.apple.com/us/app/dialoque-speak-and-learn/id6456407254",
      githubUrl: "https://github.com/Dialoque-App/Dialoque",
      youtubeUrl: "https://youtu.be/snV2-dLmhGw",
   },
   {
      id: 13,
      title: "Moco Kids • iOS Developer",
      description: "2023 - Moco Kids is a comprehensive iOS and iPadOS app designed to enhance comprehension skills for first graders. It boasts three innovative features: a story card, a gyro maze, and an AR-based 'find the object' game. This app, which was the final project for the Macro Challenge at the Apple Developer Academy, was developed using a range of technologies including Swift, SwiftUI, SwiftData, CloudKit, Speech Recognition API, Game Center, Core Haptics, Core Motion, ARKit, SceneKit, and AVFoundation. The app was successfully uploaded to the App Store via App Store Connect, making it readily accessible for users worldwide.",
      technologies: [
         "Swift",
         "SwiftUI",
         "SwiftData",
         "CloudKit",
         "Speech Recognition API",
         "Game Center",
         "Core Haptics",
         "Core Motion",
         "ARKit",
         "SceneKit",
         "AVFoundation",
         "App Store Connect",
      ],
      image: "/images/projects/dummy.png",
      tag: ["All", "Mobile", "Other"],
      previewUrl: "https://apps.apple.com/us/app/moco-kids/id6471516950",
      githubUrl: "https://github.com/moco-team/Moco",
      // youtubeUrl: "/",
   },
];

const ProjectsSection = () => {
   const [tag, setTag] = useState("All");
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   const [cardPage, setCardPage] = useState(1);

   const handleTagChange = (newTag) => {
      setTag(newTag);
      setCardPage(1);
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
            {filteredProjects
               .toReversed()
               .slice((cardPage - 1) * 6, cardPage * 6)
               .map((project, index) => (
                  <motion.li
                     key={index}
                     variants={cardVariants}
                     initial="initial"
                     animate={isInView ? "animate" : "initial"}
                     transition={{ duration: 0.2, delay: index * 0.4 }}
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
         <div className="flex justify-center items-center">
            <button
               onClick={() => setCardPage(cardPage - 1)}
               className="border-2 rounded-full px-5 py-2 mt-8 text-l hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all duration-400 disabled:opacity-0"
               disabled={cardPage === 1}
            >
               Prev
            </button>
            <span className="px-5 py-2 mt-8 text-l">{cardPage}</span>
            <button
               onClick={() => setCardPage(cardPage + 1)}
               className="border-2 rounded-full px-5 py-2 mt-8 text-l hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all duration-400 disabled:opacity-0"
               disabled={cardPage === Math.ceil(filteredProjects.length / 6)}
            >
               Next
            </button>
         </div>
      </section>
   );
};

export default ProjectsSection;
