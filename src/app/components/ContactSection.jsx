"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faSquareFacebook, faLine, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";

const AboutSection = () => {
   return (
      <section
         id="contact"
         className="my-12 md:my-12 py-24 gap-4 relative"
      >
         <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-10 blur-lg absolute top-3/4 -left-0 transform -translate-x-1/2 -translate-1/2 overflow-hidden"></div>
         <div className="z-20">
            <h5 className="text-2xl font-bold text-white my-2">
               Let&apos;s Connect
            </h5>
            <p className="text-[#ADB7BE] mb-4">
               {" "}
               I&apos;m currently looking for new opportunities, my inbox is
               always open.
               <br/>
               Whether you have a question or just want to say hi,
               I&apos;ll try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-3">
               <Link href="https://github.com/Nielioo">
                  <FontAwesomeIcon icon={faGithub} alt="Github Icon" size="lg" />
               </Link>
               <Link href="https://www.linkedin.com/in/daniel-aprillio/">
                  <FontAwesomeIcon icon={faLinkedin} alt="LinkedIn Icon" size="lg" />
               </Link>
               <Link href="https://www.instagram.com/daniel_aprillio/">
                  <FontAwesomeIcon icon={faInstagram} alt="Instagram Icon" size="lg" />
               </Link>
               <Link href="https://www.facebook.com/nielioo">
                  <FontAwesomeIcon icon={faSquareFacebook} alt="Facebook Icon" size="lg" />
               </Link>
               <Link href="https://line.me/ti/p/~daniel_aprillio">
                  <FontAwesomeIcon icon={faLine} alt="LINE Icon" size="lg" />
               </Link>
               <Link href="https://t.me/Nielioo">
                  <FontAwesomeIcon icon={faTelegram} alt="Telegram Icon" size="lg" />
               </Link>
               <Link href="https://discord.com/users/551736880014819329">
                  <FontAwesomeIcon icon={faDiscord} alt="Discord Icon" size="lg" />
               </Link>
            </div>
         </div>
      </section>
   );
};

export default AboutSection;
