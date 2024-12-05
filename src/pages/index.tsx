import clsx from "clsx";
import NextImage from "next/image";
import { InferGetStaticPropsType } from "next";
import { IoArrowDownOutline, IoNewspaperSharp } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { InView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";

import { trackEvent } from "@/lib/analytics";
import useInjectContentMeta from "@/hooks/useInjectContentMeta";
import useLoaded from "@/hooks/useLoaded";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import Accent from "@/components/Accent";
import CustomLink from "@/components/links/CustomLink";
import ButtonLink from "@/components/links/ButtonLink";
import UnstyledLink from "@/components/links/UnstyledLink";
import Tooltip from "@/components/Tooltip";
import BlogCard from "@/components/content/blog/BlogCard";
import { getAllFilesFrontmatter, getFeatured } from "@/lib/mdx.server";
import ProjectCard from "@/components/content/projects/ProjectCard";
import AboutSection from "@/components/about/AboutSection";
import TabSection from "@/components/about/TabSection";

export default function IndexPage({
   featuredProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
   const populatedProjects = useInjectContentMeta("projects", featuredProjects);

   const isLoaded = useLoaded();

   return (
      <Layout>
         <Seo />

         <main>
            <section
               className={clsx(
                  "min-h-main -mt-20 mb-20 flex flex-col justify-center",
                  isLoaded && "fade-in-start"
               )}
            >
               <article className="layout flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="md:w-3/5">
                     <h2
                        className="text-2xl md:text-4xl 2xl:text-5xl"
                        data-fade="1"
                     >
                        Hi! I&apos;m{" "}
                        <Accent>
                           <TypeAnimation
                              sequence={[
                                 "Daniel Aprillio",
                                 1000,
                                 "iOS Developer",
                                 1000,
                                 "Fullstack Web Developer",
                                 1000,
                                 "Software Developer",
                                 1000,
                                 "Nielio",
                                 1000,
                              ]}
                              wrapper="span"
                              speed={50}
                              repeat={Infinity}
                           />
                        </Accent>
                     </h2>
                     <p
                        className={clsx(
                           "mt-4 max-w-4xl text-gray-700 dark:text-gray-200 md:mt-6",
                           "md:text-xl 2xl:text-xl"
                        )}
                        data-fade="2"
                     >
                        I build exceptional and accessible digital experiences
                        for the web and mobile app.
                     </p>

                     <p
                        className="mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl"
                        data-fade="3"
                     >
                        Don&apos;t forget to sign my{" "}
                        <CustomLink href="/guestbook">guestbook</CustomLink>!
                     </p>
                     <div
                        data-fade="4"
                        className="mt-8 flex flex-wrap gap-4 md:!text-lg"
                     >
                        <div className="group relative">
                           <div
                              className={clsx(
                                 "absolute -inset-0.5 animate-tilt rounded blur",
                                 "bg-gradient-to-r from-primary-300 to-primary-400",
                                 "dark:from-primary-200 dark:via-primary-300",
                                 "opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200",
                                 "bg-[length:250%_250%]",
                                 "animate-[gradientMove_3s_linear_infinite]"
                              )}
                           />
                           <ButtonLink
                              href="/docs/curriculum-vitae-ats.pdf"
                              onClick={() => {
                                 trackEvent("Social Link: Curriculum Vitae", {
                                    type: "link",
                                 });
                              }}
                           >
                              Download CV
                           </ButtonLink>
                        </div>
                        <ButtonLink href="/about">
                           Learn more about me
                        </ButtonLink>
                     </div>
                     {/* <div
                     data-fade="5"
                     className="mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8"
                  >
                     <UnstyledLink
                        href="/docs/curriculum-vitae-ats.pdf"
                        className={clsx(
                           "inline-flex items-center gap-1 text-sm font-medium md:text-base",
                           "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white",
                           "focus:outline-none focus-visible:ring focus-visible:ring-primary-300",
                           "transition-colors"
                        )}
                        onClick={() => {
                           trackEvent("Social Link: Curriculum Vitae", {
                              type: "link",
                           });
                        }}
                     >
                        <IoNewspaperSharp className="shrink-0" />
                        <span>Curriculum Vitae</span>
                     </UnstyledLink>
                     <UnstyledLink
                        href="https://github.com/nielioo"
                        className={clsx(
                           "inline-flex items-center gap-1 text-sm font-medium md:text-base",
                           "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white",
                           "focus:outline-none focus-visible:ring focus-visible:ring-primary-300",
                           "transition-colors"
                        )}
                        onClick={() => {
                           trackEvent("Social Link: Github", { type: "link" });
                        }}
                     >
                        <SiGithub className="shrink-0" />
                        <span>nielioo</span>
                     </UnstyledLink>
                  </div> */}
                  </div>
                  <div
                     data-fade="5"
                     className="hidden mt-8 md:mt-0 md:w-2/5 md:block"
                  >
                     <NextImage
                        src="/images/hero-image.png"
                        alt="Hero Illustration"
                        className="w-full h-auto object-contain"
                        width={500}
                        height={500}
                     />
                  </div>
               </article>
               <UnstyledLink
                  href="#about"
                  className={clsx(
                     "absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-10",
                     "cursor-pointer rounded-md transition-colors",
                     "hover:text-primary-300 focus-visible:text-primary-300"
                  )}
               >
                  <IoArrowDownOutline className="h-8 w-8 animate-bounce md:h-10 md:w-10" />
               </UnstyledLink>
            </section>

            <InView triggerOnce rootMargin="-40% 0px">
               {({ ref, inView }) => (
                  <section
                     ref={ref}
                     className={clsx("py-20", inView && "fade-in-start")}
                  >
                     <div id="about">
                        <AboutSection data-fade="0" />
                        <TabSection data-fade="1" />
                     </div>
                  </section>
               )}
            </InView>

            <InView triggerOnce rootMargin="-40% 0px">
               {({ ref, inView }) => (
                  <section
                     ref={ref}
                     className={clsx("py-20", inView && "fade-in-start")}
                  >
                     <article className="layout" data-fade="0">
                        <h2 className="text-2xl md:text-4xl" id="projects">
                           <Accent>Featured Projects</Accent>
                        </h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                           Some projects that I&apos;m proud of
                        </p>
                        <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                           {populatedProjects.map((project, i) => (
                              <ProjectCard
                                 key={project.slug}
                                 project={project}
                                 className={clsx(i > 2 && "hidden sm:block")}
                              />
                           ))}
                        </ul>
                        <ButtonLink
                           className="mt-4"
                           href="/projects"
                           onClick={() =>
                              trackEvent("Home: See more project", {
                                 type: "navigate",
                              })
                           }
                        >
                           See more project
                        </ButtonLink>
                     </article>
                  </section>
               )}
            </InView>
         </main>
      </Layout>
   );
}

export async function getStaticProps() {
   const projects = await getAllFilesFrontmatter("projects");

   const featuredProjects = getFeatured(projects, [
      "aspra-network",
      "moco-kids",
      "dialoque",
   ]);

   return {
      props: {
         featuredProjects,
      },
   };
}
