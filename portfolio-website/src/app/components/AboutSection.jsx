"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "@/app/components/TabButton";

const TAB_DATA = [
   {
      title: "Skills",
      id: "skills",
      content: (
         <ul className="grid grid-cols-2 list-disc pl-2">
            <li>PHP</li>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>Firebase</li>
            <li>MySQL</li>
            <li>Java</li>
            <li>Kotlin</li>
            <li>Flutter</li>
            <li>SwiftUI</li>
         </ul>
      ),
   },
   {
      title: "Education",
      id: "education",
      content: (
         <ul className="list-disc pl-2">
            <li>
               Bachelor of Informatics Engineering - Ciputra University,
               Surabaya
            </li>
            <li>iOS Developer - Apple Developer Academy, Surabaya</li>
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
   const [tab, setTab] = useState("skills");
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
                  My true passion lies in full-stack development, where I get to
                  bring my ideas to life through coding magic. I have experience
                  working with PHP, Javascript, Node.js, Firebase, MySQL, Java,
                  Kotlin, Flutter, SwiftUI and Git. I am a quick learner and I
                  am always looking to expand my knowledge and skill set. I am a
                  team player and I am excited to work with others to create
                  amazing applications.
               </p>
               <div className="flex flex-row justify-start mt-8">
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
