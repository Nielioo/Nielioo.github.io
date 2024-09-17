"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import { SocialIcon } from "react-social-icons";

const AboutSection = () => {
   return (
      <section id="contact" className="my-12 md:my-12 py-24 gap-4 relative">
         <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-10 blur-lg absolute top-3/4 -left-0 transform -translate-x-1/2 -translate-1/2 overflow-hidden"></div>
         <div className="z-20">
            <h5 className="text-2xl font-bold text-white my-2">
               Let&apos;s Connect
            </h5>
            <p className="text-[#ADB7BE] mb-4">
               {" "}
               I&apos;m currently looking for new opportunities, my inbox is
               always open.
               <br />
               Whether you have a question or just want to say hi, I&apos;ll try
               my best to get back to you!
            </p>
            <div className="socials flex flex-row text-white gap-2">
               <SocialIcon
                  url="https://github.com/Nielioo"
                  network="github"
                  bgColor="#FFFFFF"
                  fgColor="#000000"
                  style={{ height: 32, width: 32 }}
               />
               <SocialIcon
                  url="https://www.linkedin.com/in/daniel-aprillio/"
                  network="linkedin"
                  bgColor="#FFFFFF"
                  fgColor="#000000"
                  style={{ height: 32, width: 32 }}
               />
               <SocialIcon
                  url="https://line.me/ti/p/~daniel_aprillio"
                  network="line.me"
                  bgColor="#FFFFFF"
                  fgColor="#000000"
                  style={{ height: 32, width: 32 }}
               />
               <SocialIcon
                  url="https://t.me/Nielioo"
                  network="telegram"
                  bgColor="#FFFFFF"
                  fgColor="#000000"
                  style={{ height: 32, width: 32 }}
               />
               <SocialIcon
                  url="https://discord.com/users/551736880014819329"
                  network="discord"
                  bgColor="#FFFFFF"
                  fgColor="#000000"
                  style={{ height: 32, width: 32 }}
               />
               <SocialIcon
                  url="https://www.instagram.com/daniel_aprillio/"
                  network="instagram"
                  bgColor="#FFFFFF"
                  fgColor="#000000"
                  style={{ height: 32, width: 32 }}
               />
               {/* <SocialIcon
                  url="https://www.facebook.com/nielioo"
                  network="facebook"
                  bgColor="#FFFFFF"
                  fgColor="#000000"
                  style={{ height: 32, width: 32 }}
               /> */}
            </div>
         </div>
      </section>
   );
};

export default AboutSection;
