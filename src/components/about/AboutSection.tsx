import * as React from "react";
import NextImage from "next/image";
import clsx from "clsx";
import Accent from "@/components/Accent";
import useLoaded from "@/hooks/useLoaded";

export default function AboutSection() {
   const isLoaded = useLoaded();

   return (
      <section className={clsx(isLoaded && "fade-in-start")}>
         <div className="layout pt-20">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
               <div className="w-full md:w-2/3">
                  <h2 data-fade="0">About</h2>
                  <h1 className="mt-1" data-fade="1">
                     <Accent>Daniel Aprillio</Accent>
                  </h1>
                  <NextImage
                     data-fade="0"
                     src="/images/about-image.png"
                     alt="About Daniel Aprillio"
                     className="md:hidden my-4 object-cover"
                     width={300}
                     height={300}
                  />
                  <div className="mt-4" data-fade="2">
                     <article className="prose dark:prose-invert">
                        <p data-fade="3">
                           Hello! You can call me Daniel. I am a Software
                           Developer with over year of experience at the Apple
                           Developer Academy. I have honed my skills in a
                           variety of programming languages and technologies. My
                           technical expertise as informatics student includes
                           Swift, Objective-C, SwiftUI, iOS SDK, CloudKit,
                           SwiftData, App Store Connect, Flutter, Dart, Java,
                           Kotlin, Firebase, Supabase, PostgreSQL, MySQL, PHP,
                           Laravel Framework, Javascript, Typescript, NodeJs,
                           ReactJs, NextJs, VueJs, Python, REST API, Docker,
                           Git, Github, and more.
                        </p>
                        <p data-fade="4">
                           I am well-versed in the Agile Methodologies and
                           Mobile Software Development Life Cycle (SDLC) and
                           test engineering & automation. I also have a strong
                           understanding of design patterns like MVC and MVVM.
                           Alongside my technical expertise, I bring strong
                           leadership, collaboration, and time management skills
                           to every project. I am passionate about developing
                           innovative solutions and always eager to take on new
                           challenges. I look forward to leveraging my skills
                           and experience in future projects and collaborations.
                        </p>
                     </article>
                  </div>
               </div>
               <NextImage
                  data-fade="0"
                  src="/images/about-image.png"
                  alt="About Daniel Aprillio"
                  className="hidden md:block w-1/3 object-contain self-center"
                  width={400}
                  height={400}
               />
            </div>
         </div>
      </section>
   );
}
