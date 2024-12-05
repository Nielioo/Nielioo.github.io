import * as React from "react";
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
                  <img
                     data-fade="0"
                     src="/images/about-image.png"
                     alt="About Daniel Aprillio"
                     className="w-full max-w-[300px] h-auto md:hidden my-4 object-cover"
                  />
                  <div className="mt-4" data-fade="2">
                     <article className="prose dark:prose-invert">
                        <p data-fade="3">
                           Hello! You can call me Daniel. I am a Software
                           Engineer with over a year of experience at the Apple
                           Developer Academy. I have honed my skills across a
                           wide range of programming languages and technologies.
                           With a background in informatics, I am proficient in
                           Swift, Objective-C, SwiftUI, iOS SDK, CloudKit, and
                           App Store Connect. Additionally, I have hands-on
                           experience with Dart, Flutter, Java, Kotlin,
                           Firebase, MySQL, PHP, Laravel Framework, JavaScript,
                           Node.js, Next.js, Python, REST APIs, Git, and Agile
                           methodologies.
                        </p>
                        <p data-fade="4">
                           I am well-versed in the Mobile Software Development
                           Life Cycle (SDLC) and test engineering & automation,
                           and have a strong understanding of design patterns
                           like MVC and MVVM. Alongside my technical expertise,
                           I bring strong leadership, collaboration, and time
                           management skills to every project. I am passionate
                           about developing innovative solutions and always
                           eager to take on new challenges. I look forward to
                           leveraging my skills and experience in future
                           projects and collaborations.
                        </p>
                     </article>
                  </div>
               </div>
               <img
                  data-fade="0"
                  src="/images/about-image.png"
                  alt="About Daniel Aprillio"
                  className="hidden md:block w-1/3 object-contain self-center"
               />
            </div>
         </div>
      </section>
   );
}
