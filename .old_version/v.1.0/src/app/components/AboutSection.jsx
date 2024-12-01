"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
   {
      title: "Awards",
      id: "awards",
      content: (
         <ul className="list-disc pl-2">
            <li>2th Runner Up Application Business Idea on Faculty of Information Technology Competition 2022</li>
            <li>3th Winner Web/Mobile Application on LO KREATIF 2021</li>
            <li>Best Student in Academic Performance Award Informatics 2020</li>
         </ul>
      ),
   },
   {
      title: "Education",
      id: "education",
      content: (
         <ul className="list-disc pl-2">
            <li>
               Bachelor of Informatics Engineering - Ciputra University Batch 2020,
               Surabaya
            </li>
            <li>iOS Developer - Apple Developer Academy Cohort 2023, Surabaya</li>
         </ul>
      ),
   },
   {
      title: "Certifications",
      id: "certifications",
      content: (
         <ul className="list-disc pl-2">
            <li>Alibaba Cloud Certified Developers</li>
         </ul>
      ),
   },
];

const AboutSection = () => {
   const [tab, setTab] = useState("education");
   const [isPending, startTransition] = useTransition();

   const handleTabChange = (id) => {
      startTransition(() => {
         setTab(id);
      });
   };

   return (
      <section className="text-white" id="about">
         <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-image.png" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
               <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
               <p className="text-base lg:text-lg">
                  As an iOS developer with ±1 year of experience at the Apple
                  Developer Academy, I have honed my skills in a variety of
                  programming languages and technologies. My technical expertise
                  as informatics student includes Swift, Objective-C, SwiftUI,
                  iOS SDK, CloudKit, App Store Connect, Dart, Flutter, Java,
                  Kotlin, Firebase, MySQL, PHP, Laravel Framework, Javascript,
                  Node.js, NextJs, Python, RestAPI, Git, Agile Methodologies,
                  Mobile Software Development Life Cycle (SDLC), Test
                  Engineering & Automation and various design patterns such as
                  MVC and MVVM. Beyond my hard skills, I bring strong soft
                  skills to the table, including leadership, collaboration, and
                  time management. I am passionate about creating innovative
                  solutions and am always ready to take on new challenges. I
                  look forward to bringing my unique blend of skills and
                  experience to future projects and collaborations.
               </p>
               <div className="flex flex-row justify-start mt-8">
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
                  <TabButton
                     selectTab={() => handleTabChange("awards")}
                     active={tab === "awards"}
                  >
                     {" "}
                     Awards{" "}
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
