import clsx from "clsx";
import * as React from "react";

import { trackEvent } from "@/lib/analytics";
import useLoaded from "@/hooks/useLoaded";

import Accent from "@/components/Accent";
import Layout from "@/components/layout/Layout";
import CustomLink from "@/components/links/CustomLink";
import Seo from "@/components/Seo";
import TechStack from "@/components/TechStack";
import Tooltip from "@/components/Tooltip";
import TabSection from "@/components/about/TabSection";
import AboutSection from "@/components/about/AboutSection";

export default function AboutPage() {
   const isLoaded = useLoaded();

   return (
      <Layout>
         <Seo
            templateTitle="About"
            description="Daniel Aprillio is a software developer. He build exceptional and accessible digital experiences for the web and mobile app."
         />

         <main>
            <AboutSection />
            <TabSection />

            <section className={clsx(isLoaded && "fade-in-start")}>
               <div className="layout my-16">
                  <h2 data-fade="8">Contact Me</h2>
                  <article className="prose mt-4 dark:prose-invert">
                     <p data-fade="9">
                        Do contact me if you need my opinion about software
                        related development. <br />
                        You can find my social media in the footer.
                     </p>
                  </article>
               </div>
            </section>
         </main>
      </Layout>
   );
}
